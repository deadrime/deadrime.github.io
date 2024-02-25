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
    <section className={classNames("flex flex-col relative", styles.wrapper)}>
      <div className="flex flex-col">
        <span className="flex items-center gap-2">
          <div className="rounded-full bg-green size-[0.625rem]" />
          <span className="text-primary font-medium">ищу работу 👋</span>
        </span>
        <h1 className="text-2xl font-primary pt-3">
          Трофимов Евгений
        </h1>
        <h2 className="mt-4 block text-md text-secondary font-normal font-primary">
          Fullstack developer, middle+/ senior
        </h2>
        <Contacts className="mt-8" />
      </div>
      <div className={styles.blobs}>
        <SvgSloth className={styles.sloth} />
        <div className={classNames(styles.blob, styles.color1)}></div>
        <div className={classNames(styles.blob, styles.color2)}></div>
        <div className={classNames(styles.blob, styles.color3)}></div>
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
          </p>
          <h3 className="pt-8 font-normal text-text/80 text-body2">Любимый стек <span>❤️</span></h3>
          <div className="flex gap-2 pt-2 flex-wrap">
            <Tag variant="filled" size="small" icon={<SvgNextjs height={20} className="fill-current text-text/90" />}>Next.js</Tag>
            <Tag variant="filled" size="small" icon={<SvgReact height={20} />}>React</Tag>
            <Tag variant="filled" size="small" icon={<SvgTs height={20} />}>Typescript</Tag>
            <Tag variant="filled" size="small" icon={<SvgGraphql height={20} />}>GraphQL</Tag>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection;
