import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/eslint',
    'nuxt-shiki',
    '@pinia/nuxt',
    'nuxt-svgo',
    'motion-v/nuxt',
  ],
  devtools: { enabled: true },
  app: {
    rootTag: 'body',
    rootAttrs: {
      id: 'app',
    },
  },
  css: ['~/assets/css/main.css', '~/assets/css/global.css'],
  mdc: {
    // components: {
    //   prose: false,
    // },
    highlight: false,
  },
  compatibilityDate: '2025-05-15',
  vite: {
    plugins: [tailwindcss()],
  },
  postcss: {
    plugins: {
      '@tailwindcss/nesting': 'postcss-nesting',
      'autoprefixer': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
      },
    },
  },
  fonts: {
    processCSSVariables: true,
    families: [
      {
        name: 'Igra Sans',
        src: '/fonts/IgraSans.woff2',
        weight: 400,
        style: 'normal',
        preload: true,
      },
      {
        name: 'Nunito',
        subsets: ['latin', 'cyrillic'],
        weights: [300, 400, 500, 700],
        display: 'swap',
        provider: 'google',
      },
    ],
  },
  svgo: {
    dts: true,
    defaultImport: 'component',
    svgo: true,
  },
})
