<template>
  <div
    v-if="links.length > 0"
    class="mt-4 mb-4"
  >
    <span class="block mb-3 font-semibold text-lg md:text-body2">СОДЕРЖАНИЕ</span>
    <HeadingList
      :links="links"
      :active-heading-id="activeHeadingId"
    />
  </div>
</template>

<script lang="ts" setup>
import type { TocLink } from '@nuxt/content'
import HeadingList from './HeadingList.vue'
import { useActiveHeader } from '~/hooks/useActiveHeader'

const props = defineProps<{
  links: TocLink[]
}>()

const activeHeadingId = useActiveHeader(props.links)
</script>
