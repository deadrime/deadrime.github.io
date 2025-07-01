// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import { allArticles, allSnippets } from 'content-collections';
import { render } from "vike/abort";
import { getSnippetSeo } from "@/helpers/getSnippetSeo";

export type SnippetPageData = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  // https://vike.dev/useConfig
  const config = useConfig();

  const snippet = allSnippets.find(article => article.slug === pageContext.routeParams.id);

  if (!snippet) {
    throw render(404)
  }

  config({
    ...getSnippetSeo(snippet)
  });

  return snippet
};
