<template>
  <div class="flex flex-col gap-6">
    <ArticlePreview
      v-for="post in posts"
      :key="post.id"
      :article="post"
    />
  </div>
</template>

<script lang="ts" setup>
import ArticlePreview from '~/components/ArticlePreview.vue'

useSeoMeta({
  title: 'Блог - Трофимов Евгений',
})

const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('articles').all()
})
</script>
