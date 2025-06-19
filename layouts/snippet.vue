<script lang="ts" setup>
import dayjs from 'dayjs'
import { useSnippet } from '~/hooks/useSnippet'

const route = useRoute()

const snippet = await useSnippet(route.path)

if (!snippet) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="flex flex-col">
    <NuxtLink
      href="/snippets"
      class="mb-8 block self-start"
    >← Сниппеты</NuxtLink>
    <div>
      <section class="overflow-hidden">
        <header class="py-8 border-t-[6px] border-b-2 border-details md:mb-10">
          <h1 class="text-2xl font-primary block mb-4">
            {{ snippet?.title }}
          </h1>
          <h2 class="font-primary text-md font-normal block mb-8 text-secondary">
            {{ snippet?.description }}
          </h2>
          <time class="text-body2 text-secondary block mt-4">
            {{ dayjs(snippet?.date).format('D MMMM YYYY') }}
          </time>
        </header>
      </section>
      <div class="flex flex-col md:grid md:grid-cols-12 gap-5">
        <div
          id="content"
          class="md:col-span-8"
        >
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>

</style>
