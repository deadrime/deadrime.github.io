import { getSnippetBySlug } from "@/helpers/blog";
import Link from "next/link";
import classNames from "classnames";
import React from "react";
import Tag from "@/components/Tag/Tag";
import dayjs from 'dayjs';
import { capitalize } from "@/helpers/capitalize";

type ArticleLayoutProps = {
  children: React.ReactNode,
  params: {
    slug: string
  }
}

export default async function Layout({ children, params }: ArticleLayoutProps) {
  const slug = params.slug;
  const snippet = await getSnippetBySlug(slug);
  const { title, description, topics, publishedTime } = snippet;

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
            {/* <div className="flex gap-2 flex-wrap gap-y-1">
              {topics?.map((i) => (
                <Tag key={i} variant="outlined" as={Link} href={`/blog/topics/${i}`}>
                  {capitalize(i)}
                </Tag>
              ))}
            </div> */}
            <time className="text-body2 text-secondary block mt-4">
              {dayjs(publishedTime).format('D MMMM YYYY')}
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
