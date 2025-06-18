<template>
  <component
    :is="is"
    class="rounded-3xl text-secondary inline-flex items-center text-body2 transition-colors focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:rounded-3xl"
    :class="{
      'px-3 py-[3px]': size === 'small',
      'px-3 py-[6px]': size === 'normal',
      'pl-[5px]!': !!icon,
      'bg-details/50': variant === 'filled',
      'border-2 border-details bg-transparent hover:border-transparent hover:bg-details hover:text-text focus-visible:bg-details focus-visible:border-transparent focus-visible:text-text': variant === 'outlined',
    }"
  >
    <component
      :is="icon"
      v-if="icon"
      class="w-[22px] h-[22px] mr-1.5"
    />
    <slot />
  </component>
</template>

<script lang="ts" setup>
import type { Component, SVGAttributes } from 'vue'

const { size = 'small', variant, is = 'div', icon } = defineProps<{
  size?: 'small' | 'normal'
  variant: 'filled' | 'outlined'
  is?: string | Component
  icon?: Component<SVGAttributes>
}>()
</script>

<style>

</style>
