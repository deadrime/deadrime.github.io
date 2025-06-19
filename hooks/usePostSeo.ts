import type { ArticlesCollectionItem } from '@nuxt/content'

export const usePostSeo = (post: ArticlesCollectionItem) => {
  return useSeoMeta({
    title: post.title,
    description: post.description,
    ogType: 'article',
    ogDescription: post.description,
    creator: 'Трофимов Евгений',
    articlePublishedTime: post.date,
    twitterImage: post.previewImg,
    articleTag: post.topics,
    author: 'Трофимов Евгений',
    ogImage: post.previewImg,
    twitterCard: 'summary_large_image',
  })
}
