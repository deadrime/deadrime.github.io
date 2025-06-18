<template>
  <div class="flex flex-col">
    <NuxtLink
      href="/blog"
      class="mb-8 block self-start"
    >
      ← Блог
    </NuxtLink>
    <div>
      <section
        class="patternBg overflow-hidden"
      >
        <header class="py-8 border-t-[6px] border-b-2 border-details md:mb-10">
          <h1 class="text-2xl font-primary block mb-4">
            {{ title }}
          </h1>
          <h2 class="font-primary text-md font-normal block mb-8 text-secondary">
            {{ description }}
          </h2>
          <div class="flex gap-2 flex-wrap gap-y-1">
            <Tag
              :is="NuxtLink"
              v-for="topic in topics"
              :key="topic"
              variant="outlined"
              :href="`/blog/topics/${topic}`"
            >
              {{ capitalize(topic) }}
            </Tag>
          </div>
          <time class="text-body2 text-secondary block mt-4">
            {{ dayjs(date).format('D MMMM YYYY') }}
          </time>
        </header>
      </section>
      <div class="flex flex-col md:grid md:grid-cols-12 gap-5">
        <aside class="md:col-start-10 md:col-end-13 md:sticky top-4 self-start shrink-0 md:order-last">
          <TableOfContent
            class="md:col-start-10 md:col-end-13 md:sticky top-4 self-start shrink-0 md:order-last"
            :links="toc.links"
          />
        </aside>
        <div
          id="content"
          class="blogContent md:col-span-8"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { capitalize } from 'vue'
import dayjs from 'dayjs'
import TableOfContent from '../components/TableOfContent.vue'
import { NuxtLink } from '#components'
import Tag from '~/components/Tag.vue'
import { usePost } from '~/hooks/usePost'

const route = useRoute()

const article = await usePost(route.path)

const toc = article.value!.body.toc!

console.log({ toc })

const { title, description, topics, date } = article.value!
</script>

<style>
@reference "~/assets/css/main.css";

.blogContent {
  scroll-behavior: smooth;
  font-family: var(--font-base);
  /* font-weight: 500; */

  .img-wrapper {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  ol {
    counter-reset: cupcake;
    padding-left: 0.5em;
  }

  ol li {
    counter-increment: cupcake;
  }

  ol li:before {
    @apply text-primary;

    content: counters(cupcake, ".") " ";
    font-weight: bold;
    font-family: cursive;
  }

  .codeSnippet {
    @apply my-2;

    & + .codeSnippet {
      @apply mt-4;
    }
  }
}
</style>
