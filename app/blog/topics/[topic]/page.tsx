
import { getAllTopics, getArticlesForTopic } from "@/helpers/blog";
import { BlogArticle } from "@/components/Article";

type TopicPageProps = {
  params: Promise<{
    topic: string
  }>
}

export default async function TopicPage(props: TopicPageProps) {
  const params = await props.params;

  const {
    topic
  } = params;

  const articles = await getArticlesForTopic(topic);
  return (
    <div className="flex flex-col">
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
    </div>
  );
}

export async function generateStaticParams() {
  const topics = await getAllTopics();

  return topics.map(topic => ({
    topic
  }));
}
