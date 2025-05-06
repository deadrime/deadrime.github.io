import { getAllSnippets } from '@/helpers/blog';
import { Metadata } from 'next';
import React from 'react';
import { SnippetsSearch } from '@/components/SnippetsSearch/SnippetsSearch';

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
        Сниппеты
      </h1>
      <SnippetsSearch snippets={snippets.map(({ component, ...rest}) => rest)}/>
    </>
  );
}
