<script setup lang="ts">
import { animate, inView } from 'motion'
import type Footer from './components/Footer.vue'

const footer = ref<InstanceType<typeof Footer>>()
// const navbar = ref<InstanceType<typeof Navbar>>()
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
  <!-- {{ footerHeight }} -->
  <NuxtLayout>
    <!-- {{ navbarHeight }}
    {{ footerHeight }} -->
    <!-- {{ windowHeight }} {{ footerHeight }} -->
    <Navbar ref="navbar" id="navbar" />
    <NuxtPage :style="{ minHeight: `${windowHeight - footerHeight}px` }" />
    <Footer ref="footer" />
  </NuxtLayout>
</template>

<style>
/* div {
  @apply animate-fadeindown animate-enter animate-ease-in-out animate-duration-500;
} */
</style>
