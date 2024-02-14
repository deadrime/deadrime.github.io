import { Article } from "@/types/article";
import fs from 'fs';
import path from 'path';

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

export const getArticlesForTopic = async (topic: string) => {
  const posts = await getAllArticles();
  const withSelectedTopic = posts.filter(i => i.metadata.topics.includes(topic))
  return withSelectedTopic;
}

export const getAllTopics = async () => {
  const posts = await getAllArticles();
  const result = new Set<string>();

  posts.forEach((post) => {
    post.metadata.topics.forEach(topic => result.add(topic));
  });

  return Array.from(result.values());
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
