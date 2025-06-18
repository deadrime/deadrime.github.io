export default defineNuxtPlugin(() => {
  const initTheme = () => {
    if (import.meta.server) return
    const preferredDarkModeBySystem = window.matchMedia('(prefers-color-scheme: dark)').matches
    const savedTheme = localStorage.getItem('selectedTheme') as 'dark' | 'light'
    const theme: 'dark' | 'light' = savedTheme ? savedTheme : preferredDarkModeBySystem ? 'dark' : 'light'
    const store = useThemeStore()
    console.log('init theme', theme)
    store.setTheme(theme)
  }

  if (import.meta.server) return

  initTheme()
})
