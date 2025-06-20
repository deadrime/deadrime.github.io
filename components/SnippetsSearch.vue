<template>
  <div>
    <TextInput
      :value="query"
      placeholder="Поиск..."
      class="mb-6"
      @change="query = $event"
    />
    <div v-if="snippets.length > 0 && !findedSnippets.length">
      Ничего не найдено
    </div>
    <div class="flex flex-col gap-3 w-max">
      <SnippetPreview
        v-for="snippet in findedSnippets"
        :key="snippet.item.id"
        :snippet="snippet.item"
        :title-highlight-ranges="snippet.titleHighlightRanges"
        :description-highlight-ranges="snippet.descriptionHighlightRanges"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFuse } from '@vueuse/integrations/useFuse'
import { useDebounce } from '@vueuse/core'
import type { SnippetsCollectionItem } from '@nuxt/content'

import type { RangeTuple } from 'fuse.js'
import TextInput from './TextInput.vue'
import SnippetPreview from './SnippetPreview.vue'

const MIN_CHAR_COUNT = 2
const query = ref('')
const debouncedQuery = useDebounce(query, 200)

const { snippets } = defineProps<{ snippets: SnippetsCollectionItem[] }>()

const { fuse } = useFuse(debouncedQuery, snippets, {
  fuseOptions: {
    includeMatches: true,
    distance: 500,
    minMatchCharLength: MIN_CHAR_COUNT,
    keys: [
      { name: 'title', getFn: snippet => snippet.title },
      { name: 'description', getFn: snippet => snippet.description },
    ],
  },
})

const findedSnippets = computed(() => {
  if (!debouncedQuery.value || debouncedQuery.value.length < MIN_CHAR_COUNT) {
    return snippets.map(i => ({
      item: i,
      titleHighlightRanges: [],
      descriptionHighlightRanges: [],
    }))
  }

  const results = fuse.value.search(debouncedQuery.value)

  return results.map(({ item, matches }) => {
    const matchesByField = (matches || [])?.reduce((acc, curr) => {
      acc[curr.key!] = curr.indices
      return acc
    }, {} as Record<string, readonly RangeTuple[]>)

    return {
      item: item,
      titleHighlightRanges: [...matchesByField['title'] || []],
      descriptionHighlightRanges: [...matchesByField['description'] || []],
    }
  })
})
</script>

<style>

</style>
