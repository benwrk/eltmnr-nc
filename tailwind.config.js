import { colors } from './colors.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,vue,ts}', './content/**/*.{js,vue,ts}'],
  darkMode: ['selector', '.dark-theme'],
  theme: {
    fontFamily: {
      display: ['Red Hat Display', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif'],
      sans: ['IBM Plex Sans', 'sans-serif']
    }
    // extend: {
    // colors: {...colors}
    // }
  },
  plugins: [require('tailwindcss-primeui')]
}
