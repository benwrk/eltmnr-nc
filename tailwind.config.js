import remark from 'remark'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./app/**/*.{js,vue,ts,md}', './content/**/*.{js,vue,ts,md}']
  },
  darkMode: ["variant", "&:is(.dark-theme *):not(.light-theme *)"],
  theme: {
    fontFamily: {
      display: ['Red Hat Display', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif'],
      sans: ['IBM Plex Sans', 'sans-serif']
    }
  },
  plugins: [
    require('tailwindcss-primeui')
  ]
}
