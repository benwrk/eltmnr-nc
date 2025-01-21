<script setup lang="ts">
import { NuxtImg } from '#components'
import { useElementSize } from '@vueuse/core'
import type { Menu } from 'primevue'

const router = useRouter()

defineProps({
  brandImage: {
    type: String,
    default: '/logos/brand-light.svg'
  }
})

const menu = ref<InstanceType<typeof Menu>>()
const root = ref<HTMLDivElement | undefined>()
const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    command: () => router.push('/')
  },
  {
    label: 'Options',
    items: [
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Export',
        icon: 'pi pi-upload'
      }
    ]
  }
])

const toggle = (event: MouseEvent) => {
  menu.value?.toggle(event)
}

defineExpose({
  height: useElementSize(root).height
})
</script>
<template>
  <div ref="root" class="fixed border-none w-full z-10 px-4">
    <div
      class="container mx-auto my-4 bg-opacity-65 bg-surface-50 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 flex items-center justify-between rounded-md p-2"
    >
      <div class="basis-1/4">
        <Button
          variant="text"
          type="button"
          icon="pi pi-bars"
          size="large"
          class="text-black"
          @click="toggle"
          aria-haspopup="true"
          aria-controls="overlay_menu"
          rounded
        />
      </div>
      <Menu
        class="bg-opacity-65 bg-surface-50 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20"
        ref="menu"
        id="overlay_menu"
        :model="items"
        :popup="true"
      />
      <div class="basis-2/4 flex justify-center">
        <a href="/">
          <NuxtImg class="max-h-14 py-1" :src="brandImage" />
        </a>
      </div>
      <div class="basis-1/4 flex justify-end">
        <Button as="a" variant="text" icon="pi pi-phone" size="large" class="text-black" rounded />
        <Button
          as="a"
          variant="text"
          icon="pi pi-envelope"
          size="large"
          class="text-black"
          rounded
        />
      </div>
    </div>
  </div>
</template>

<!-- <style scoped>
Toolbar {
}
</style> -->
