import { getAllSnippets, getSnippetBySlug } from "@/helpers/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

type ArticlePageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function SnippetPage(props: ArticlePageProps) {
  const params = await props.params;
  const snippet = await getSnippetBySlug(params.slug);

  if (!snippet) {
    return notFound();
  }

  return (
    <>
      <div className="flex flex-col">
        {React.createElement(snippet.component)}
      </div>
      {snippet.metadata && <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snippet.metadata.jsonLd) }}
      />}
    </>
  );
}

export async function generateMetadata(props: ArticlePageProps): Promise<Metadata> {
  const params = await props.params;
  const article = await getSnippetBySlug(params.slug);

  return article!.metadata;
}

export async function generateStaticParams() {
  const snippets = await getAllSnippets();

  return snippets.map(({ slug }) => ({
    slug,
  }));
}
