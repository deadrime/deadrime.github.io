import { type Article } from 'content-collections';

type SnippetPreviewProps = {
  snippet: Article;
};

export const Snippet: React.FC<SnippetPreviewProps> = ({}) => (
  <article className="text-balance">
    TODO
    {/* {createElement(snippet.component)} */}
  </article>
);
