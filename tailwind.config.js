import { colors } from './colors.config'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,vue,ts}', './content/**/*.{js,vue,ts}'],
  darkMode: ['selector', '.dark-theme'],
  theme: {
    // extend: {
    // colors: {...colors}
    // }
  },
  plugins: [require('tailwindcss-primeui')]
}
