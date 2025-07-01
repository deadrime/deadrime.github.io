import { Article } from "content-collections";
import { useConfig } from "vike-react/useConfig";

type Config = Parameters<ReturnType<typeof useConfig>>[0];

export const getArticleSeo = (article: Article): Partial<Config> => {
  return {
    title: article.title,
    description: article.description,
    Head: <>
      <meta property="og:image" content={article.previewImg} />
      <meta property="og:type" content="article" />
      <meta property="twitter:title" content={article.title} />
      <meta property="twitter:description" content={article.description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={article.previewImg} />
    </>
  }
}
