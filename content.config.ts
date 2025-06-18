import path from 'path'
import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { ArticleSchema } from './types/article'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: {
        cwd: path.resolve('./content/blog'),
        include: '*.{md,mdx}',
        prefix: '/blog',
      },
      schema: ArticleSchema,
    }),
    snippets: defineCollection({
      type: 'page',
      source: {
        cwd: path.resolve('./content/snippets'),
        include: '*.{md,mdx}',
        prefix: '/snippets',
      },
      schema: z.object({
        date: z.string(),
        topics: z.array(z.string()),
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
})
