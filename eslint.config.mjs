// @ts-check
import stylistic from '@stylistic/eslint-plugin'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/indent': ['error', 2],
      'vue/html-indent': ['error', 2],
      'vue/no-multiple-template-root': 'off',
    },
  },
)
