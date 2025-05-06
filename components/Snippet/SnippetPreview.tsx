import { Article } from '@/types/article';
import { HighlightRanges } from '@nozbe/microfuzz';
import { Highlight } from '@nozbe/microfuzz/react';
import Link from 'next/link';
import Tag from '@/components/Tag/Tag';

type SnippetPreviewProps = {
  snippet: Omit<Article, 'component'>;
  titleHighlightRanges: HighlightRanges | null;
  descriptionHighlightRanges: HighlightRanges | null;
}

export const SnippetPreview: React.FC<SnippetPreviewProps> = ({
  snippet,
  titleHighlightRanges,
  descriptionHighlightRanges,
}) => {
  return (
    <Link href={`/snippets/${snippet.slug}`} className='text-balance flex flex-col gap-2'>
      <span className='text-body1 text-primary'>
        <Highlight
          className="text-text bg-primary/50"
          style={{}}
          text={snippet.title}
          ranges={titleHighlightRanges}
        />
      </span>
      <span className='text-body2 text-text'>
        <Highlight
          className="text-text bg-primary/50"
          style={{}}
          text={snippet.description}
          ranges={descriptionHighlightRanges}
        />
      </span>
      <div className='flex gap-1'>
        {snippet.topics.map(tag => 
          <Tag variant="outlined" size="small" key={tag}>{tag}</Tag>
        )}
      </div>
    </Link>
  )
}
