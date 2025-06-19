<template>
  <ol
    ref="wrapper"
    class="headingList flex flex-col gap-3 relative [&*>li]:-ml-px [&*>li>*:not(ol)]:pl-3 border-l-2 border-gray-200/30 dark:border-gray-600/50"
    :class="{
      ['border-none ml-3']: inner,
    }"
  >
    <motion.div
      v-if="!inner"
      class="absolute w-[2px] left-0 bg-primary rounded-[2px] -translate-x-[2px]"
      :animate="{
        top: marker.top,
        height: marker.height,
      }"
      :transition="{
        duration: 0.3,
        delay: 0,
        ease: 'easeOut',
      }"
    />
    <li
      v-for="item of links"
      ref="item"
      :key="item.id"
      :data-id="item.id"
      class="flex flex-col gap-3 relative"
    >
      <NuxtLink
        :href="`#${item.id}`"
        class="text-body2 border-l-2 border-transparent"
        :class="{
          ['text-text']: activeHeadingId !== item.id,
          ['text-primary']: activeHeadingId === item.id,
        }"
      >
        {{ item.text }}
      </NuxtLink>
      <HeadingList
        v-if="item.children?.length || 0 > 0"
        :links="item.children || []"
        :active-heading-id="activeHeadingId"
        inner
      />
    </li>
  </ol>
</template>

<script lang="ts" setup>
import type { TocLink } from '@nuxt/content'
import { motion } from 'motion-v'

const wrapperRef = useTemplateRef('wrapper')

const { links, activeHeadingId, inner } = defineProps<{
  links: TocLink[]
  activeHeadingId?: string
  inner?: boolean
}>()

const marker = ref({ height: 0, top: 0 })

const updateMarker = () => {
  if (!activeHeadingId) {
    marker.value.top = marker.value.height / 2
    marker.value.height = 0
    return
  }
  const activeLink = wrapperRef.value!.querySelector(`a[href="#${activeHeadingId}"]`)

  if (!activeLink) {
    return
  }

  const { top } = activeLink.getBoundingClientRect()
  const { top: parentTop } = wrapperRef.value!.getBoundingClientRect()

  marker.value.top = top - parentTop
  marker.value.height = activeLink.clientHeight
}

watchEffect(() => {
  updateMarker()
})

onMounted(() => {
  updateMarker()
})
</script>

<style>

</style>
