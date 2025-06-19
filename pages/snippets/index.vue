<script lang="ts" setup>
import SnippetsSearch from '~/components/SnippetsSearch.vue'

const { data: snippets } = await useAsyncData('snippets', () => {
  return queryCollection('snippets').all()
})
</script>

<template>
  <div>
    <h1 class="text-xl font-primary block mb-6">
      Сниппеты
    </h1>

    <SnippetsSearch :snippets="snippets || []" />
  </div>
</template>
