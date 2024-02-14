import { getAllArticles } from '@/helpers/blog';
import { BlogArticle } from './Article';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог - Трофимов Евгений',
  description: 'Статьи по веб-разработке - React, Node.js, Typescript',
}

export default async function Home() {
  const articles = await getAllArticles();

  return (
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
  );
}
