import { Metadata } from 'next';
import { getPaginatedArticles } from '@/helpers/blog';
import { BlogArticle } from '@/components/Article';
import AboutSection from '@/components/AboutSection/AboutSection';
import Technologies from '@/components/Technologies/Technologies';
import MyExperience from '@/components/MyExperience/MyExperience';

export const metadata: Metadata = {
  title: 'Трофимов Евгений - frontend разработчик',
  description: 'Мой личный сайт, портфолио и блог',
  openGraph: {
    title: 'Трофимов Евгений - frontend разработчик',
    description: 'Мой личный сайт, портфолио и блог',
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
    <section className="mt-8 md:mt-36">
      <h2 className="font-primary text-xl font-normal block mb-11">
        Блог
      </h2>
      <div className="grid gap-5" style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))'
      }}>
        {articles.map(article => <BlogArticle key={article.slug} article={article} />)}
      </div>
    </section>
  )
}

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
