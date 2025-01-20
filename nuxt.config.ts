import { definePreset } from '@primevue/themes'
import Nora from '@primevue/themes/nora'

const customPreset = definePreset(Nora, {
  primitive: {
    copper: {
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
    },
    surface: {
      0: '#ffffff',
      50: '#f9f9f8',
      100: '#e3e1e0',
      200: '#cccac7',
      300: '#b6b2ae',
      400: '#9f9b95',
      500: '#89837c',
      600: '#746f69',
      700: '#605c57',
      800: '#4b4844',
      900: '#373432',
      950: '#22211f'
    }
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
    },
    formField: {
      borderRadius: '{border.radius.none}'
    },
    list: {
      option: {
        borderRadius: '{border.radius.none}'
      }
    },
    content: {
      borderRadius: '{border.radius.none}'
    },
    navigation: {
      item: {
        borderRadius: '{border.radius.none}'
      }
    },
    overlay: {
      select: {
        borderRadius: '{border.radius.none}'
      },
      popover: {
        borderRadius: '{border.radius.none}'
      },
      modal: {
        borderRadius: '{border.radius.none}'
      }
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
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Elite Manor',
      meta: [{ name: 'Elite Manor', content: 'Elite Manor' }]
    }
  },
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
