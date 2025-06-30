// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import { allArticles } from 'content-collections';
import { render } from "vike/abort";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  // https://vike.dev/useConfig
  const config = useConfig();

  const article = allArticles.find(article => article.slug === pageContext.routeParams.id);

  if (!article) {
    throw render(404)
  }

  config({
    title: article.title,
  });

  return article
};
