<template>
  <NuxtLayout name="post">
    <ContentRenderer
      v-if="post"
      :value="post"
    />
    <div class="flex justify-between mt-14">
      <NuxtLink
        v-if="related?.[0]"
        :to="related[0].path"
      >
        ← {{ related[0].title }}
      </NuxtLink>
      <NuxtLink
        v-if="related?.[1]"
        :to="related[1].path"
      >
        {{ related[1].title }} →
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { usePost } from '~/hooks/usePost'
import { usePostSeo } from '~/hooks/usePostSeo'

const route = useRoute()
const post = await usePost(route.path)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true })
}

usePostSeo(post.value)

const { data: related } = await useAsyncData('surround' + route.path, () => {
  return queryCollectionItemSurroundings('articles', route.path)
})
</script>
