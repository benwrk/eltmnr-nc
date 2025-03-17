<script setup lang="ts">
import type { NuxtError } from '#app'
import App from './app.vue'
import type Footer from './components/Footer.vue'
import type Navbar from './components/Navbar.vue'

const footer = ref<InstanceType<typeof Footer>>()
const navbar = ref<InstanceType<typeof Navbar>>()
const { height: footerHeight } = useElementSize(footer)
const { height: navbarHeight } = useElementSize(navbar)
const { height: windowHeight } = useWindowSize()

const props = defineProps({
  error: Object as () => NuxtError
})

const router = useRouter()
const handleError = () => clearError({ redirect: '/' })
const reload = () => window.location.reload()
</script>

<template>
  <div>
    <Navbar ref="navbar" id="navbar" />
    <div
      :style="{
        minHeight: `${windowHeight - footerHeight}px`
      }"
      class="flex items-center justify-start"
    >
      <div
        :style="{ marginTop: `${navbarHeight}px` }"
        class="container mx-auto flex flex-col justify-start py-16"
      >
        <h1 class="text-6xl font-bold">
          E{{ error?.statusCode }}!
          <span class="uppercase text-base">{{ error?.message }}</span>
        </h1>
        <h2 class="uppercase mt-4 text-xs">Possible actions</h2>
        <Button
          text
          @click="handleError"
          icon="pi pi-home"
          label="Go to the home page"
          class="p-1 mt-1 mr-auto"
        ></Button>
        <Button
          text
          @click="router.back()"
          icon="pi pi-arrow-left"
          label="Go back to the previous page"
          class="p-1 mt-1 mr-auto"
        ></Button>
        <Button
          text
          @click="reload"
          icon="pi pi-refresh"
          label="Try reloading this page"
          class="p-1 mt-1 mr-auto"
        ></Button>
        <pre
          class="mt-12 text-xs bg-highlight rounded-lg p-2 mr-auto text-muted-color text-wrap"
        ><h2 class="text-xs uppercase">Error details</h2>{{ error }}</pre>
      </div>
    </div>
    <Footer ref="footer" />
  </div>
</template>
