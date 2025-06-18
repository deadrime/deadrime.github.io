import { z } from '@nuxt/content'

export const ArticleSchema = z.object({
  date: z.string(),
  topics: z.array(z.string()),
  title: z.string(),
  description: z.string(),
  previewImg: z.string(),
})

export type Article = typeof ArticleSchema._type
