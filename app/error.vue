<script setup lang="ts">
import type { NuxtError } from '#app'
import App from './app.vue'

const router = useRouter()

const props = defineProps({
  error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <App>
    <template #page="{ windowHeight, footerHeight, navbarHeight }">
      <div
        :style="{
          minHeight: `${windowHeight - footerHeight}px`
        }"
        class="flex items-center justify-start"
      >
        <div
          :style="{ paddingTop: `${navbarHeight}px` }"
          class="container mx-auto flex flex-col justify-start"
        >
          <h1 class="text-6xl font-bold">
            E{{ error?.statusCode }}! <span class="uppercase text-base">{{ error?.message }}</span>
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
          <pre
            class="mt-12 text-xs bg-highlight rounded-lg p-2 mr-auto text-muted-color"
          ><h2 class="text-xs uppercase">Error details</h2>{{
            error
          }}</pre>
        </div>
      </div>
    </template>
  </App>
</template>
