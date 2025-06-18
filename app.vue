<template>
  <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
  <NuxtLoadingIndicator />
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="tsx" setup>
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import localizedFormat from 'dayjs/plugin/localizedFormat'

useHead({
  title: 'Трофимов Евгений',
  meta: [
    { name: 'description', content: 'Fullstack developer' },
  ],
  bodyAttrs: {
    class: 'flex flex-col gap-4 min-h-screen',
  },
})

dayjs.extend(localizedFormat)
dayjs.locale('ru')
</script>
