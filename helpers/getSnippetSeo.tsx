import { Snippet } from "content-collections";
import { useConfig } from "vike-react/useConfig";

type Config = Parameters<ReturnType<typeof useConfig>>[0];

export const getSnippetSeo = (snippet: Snippet): Partial<Config> => {
  return {
    title: snippet.title,
    description: snippet.description,
    Head: <>
      <meta property="og:image" content={snippet.previewImg} />
      <meta property="og:type" content="article" />
      <meta property="twitter:title" content={snippet.title} />
      <meta property="twitter:description" content={snippet.description} />
      <meta property="twitter:card" content="summary_large_image" />
    </>
  }
}
