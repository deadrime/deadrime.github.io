import contentCollections from '@content-collections/vite';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import tailwindcssNesting from '@tailwindcss/nesting';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import postcssNesting from 'postcss-nesting';
import vike from 'vike/plugin';
import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import svgr from 'vite-plugin-svgr';
// import webfontDownload from 'vite-plugin-webfont-dl';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    vike(),
    react(),
    tailwindcss(),
    contentCollections(),
    svgr({
      svgrOptions: {
        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        svgoConfig: {
          plugins: [
            'removeDimensions',
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                  cleanupIds: false,
                },
              },
            },
          ],
        },
      },
    }),
    tsconfigPaths(),
    cssInjectedByJsPlugin(),
    // webfontDownload([
    //   'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
    //   'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
    // ], {
    //   injectAsStyleTag: true
    // })
  ],
  build: {
    target: 'es2022',
    // cssCodeSplit: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcssNesting(postcssNesting)],
    },
  },
});
