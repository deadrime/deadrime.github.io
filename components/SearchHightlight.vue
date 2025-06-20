<template>
  <component
    :is="item.hightlighted ? 'span' : EmptyComponent"
    v-for="item, index in data"
    :key="index"
    :class="{
      [hightlightedClass]: item.hightlighted,
    }"
    :style="item.hightlighted && hightlightedStyle"
  >
    {{ item.text }}
  </component>
</template>

<script lang="tsx" setup>
import type { RangeTuple } from 'fuse.js'
import { Fragment, type CSSProperties, type FunctionalComponent } from 'vue'

const { text, ranges, hightlightedClass, hightlightedStyle } = defineProps<{
  ranges: RangeTuple[]
  text: string
  hightlightedClass: string
  hightlightedStyle?: CSSProperties
}>()

const data = computed(() => {
  const result = []

  let lastIndex = 0

  for (const [start, end] of ranges) {
    // Add text before the highlight
    if (start > lastIndex) {
      result.push({
        hightlighted: false,
        text: text.slice(lastIndex, start),
      })
    }

    // Add highlighted text
    const highlightText = text.slice(start, end + 1)

    result.push({
      hightlighted: true,
      text: highlightText,
    })

    lastIndex = end + 1
  }

  // Add remaining text after last highlight
  if (lastIndex < text.length) {
    result.push({
      hightlighted: false,
      text: text.slice(lastIndex),
    })
  }

  return result
})

const EmptyComponent: FunctionalComponent = (_, ctx) => {
  return (
    <Fragment>
      {ctx.slots.default?.()}
    </Fragment>
  )
}
</script>

<style>

</style>
