<script lang="ts" setup>
const { data: posts } = await useAsyncData('snippets', () => {
  return queryCollection('snippets').all()
})
</script>

<template>
  <div>
    <NuxtLink
      v-for="post in posts"
      :key="post.id"
      :to="post.path"
    >
      {{ post.id }}
      {{ post.path }}
    </NuxtLink>
  </div>
</template>
