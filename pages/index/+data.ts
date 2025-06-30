// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { allArticles } from 'content-collections';
import { getPaginatedItems } from "@/helpers/content";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const { items, totalCount } = getPaginatedItems(allArticles, 3, 0);

  return {
    latestArticles: items,
    totalArticlesCount: totalCount
  }
};
