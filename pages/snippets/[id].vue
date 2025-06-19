<script lang="ts" setup>
import { useSnippetSeo } from '~/hooks/useSnippetSeo'

const route = useRoute()
const { data: snippet } = await useAsyncData('snipper' + route.path, () => {
  return queryCollection('snippets').path(route.path).first()
})

if (!snippet.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

useSnippetSeo(snippet.value)
</script>

<template>
  <NuxtLayout name="snippet">
    <ContentRenderer
      v-if="snippet"
      :value="snippet"
    />
  </NuxtLayout>
</template>
