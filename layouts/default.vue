<template>
  <header
    class="w-full max-w-[calc(1180px+2rem)] mx-auto px-4 flex items-center h-20"
  >
    <Logo />
    <nav class="mx-auto gap-8 hidden sm:flex text-body2 font-semibold [&>a]:focus-visible:underline underline-offset-6 [&>a]:focus-visible:outline-8 [&>a]:focus-visible:ring-0 [&>a]:focus-visible:rounded-none">
      <NuxtLink
        :to="{
          path: '/',
          hash: '#technologies',
          state: {
            section: 'technologies',
          },
        }"
        class="text-secondary"
        :class="{
          ['text-primary!']: route.hash === '#technologies',
        }"
      >
        С чем работал
      </NuxtLink>
      <NuxtLink
        :to="{
          path: '/',
          hash: '#my-experience',
        }"
        class="text-secondary "
        :class="{
          ['text-primary!']: route.hash === '#my-experience',
        }"
      >
        Опыт работы
      </NuxtLink>
      <NuxtLink
        href="/blog"
        class="text-secondary [&.router-link-exact-active]:text-primary"
      >
        Блог
      </NuxtLink>
      <NuxtLink
        href="/snippets"
        class="text-secondary [&.router-link-exact-active]:text-primary"
      >
        Сниппеты
      </NuxtLink>
    </nav>
    <ThemeSwitcher class="ml-auto sm:ml-4" />
  </header>
  <main
    class="w-full max-w-[calc(1180px+2rem)] mx-auto p-4"
  >
    <slot />
  </main>
  <footer
    class="w-full max-w-[calc(1180px+2rem)] mx-auto p-4 pt-8 mt-auto flex justify-between sm:items-center flex-col sm:flex-row gap-3"
  >
    <FooterLogo />
    <span class="text-body2 text-secondary">Made with ❤️ by me. Designed by <a
      href="https://arina.pw/"
      target="_blank"
      rel="noreferrer"
    >@rina</a>.</span>
    <span class="text-neutral text-body2">© Трофимов Евгений, 2024</span>
  </footer>
</template>

<script lang="tsx" setup>
import { NuxtLink } from '#components'
import ThemeSwitcher from '~/components/ThemeSwitcher.vue'

const Logo = () => (
  <NuxtLink href="/" class="font-fira text-md">
    {'<'}
    Zhenya
    {'>'}
  </NuxtLink>
)

const FooterLogo = () => (
  <NuxtLink href="/" class="font-fira text-md">
    {'</'}
    Zhenya
    {'>'}
  </NuxtLink>
)

const route = useRoute()
</script>

<style>

</style>
