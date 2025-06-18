<template>
  <article class="max-w-xl text-balance">
    <NuxtLink
      :href="article.path"
      class="text-text mb-4 block"
    >
      <img
        v-if="article.previewImg"
        loading="lazy"
        :src="article.previewImg"
        :alt="article.title"
        class="aspect-38/20 bg-slate-100/10 rounded-lg mb-3 overflow-hidden object-cover object-center w-full"
      >
      <h3 class="mt-0 mb-3 p-0 text-md leading-tight">
        {{ article.title }}
      </h3>
      <span class="text-body2 text-text/70 block">
        {{ article.description }}
      </span>
    </NuxtLink>
    <div class="flex gap-2 flex-wrap mb-3">
      <Tag
        :is="NuxtLink"
        v-for="topic in article.topics"
        :key="topic"
        variant="outlined"
        :href="`/blog/topics/${topic}`"
        size="small"
      >
        {{ capitalize(topic) }}
      </Tag>
    </div>
    <NuxtLink
      :href="article.path"
      class="font-semibold text-body2"
    >
      Читать →
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
import { capitalize } from 'vue'
import type { ArticlesCollectionItem } from '@nuxt/content'
import { NuxtLink } from '#components'
import Tag from '~/components/Tag.vue'

const { article } = defineProps<{ article: ArticlesCollectionItem }>()
</script>

<style>

</style>
