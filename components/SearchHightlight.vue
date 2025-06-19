<template>
  {{ data.startText }}<span
    v-if="data.hightlghted"
    :class="hightlightedClass"
    :style="hightlightedStyle"
  >{{ data.hightlghted }}</span>{{ data.endText }}
</template>

<script lang="ts" setup>
import type { HighlightRanges } from '@nozbe/microfuzz'
import type { CSSProperties } from 'vue'

const { text, ranges, hightlightedClass, hightlightedStyle } = defineProps<{
  ranges: HighlightRanges
  text: string
  hightlightedClass?: string
  hightlightedStyle?: CSSProperties
}>()

console.log({
  ranges,
})

const data = computed(() => {
  const firstRange = ranges[0] || []
  const [start, end] = firstRange

  const startText = text.slice(0, start)
  const hightlghted = text.slice(start, end + 1)
  const endText = firstRange.length ? text.slice(end + 1) : ''

  return {
    hightlghted,
    startText,
    endText,
  }
})
</script>

<style>

</style>
