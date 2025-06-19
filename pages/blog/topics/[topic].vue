<template>
  <h2 className="font-primary text-xl font-normal mt-8 md:mt-36 mb-4 md:mb-11">
    Статьи с тегом #{{ topic }}
  </h2>
  <div className="flex flex-col gap-5">
    <ArticlePreview
      v-for="article in articles "
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script lang="ts" setup>
import ArticlePreview from '~/components/ArticlePreview.vue'

const route = useRoute()
const topic = route.params.topic

const { data: articles } = useAsyncData(`articles_${topic}`, () => {
  return queryCollection('articles').where('topics', 'LIKE', `%${topic}%`).all()
})
</script>

<style>

</style>
