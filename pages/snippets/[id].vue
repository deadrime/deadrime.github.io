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
  <ContentRenderer
    v-if="page"
    :value="page"
  />
</template>
