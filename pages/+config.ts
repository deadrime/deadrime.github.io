import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

// const themeHydration = `
// !function() {
//   const preferredDarkModeBySystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
//   const savedTheme = localStorage.getItem("selectedTheme");
//   const theme = savedTheme ? savedTheme : preferredDarkModeBySystem ? 'dark' : 'light';
//   document.documentElement.setAttribute('data-theme', theme);
// }();
// `;

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Трофимов Евгений",
  description: "Fullstack developer",

  extends: vikeReact,
  prerender: true,
  bodyAttributes: {
    class: 'min-h-screen flex flex-col gap-4'
  },
  // bodyHtmlBegin: `<script>${themeHydration}</script>`,
  htmlAttributes: {
    lang: 'ru'
  }
} satisfies Config;


