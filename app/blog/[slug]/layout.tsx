import { TableOfContent } from "@/components/TableOfContent/TableOfContent";
import { getArticleBySlug } from "@/helpers/blog";
import Link from "next/link";
import styles from './styles.module.css';
import classNames from "classnames";
import React from "react";
import Tag from "@/components/Tag/Tag";
import dayjs from 'dayjs';

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
    <div>
      <Link href="/blog" className="mb-8 block">← Блог</Link>
      <div className="flex flex-col gap-8">
        <section className={classNames(styles.patternBg, "overflow-hidden")}>
          <header className="py-8 border-t-[6px] border-b-2 border-night mb-10">
            <h1 className="text-2xl font-primary block mb-4">
              {metadata.title}
            </h1>
            <h2 className="font-primary text-md font-normal block mb-8 text-beige">
              {metadata.description}
            </h2>
            <div className="flex gap-2 flex-wrap gap-y-1">
              {metadata.topics?.map((i) => (
                <Tag key={i} href={`/blog/topics/${i}`}>{i}</Tag>
              ))}
            </div>
            <time className="text-body2 text-lilac block mt-4">
              {dayjs(metadata.date).format('D MMMM YYYY')}
            </time>
          </header>
        </section>
        <div className="grid grid-cols-12 gap-5">
          <div className={classNames(styles.blogContent, 'col-span-8')} id="content">
            {children}
          </div>
          <aside className="col-start-10 col-span-3 sticky top-4 self-start shrink-0" style={{ width: 300 }}>
            <TableOfContent contentId="content" />
          </aside>
        </div>
      </div>
    </div>
  );
}
