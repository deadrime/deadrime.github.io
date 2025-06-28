import { getSnippetBySlug } from "@/helpers/blog";
import Link from "next/link";
import classNames from "classnames";
import React from "react";
import dayjs from 'dayjs';

type ArticleLayoutProps = {
  children: React.ReactNode,
  params: Promise<{
    slug: string
  }>
}

export default async function Layout(props: ArticleLayoutProps) {
  const params = await props.params;

  const {
    children
  } = props;

  const slug = params.slug;
  const snippet = await getSnippetBySlug(slug);
  const { title, description, date } = snippet!;

  return (
    <div className="flex flex-col">
      <Link href="/snippets" className="mb-8 block self-start">← Сниппеты</Link>
      <div>
        <section className={classNames("overflow-hidden")}>
          <header className="py-8 border-t-[6px] border-b-2 border-details md:mb-10">
            <h1 className="text-2xl font-primary block mb-4">
              {title}
            </h1>
            <h2 className="font-primary text-md font-normal block mb-8 text-secondary">
              {description}
            </h2>
            <time className="text-body2 text-secondary block mt-4">
              {dayjs(date).format('D MMMM YYYY')}
            </time>
          </header>
        </section>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-5">
          <div className={classNames('md:col-span-8')} id="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
