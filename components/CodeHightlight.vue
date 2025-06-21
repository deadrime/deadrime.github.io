<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="pre-body flex flex-col rounded-sm overflow-hidden"
    tabindex="0"
    v-html="html"
  />
</template>

<script lang="ts" setup>
import tsx from 'shiki/langs/tsx.mjs'
import css from 'shiki/langs/css.mjs'
import htmlLang from 'shiki/langs/html.mjs'
import auroraX from 'shiki/themes/aurora-x.mjs'
import oneLight from 'shiki/themes/one-light.mjs'
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerMetaHighlight,
} from '@shikijs/transformers'

const props = defineProps<{
  language: string
  code: string
  style?: unknown
  meta?: unknown
  filename?: string
  highlights?: number[]
}>()

const highlightsRaw = props.highlights ? `{${props.highlights.join(',')}}` : undefined

const highlighter = await getShikiHighlighter()

highlighter.loadLanguageSync(tsx)
highlighter.loadLanguageSync(css)
highlighter.loadLanguageSync(htmlLang)

const html = await highlighter.codeToHtml(props.code.trim(), {
  meta: {
    __raw: highlightsRaw,
  },
  transformers: [
    transformerNotationDiff(),
    transformerNotationHighlight(),
    transformerNotationFocus(),
    transformerMetaHighlight(),
  ],
  themes: {
    light: oneLight,
    dark: auroraX,
  },
  lang: props.language,
  cssVariablePrefix: '--shiki-',
  defaultColor: false,
})
</script>

<style lang="css">
@reference "~/assets/css/main.css";

html[data-theme='dark'] {
  & .shiki, & .shiki span {
    color: var(--shiki-dark) !important;
    font-style: var(--shiki-dark-font-style) !important;
    font-weight: var(--shiki-dark-font-weight) !important;
    text-decoration: var(--shiki-dark-text-decoration) !important;
  }

  & .shiki .line {
    background-color: var(--shiki-dark-bg) !important;
  }

  & .shiki .line.highlighted {
    background-color: #24c5ff33 !important;
  }
}

html[data-theme='light'] {
  & .shiki, & .shiki span {
    color: var(--shiki-light) !important;
    font-style: var(--shiki-light-font-style) !important;
    font-weight: var(--shiki-light-font-weight) !important;
    text-decoration: var(--shiki-light-text-decoration) !important;
    background-color: var(--shiki-light-bg) !important;
  }

  & .shiki .line {
    background-color: var(--shiki-light-bg) !important;
  }

  & .shiki .line.highlighted {
    background-color: #ddd3 !important;
  }
}

.pre-body {
  @apply overflow-x-auto;

  & .shiki {
    @apply py-3;
  }

  & code {
    @apply block font-fira min-w-max w-full bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)];
  }

  & .line {
    @apply px-4 w-full inline-block;
    transition: filter .35s, opacity .35s;

    &:last-of-type:empty {
      display: none;
    }
  }

  & .line.highlighted {
    box-shadow: inset 2px 0px 0px rgb(20, 158, 202);
  }

  &:has(.has-focused):not(:hover):not(:focus-visible) {
    & .line:not(.focused) {
      filter: blur(.095rem);
      opacity: .4;
    }
  }
}
</style>
