import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { ArticleSchema } from './types/article'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: ArticleSchema,
    }),
    snippets: defineCollection({
      type: 'page',
      source: 'snippets/**/*.mdx',
      schema: z.object({
        date: z.string(),
        topics: z.array(z.string()),
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
})
