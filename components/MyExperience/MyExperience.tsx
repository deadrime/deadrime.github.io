import React from 'react';

import classNames from 'classnames';
import styles from './styles.module.css';
import Tag from '../Tag/Tag';
import { capitalize } from '@/helpers/capitalize';
import SvgHuman from '@/svgComponents/Human';
import SvgSber from '@/svgComponents/Sber';
import SvgFrogogo from '@/svgComponents/Frogogo';
import SvgItcanfly from '@/svgComponents/Itcanfly';
import SvgReact from '@/svgComponents/React';
import SvgTs from '@/svgComponents/Ts';
import SvgGraphql from '@/svgComponents/Graphql';
import SvgApollo from '@/svgComponents/Apollo';
import SvgEmotion from '@/svgComponents/Emotion';
import SvgNodejs from '@/svgComponents/Nodejs';
import SvgOther from '@/svgComponents/Other';


const data = [
  {
    companyName: 'Human',
    companyLogo: SvgHuman,
    startYear: 2022,
    endYear: undefined,
    shortDescription: <>
      <p>
        <strong>HumanIPO</strong> — американский стартап, основная идея которого это дать возможность любому человеку выпустить свой токен (акции),
        провести свое IPO и раунды инвестиций.
      </p>
      <p>
        Когда я пришел, нужно было провести перезапуск. Небольшой командой мы собирали рабочие прототипы приложения,
        тестировали их на юзерах, показывали инвесторам, искали наиболее удачный концепт
      </p>
    </>,
    moreInfo: <>
      <p>Чем занимался:</p>

      <ul>
        <li>
          Система надежных транзакций. Нам необходимо было создавать/обновлять сущности в нашей бд после успешно
          выполненной транзакции. При этом важно было учесть, что транзакция может не пройти
          (например недостаточный баланс, ограничение контракта или сеть чейна прилегла).
          В результате получилась довольно сложная система из 2 воркеров (tx monitor, tx finalizer)
          в связке с удобными компонентами и хуками на фронте.
        </li>
        <li>
          Самописный брокер сообщений на Redis Streams. Наши воркеры и приложения крутились в k8s,
          нужно было как-то реализовать общение между ними.
          В результате получился https://github.com/deadrime/redis-events-queue
        </li>
        <li>
          Воркер для создание красивых image preview для постов. Реализовал при помощи puppeter,
          в котором рендерил сгенерированный реактом html.
        </li>
        <li>
          Система UI компонентов с широкими возможностями по кастомизации. У нас постоянно все менялось,
          нужна была такая система компонентов, где можно быстро поменять цвета, размеры, сделать из светлой
          темы темную, задать у всех компонентов глобальный border-radius/border-width и т.д.
          Реализовал при помощи rem + css variables + свой ThemeProvider.
          Так же настроил сборку через vite и паблишинг в наш package registry.
          Бонусом получили уменьшенный размер бандла, до этого использовали довольно тяжелый antd.
          Вынес компонент формы в отдельную либу, можно посмотреть тут https://github.com/deadrime/react-any-shape-form
        </li>
        <li>
          Лямбда функция для сжатия картинок на лету. Хотели экономить место на пользовательских аватарах и картинках в постах.
          При помощи sharp в связке с aws-sdk сделал автоматическую конвертацию в webp, сжатие и ресайзинг
          (3 размера - thumb, medium, large).
        </li>
        <li>
          Миграция с less на нативный CSS + PostCSS. У нас достаточно медленно работал локальный дев сервер
          (страницы рендерились за 10 секунд), в процессе ресерча я обнаружил, что это частично связано с less и теми костылями,
          которые заставляли его работать в связке с next. После миграции удалось отказаться от старых зависимостей,
          которые не позволяли обновится на 14-й next и использовать turbopack.
          В результате локальный дев сервер стал работать гораздо быстрее (3 секунды на рендеринг страницы против 10).
        </li>
      </ul>
    </>,
    technologies: ['react', 'typescript', 'next.js', 'node.js', 'dynamoDB'],
  },
  {
    companyName: 'Sber',
    companyLogo: SvgSber,
    startYear: 2020,
    endYear: 2021,
    shortDescription: <>
      <p>
        Я работал в подразделении <strong>SberDevices</strong>, там мы разрабатывали пользовательский интерфейс приложений,
        которые запускаются на <strong>SberPortal</strong> и <strong>SberBox</strong>.
      </p>
    </>,
    moreInfo: <>
      <p>
        Работал над:
      </p>
      <ul>
        <li>
          <strong>Супер Шеф</strong> - приложение с готовыми рецептами, можно найти и выбрать готовый рецепт,
          чтобы приготовить блюдо
        </li>
        <li>
          <strong>S7 airlines</strong> - приложение для заказа авиабилетов
        </li>
        <li>
          <strong>izi.TRAVEL</strong> - приложение для просушивания аудио гидов по городам/музеям
        </li>
        <li>
          <strong>Готовая еда</strong> - приложение для заказа со всяких сервисов доставки еды вроде delivery club или яндекс еды.
        </li>
      </ul>
      Получил очень интересный опыт создания доступных (a11y) интерфейсов, так как любое приложение
      должно было поддерживать управление с пульта, при помощи сенсорного экрана и голоса.
      Научился уделять больше внимания производительности, размеру бандла и аналитике.
      Осознал, что мы не всегда можем предсказать поведения пользователей и лишь методом проб и ошибок можно создать
      действительно удобный UI.
    </>,
    technologies: ['react', 'typescript'],
  },
  {
    companyName: 'Frogogo',
    companyLogo: SvgFrogogo,
    startYear: 2019,
    endYear: 2021,
    shortDescription: <>
      <p>
        Frogogo - маркетплейс с прикольной системой лояльности. Удаленка, недельные спринты, утренний стендап, карточки в трелло.
        Когда я только пришел - на фронте жили своей жизнью jQuery + stimulus.
      </p>
    </>,
    moreInfo: <>
      <p>
        Чем занимался:
      </p>
      <ul>
        <li>
          Написал библиотеку для UI компонентов на React + Typescript, настроил Storybook
        </li>
        <li>
          Переписал все сложные интерфейсные моменты на React. Например - корзину, поиск, выбор пункта выдачи на карте.
        </li>
        <li>
          Настроил всю инфраструктуру фронта, вначале все было завязано на вебпак, потом перешли на esbuild
        </li>
        <li>
          Интересным опытом было настроить SSR react-а для ruby on rails (удовольствие сомнительное)
        </li>
        <li>
          Реализовал табло для пунктов выдачи (номер заказа, статус).
        </li>
      </ul>
    </>,
    technologies: ['react', 'typescript', 'ruby on rails', 'webpack', 'esbuild', 'storybook'],
  },
  {
    companyName: 'ItCanFly',
    companyLogo: SvgItcanfly,
    startYear: 2019,
    endYear: 2019,
    shortDescription: <>
      <p>
        Первый опыт фриланса и работы на проектной основе, делал как мелкие фичи, так и достаточно крупные проекты, стек был самый разный.
      </p>
    </>,
    moreInfo: <>
      <p>
        Из интересного могу выделить:
      </p>

      <ul>
        <li>
          Создавал графики на <strong>chart.js</strong>. Различная статистика, курс валют и т.п.

          <div className="flex gap-2">
            <SvgReact height={20} />
            <SvgTs height={20} />
          </div>
        </li>
        <li>
          Участвовал в разработке сайта для антикафе https://ziferblat.net/

          <div className="flex gap-2">
            <SvgReact height={20} />
            <SvgTs height={20} />
            <SvgGraphql height={20} />
            <SvgApollo className="fill-current" height={20} />
            <SvgEmotion height={20} />
          </div>

        </li>
        <li>
          Написал телеграмм бота для персонала. В боте можно выбрать рабочие смены, провести инвентаризацию.

          <div className="flex gap-2">
            <SvgTs height={20} />
            <SvgGraphql height={20} />
            <SvgNodejs height={20} />
          </div>
        </li>
      </ul>
    </>,
    technologies: ['react', 'typescript', 'graphQL', 'apollo', 'emotion'],
  },
  {
    companyName: 'Прочее',
    companyLogo: SvgOther,
    startYear: 2018,
    endYear: 2019,
    shortDescription: <>
      <p>
        Год работал в офисе, требовалось разрабатывать и поддерживать админку с различной статистикой,
        а так же интерфейс для операторов call-центра и корпоративный чат.
      </p>
    </>,
    moreInfo: <>
      <p>
        Ничего примечательного, типичное формошлепство, могу выделить пару своих заслуг - адаптацию под мобильную версию
        и переезд с express на koa, в процессе которого мы все отрефакторили.
        Еще из интересного - внедрил JWT аутентификацию, проповедовал БЭМ, получил опыт создания node.js воркеров, нужно было
        по крону дергать тяжелые запросы и обновлять данные для построения графиков.
      </p>
    </>,
    technologies: ['vue', 'elementUI', 'postgreSQL'],
  }
]

const MyExperience = () => {
  return (
    <section className="mt-8 md:mt-36">
      <h2 className="font-primary text-xl font-normal">
        Опыт работы
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5 my-11 pl-3 md:pl-0">
        {data.map((work) => (
          <div key={work.companyName} className={classNames('contents', styles.companyWrapper)}>
            <div className="md:col-start-2 md:col-end-4 border-l-2 dark:border-night pt-6">
              <div className='flex items-center'>
                {React.createElement(work.companyLogo, {
                  width: 24,
                  height: 24,
                  className: "bg-background dark:border-0 shrink-0 rounded rounded-full transform -translate-x-1/2 outline outline-8 outline-offset-0 outline-background"
                })}
                <div className="relative inline-flex items-center">
                  <span className="absolute -top-5 text-body2 whitespace-nowrap text-lilac">
                    {work.startYear === work.endYear ? work.startYear : `${work.startYear} - ${work.endYear ?? 'н.в.'}`}
                  </span>
                  <span className="text-md font-primary block pt-1 md:pt-0" style={{
                    verticalAlign: 'text-bottom',
                    lineHeight: '1.5'
                  }}>
                    {work.companyName}
                  </span>
                </div>
              </div>
            </div>
            <div className="md:col-start-5 md:col-end-12 pl-6 md:pl-0 text-body2 md:pt-6 border-l-2 dark:border-night md:border-l-0">
              <span className="text-text/80 block">
                {work.shortDescription}
              </span>
              <div className='flex gap-2 my-4 flex-wrap'>
                {work.technologies.map(technology =>
                  <Tag borderless size='small' key={technology}>
                    {capitalize(technology)}
                  </Tag>
                )}
              </div>
              <details className="mb-0">
                <summary className='marker:text-primary cursor-pointer'>
                  <span className="text-primary font-semibold">Подробнее</span>
                  {/* <button>
                    Подробнее <IconArrowDown width={12} height={12} />
                  </button> */}
                </summary>
                <span className="text-text/80">
                  {work.moreInfo}
                </span>
              </details>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MyExperience;
