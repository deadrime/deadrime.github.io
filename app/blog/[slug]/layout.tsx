import { TableOfContent } from "@/components/TableOfContent/TableOfContent";
import { getArticleBySlug } from "@/helpers/blog";
import Link from "next/link";
import styles from './layout.module.css';
import classNames from "classnames";
import React from "react";

type ArticleLayoutProps = {
  children: React.ReactNode,
  params: {
    slug: string
  }
}

export default async function Layout({ children, params }: ArticleLayoutProps) {
  const slug = params.slug;
  const article = await getArticleBySlug(slug);
  const { metadata } = article;

  return (
    <div className="flex gap-8">
      <article className={classNames("prose m-8 mx-auto lg:prose-xl grow overflow-hidden", styles.article)} id="content">
        <div><Link href="/blog">Blog</Link> {">"} {metadata.title}</div>
        <h1 className="text-2xl font-primary">{metadata.title}</h1>
        {children}
      </article>
      <aside className="sticky top-4 self-start shrink-0" style={{ width: 300 }}>
        <TableOfContent contentId="content" />
      </aside>
    </div>
  );
}
