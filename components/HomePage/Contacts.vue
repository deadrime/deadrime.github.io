<template>
  <div class="flex gap-3 items-center">
    <a
      href="https://github.com/deadrime"
      aria-label="github"
      target="_blank"
      class="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70"
      rel="noreferrer"
    >
      <IconGithub class="w-8 h-8" />
    </a>
    <a
      href="https://t.me/deadrime"
      aria-label="telegram"
      target="_blank"
      class="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70"
      rel="noreferrer"
    >
      <IconTelegram class="w-8 h-8" />
    </a>
    <a
      href="mailto:deadrime@yandex.ru"
      aria-label="email"
      target="_blank"
      class="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70"
      rel="noreferrer"
    >
      <IconEmail class="w-8 h-8" />
    </a>
    <a
      href="https://career.habr.com/deadrime"
      aria-label="habr career"
      target="_blank"
      class="text-neutral hover:text-text/70 transition-colors focus-within:text-text/70"
      rel="noreferrer"
    >
      <IconHabr class="w-8 h-8" />
    </a>
  </div>
</template>

<script lang="ts" setup>
import IconGithub from '~/assets/icons/github.svg'
import IconTelegram from '~/assets/icons/telegram.svg'
import IconHabr from '~/assets/icons/habr.svg'
import IconEmail from '~/assets/icons/email.svg'
</script>

<style>

</style>
