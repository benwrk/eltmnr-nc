import { AnimateOnScroll } from 'primevue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('animateonscroll', AnimateOnScroll)
})
