
import { getAllTopics, getArticlesForTopic } from "@/helpers/blog";
import { BlogArticle } from "@/components/Article";

type TopicPageProps = {
  params: {
    topic: string
  }
}

export default async function TopicPage({ params: { topic } }: TopicPageProps) {
  const articles = await getArticlesForTopic(topic);
  return (
    <main className="flex flex-col">
      <h2 className="font-primary text-xl font-normal mt-8 md:mt-36 mb-4 md:mb-11">
        Статьи с тегом #{topic}
      </h2>
      <div className="flex flex-col gap-5">
        {articles.map((article, index) =>
          <BlogArticle
            key={index}
            article={article}
          />
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const topics = await getAllTopics();

  return topics.map(topic => ({
    topic
  }));
}
