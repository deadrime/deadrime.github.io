"use server";
import { Article } from "@/types/article";
import fs from 'fs';
import { MDXProps } from "mdx/types";
import { Metadata } from "next";
import path from 'path';
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import rehypeExternalLinks from 'rehype-external-links';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import remarkGfm from "remark-gfm";

const getDirectories = (source: string) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

export const getAllArticles = async () => {
  const projectDir = process.cwd();
  const articles = getDirectories(path.join(projectDir, '/articles'));

  const articlesData = await Promise.all(articles.map(async article => {
    const { metadata, component } = await getArticleBySlug(article)

    return {
      component,
      metadata: {
        ...metadata,
        slug: article,
      },
      slug: article,
    } as Article
  }))

  return articlesData
}

export const getArticleBySlug = async (slug: string): Promise<Article> => {
  const component = await import(`../articles/${slug}/page.mdx`);

  // console.log(path.join(process.cwd(), `/articles/${slug}/page.mdx`))
  const postFile = fs.readFileSync(path.join(process.cwd(), `/articles/${slug}/page.mdx`));

  const regXHeader = /#{1,6}.+/g

  const postContentString = postFile.toString('utf-8');

  // console.log(typeof postContentString)

  // console.log('regXHeader', regXHeader.exec(postContentString));

  // // const postFile = fs.readFileSync(path.join(process.cwd(), `./articles/${slug}.mdx`));

  // // read the MDX serialized content along with the frontmatter
  // // from the .mdx blog post file
  // const mdxSource = await serialize(postFile, {
  //   parseFrontmatter: true, mdxOptions: {
  //     // remarkPlugins: [remarkGfm],
  //     rehypePlugins: [
  //       [rehypeExternalLinks, {
  //         rel: ['nofollow'],
  //         target: '_blank'
  //       }],
  //       rehypeMdxCodeProps,
  //     ],
  //   }
  // })

  return {
    slug,
    // mdxSource,
    component: component?.default,
    metadata: component?.metadata,
  };
};
