<script setup lang="ts">
import { NuxtImg } from '#components'
import { pageSchema } from '@nuxt/content'
import { useElementSize } from '@vueuse/core'
import { type Menu } from 'primevue'

const route = useRoute()

const { data } = await useAsyncData('navbar', () => {
  return queryCollectionNavigation('pages', ['navHidden', 'navOrder'])
})

const props = defineProps({
  brandImage: {
    type: String,
    default: '/logos/brand-light.svg'
  },
  brandImageDark: {
    type: String,
    default: '/logos/brand-dark.svg'
  }
})

const menu = ref<InstanceType<typeof Menu>>()
const root = ref<HTMLDivElement | undefined>()
const items = computed(() => {
  const pages = data.value
  return [
    {
      label: 'Home',
      url: '/',
      class: {
        active: route.path === '/',
        'p-menu-item-active': true,
        heading: true
      }
    },
    {
      label: 'Pages',
      class: { heading: true },
      items: [
        ...(pages
          ?.filter((page) => !page.navHidden)
          .sort((a, b) => a.navOrder - b.navOrder)
          .map((page) => ({
            label: page.title,
            url: page.path,
            class: {
              active: route.path === page.path,
              'p-menu-item-active': true,
              submenu: true
            }
          })) ?? [])
      ]
    }
  ]
})

const toggle = (event: MouseEvent) => {
  menu.value?.toggle(event)
}

const rootSize = useElementSize(root)

defineExpose({
  height: rootSize.height
})

watch(rootSize.height, () => {
  document.documentElement.style.scrollPaddingTop = rootSize.height.value + 'px'
  document.body.style.scrollPaddingTop = `${rootSize.height.value}px`
})

function toggleTheme() {
  document.documentElement.classList.toggle('dark-theme')
}
</script>
<template>
  <div ref="root" class="fixed border-none w-full z-10">
    <!-- {{ route.path }} -->
    <div id="menu-container" class="container mx-auto relative"></div>
    <div class="container mx-auto my-4 flex flex-col items-center">
      <Toolbar
        id="navbar"
        class="w-[102.5%] max-w-[calc(100vw-2rem)] bg-surface-50 dark:bg-surface-800 bg-opacity-65 dark:bg-opacity-65 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 flex items-center justify-between rounded-lg p-2"
      >
        <template #center>
          <div class="basis-1/4 flex justify-start">
            <Button
              variant="text"
              type="button"
              icon="pi pi-bars"
              size="large"
              @click="toggle"
              aria-haspopup="true"
              aria-controls="overlay_menu"
              rounded
            />
            <!-- Manually control position due to PrimeVue's menu toggle positioning bug for fixed parent element. -->
            <Menu
              class="!top-28 !left-0 bg-surface-50 dark:bg-surface-800 bg-opacity-65 dark:bg-opacity-65 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20"
              ref="menu"
              id="overlay_menu"
              :model="items"
              :popup="true"
              append-to="#menu-container"
            />
          </div>
          <div class="basis-2/4 flex justify-center">
            <a href="/">
              <NuxtImg class="max-h-14 py-1 dark:hidden" :src="brandImage" />
              <NuxtImg class="max-h-14 py-1 hidden dark:block" :src="brandImageDark" />
            </a>
          </div>
          <div class="basis-1/4 flex justify-end">
            <Button
              as="a"
              @click="toggleTheme"
              class="dark:hidden"
              variant="text"
              icon="pi pi-moon"
              size="large"
              rounded
            />
            <Button
              as="a"
              @click="toggleTheme"
              class="hidden dark:flex"
              variant="text"
              icon="pi pi-sun"
              size="large"
              rounded
            />
            <Button
              as="a"
              variant="text"
              icon="pi pi-phone"
              size="large"
              rounded
              href="tel:+66991614562"
            />
            <Button
              as="a"
              variant="text"
              icon="pi pi-envelope"
              size="large"
              rounded
              href="mailto:sales@eltmnr.com"
            />
          </div>
        </template>
      </Toolbar>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-toolbar-center) {
  @apply basis-full;
}

:deep(.p-menu-item-icon) {
  @apply text-primary;
}

:deep(.active) {
  .p-menu-item-label {
    @apply text-primary;
    @apply font-bold;
  }

  /* .p-menu-item-background {
    @apply bg-surface-800;
    } */
}

:deep(.submenu) {
  .p-menu-item-link {
    @apply pl-8;
  }
}
</style>
