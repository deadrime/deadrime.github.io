<template>
  <NuxtLayout name="post">
    <ContentRenderer
      v-if="post"
      :value="post"
    />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { usePost } from '~/hooks/usePost'

const route = useRoute()
const post = await usePost(route.path)
</script>
