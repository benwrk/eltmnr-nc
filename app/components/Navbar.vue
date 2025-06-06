<script setup lang="ts">
import { NuxtImg } from '#components'
import { type ContentNavigationItem } from '@nuxt/content'
import { useElementSize } from '@vueuse/core'
import { type Menu } from 'primevue'

const route = useRoute()

const { data } = await useAsyncData('navbar-page', () => {
  return queryCollectionNavigation('page', [
    'navHidden' //'navOrder'
  ])
})
const { data: projectData } = await useAsyncData('navbar-project', () => {
  return queryCollectionNavigation('project', [
    'navHidden' //'navOrder'
  ])
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

const { y: scrollY } = useScroll(window)
const menu = ref<InstanceType<typeof Menu>>()
const root = ref<HTMLDivElement | undefined>()
const atTopAt = ref(10)
const forceTop = ref(false)
const atTop = computed(() => scrollY.value <= atTopAt.value || forceTop.value)
const page = data.value
const project = projectData.value?.at(0)?.children as ContentNavigationItem[] | undefined

const items = ref([
  {
    label: 'Home',
    url: '/',
    class: {
      active: route.path === '/',
      'p-menu-item-active': true,
      heading: true
      // 'fade-in': true
    }
  },
  {
    label: 'Pages',
    class: { heading: true },
    items: [
      ...(page
        ?.filter((page) => !page.navHidden)
        // .sort((a, b) => a.navOrder - b.navOrder)
        .map((page) => ({
          label: page.title,
          url: page.path,
          class: {
            active: route.path === page.path,
            'p-menu-item-active': true,
            submenu: true
            // 'fade-in': true
          }
        })) ?? [])
    ]
  },
  {
    label: 'Projects',
    class: { heading: true },
    items: [
      ...(project
        ?.filter((page) => !page.navHidden)
        // .sort((a: any, b: any) => a.navOrder - b.navOrder)
        .map((page) => ({
          label: page.title,
          url: page.path,
          class: {
            active: route.path === page.path,
            'p-menu-item-active': true,
            submenu: true
            // 'fade-in': true
          }
        })) ?? [])
    ]
  }
])

const toggle = (event: MouseEvent) => {
  menu.value?.toggle(event)
}

const rootSize = useElementSize(root)

const computedHeight = computed(() => {
  return rootSize?.height?.value ?? 0
})

defineExpose({
  // height: computedHeight,
  // atTopAt,
  forceTop: forceTop
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
  <div class="fixed z-10 group w-full" :class="{ 'at-top': atTop, 'dark-theme': atTop }">
    <div id="menu-container" class="container mx-auto relative">
      <!-- Manually control position due to PrimeVue's menu toggle positioning bug for fixed parent element. -->
      <Menu
        class="!top-28 !left-0 bg-surface-50 group-[.at-top]:!bg-surface-800 dark:!bg-surface-800 !bg-opacity-65 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 transition-all duration-700"
        ref="menu"
        id="overlay_menu"
        :model="items"
        :popup="true"
        append-to="#menu-container"
      />
    </div>
    <div
      ref="root"
      class="border-none w-full z-10 bg-surface-50 group-[.at-top]:bg-surface-800 dark:bg-surface-800 !bg-opacity-65 shadow-[0_0_50px_-10px_rgba(0,0,0,0.4)] backdrop-blur-md border border-white/20 rounded-lg transition-all duration-700"
    >
      <!-- {{ route.path }} -->
      <div class="container mx-auto flex flex-col items-center">
        <Toolbar
          id=" navbar"
          class="w-[102.5%] max-w-[calc(100vw-2rem)] flex items-center justify-between p-2 bg-transparent border-transparent"
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
            </div>
            <div class="basis-2/4 flex justify-center">
              <a href="/">
                <NuxtImg
                  class="py-1 group-[.at-top]:h-16 h-12 transition-[height] duration-700"
                  :src="atTop ? brandImageDark : brandImage"
                  alt="Logo"
                />
                <!-- <NuxtImg class="py-1 group-[.at-top]:h-14 h-12 hidden group-[.at-top]:block transition-[height] duration-700" :src="brandImageDark" alt="Logo"/> -->
              </a>
            </div>
            <div class="basis-1/4 flex justify-end">
              <!-- <Button
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
            /> -->
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
  </div>
</template>

<style scoped>
:deep(.p-toolbar-center) {
  @apply basis-full;
}

:deep(.p-menu-item-icon) {
  @apply text-primary;
}

.at-top {
  :deep(.active) {
    .p-menu-item-label {
      @apply !text-primary-emphasis;
    }
  }
}

:deep(.active) {
  .p-menu-item-label {
    @apply !text-primary;
    @apply font-bold;
  }
}

:deep(.p-menu-item-content:hover) {
  @apply bg-highlight;
  @apply group-[.at-top]:bg-surface-800;
}

:deep(.p-menu-item-label),
:deep(.p-menu-submenu-label) {
  @apply group-[.at-top]:text-white;
}

:deep(.submenu) {
  .p-menu-item-link {
    @apply pl-8;
  }
}
</style>
