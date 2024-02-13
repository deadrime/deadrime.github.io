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
        'primary': 'var(--font-primary)',
        'code': 'var(--font-fira), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
      },
      colors: {
        'text': 'rgb(var(--color-text) / <alpha-value>)',
        'text-accent': 'rgb(var(--color-text-accent) / <alpha-value>)',
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-light': 'var(--color-primary-light)',
        'border': 'rgb(var(--color-border) / <alpha-value>)',
        'gray-900': '#212326',
        'gray-800': '#2D3035',
        'gray-400': '#71747C',
        'gray-300': '#959393',
        'gray-200': '#C4C4C4',
        'gray-50': '#E9E9E9',
        'light-gray': '#F5F5F5',
        'blue-primary': '#00F3FF',
        'night': '#2C2636',
        'lilac': '#615A6C',
        'beige': '#C2B5A9',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
