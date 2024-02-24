import { getPaginatedArticles } from "@/helpers/blog";
import { BlogArticle } from "../Article";
import styles from './LatestArticles.module.css';
import classNames from "classnames";

const LatestArticles = async () => {
  const { articles, totalCount } = await getPaginatedArticles(3);

  return (
    <section className="mt-12 md:mt-40">
      <h2 className="font-primary text-xl font-normal block mb-11">
        Блог
      </h2>
      <div className={styles.articlesWrapper}>
        {articles.map(article => <BlogArticle key={article.slug} article={article} />)}
      </div>
    </section>
  )
}

export default LatestArticles;
