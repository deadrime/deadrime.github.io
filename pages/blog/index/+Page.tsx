import { useData } from "vike-react/useData";
import { Article } from "content-collections";
import { BlogArticle } from "@/components/Article";


export default function Page() {
  const articles = useData<Article[]>();

  return (
    <>
      <h1 className="text-2xl font-primary block mb-8">
        Блог
      </h1>
      <div className='flex flex-col gap-3'>
        {articles.map((article, index) =>
          <BlogArticle
            key={index}
            article={article}
          />
        )}
      </div>
    </>
  );
}
