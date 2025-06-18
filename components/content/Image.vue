<template>
  <picture>
    <img
      :src="src"
      :alt="alt"
    >
    <label>{{ caption }}</label>
  </picture>
</template>

<script lang="ts" setup>
const { src, alt, caption } = defineProps<{ src: string, alt: string, caption?: string }>()
</script>
