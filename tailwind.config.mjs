/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3f8',
          100: '#d5e0eb',
          200: '#b0c4d6',
          300: '#89a6bd',
          400: '#6b8cae',
          500: '#527598',
          600: '#425f7d',
          700: '#364c64',
          800: '#2e4054',
          900: '#283646',
        },
        secondary: {
          50: '#e8edf4',
          100: '#cfd8e6',
          200: '#a8b6ca',
          300: '#7f91ab',
          400: '#5f738f',
          500: '#4a5c75',
          600: '#3a4a60',
          700: '#2e3b4d',
          800: '#1f2a3a',
          900: '#141c28',
        },
        light: {
          bg: '#141c28',
          surface: '#1a2433',
          text: '#d7dee8',
          footer: '#0d131c',
        },
        dark: {
          bg: '#0b1220',
          surface: '#121a2b',
          text: '#d7dee8',
          footer: '#080e18',
        },
      },
      fontFamily: {
        sans: ['"Sora"', 'ui-sans-serif', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        panel: '0 12px 40px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
