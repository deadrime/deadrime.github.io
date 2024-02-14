import type { Metadata } from 'next'
import Link from 'next/link';

type BlogArticleProps = {
  title: string;
  description: string;
  image?: string;
  url: string;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({
  title,
  description,
  image,
  url
}) => (
  <article>
    <Link href={url}>
      <h2>
        {title}
      </h2>
    </Link>
  </article>
)
