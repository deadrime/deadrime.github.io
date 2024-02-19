import classNames from 'classnames';
import styles from './AboutSection.module.css';
import Tag from '../Tag/Tag';
import Contacts from '../Contacts';
import SvgNextjs from '@/svgComponents/Nextjs';
import SvgReact from '@/svgComponents/React';
import SvgTs from '@/svgComponents/Ts';
import SvgGraphql from '@/svgComponents/Graphql';
import SvgSloth from '@/svgComponents/Sloth';

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
        <SvgSloth className={styles.sloth} />
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
            <Tag borderless size="small" icon={<SvgNextjs height={20} className="fill-current text-text/90" />}>Next.js</Tag>
            <Tag borderless size="small" icon={<SvgReact height={20} />}>React</Tag>
            <Tag borderless size="small" icon={<SvgTs height={20} />}>Typescript</Tag>
            <Tag borderless size="small" icon={<SvgGraphql height={20} />}>GraphQL</Tag>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection;
