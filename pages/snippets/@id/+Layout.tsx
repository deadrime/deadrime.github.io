import classNames from "classnames";
import React from "react";
import dayjs from 'dayjs';
import { render } from "vike/abort";
import { Link } from "@/components/Link";
import { useData } from "vike-react/useData";
import { SnippetPageData } from "./+data";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const snippet = useData<SnippetPageData>();

  if (!snippet) {
    throw render(404)
  }

  const { title, description, date } = snippet;

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
              {dayjs(date).locale('ru').format('D MMMM YYYY')}
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

export default Layout