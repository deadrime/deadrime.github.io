import { Article } from 'content-collections';
import Tag from './Tag/Tag';
import { capitalize } from '@/helpers/capitalize';
import { Link } from './Link';

type BlogArticleProps = {
  article: Article;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({
  article
}) => (
  <article className='max-w-xl text-balance'>
    <Link href={article.path} className='text-text mb-4 block'>
      {article.previewImg && (
        <img
          loading='lazy'
          src={article.previewImg}
          alt={article.title}
          className='aspect-38/20 bg-slate-100/10 rounded-lg mb-3 overflow-hidden object-cover object-center w-full'
        />
      )}
      <h3 className="mt-0 mb-3 p-0 text-md leading-tight">
        {article.title}
      </h3>
      <span className="text-body2 text-text/70 block">
        {article.description}
      </span>
    </Link>
    <div className="flex gap-2 flex-wrap mb-3">
      {article.topics.map(i => <Tag variant="outlined" as={Link} href={`/blog/topics/${i}`} key={i} size="small">{capitalize(i)}</Tag>)}
    </div>
    <Link href={article.path} className="font-semibold text-body2">
      Читать →
    </Link>
  </article>
);
