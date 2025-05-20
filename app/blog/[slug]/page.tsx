import { getAllArticles, getArticleBySlug } from "@/helpers/blog";
import { Metadata } from "next";
import React from "react";

type ArticlePageProps = {
  params: {
    slug: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);

  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
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
  const article = await getArticleBySlug(params.slug);

  return article.metadata;
}

export async function generateStaticParams() {
  const posts = await getAllArticles();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
