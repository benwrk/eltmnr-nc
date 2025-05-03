<script setup lang="ts">
import { animate, inView } from 'motion'
import type Footer from './components/Footer.vue'
import type Navbar from './components/Navbar.vue'

const footer = ref<InstanceType<typeof Footer> | undefined>()
const navbar = ref<InstanceType<typeof Navbar> | undefined>()
const { height: footerHeight } = useElementSize(footer)
// const { height: navbarHeight } = useElementSize(navbar)
const { height: windowHeight } = useWindowSize()

onMounted(() => {
  const elements = [...document.getElementsByClassName('fade-in')]
  elements.forEach((element) => {
    ;(element as HTMLElement).style.opacity = '0'
    inView(element, () => {
      animate(element, { opacity: [0, 1], y: [100, 0] }, { duration: 0.9, delay: 0.5 })
    })
  })
})
</script>

<template>
  <NuxtLayout>
    <Navbar ref="navbar" id="navbar" />
    <slot name="page">
      <NuxtPage
        :style="{ minHeight: `${windowHeight - footerHeight}px` }"
        :navbar="navbar"
        data-allow-mismatch
      />
    </slot>
    <Footer ref="footer" />
  </NuxtLayout>
</template>

<style>
/* div {
  @apply animate-fadeindown animate-enter animate-ease-in-out animate-duration-500;
} */
/* :deep(.p-button:not(:disabled)) {
  @apply hover:scale-125 transition-all ease-in duration-300;
} */
</style>
