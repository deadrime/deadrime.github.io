import { Article } from "@/types/article";
import fs from 'fs';
import path from 'path';

const getDirectories = (source: string) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export const getAllArticles = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/articles'));

  const articlesData = await Promise.all(articles.map(async article => {
    const { metadata, component } = await getArticleBySlug(article)

    return {
      component,
      metadata: {
        ...metadata,
        slug: article,
      },
      slug: article,
    } as Article
  }))

  return articlesData
}

export const getArticlesForTopic = async (topic: string) => {
  const posts = await getAllArticles();
  const withSelectedTopic = posts.filter(i => i.metadata.topics.includes(topic))
  return withSelectedTopic;
}

export const getAllTopics = async () => {
  const posts = await getAllArticles();
  const result = new Set<string>();

  posts.forEach((post) => {
    post.metadata.topics.forEach(topic => result.add(topic));
  });

  return Array.from(result.values());
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const { metadata, default: component } = await import(`../articles/${slug}/page.mdx`) as typeof import("*.mdx");

  const image = Array.isArray(metadata?.openGraph?.images)
    ? metadata?.openGraph?.images[0].toString()
    : metadata?.openGraph?.images?.toString();

  const openGraph = metadata?.openGraph && 'type' in metadata.openGraph && metadata.openGraph.type === 'article' ? metadata.openGraph : null;

  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "Article",
    "author": {
      "@type": "Person",
      "name": "Трофимов Евгений"
    },
    "headline": metadata.title || openGraph?.title,
    "image": image,
    "datePublished": openGraph?.publishedTime,
    "dateModified": openGraph?.modifiedTime,
  }

  return {
    slug,
    // mdxSource,
    component,
    metadata: {
      ...metadata as Article['metadata'],
      jsonLd
    },
  };
};
