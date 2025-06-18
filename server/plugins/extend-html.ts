const themeHydration = `
!function() {
  const preferredDarkModeBySystem = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("selectedTheme");
  const theme = savedTheme ? savedTheme : preferredDarkModeBySystem ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  window.selectedTheme = theme;
}();
`

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head.push(
      `<script>${themeHydration}</script>`,
    )
  })
})
