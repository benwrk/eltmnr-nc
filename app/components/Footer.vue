<script setup lang="ts">
import { NuxtImg } from '#components'
import type { ProjectCollectionItem } from '@nuxt/content'
import { Button } from 'primevue'
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

const { data } = await useAsyncData('footer-page', () => {
  return queryCollectionNavigation('page', ['navHidden'])
})
const { data: projectData } = await useAsyncData('footer-project', () => {
  return queryCollectionNavigation('project', [
    'navHidden' //'navOrder'
  ])
})
</script>
<template>
  <div
    ref="root"
    class="bg-highlight dark:bg-surface-800 border-surface-950/20 border-t border-b-0 w-full fade-in"
  >
    <div class="container mx-auto flex flex-col items-center">
      <div
        id="footer"
        class="flex-wrap w-[102.5%] max-w-[calc(100vw-2rem)] flex items-start justify-between p-12 gap-y-12"
      >
        <div class="flex flex-col fade-in basis-full md:basis-auto">
          <a href="/">
            <NuxtImg class="max-h-12 dark:hidden" :src="props.brandImage" />
            <NuxtImg class="max-h-12 hidden dark:block" :src="props.brandImageDark" />
          </a>
          <div class="flex flex-col mt-6">
            <h5>Elite Manor Co., Ltd.</h5>
            68/124 Moo 1, Chalong Sub-district<br />
            Muang District, Phuket 83130
          </div>
        </div>
        <div class="flex flex-col fade-in basis-full md:basis-auto">
          <h5>Pages</h5>
          <ul class="mt-2 flex flex-col gap-x-2">
            <li v-for="item in data?.filter((i) => !i.navHidden)" :key="item.id">
              <NuxtLink :to="item.path" class="text-primary-emphasis-alt">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col fade-in basis-full md:basis-auto">
          <h5>Projects</h5>
          <ul class="mt-2 flex flex-col gap-x-2">
            <li
              v-for="item in projectData?.at(0)?.children?.filter((i: any) => !i.navHidden)"
              :key="item.id"
            >
              <NuxtLink :to="item.path" class="text-primary-emphasis-alt">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex fade-in basis-full md:basis-auto justify-center">
          <Button
            as="a"
            variant="text"
            icon="pi pi-phone"
            size="large"
            rounded
            class="-ml-2"
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
          <Button
            as="a"
            variant="text"
            icon="pi pi-facebook"
            size="large"
            rounded
            href="https://facebook.com/elitemanor"
          />
          <Button
            as="a"
            variant="text"
            icon="pi pi-instagram"
            size="large"
            rounded
            href="https://instagram.com/elitemanor"
          />
          <Button
            as="a"
            variant="text"
            icon="pi pi-youtube"
            size="large"
            rounded
            href="https://youtube.com/channel/UCmOJDvPX6OcEZcGDpNAJW6Q"
          />
        </div>
        <div class="basis-full fade-in text-center">
          &copy; {{ new Date().getFullYear() }} &mdash; All Rights Reserved<br />
          <div class="text-sm">
            <RouterLink class="text-primary-emphasis-alt" :to="{ path: '/privacy-policy' }"
              >Privacy Policy</RouterLink
            >
            |
            <RouterLink class="text-primary-emphasis-alt" :to="{ path: '/privacy-policy' }"
              >Terms of Service</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
