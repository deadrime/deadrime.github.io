import { getAllSnippets, getSnippetBySlug } from "@/helpers/blog";
import { Metadata } from "next";
import React from "react";

type ArticlePageProps = {
  params: {
    slug: string
  }
}

export default async function SnippetPage({ params }: ArticlePageProps) {
  const article = await getSnippetBySlug(params.slug);

  return (
    <>
      <div className="flex flex-col">
        {React.createElement(article.component)}
      </div>
      {article.metadata && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article.metadata.jsonLd) }}
      />}
    </>
  );
}

export async function generateMetadata(
  { params }: ArticlePageProps,
): Promise<Metadata> {
  const article = await getSnippetBySlug(params.slug);

  return article.metadata;
}

export async function generateStaticParams() {
  const snippets = await getAllSnippets();

  return snippets.map(({ slug }) => ({
    slug,
  }));
}
