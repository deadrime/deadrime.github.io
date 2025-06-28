import { Article } from "@/types/article";
import { ArticleFrontmatter, articleFrontmatterSchema } from "@/schemas/article";
import { getPaginatedItems, loadCollection } from "./content";

const sortByDate = (a: ArticleFrontmatter, b: ArticleFrontmatter) => {
  return b.date.valueOf() - a.date.valueOf();
};

const generateArticleSeoMetadata = (metadata: ArticleFrontmatter) => {
  return {
    metadataBase: process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL('https://zhenya.dev'),
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      type: 'article',
      description: metadata.description,
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
  } satisfies Article['metadata'];
};



export const getAllArticles = async (): Promise<Article[]> => {
  const articlesCollection = await loadCollection('blog', articleFrontmatterSchema, sortByDate);
  return articlesCollection.map(article => ({
    ...article,
    metadata: generateArticleSeoMetadata(article),
  }));
};

export const getPaginatedArticles = async (limit: number, offset = 0) => {
  const articles = await getAllArticles();
  return getPaginatedItems(articles, limit, offset);
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

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
  const articles = await getAllArticles();
  return articles.find(i => i.slug === slug) || null;
};

export const getAllSnippets = async () => {
  const snippetsCollection = await loadCollection('snippets', articleFrontmatterSchema, sortByDate);
  return snippetsCollection.map(snippet => ({
    ...snippet,
    metadata: generateArticleSeoMetadata(snippet),
  }));
};

export const getSnippetBySlug = async (slug: string): Promise<Article | null> => {
  const snippets = await getAllSnippets();
  return snippets.find(i => i.slug === slug) || null;
};
