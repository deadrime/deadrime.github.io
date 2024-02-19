import { getAllArticles } from '@/helpers/blog';
import { BlogArticle } from '@/components/Article';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Блог - Трофимов Евгений',
  description: 'Статьи по веб-разработке - React, Node.js, Typescript',
  openGraph: {
    title: 'Блог - Трофимов Евгений',
    description: 'Статьи по веб-разработке - React, Node.js, Typescript',
    tags: ['Веб-разработка', 'frontend', 'React', 'Javascript', 'Typescript', 'Node.js']
  }
}

export default async function Home() {
  const articles = await getAllArticles();

  return (
    <div className='flex flex-col gap-3'>
      {articles.map((article, index) =>
        <BlogArticle
          key={index}
          article={article}
        />
      )}
    </div>
  );
}
