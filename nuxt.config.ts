import { definePreset } from '@primevue/themes'
import Lara from '@primevue/themes/lara'
import { colors } from './colors.config'

export const customPreset = definePreset(Lara, {
  primitive: {
    surface: colors.surface
  },
  semantic: {
    primary: colors.primary
    // formField: {
    //   borderRadius: '{border.radius.none}'
    // },
    // list: {
    //   option: {
    //     borderRadius: '{border.radius.none}'
    //   }
    // },
    // content: {
    //   borderRadius: '{border.radius.none}'
    // },
    // navigation: {
    //   item: {
    //     borderRadius: '{border.radius.none}'
    //   }
    // },
    // overlay: {
    //   select: {
    //     borderRadius: '{border.radius.none}'
    //   },
    //   popover: {
    //     borderRadius: '{border.radius.none}'
    //   },
    //   modal: {
    //     borderRadius: '{border.radius.none}'
    //   }
    // }
    // colorScheme: {
    //   light: {
    //     primary: {
    //       color: '{stone.950}',
    //       inverseColor: '#ffffff',
    //       hoverColor: '{stone.900}',
    //       activeColor: '{stone.800}'
    //     },
    //     highlight: {
    //       background: '{stone.950}',
    //       focusBackground: '{stone.700}',
    //       color: '#ffffff',
    //       focusColor: '#ffffff'
    //     }
    //   },
    //   dark: {
    //     primary: {
    //       color: '{stone.50}',
    //       inverseColor: '{stone.950}',
    //       hoverColor: '{stone.100}',
    //       activeColor: '{stone.200}'
    //     },
    //     highlight: {
    //       background: 'rgba(250, 250, 250, .16)',
    //       focusBackground: 'rgba(250, 250, 250, .24)',
    //       color: 'rgba(255,255,255,.87)',
    //       focusColor: 'rgba(255,255,255,.87)'
    //     }
    //   }
    // }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Elite Manor',
      meta: [{ name: 'Elite Manor', content: 'Elite Manor' }]
    }
  },
  content: { preview: { dev: true } },
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
