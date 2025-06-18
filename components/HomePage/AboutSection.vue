<template>
  <section class="flex flex-col relative wrapper">
    <div class="flex flex-col">
      <span
        v-if="false"
        class="flex items-center gap-2"
      >
        <div class="rounded-full bg-green size-[0.625rem]" />
        <span class="text-primary font-medium">ищу работу 👋</span>
      </span>
      <h1 class="text-2xl font-primary pt-3">
        Трофимов Евгений
      </h1>
      <h2 class="mt-4 block text-md text-secondary font-normal font-primary">
        Fullstack developer, middle+/ senior
      </h2>
      <Contacts class="mt-8" />
    </div>
    <div class="blobs">
      <Sloth class="sloth" />
      <div class="blob color1" />
      <div class="blob color2" />
      <div class="blob color3" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 text-body2 text-text/80 pt-8">
      <div
        id="content"
        class="blogContent md:col-span-6"
      >
        <p>
          Привет, я Женя, у меня <strong>~7 лет</strong> опыта работы, считаю себя отличным разработчиком с интересным бэкграундом.
          Пишу чистый код, создаю сложные и доступные интерфейсы, умею решать самые различные виды задач, в том числе создавать сервисы с нуля.
        </p>
        <p>
          Интересует позиция <strong>frontend разработчика</strong> (или fullstack с беком на node.js).
          Имею гораздо больше опыта в React, но Vue тоже интересен.
          Хочу работать с современным стеком технологий и талантливыми людьми, у которых я мог бы учиться и расти.
        </p>
        <h3 class="pt-8 font-normal text-text/80 text-body2">
          К стеку особо не привязан, но обычно работаю с
        </h3>
        <div class="flex gap-2 pt-2 flex-wrap">
          <Tag
            variant="filled"
            size="small"
            :icon="IconNextJs"
          >
            Next.js
          </Tag>
          <Tag
            variant="filled"
            size="small"
            :icon="IconReact"
          >
            React
          </Tag>
          <Tag
            variant="filled"
            size="small"
            :icon="IconTypeScript"
          >
            Typescript
          </Tag>
          <Tag
            variant="filled"
            size="small"
            :icon="IconNodeJs"
          >
            Node.js
          </Tag>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Tag from '../Tag.vue'
import Contacts from './Contacts.vue'
import IconNextJs from '~/assets/icons/nextjs.svg'
import IconReact from '~/assets/icons/react.svg'
import IconTypeScript from '~/assets/icons/ts.svg'
import IconNodeJs from '~/assets/icons/nodejs.svg'
import Sloth from '~/assets/images/sloth.svg'
</script>

<style>
@reference "~/assets/css/main.css";

.wrapper {
  /* 5rem header + 2rem padding y */
  min-height: calc(100vh - 7rem);
  padding-bottom: 5rem;
  justify-content: center;

  @media (min-width: theme(--breakpoint-md)) {
    min-height: initial;
    padding-bottom: initial;
    justify-content: start;
  }
}

.blobs {
  --color1: var(--color-primary);
  --color2: rgba(134, 112, 145, 1);
  --color3: rgba(104, 66, 255, 1);

  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -2;
  position: absolute;
  right: 1em;
  width: 100%;
  height: 100%;

  @media (min-width: theme(--breakpoint-sm)) {
    display: flex;
    height: 500px;
    width: 500px;
  }
}

.sloth {
  display: none;

  @media (min-width: theme(--breakpoint-md)) {
    display: block;
    position: absolute;
    z-index: 10;
    transform: translateX(-50%);
    animation: levitation 7s infinite ease-in-out;
    width: auto;
    height: 480px;
    opacity: 100%;
    transform: none;
    top: 0px;
    left: 75px;
  }
}

.blob {
  @apply hidden md:block blur-2xl dark:blur-3xl opacity-50 dark:opacity-80;
}

.color1 {
  background-color: var(--color1);
  position: absolute;
  top: 200px;
  left: 50px;
  height: 220px;
  width: 200px;
  animation: color1 8s infinite ease-in-out;
}

.color2 {
  @apply dark:opacity-100;
  background-color: var(--color2);
  position: absolute;
  top: 40px;
  left: 260px;
  height: 210px;
  width: 210px;
  animation: color2 8s infinite ease-in-out;
}

.color3 {
  background-color: var(--color3);
  position: absolute;
  left: 250px;
  top: 250px;
  height: 200px;
  width: 220px;
  animation: color3 8s infinite ease-in-out;
}

@keyframes levitation {
  0% {
    top: 0px;
  }

  50% {
    top: 20px;
  }

  100% {
    top: 0;
  }
}

@keyframes color1 {
  0%,
  100% {
    top: 200px;
    left: 100px;
    transform: scale(1);
    border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%;
  }

  30% {
    top: 300px;
    left: 150px;
    transform: scale(1.2);
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }

  60% {
    top: 50px;
    left: 200px;
    transform: scale(1.3);
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }
}

@keyframes color2 {
  0%,
  100% {
    top: 80px;
    right: -20px;
    transform: scale(1.2);
    border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%;
  }

  33% {
    top: 300px;
    right: -20px;
    transform: scale(1);
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }

  66% {
    top: 200px;
    right: 100px;
    transform: scale(1);
    border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%;
  }
}

@keyframes color3 {
  0%,
  100% {
    left: 250px;
    top: 250px;
    transform: scale(1);
    border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%;
  }

  33% {
    left: 140px;
    top: 100px;
    transform: scale(1.4);
    border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%;
  }

  66% {
    top: 150px;
    left: 300px;
    transform: scale(1);
    border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%;
  }
}
</style>
