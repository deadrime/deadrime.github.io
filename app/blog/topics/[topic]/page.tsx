
import { getAllTopics, getArticlesForTopic } from "@/helpers/blog";
import { BlogArticle } from "../../Article";

type TopicPageProps = {
  params: {
    topic: string
  }
}

export default async function TopicPage({ params: { topic } }: TopicPageProps) {
  const articles = await getArticlesForTopic(topic);
  return (
    <main className="flex flex-col">
      {articles.map((article, index) =>
        <BlogArticle
          key={index}
          title={String(article.metadata.title)}
          description={String(article.metadata.title)}
          url={`/blog/${article.slug}`}
        />
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const topics = await getAllTopics();

  return topics.map(topic => ({
    topic
  }));
}
