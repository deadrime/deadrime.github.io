import { Article } from '@/types/article';
import { createElement } from 'react';

type SnippetPreviewProps = {
  snippet: Article;
}

export const Snippet: React.FC<SnippetPreviewProps> = ({
  snippet
}) => (
  <article className='text-balance'>
    {createElement(snippet.component)}
  </article>
);
