import { PageContextClient } from "vike/types";

export async function onBeforeRenderClient(pageContext: PageContextClient) {
  const preferredDarkModeBySystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("selectedTheme");
  const theme = savedTheme ? savedTheme : preferredDarkModeBySystem ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  console.log('init theme', theme);
}