<template>
  <div
    ref="wrapper"
    class="w-full rounded-md overflow-hidden mt-3"
  >
    <div ref="iframe" />
  </div>
</template>

<script lang="ts" setup>
import sdk, { type EmbedOptions, type VM } from '@stackblitz/sdk'

const iframeRef = useTemplateRef('iframe')
const wrapperRef = useTemplateRef('wrapper')

const { theme } = inject<{
  theme: globalThis.Ref<'dark' | 'light', 'dark' | 'light'>
  setTheme: (newTheme: 'dark' | 'light') => void
  toggleTheme: () => void
}>('theme')!

const {
  projectId,
  forceEmbedLayout = true,
  view = 'default',
  height = 400,
  width = '100%',
  ...restProps
} = defineProps<{ projectId: string } & EmbedOptions>()

const vm = ref<VM | null>(null)

const cleanUp = () => {
  if (!iframeRef.value || !wrapperRef.value) {
    return
  }
  const frames = wrapperRef.value.querySelectorAll('iframe')

  frames.forEach(i => i.remove())
}

onMounted(async () => {
  if (!iframeRef.value || !wrapperRef.value) {
    return
  }
  cleanUp()
  vm.value = await sdk.embedProjectId(
    iframeRef.value,
    projectId,
    {
      ...restProps,
      forceEmbedLayout,
      view,
      height,
      width,
      theme: theme.value,
    },
  )
})

onUnmounted(() => {
  cleanUp()
})

watchEffect(() => {
  if (!vm.value) {
    return
  }
  vm.value?.editor.setTheme(theme.value)
})
</script>

<style>

</style>
