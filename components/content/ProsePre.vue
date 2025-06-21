<template>
  <div
    class="codeSnippet text-body2 border border-gray-100 dark:border-gray-700 rounded-sm overflow-hidden"
    :data-lang="language"
  >
    <div
      class="caption flex items-center gap-1 text-gray-700 dark:text-white rounded-t overflow-hidden px-4 py-2 bg-gray-100 dark:bg-[#201b31]"
    >
      <component
        :is="LanguageIcon"
        v-if="LanguageIcon"
        class="w-5"
      />
      {{ filename }}
      <button
        class="ml-auto cursor-pointer"
        @click="copy(props.code)"
      >
        <IconCopy />
      </button>
    </div>
    <CodeHightlight v-bind="props" />
  </div>
</template>

<script lang="ts" setup>
import { useClipboard } from '@vueuse/core'
import CodeHightlight from '../CodeHightlight.vue'
import IconTs from '~/assets/icons/ts.svg'
import IconReact from '~/assets/icons/react.svg'
import IconJs from '~/assets/icons/js.svg'
import IconHtml from '~/assets/icons/html.svg'
import IconCss from '~/assets/icons/css.svg'
import IconCopy from '~/assets/icons/copy.svg'

const iconByLanguage = {
  ts: IconTs,
  tsx: IconReact,
  jsx: IconReact,
  js: IconJs,
  html: IconHtml,
  css: IconCss,
}

const props = defineProps<{
  language: string
  code: string
  style?: unknown
  meta?: unknown
  filename?: string
  highlights?: number[]
}>()

const LanguageIcon = iconByLanguage[props.language as keyof typeof iconByLanguage]

const { copy } = useClipboard()
</script>

<style lang="css">
@reference "~/assets/css/main.css";

.codeHighlight {
  --color-code-bg: rgb(18 14 31);
}

.codeSnippet {
  font-weight: normal;
  position: relative;
  border-radius: 10px;
  --sb-size: 14px;
  --sb-track-color: transparent;
  --sb-thumb-color: #a6accd6f;

  &:hover {
    --sb-thumb-color: #bfc6eb6f;
  }

  .caption:empty {
    display: none;
  }

  .codeSnippetCode {
    @apply rounded-t-none;

    &::-webkit-scrollbar {
      width: var(--sb-size);
      height: var(--sb-size);
    }

    &::-webkit-scrollbar-track {
      background: var(--sb-track-color);
      border-radius: 8px;
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      transition: all .2s;
      background: var(--sb-thumb-color);
      border-radius: 10px;
      /* background-color: inherit; */
      background-color: var(--sb-thumb-color);
      border: 4px solid transparent;
      background-clip: content-box;
    }
  }
}

[data-theme="dark"] {
  .codeSnippet {
    .highlightedLine {
      --code-line-bg: rgba(36, 197, 255, 0.2);
    }
  }
}
</style>
