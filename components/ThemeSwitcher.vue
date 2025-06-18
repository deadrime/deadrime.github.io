<template>
  <motion.button
    class="w-[32px] h-[32px] overflow-hidden cursor-pointer"
    @hover-start="isHovered = true"
    @hover-end="isHovered = false"
    @press-start="isPressed = true"
    @press="isPressed = false"
    @press-cancel="isPressed = false"
    @click="toggleTheme"
  >
    <motion.div
      v-for="i in sunParticleCount"
      :key="i"
      :animate="{ ...getSunPartStyle(i) }"
      :transition="{
        duration: 0.35,
        ease: 'easeInOut',
      }"
      class="absolute bg-black rounded-full"
    />
    <motion.div
      class="bg-black dark:bg-red rounded-full absolute"
      :style="{ x: sunX, y: sunY, width: sunSizePx, height: sunSizePx }"
      :animate="{ scale: isPressed ? 0.75 : isHovered ? 1.1 : 1, background: themeStore.theme ==='dark' ? '#fff' : 'var(--color-black)' }"
      :transition="{
        duration: 0.5,
      }"
    />
    <AnimatePresence>
      <motion.div
        v-if="themeStore.theme === 'dark'"
        class="absolute bg-white rounded-full"
        :class="{
          ['bg-background']: themeStore.theme ==='dark',
        }"
        :style="{ width: sunSizePx, height: sunSizePx, y: sunY, background: themeStore.theme ==='dark' ? 'var(--color-background)' : '--color-background' }"
        :initial="{ x: 50, y: -5 }"
        :animate="{ x: sunX / 2 + sunX, y: sunY - 2 }"
        :exit="{ x: sunX, scale: [1, 0], y: sunY, background: 'var(--color-black)' }"
        :transition="{
          duration: 0.2,
          ease: 'linear',
        }"
      />
    </AnimatePresence>
  </motion.button>
</template>

<script lang="ts" setup>
import { motion, AnimatePresence, type Variant } from 'motion-v'

const isHovered = ref(false)
const isPressed = ref(false)

const themeStore = useThemeStore()

const toggleTheme = () => {
  themeStore.setTheme(themeStore.theme === 'dark' ? 'light' : 'dark')
}

const sunParticleCount = 8
const sunR = 12.5
const sunSizePx = `${sunR}px`

const Cx = 32 / 2, Cy = 0 // Координаты большого круга
const r = 2.5 // Радиус маленьких кругов
const sunX = Cx - sunR / 2 // Центр большого круга
const sunY = Cy - sunR / 2 // Центр большого круга

const calculateSunPartXy = (i: number, distance = 20) => {
  const angle = (2 * Math.PI * i) / sunParticleCount
  const x = Cx + (distance + r) * Math.cos(angle) - r / 2
  const y = Cy + (distance + r) * Math.sin(angle) - r / 2

  return {
    x,
    y,
  }
}

const getSunPartStyle = (i: number): Variant => {
  const width = r, height = r

  if (themeStore.theme === 'dark') {
    return {
      width,
      height,
      scale: 1.15,
      opacity: [1, 0],
      ...calculateSunPartXy(i, 0),
    }
  }

  if (isPressed.value) {
    return {
      ...calculateSunPartXy(i, 4),
      width,
      height,
      scale: 0.75,
    }
  }

  if (isHovered.value) {
    return {
      width,
      height,
      scale: 1,
      ...calculateSunPartXy(i, 7.5),
    }
  }

  return {
    width,
    height,
    ...calculateSunPartXy(i, 8),
  }
}
</script>

<style>

</style>
