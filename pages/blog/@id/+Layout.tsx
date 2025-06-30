import { TableOfContent } from "@/components/TableOfContent/TableOfContent";
import styles from './styles.module.css';
import classNames from "classnames";
import React from "react";
import Tag from "@/components/Tag/Tag";
import dayjs from 'dayjs';
import { capitalize } from "@/helpers/capitalize";
import { render } from "vike/abort";
import { Link } from "@/components/Link";
import { useData } from "vike-react/useData";
import { Article } from "content-collections";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const article = useData<Article>();

  if (!article) {
    throw render(404)
  }

  const { title, description, topics, toc, date } = article;

  return (
    <div className="flex flex-col">
      <Link href="/blog" className="mb-8 block self-start">← Блог</Link>
      <div>
        <section className={classNames(styles.patternBg, "overflow-hidden")}>
          <header className="py-8 border-t-[6px] border-b-2 border-details md:mb-10">
            <h1 className="text-2xl font-primary block mb-4">
              {title}
            </h1>
            <h2 className="font-primary text-md font-normal block mb-8 text-secondary">
              {description}
            </h2>
            <div className="flex gap-2 flex-wrap gap-y-1">
              {topics?.map((i) => (
                <Tag key={i} variant="outlined" as={Link} href={`/blog/topics/${i}`}>
                  {capitalize(i)}
                </Tag>
              ))}
            </div>
            <time className="text-body2 text-secondary block mt-4">
              {dayjs(date).locale('ru').format('D MMMM YYYY')}
            </time>
          </header>
        </section>
        <div className="flex flex-col md:grid md:grid-cols-12 gap-5">
          <aside className="md:col-start-10 md:col-end-13 md:sticky top-4 self-start shrink-0 md:order-last">
            <TableOfContent toc={toc} />
          </aside>
          <div className={classNames(styles.blogContent, 'md:col-span-8')} id="content">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout