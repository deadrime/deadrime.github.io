<template>
  <input
    :value="value"
    class="border-gray-600 py-2 px-3.5 text-text bg-gray-50 dark:bg-gray-800 rounded-md outline-none"
    @input="emit('change', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
const value = defineModel<string>('value')
const emit = defineEmits<{
  (e: 'change', value: string): void
}>()
</script>

<style>

</style>
