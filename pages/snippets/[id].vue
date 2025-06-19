<script lang="ts" setup>
definePageMeta({
  layout: 'post',
})
const route = useRoute()
const { data: page } = await useAsyncData('snipper' + route.path, () => {
  return queryCollection('snippets').path(route.path).first()
})
</script>

<template>
  <NuxtLayout name="snippet">
    <ContentRenderer
      v-if="page"
      :value="page"
    />
  </NuxtLayout>
</template>
