import { definePreset } from '@primevue/themes'
import Nora from '@primevue/themes/nora'

const customPreset = definePreset(Nora, {
  semantic: {
    primary: {
      // 50: '{red.50}',
      // 100: '{red.100}',
      // 200: '{red.200}',
      // 300: '{red.300}',
      // 400: '{red.400}',
      // 500: '{red.500}',
      // 600: '{red.600}',
      // 700: '{red.700}',
      // 800: '{red.800}',
      // 900: '{red.900}',
      // 950: '{red.950}'
      50: '#f8f2ef',
      100: '#e9d7d0',
      200: '#dabcb0',
      300: '#cba290',
      400: '#bc8771',
      500: '#ae6d51',
      600: '#8e5942',
      700: '#6f4534',
      800: '#4f3125',
      900: '#2f1e16',
      950: '#100a07'
    }
    //   colorScheme: {
    //     light: {
    //       primary: {
    //         color: '{stone.950}',
    //         inverseColor: '#ffffff',
    //         hoverColor: '{stone.900}',
    //         activeColor: '{stone.800}'
    //       },
    //       highlight: {
    //         background: '{stone.950}',
    //         focusBackground: '{stone.700}',
    //         color: '#ffffff',
    //         focusColor: '#ffffff'
    //       }
    //     },
    //     dark: {
    //       primary: {
    //         color: '{stone.50}',
    //         inverseColor: '{stone.950}',
    //         hoverColor: '{stone.100}',
    //         activeColor: '{stone.200}'
    //       },
    //       highlight: {
    //         background: 'rgba(250, 250, 250, .16)',
    //         focusBackground: 'rgba(250, 250, 250, .24)',
    //         color: 'rgba(255,255,255,.87)',
    //         focusColor: 'rgba(255,255,255,.87)'
    //       }
    //     }
    //   }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@primevue/nuxt-module'],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-04-03',
  ssr: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  primevue: {
    options: {
      ripple: true,
      theme: {
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          },
          darkModeSelector: '.dark'
        },
        preset: customPreset
      }
    }
  }
})
