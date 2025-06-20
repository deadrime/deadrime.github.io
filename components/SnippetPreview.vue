<template>
  <NuxtLink
    :href="snippet.path"
    class="group text-balance flex flex-col gap-2 focus-visible:ring-transparent"
  >
    <span class="text-body1 text-primary self-start group-focus-within:underline underline-offset-6">
      <SearchHighlight
        hightlighted-class="bg-primary/40"
        :hightlighted-style="{
          color: 'hsl(from var(--color-primary) calc(h + 5) s l)',
        }"
        :text="snippet.title"
        :ranges="titleHighlightRanges"
      />
    </span>
    <span class="text-body2 text-text">
      <SearchHighlight
        hightlighted-class="bg-primary/40"
        :hightlighted-style="{
          color: 'hsl(from var(--color-primary) calc(h + 5) s l)',
        }"
        :text="snippet.description"
        :ranges="descriptionHighlightRanges"
      />
    </span>
    <div class="flex gap-1">
      <Tag
        v-for="tag in snippet.topics"
        :key="tag"
        variant="outlined"
        size="small"
        class="pointer-events-none capitalize"
      >
        {{ tag }}
      </Tag>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { SnippetsCollectionItem } from '@nuxt/content'
import type { RangeTuple } from 'fuse.js'
import SearchHighlight from './SearchHightlight.vue'

const {
  snippet,
  titleHighlightRanges,
  descriptionHighlightRanges,
} = defineProps<{
  snippet: SnippetsCollectionItem
  titleHighlightRanges: RangeTuple[]
  descriptionHighlightRanges: RangeTuple[]
}>()
</script>

<style>

</style>
