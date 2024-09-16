import { getAllArticles, getAllSnippets } from '@/helpers/blog';
import { BlogArticle } from '@/components/Article';
import { Metadata } from 'next';
import { Snippet } from '@/components/Snippet/Snippet';
import React from 'react';
import { Test } from './Test';

export const metadata: Metadata = {
  title: 'Сниппеты - Трофимов Евгений',
  description: 'Статьи по веб-разработке - React, Node.js, Typescript',
  openGraph: {
    title: 'Сниппеты - Трофимов Евгений',
    description: 'Статьи по веб-разработке - React, Node.js, Typescript',
    tags: ['Snippets', 'Сниппеты', 'Веб-разработка', 'frontend', 'React', 'Javascript', 'Typescript', 'Node.js']
  }
}

export default async function Home() {
  const snippets = await getAllSnippets();

  return (
    <>
      <h1 className="text-2xl font-primary block mb-8">
        Блог
      </h1>
      <Test/>
      <div className='flex flex-col gap-3'>
        {snippets.map((snippet, index) =>
          <Snippet
            key={snippet.slug}
            snippet={snippet}
          />
        )}
      </div>
    </>
  );
}
