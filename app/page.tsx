import OldResume from './oldResume.mdx';
import Link from "next/link";
import styles from './styles.module.css';
import { Metadata } from 'next';
import { getAllArticles, getPaginatedArticles } from '@/helpers/blog';
import { BlogArticle } from '@/components/Article';
import AboutSection from '@/components/AboutSection/AboutSection';

export const metadata: Metadata = {
  title: 'Трофимов Евгений - frontend разработчик',
  description: 'Мой личный сайт, портфолио и блог',
  openGraph: {
    title: 'Блог - Трофимов Евгений',
    description: 'Статьи по веб-разработке - React, Node.js, Typescript',
    type: 'website',

    // type: 'profile',
    // firstName: 'Евгений',
    // lastName: 'Трофимов',
    // username: 'deadrime',
    // gender: 'male'
  }
}

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Трофимов Евгений",
  "jobTitle": "Fullstack developer",
  "sameAs": ["deadrime"]
}

const LatestArticles = async () => {
  const { articles, totalCount } = await getPaginatedArticles(3);

  return (
    <>
      <h2 className="font-primary text-xl font-normal mb-11 block mt-8 md:mt-36">
        Блог
      </h2>
      <div className="grid gap-5" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))'
      }}>
        {articles.map(article => <BlogArticle key={article.slug} article={article} />)}
      </div>
    </>
  )
}

export default async function Home() {

  return (
    <main>
      <AboutSection />
      <div className={styles.oldResume}>
        <OldResume />
      </div>
      <LatestArticles />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
