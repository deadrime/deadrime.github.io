// import { getPaginatedArticles } from "@/helpers/blog";
import { useData } from "vike-react/useData";
import { Link } from "../Link";
import { BlogArticle } from "../Article";
import styles from './LatestArticles.module.css';
import { Data } from "@/pages/index/+data";

const LatestArticles = () => {
  const data = useData<Data>();
  const { latestArticles, totalArticlesCount }  = data;

  return (
    <section className="mt-12 md:mt-40">
      <h2 className="font-primary text-xl font-normal mb-11 flex items-center">
        Блог
        {totalArticlesCount > 3 && (
          <Link
            href="/blog"
            className="text-body2 ml-auto font-base text-primary font-bold"
          >
            Все статьи →
          </Link>
        )}
      </h2>
      <div className={styles.articlesWrapper}>
        {latestArticles.map(article => <BlogArticle key={article.slug} article={article} />)}
      </div>
    </section>
  );
};

export default LatestArticles;
