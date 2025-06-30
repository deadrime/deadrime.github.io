import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX, Options } from "@content-collections/mdx";
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkGfm from "remark-gfm";
import codeTitle from "remark-code-title";
import rehypeUnwrapImages from 'rehype-unwrap-images';
import { articleFrontmatterSchema } from "./schemas/article";
import { generateToc } from "./utils/generateToc";

const mdxConfig: Options = {
  remarkPlugins: [remarkGfm, codeTitle],
  rehypePlugins: [
    [rehypeExternalLinks, {
      rel: ['nofollow'],
      target: '_blank'
    }],
    [rehypeMdxCodeProps, {
      tagName: 'code'
    }],
    rehypeUnwrapImages
  ],
}

const articles = defineCollection({
  name: "articles",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: articleFrontmatterSchema,
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxConfig);
    const path = `/blog/${document._meta.path}` 
    const slug = document._meta.path;
    const toc = await generateToc(document.content);

    return {
      ...document,
      toc,
      path,
      slug,
      mdx,
    };
  },
});

const snippets = defineCollection({
  name: "snippets",
  directory: "content/snippets",
  include: "**/*.mdx",
  schema: articleFrontmatterSchema,
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxConfig);
    const path = `/snippets/${document._meta.path}` 
    const slug = document._meta.path;
    const toc = await generateToc(document.content);

    return {
      ...document,
      toc,
      path,
      slug,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [articles, snippets],
});