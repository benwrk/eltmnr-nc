import { definePreset } from '@primevue/themes'
import Lara from '@primevue/themes/lara'
import { colors } from './colors.config'

export const customPreset = definePreset(Lara, {
  primitive: {
    copper: colors.copper
  },
  semantic: {
    primary: {
      50: '{copper.50}',
      100: '{copper.100}',
      200: '{copper.200}',
      300: '{copper.300}',
      400: '{copper.400}',
      500: '{copper.500}',
      600: '{copper.600}',
      700: '{copper.700}',
      800: '{copper.800}',
      900: '{copper.900}',
      950: '{copper.950}'
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Elite Manor',
      meta: [
        { name: 'application-name', content: 'Elite Manor' },
        { name: 'apple-mobile-web-app-title', content: 'Elite Manor' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      htmlAttrs: {
        class: 'dark-theme'
      },
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-96x96.png',
          sizes: '96x96'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicons/favicon.svg'
        },
        {
          rel: 'shortcut icon',
          href: '/favicons/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/favicons/apple-touch-icon.png',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/favicons/site.webmanifest'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      // autoSubfolderIndex: true,
      crawlLinks: true
    }
  },
  content: {
    preview: { dev: true },
    renderer: { anchorLinks: { h1: true, h2: true, h3: true, h4: true, h5: true, h6: true } }
  },
  modules: [
    '@nuxt/content',
    '@primevue/nuxt-module',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vueuse/nuxt'
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4
  },
  compatibilityDate: '2024-04-03',
  ssr: true,
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        options: {
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          },
          darkModeSelector: '.dark-theme'
        },
        preset: customPreset
      }
    }
  }
})
