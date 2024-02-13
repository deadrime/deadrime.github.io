import { MDXProps } from "mdx/types";
import { Metadata } from "next";

export type Article = {
  slug: string;
  metadata: Metadata & {
    title: string;
    slug: string;
    date?: string;
    image?: string;
    topics: string[];
  };
  component: (props: MDXProps) => JSX.Element;
};
