import { MDXProps } from "mdx/types";
import { Metadata } from "next";
import { JSX } from "react";
import { Article as JsonLdArticle, WithContext } from 'schema-dts';

export type TocItem = {
  id: string;
  text: string;
  level: number;
  children: TocItem[];
};

type OpenGraphArticle = Metadata['openGraph'] & {
  type: 'article';
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  authors?: null | string | URL | Array<string | URL>;
  section?: null | string;
  tags?: null | string | Array<string>;
};

export type CreateArticleProps = {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  topics: string[];
}

export type Article = Omit<CreateArticleProps, 'publishedTime' | 'modifiedTime'> & {
  metadata: Metadata & {
    openGraph: OpenGraphArticle
    jsonLd?: WithContext<JsonLdArticle>;
  };
  component: (props: MDXProps) => JSX.Element;
  publishedTime: number;
  modifiedTime?: number;
  toc: TocItem[];
};
