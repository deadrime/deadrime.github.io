import type { SnippetsCollectionItem } from '@nuxt/content'

export const useSnippetSeo = (snippet: SnippetsCollectionItem) => {
  return useSeoMeta({
    title: snippet.title,
    description: snippet.description,
    ogType: 'article',
    ogDescription: snippet.description,
    creator: 'Трофимов Евгений',
    articlePublishedTime: snippet.date,
    articleTag: snippet.topics,
    author: 'Трофимов Евгений',
  })
}
