import remark from 'remark'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./app/**/*.{js,vue,ts,md}', './content/**/*.{js,vue,ts,md}']
    // transform: {
    //   md: (content) => {
    //     return remark().process(content)
    //   }
    // }
  },
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
  plugins: [
    require('tailwindcss-primeui')
    // require('@tailwindcss/typography')
    // require('@oviirup/tailwindcss-animate'),
    // require('tailwindcss-intersect')
  ]
}
