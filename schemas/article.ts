import z from "zod";

export const articleFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  topics: z.array(z.coerce.string()).default([]),
  previewImg: z.string().optional(),
});

export type ArticleFrontmatter = typeof articleFrontmatterSchema['_type'];
