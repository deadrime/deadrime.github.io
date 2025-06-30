import { useConfig } from "vike-react/useConfig";
import { allArticles } from 'content-collections';

export const data = async () => {
  // https://vike.dev/useConfig
  const config = useConfig();

  config({
    // Set <title>
    title: `Блог`,
  });

  return allArticles;
};