import { Article } from 'content-collections';
import { createElement } from 'react';

type SnippetPreviewProps = {
  snippet: Article;
}

export const Snippet: React.FC<SnippetPreviewProps> = ({
  snippet
}) => (
  <article className='text-balance'>
    TODO
    {/* {createElement(snippet.component)} */}
  </article>
);
