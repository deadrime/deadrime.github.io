<template>
  <section class="mt-12 md:mt-40">
    <h2 class="font-primary text-xl font-normal mb-11 flex items-center">
      Блог
      <NuxtLink
        v-if="data && data.totalCount > 3"
        href="/blog"
        class="text-body2 ml-auto font-base text-primary font-bold"
      >
        Все статьи →
      </NuxtLink>
    </h2>
    <div class="articlesWrapper">
      <ArticlePreview
        v-for="article in data?.articles"
        :key="article.path"
        :article="article"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ArticlePreview from '../ArticlePreview.vue'

const { data } = await useAsyncData('latestArticles', async () => {
  const articles = await queryCollection('articles').limit(3).all()
  const totalCount = await queryCollection('articles').count()

  return {
    articles,
    totalCount,
  }
})
</script>

<style>
@reference "~/assets/css/main.css";

.articlesWrapper {
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr;

  @media (min-width: theme(--breakpoint-md)) {
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
}
</style>
