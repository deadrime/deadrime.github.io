import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { load } from 'cheerio';
import { TocItem } from '@/types/tocItem';

export const generateToc = async (rawMarkdown: string) => {
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
