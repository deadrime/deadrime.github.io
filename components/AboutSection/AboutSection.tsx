import classNames from 'classnames';
import styles from './AboutSection.module.css';
import Tag from '../Tag/Tag';
import IconNext from "@/icons/nextjs.svg";
import IconReact from '@/icons/react.svg';
import IconTs from '@/icons/ts.svg';
import IconGraphQL from '@/icons/graphql.svg';
import Sloth from './sloth.svg';
import Contacts from '../Contacts';

const AboutSection = () => {
  return (
    <section className="flex flex-col relative test" style={{ minHeight: 'calc(100vh - 5rem)' }}>
      <div className="flex flex-col">
        <h1 className="text-2xl font-primary pt-8">
          Трофимов Евгений
        </h1>
        <h2 className="mt-2 block text-md text-text/70 dark:text-beige font-normal font-primary">
          Fullstack developer, middle+/ senior
        </h2>
        <Contacts className="mt-3" />
      </div>
      <div className={styles.blobs}>
        <Sloth className={styles.sloth} />
        <div className={classNames(styles.blob, styles.yellow)}></div>
        <div className={classNames(styles.blob, styles.green)}></div>
        <div className={classNames(styles.blob, styles.red)}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-body2 text-text/80 pt-8">
        <div className={classNames(styles.blogContent, 'md:col-span-6')} id="content">
          <p>
            Я воплощаю в жизнь красивый и сложный UI,
            практикую Mobile First, доступные интерфейсы, внимание к деталям.
            Люблю когда мой код превращается в продукт, которым пользуются и который нравится.
          </p>
          <p>
            У меня <strong>~6 лет</strong> опыта работы, считаю себя отличным разработчиком с интересным бэкграундом.
            За все время работы решил множество интересных и разносторонних задач.
          </p>
          <h3 className="pt-8 font-normal text-text/80 text-body1">Любимый стек <span>❤️‍🔥</span></h3>

          <div className="flex gap-2 pt-3 flex-wrap">
            <Tag borderless size="small" icon={<IconNext height={20} className="fill-current text-text/90" />}>Next.js</Tag>
            <Tag borderless size="small" icon={<IconReact height={20} />}>React</Tag>
            <Tag borderless size="small" icon={<IconTs height={20} />}>Typescript</Tag>
            <Tag borderless size="small" icon={<IconGraphQL height={20} />}>GraphQL</Tag>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection;
