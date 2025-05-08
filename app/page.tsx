import { Metadata } from 'next';
import AboutSection from '@/components/AboutSection/AboutSection';
import Technologies from '@/components/Technologies/Technologies';
import MyExperience from '@/components/MyExperience/MyExperience';
import LatestArticles from '@/components/LatestArticles/LatestArticles';

export const metadata: Metadata = {
  metadataBase: process.env.NODE_ENV === 'development' ? new URL('http://localhost:3000') : new URL('https://zhenya.dev'),
  title: 'Трофимов Евгений',
  description: 'Fullstack developer',
  openGraph: {
    title: 'Трофимов Евгений',
    description: 'Fullstack developer',
    type: 'website',

    // type: 'profile',
    // firstName: 'Евгений',
    // lastName: 'Трофимов',
    // username: 'deadrime',
    // gender: 'male'
  }
};

const jsonLd = {
  "@context": "http://schema.org/",
  "@type": "Person",
  "name": "Трофимов Евгений",
  "jobTitle": "Fullstack developer",
  "sameAs": ["deadrime"]
};

export default async function Home() {
  return (
    <main>
      <AboutSection />
      <Technologies />
      <MyExperience />
      <LatestArticles />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
