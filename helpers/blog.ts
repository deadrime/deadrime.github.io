import { Article, CreateArticleProps, TocItem } from "@/types/article";
import dayjs from "dayjs";
import fs from 'fs';
import { MDXProps } from "mdx/types";
import path, { join } from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { load } from 'cheerio';
import React from "react";

const getDirectories = (source: string) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

export const getAllArticles = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/articles'));

  const articlesData = await Promise.all(articles.map(async slug => {
    const article = await getArticleBySlug(slug);

    return article;
  }));

  return articlesData.sort((a, b) => b.publishedTime - a.publishedTime);
};

export const getPaginatedArticles = async (limit: number, offset = 0) => {
  const allArticles = await getAllArticles();

  return {
    articles: allArticles.slice(offset, limit),
    totalCount: allArticles.length,
  };
};

export const getArticlesForTopic = async (topic: string) => {
  const posts = await getAllArticles();
  const withSelectedTopic = posts.filter(i => i.topics.includes(topic));
  return withSelectedTopic;
};

export const getAllTopics = async () => {
  const posts = await getAllArticles();
  const result = new Set<string>();

  posts.forEach((post) => {
    post.topics.forEach(topic => result.add(topic));
  });

  return Array.from(result.values());
};

export const mapArticleData = async({ component, data, toc }: { data: CreateArticleProps, component: (props: MDXProps) => React.JSX.Element, toc: TocItem[] }): Promise<Article> => {
  const publishedTime = dayjs(data.publishedTime).valueOf();
  const modifiedTime = data?.modifiedTime ? dayjs(data.modifiedTime).valueOf() : undefined;

  const article: Article = {
    component,
    image: data.image,
    slug: data.slug,
    description: data.description,
    publishedTime,
    modifiedTime,
    title: data.title,
    topics: data.topics,
    toc,
    metadata: {
      metadataBase: process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL('https://zhenya.dev'),
      title: data.title,
      description: data.description,
      openGraph: {
        type: 'article',
        description: data.description,
      },
      jsonLd: {
        "@type": "Article",
        "@context": "https://schema.org",
        author: {
          "@type": "Person",
          name: "Трофимов Евгений",
          jobTitle: "Fullstack developer",
          sameAs: "deadrime",
          gender: "male",
        }
      }
    }
  };

  return article;
};

function buildToc(elements: { tagName: string; id: string; textContent: string }[]): TocItem[] {
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
}

const generateToc = async (slug: string) => {
  const filePath = join(process.cwd(), `/articles/${slug}/page.mdx`)
  const rawMarkdown = fs.readFileSync(filePath, 'utf8');

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

  return toc
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const { data, default: component } = await import(`../articles/${slug}/page.mdx`) as typeof import("*.mdx")
  const toc = await generateToc(slug);
  return mapArticleData({ data, component, toc });
};

export const getSnippetBySlug = async (slug: string): Promise<Article> => {
  const { data, default: component } = await import(`../snippets/${slug}/page.mdx`) as typeof import("*.mdx");
  const toc = await generateToc(slug);
  return mapArticleData({ data, component, toc });
};

export const getAllSnippets = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/snippets'));

  const articlesData = await Promise.all(articles.map(async slug => {
    const article = await getSnippetBySlug(slug);

    return article;
  }));

  return articlesData.sort((a, b) => b.publishedTime - a.publishedTime);
};
