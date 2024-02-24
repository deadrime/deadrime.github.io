import { Article } from '@/types/article';
import Link from 'next/link';
import Tag from './Tag/Tag';
import { capitalize } from '@/helpers/capitalize';

type BlogArticleProps = {
  article: Article;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({
  article
}) => (
  <article className='max-w-xl text-balance'>
    <Link href={`/blog/${article.slug}`} className='text-text'>
      {article.image && (
        <img
          loading='lazy'
          src={article.image}
          alt={article.title}
          className='aspect-[38/20] bg-slate-100/10 rounded-lg mb-3 overflow-hidden object-cover object-center w-full'
        />
      )}
      <h3 className="mt-0 mb-3 p-0 text-md leading-tight">
        {article.title}
      </h3>
      <span className="text-body2 text-text/70 block mb-4">
        {article.description}
      </span>
    </Link>
    <div className="flex gap-2 flex-wrap mb-3">
      {article.topics.map(i => <Tag variant="outlined" as={Link} href={`/blog/topics/${i}`} key={i} size="small">{capitalize(i)}</Tag>)}
    </div>
    <Link href={`/blog/${article.slug}`} className="font-semibold text-body2">
      Читать →
    </Link>
  </article>
)
