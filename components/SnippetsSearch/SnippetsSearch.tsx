import { useFuzzySearchList } from '@nozbe/microfuzz/react';
import { SnippetPreview } from '../Snippet/SnippetPreview';
import { useState } from 'react';
import useDebounce from '@/hooks/useDebounce';
import { TextInput } from '../TextInput/TextInput';
import { Article } from 'content-collections';

type SnippetsSearchProps = {
  snippets: Omit<Article, 'component'>[]
}

export const SnippetsSearch: React.FC<SnippetsSearchProps> = ({
  snippets
}) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useDebounce(() => {
    setDebouncedQuery(query);
  }, 200, [query]);

  const filteredList = useFuzzySearchList({
    list: snippets,
    queryText: debouncedQuery,
    getText: (item) => [item.title, item.description],
    // arbitrary mapping function, takes `FuzzyResult<T>` as input
    mapResultItem: ({ 
      item,
      score, matches: [titleHighlightRanges, descriptionHighlightRanges]
    }) => ({ item, titleHighlightRanges, descriptionHighlightRanges })
  });
  
  const noResults = debouncedQuery.length > 0 && filteredList.length === 0;

  return (
    <div>
      <TextInput 
        value={query}
        placeholder="Поиск..."
        onChange={e => setQuery(e.target.value)}
        className="mb-6"
      />
      {noResults && <div>
        Ничего не найдено
      </div>}
      <div className='flex flex-col gap-3 w-max'>
        {filteredList.map(({ item, titleHighlightRanges, descriptionHighlightRanges }) => 
          <SnippetPreview
            key={item.path}
            snippet={item}
            titleHighlightRanges={titleHighlightRanges}
            descriptionHighlightRanges={descriptionHighlightRanges}
          />
        )}
      </div>
    </div>
  );
};
