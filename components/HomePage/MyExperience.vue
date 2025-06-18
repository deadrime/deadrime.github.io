<template>
  <section
    id="my-experience"
    class="mt-12 md:mt-40"
  >
    <h2 class="font-primary text-xl font-normal">
      Опыт работы
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 my-11 pl-3 md:pl-0">
      <div
        v-for="work in data"
        :key="work.companyName"
        class="contents companyWrapper"
      >
        <div class="md:col-start-2 md:col-end-4 border-l-2 border-details pt-6">
          <div class="flex items-center">
            <component
              :is="work.companyLogo"
              class="size-6 bg-background dark:border-0 shrink-0 rounded-full transform -translate-x-1/2 outline outline-8 outline-offset-0 outline-background"
            />

            <div class="relative inline-flex items-center">
              <span class="absolute -top-5 text-body2 whitespace-nowrap text-neutral">
                {{ work.startYear === work.endYear ? work.startYear : `${work.startYear} - ${work.endYear ?? 'н.в.'}` }}
              </span>
              <span
                class="text-lg font-primary block"
                :style="{
                  verticalAlign: 'text-bottom',
                  lineHeight: '1.5',
                }"
              >
                {{ work.companyName }}
              </span>
            </div>
          </div>
        </div>
        <div class="md:col-start-5 md:col-end-12 pl-6 md:pl-0 text-body2 md:pt-6 border-l-2 border-details md:border-l-0">
          <span class="text-text/80 block">
            <component :is="work.shortDescription" />
          </span>
          <div class="flex gap-2 my-4 flex-wrap">
            <Tag
              v-for="technology in work.technologies"
              :key="technology"
              variant="filled"
              size="small"
            >
              {{ capitalize(technology) }}
            </Tag>
          </div>

          <Accordion
            v-if="work.moreInfo"
            summary="Подробнее"
          >
            <component :is="work.moreInfo" />
          </Accordion>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="tsx" setup>
import { Fragment } from 'vue/jsx-runtime'
import { capitalize } from 'vue'
import Tag from '../Tag.vue'
import SvgHuman from '~/assets/icons/human.svg'
import SvgStorm from '~/assets/icons/storm.svg'
import SvgSber from '~/assets/icons/sber.svg'
import SvgFrogogo from '~/assets/icons/frogogo.svg'
import SvgItcanfly from '~/assets/icons/itcanfly.svg'
import SvgReact from '~/assets/icons/react.svg'
import SvgTs from '~/assets/icons/ts.svg'
import SvgGraphql from '~/assets/icons/graphql.svg'
import SvgApollo from '~/assets/icons/apollo.svg'
import SvgEmotion from '~/assets/icons/emotion.svg'
import SvgNodejs from '~/assets/icons/nodejs.svg'
import SvgOther from '~/assets/icons/other.svg'
import SvgChartjs from '~/assets/icons/chartjs.svg'

const data = [
  {
    companyName: 'Storm',
    companyLogo: SvgStorm,
    startYear: 2024,
    endYear: undefined,
    shortDescription: (
      <Fragment>
        <p>
          <strong>Storm Trade</strong>
          {' '}
          — первый и один из крупнейших DEX в сети TON c прямой интеграция в Telegram (TMA).
          Работает при помощи динамического АММ, предоставляет возможность торговать огромным количеством активов, в том числе с использованием плеча.
        </p>
        <p>
          Я пришел в команду на стадии активного развития, ребятам нужен был Fullstack для разработки и поддержки основной апки, бота и внутренних сервисов.
        </p>
      </Fragment>
    ),
    technologies: ['react', 'typescript', 'node.js', 'nest.js', 'graphql', 'apollo', 'redis', 'docker', 'k8s', 'TON'],
  },
  {
    companyName: 'Human',
    companyLogo: SvgHuman,
    startYear: 2022,
    endYear: 2024,
    shortDescription: (
      <Fragment>
        <p>
          <strong>HumanIPO</strong>
          {' '}
          — американский стартап, основная идея которого это дать возможность любому человеку выпустить свой токен (акции),
          провести свое IPO и раунды инвестиций.
        </p>
        <p>
          Когда я пришел, нужно было провести перезапуск. Небольшой командой мы собирали рабочие прототипы приложения,
          тестировали их на юзерах, показывали инвесторам, искали наиболее удачный концепт.
        </p>
      </Fragment>
    ),
    moreInfo: (
      <Fragment>
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
            (3 размера - thumb, medium, large). Так же реализовал прогрессивная загрузку изображений при помощи создания миниатюр в thumbhash.ы
          </li>
          <li>
            Миграция с less на нативный CSS + PostCSS. У нас достаточно медленно работал локальный дев сервер
            (страницы рендерились за 10 секунд), в процессе ресерча я обнаружил, что это частично связано с less и теми костылями,
            которые заставляли его работать в связке с next. После миграции удалось отказаться от старых зависимостей,
            которые не позволяли обновится на 14-й next и использовать turbopack.
            В результате локальный дев сервер стал работать гораздо быстрее (3 секунды на рендеринг страницы против 10).
          </li>
        </ul>
      </Fragment>
    ),
    technologies: ['react', 'typescript', 'next.js', 'node.js', 'dynamoDB', 'Solana'],
  },
  {
    companyName: 'Sber',
    companyLogo: SvgSber,
    startYear: 2020,
    endYear: 2021,
    shortDescription: (
      <Fragment>
        <p>
          Я работал в подразделении
          {' '}
          <strong>SberDevices</strong>
          , там мы разрабатывали пользовательский интерфейс приложений,
          которые запускаются на
          {' '}
          <strong>SberPortal</strong>
          {' '}
          и
          {' '}
          <strong>SberBox</strong>
          .
        </p>
      </Fragment>
    ),
    moreInfo: (
      <Fragment>
        <p>
          Работал над:
        </p>
        <ul>
          <li>
            <strong>Супер Шеф</strong>
            {' '}
            - приложение с готовыми рецептами, где можно найти и выбрать готовый рецепт,
            чтобы приготовить блюдо
          </li>
          <li>
            <strong>S7 airlines</strong>
            {' '}
            - приложение для заказа авиабилетов
          </li>
          <li>
            <strong>izi.TRAVEL</strong>
            {' '}
            - приложение для просушивания аудио гидов по городам/музеям
          </li>
          <li>
            <strong>Готовая еда</strong>
            {' '}
            - приложение для заказа со всяких сервисов доставки еды вроде delivery club или яндекс еды.
          </li>
        </ul>
        Получил очень интересный опыт создания доступных (a11y) интерфейсов, так как любое приложение
        должно было поддерживать управление с пульта, при помощи сенсорного экрана и голоса.
        Научился уделять больше внимания производительности, размеру бандла и аналитике.
        Осознал, что мы не всегда можем предсказать поведения пользователей и лишь методом проб и ошибок можно создать
        действительно удобный UI.
      </Fragment>
    ),
    technologies: ['react', 'typescript'],
  },
  {
    companyName: 'Frogogo',
    companyLogo: SvgFrogogo,
    startYear: 2019,
    endYear: 2021,
    shortDescription: (
      <Fragment>
        <p>
          <strong>Frogogo</strong>
          {' '}
          - маркетплейс с прикольной системой лояльности. Удаленка, недельные спринты, утренний стендап, карточки в трелло.
          Когда я только пришел - на фронте жили своей жизнью jQuery + stimulus.
        </p>
      </Fragment>
    ),
    moreInfo: (
      <Fragment>
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
      </Fragment>
    ),
    technologies: ['react', 'typescript', 'ruby on rails', 'webpack', 'esbuild', 'storybook'],
  },
  {
    companyName: 'ItCanFly',
    companyLogo: SvgItcanfly,
    startYear: 2019,
    endYear: 2019,
    shortDescription: (
      <Fragment>
        <p>
          Первый опыт фриланса и работы на проектной основе, делал как мелкие фичи, так и достаточно крупные проекты, стек был самый разный.
        </p>
      </Fragment>
    ),
    moreInfo: (
      <Fragment>
        <p>
          Из интересного могу выделить:
        </p>

        <ul>
          <li>
            Создавал графики на
            {' '}
            <strong>chart.js</strong>
            . Различная статистика, курс валют и т.п.

            <div class="flex gap-2 my-2 flex-wrap">
              <Tag icon={<SvgReact />} variant="filled" size="small">
                React
              </Tag>
              <Tag icon={<SvgTs />} variant="filled" size="small">
                Typescript
              </Tag>
              <Tag icon={<SvgChartjs />} variant="filled" size="small">
                Chart.js
              </Tag>
            </div>
          </li>
          <li>
            Участвовал в разработке сайта для антикафе
            {' '}
            <a href="https://ziferblat.net/">Циферблат</a>

            <div class="flex gap-2 my-2 flex-wrap">
              <Tag icon={SvgReact} variant="filled" size="small">
                React
              </Tag>
              <Tag icon={SvgTs} variant="filled" size="small">
                Typescript
              </Tag>
              <Tag icon={SvgGraphql} variant="filled" size="small">
                GraphQL
              </Tag>
              <Tag icon={SvgApollo} variant="filled" size="small">
                Apollo
              </Tag>
              <Tag icon={SvgEmotion} variant="filled" size="small">
                Emotion
              </Tag>
            </div>
          </li>
          <li>
            Написал телеграмм бота для персонала. В боте можно было выбрать рабочие смены, провести инвентаризацию.

            <div class="flex gap-2 my-2 flex-wrap">
              <Tag icon={SvgTs} variant="filled" size="small">
                Typescript
              </Tag>
              <Tag icon={SvgGraphql} variant="filled" size="small">
                GraphQL
              </Tag>
              <Tag icon={SvgNodejs} variant="filled" size="small">
                Node.js
              </Tag>
            </div>
          </li>
        </ul>
      </Fragment>
    ),
    technologies: ['react', 'typescript', 'graphQL', 'apollo', 'emotion', 'chart.js'],
  },
  {
    companyName: 'Прочее',
    companyLogo: SvgOther,
    startYear: 2018,
    endYear: 2019,
    shortDescription: (
      <Fragment>
        <p>
          Год работал в офисе, требовалось разрабатывать и поддерживать админку с различной статистикой,
          а так же интерфейс для операторов call-центра и корпоративный чат.
        </p>
      </Fragment>
    ),
    moreInfo: (
      <Fragment>
        <p>
          Ничего примечательного, типичное формошлепство, могу выделить пару своих заслуг - адаптацию под мобильную версию
          и переезд с express на koa, в процессе которого мы все отрефакторили.
          Еще из интересного - внедрил JWT аутентификацию, проповедовал БЭМ, получил опыт создания node.js воркеров, нужно было
          по крону дергать тяжелые запросы и обновлять данные для построения графиков.
        </p>
      </Fragment>
    ),
    technologies: ['vue', 'elementUI', 'node.js', 'express', 'koa', 'postgreSQL'],
  },
]
</script>

<style>
@reference "tailwindcss";

.companyWrapper {
  &>div {
    @apply pb-6;
  }

  &:last-child {
    &>div {
      @apply pb-0 relative;

      @media (min-width: theme(--breakpoint-md)) {
        &::after {
          content: "";
          background: linear-gradient(to bottom,
              transparent,
              rgb(var(--color-background)) 70%);
          height: 100%;
          width: 2px;
          position: absolute;
          left: -2px;
        }
      }
    }

    &>div:last-child {
      &::after {
        content: "";
        background: linear-gradient(to bottom,
            transparent,
            rgb(var(--color-background)) 95%);
        height: 100%;
        width: 2px;
        position: absolute;
        left: -2px;
        bottom: 0;
      }
    }
  }
}
</style>
