<script setup lang="ts">
import { Navbar } from '#components'
import { animate, inView, stagger } from 'motion'
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
  <div>
    <NuxtLayout>
      <Navbar id="navbar" />
      <NuxtPage />
      <Footer></Footer>
    </NuxtLayout>
  </div>
</template>
