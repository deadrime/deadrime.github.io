import { Article, CreateArticleProps } from "@/types/article";
import dayjs from "dayjs";
import fs from 'fs';
import { MDXProps } from "mdx/types";
import path from 'path';

const getDirectories = (source: string) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export const getAllArticles = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/articles'));

  const articlesData = await Promise.all(articles.map(async slug => {
    const article = await getArticleBySlug(slug)

    return article
  }));

  return articlesData.sort((a, b) => b.publishedTime - a.publishedTime);
}

export const getPaginatedArticles = async (limit: number, offset = 0) => {
  const allArticles = await getAllArticles();

  return {
    articles: allArticles.slice(offset, limit),
    totalCount: allArticles.length,
  }
}

export const getArticlesForTopic = async (topic: string) => {
  const posts = await getAllArticles();
  const withSelectedTopic = posts.filter(i => i.topics.includes(topic))
  return withSelectedTopic;
}

export const getAllTopics = async () => {
  const posts = await getAllArticles();
  const result = new Set<string>();

  posts.forEach((post) => {
    post.topics.forEach(topic => result.add(topic));
  });

  return Array.from(result.values());
}

export const mapArticleData = async({ component, data }: { data: CreateArticleProps, component: (props: MDXProps) => JSX.Element}): Promise<Article> => {
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
  }

  return article;
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const { data, default: component } = await import(`../articles/${slug}/page.mdx`) as typeof import("*.mdx");
  return mapArticleData({ data, component });
};

export const getSnippetBySlug = async (slug: string): Promise<Article> => {
  const { data, default: component } = await import(`../snippets/${slug}/page.mdx`) as typeof import("*.mdx");
  return mapArticleData({ data, component });
};

export const getAllSnippets = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/snippets'));

  const articlesData = await Promise.all(articles.map(async slug => {
    const article = await getSnippetBySlug(slug)

    return article
  }));

  return articlesData.sort((a, b) => b.publishedTime - a.publishedTime);
}
