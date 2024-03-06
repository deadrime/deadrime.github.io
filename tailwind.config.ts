import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./articles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    fontSize: {
      body2: 'var(--font-size-body2)',
      body1: 'var(--font-size-body1)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': ['var(--font-size-2xl)', '1.25em'],
    },
    extend: {
      fontFamily: {
        'base': 'var(--font-base)',
        'primary': 'var(--font-primary)',
        'code': 'var(--font-fira), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
      },
      colors: {
        'text': 'rgb(var(--color-text) / <alpha-value>)',
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'details': 'rgb(var(--color-details) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'neutral': 'rgb(var(--color-neutral) / <alpha-value>)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
        'gray-900': '#212326',
        'gray-800': '#2D3035',
        'gray-400': '#71747C',
        'gray-300': '#959393',
        'gray-200': '#C4C4C4',
        'gray-50': '#E9E9E9',
        'green': '#8AE542'
      }
    },
  },
  plugins: [],
};
export default config;
