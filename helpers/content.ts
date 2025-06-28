import fs from 'fs';
import path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { load } from 'cheerio';
import fg from 'fast-glob';
import { type Schema } from 'zod';
import { TocItem } from "@/types/article";

const loadCollectionItem = async <S extends Schema>(itemPath: string, collectionName: string, frontmatterSchema: S) => {
  const contentFolder = path.join(process.cwd(), '/content');
  const relativePath = itemPath
    .replace(contentFolder, '')
    .replace('.mdx', '');
  const slug = relativePath.replace(`/${collectionName}/`, '');

  const { default: component, frontmatter } = await import(`../content${relativePath}.mdx`) as typeof import("*.mdx");
  const rawMarkdown = fs.readFileSync(itemPath, 'utf8');
  const toc = await generateToc(rawMarkdown);

  const metadata: S['_type'] = frontmatterSchema.parse(frontmatter);

  return {
    path: relativePath,
    slug,
    component,
    toc,
    ...metadata
  };
};

export const getPaginatedItems = async <T>(items: T[], limit: number, offset = 0) => {
  return {
    articles: items.slice(offset, limit),
    totalCount: items.length,
  };
};

export const loadCollection = async <S extends Schema>(collectionName: string, frontmatterSchema: S, sortBy: (a: S['_type'], b: S['_type']) => number) => {
  const contentFolder = path.join(process.cwd(), '/content');
  const entries = await fg([`${contentFolder}/${collectionName}/**/*.{md,mdx}`]);

  const items = await Promise.all(entries.map(async path => {
    return loadCollectionItem(path, collectionName, frontmatterSchema);
  }));

  const sortedItems = items.sort(sortBy);

  return sortedItems;
};

const generateToc = async (rawMarkdown: string) => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(rawMarkdown);

  const $html = load(result.toString());

  const headings = $html(':is(h1,h2,h3)[id]').toArray();

  const toc = buildToc(headings.map(i => ({
    id: i.attributes.find(i => i.name === 'id')!.value,
    tagName: i.tagName,
    textContent: load(i).text(),
  })));

  return toc;
};

const buildToc = (elements: { tagName: string; id: string; textContent: string }[]): TocItem[] => {
  const toc: TocItem[] = [];
  const stack: TocItem[] = [];

  for (const el of elements) {
    const level = parseInt(el.tagName.replace(/^h/i, '')); // "h2" => 2

    const item: TocItem = {
      id: el.id,
      text: el.textContent,
      level,
      children: [],
    };

    while (stack.length > 0 && stack[stack.length - 1].level >= level) {
      stack.pop(); // Go up the hierarchy
    }

    if (stack.length === 0) {
      toc.push(item);
    } else {
      stack[stack.length - 1].children.push(item);
    }

    stack.push(item);
  }

  return toc;
};
