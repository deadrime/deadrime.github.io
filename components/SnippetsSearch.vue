<template>
  <div>
    <TextInput
      :value="query"
      placeholder="Поиск..."
      class="mb-6"
      @change="query = $event"
    />
    <div v-if="!findedSnippets.length">
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
import createFuzzySearch from '@nozbe/microfuzz'
import type { SnippetsCollectionItem } from '@nuxt/content'
import { useDebounce } from '@vueuse/core'
import TextInput from './TextInput.vue'
import SnippetPreview from './SnippetPreview.vue'

const { snippets } = defineProps<{ snippets: SnippetsCollectionItem[] }>()

const query = ref('')
const debouncedQuery = useDebounce(query, 200)

const fuzzySearch = createFuzzySearch(snippets, {
  getText: (item: SnippetsCollectionItem) => [item.title, item.description],
})

const findedSnippets = computed(() => {
  if (!debouncedQuery.value) {
    return snippets.map(i => ({
      item: i,
      score: 1,
      titleHighlightRanges: [],
      descriptionHighlightRanges: [],
    }))
  }

  const searchResult = fuzzySearch(debouncedQuery.value)

  return searchResult.map((i) => {
    const [titleHighlightRanges, descriptionHighlightRanges] = i.matches

    return ({
      item: i.item,
      score: i.score,
      titleHighlightRanges: titleHighlightRanges || [],
      descriptionHighlightRanges: descriptionHighlightRanges || [],
    })
  })
})
</script>

<style>

</style>
