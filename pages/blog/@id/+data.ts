// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { useConfig } from "vike-react/useConfig";
import { allArticles, Article } from 'content-collections';
import { render } from "vike/abort";
import { getArticleSeo } from "@/helpers/getArticleSeo";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  // https://vike.dev/useConfig
  const config = useConfig();

  const article = allArticles.find(article => article.slug === pageContext.routeParams.id);

  if (!article) {
    throw render(404)
  }

  config({
    ...getArticleSeo(article)
  });

  return article
};
