import { getAllArticles } from '@/helpers/blog';
import { BlogArticle } from './Article';

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className="flex flex-col items-center justify-between p-24">
      <div className='flex flex-col gap-3'>
        {articles.map((article, index) =>
          <BlogArticle
            key={index}
            title={String(article.metadata.title)}
            description={String(article.metadata.title)}
            url={`/blog/${article.slug}`}
          />
        )}
      </div>
    </div>
  );
}
