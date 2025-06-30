import { HighlightRanges } from '@nozbe/microfuzz';
import { Highlight } from '@nozbe/microfuzz/react';
import Tag from '@/components/Tag/Tag';
import { Snippet } from 'content-collections';
import { Link } from '../Link';

type SnippetPreviewProps = {
  snippet: Snippet;
  titleHighlightRanges: HighlightRanges | null;
  descriptionHighlightRanges: HighlightRanges | null;
}

export const SnippetPreview: React.FC<SnippetPreviewProps> = ({
  snippet,
  titleHighlightRanges,
  descriptionHighlightRanges,
}) => {
  return (
    <Link href={`/snippets/${snippet.slug}`} className='group text-balance flex flex-col gap-2 focus-visible:ring-transparent'>
      <span className='text-body1 text-primary self-start group-focus-within:underline underline-offset-6'>
        <Highlight
          className="bg-primary/40"
          style={{
            color: 'hsl(from var(--color-primary) calc(h + 5) s l)'
          }}
          text={snippet.title}
          ranges={titleHighlightRanges}
        />
      </span>
      <span className='text-body2 text-text'>
        <Highlight
          className="bg-primary/40"
          style={{}}
          text={snippet.description}
          ranges={descriptionHighlightRanges}
        />
      </span>
      <div className='flex gap-1'>
        {snippet.topics.map(tag => 
          <Tag key={tag} variant="outlined" size="small"  className='pointer-events-none capitalize'>{tag}</Tag>
        )}
      </div>
    </Link>
  );
};
