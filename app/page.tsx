import OldResume from './oldResume.mdx';
import Link from "next/link";
import styles from './styles.module.css';
import { Metadata } from 'next';

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

export default function Home() {
  return (
    <main>
      <div className={styles.oldResume}>
        <OldResume />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className='mt-8'>Блог</Link>
    </main>
  );
}
