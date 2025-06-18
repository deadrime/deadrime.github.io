<template>
  <button
    class="toggle-container"
    @click="toggle"
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
    >
      <motion.path
        fill="transparent"
        stroke-width="3"
        stroke="hsl(0, 0%, 18%)"
        stroke-linecap="round"
        :variants="{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }"
      />
      <motion.path
        fill="transparent"
        stroke-width="3"
        stroke="hsl(0, 0%, 18%)"
        stroke-linecap="round"
        d="M 2 9.423 L 20 9.423"
        :variants="{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }"
        :transition="{ duration: 0.1 }"
      />
      <motion.path
        fill="transparent"
        stroke-width="3"
        stroke="hsl(0, 0%, 18%)"
        stroke-linecap="round"
        :variants="{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }"
      />
    </svg>
  </button>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style>

</style>
