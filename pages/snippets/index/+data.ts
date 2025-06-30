import { useConfig } from "vike-react/useConfig";
import { allSnippets } from 'content-collections';

export type SnippetsPageData = Awaited<ReturnType<typeof data>>;

export const data = async () => {
  // https://vike.dev/useConfig
  const config = useConfig();

  config({
    title: `Сниппеты`,
  });

  return allSnippets;
};