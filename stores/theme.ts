import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

type SiteTheme = 'dark' | 'light'

export const useThemeStore = defineStore('themeStore', {
  state: () => {
    const getTheme = () => {
      if (import.meta.server) {
        return 'dark'
      }
      else {
        return localStorage.getItem('selectedTheme') || 'dark'
      }
    }

    return {
      theme: getTheme(),
    }
  },
  actions: {
    setTheme(theme: SiteTheme) {
      this.theme = theme
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('selectedTheme', theme)
    },
  },
})
