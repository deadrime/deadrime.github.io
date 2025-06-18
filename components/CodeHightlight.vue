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
    // transformerRemoveLineBreak(),
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

html[data-theme='dark'] .shiki,
html[data-theme='dark'] .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}

html[data-theme='light'] .shiki,
html[data-theme='light'] .shiki span {
  color: var(--shiki-light) !important;
  background-color: var(--shiki-light-bg) !important;
  font-style: var(--shiki-light-font-style) !important;
  font-weight: var(--shiki-light-font-weight) !important;
  text-decoration: var(--shiki-light-text-decoration) !important;
}

.pre-body {
  @apply overflow-x-auto;

  & code {
    @apply bg-[var(--shiki-light-bg)] dark:bg-[var(--shiki-dark-bg)];

    width: max-content;
    display: block;
    /* min-width: max-content; */
    font-family: var(--font-fira);
  }

  & .line {
    @apply px-4 w-full inline-block;
    transition: filter .35s, opacity .35s;
    --code-line-bg: rgba(72, 62, 62, 0.2);
    &:last-of-type:empty {
      display: none;
    }
  }

  & .line.highlighted {
    background: var(--code-line-bg);
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
