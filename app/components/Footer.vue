<script setup lang="ts">
import { NuxtImg } from '#components'
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

const { data } = await useAsyncData('navbar', () => {
  return queryCollectionNavigation('pages')
})
</script>
<template>
  <div ref="root" class="border-none w-full">
    <div class="container mx-auto flex flex-col items-center">
      <div
        id="footer"
        class="flex-wrap w-[102.5%] max-w-[calc(100vw-2rem)] bg-surface-0 dark:bg-surface-800 shadow-[0_0_50px_-10px_rgba(0,0,0,0.2)] border border-white/20 border-b-0 flex items-start justify-between rounded-t-lg p-12"
      >
        <div class="flex flex-col fade-in">
          <a href="/">
            <NuxtImg class="max-h-12 dark:hidden" :src="props.brandImage" />
            <NuxtImg class="max-h-12 hidden dark:block" :src="props.brandImageDark" />
          </a>
          <div class="flex mt-6">
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
        </div>
        <div class="flex flex-col fade-in">
          <h5>Pages</h5>
          <ul class="mt-2 flex flex-col gap-x-2">
            <li v-for="item in data" :key="item.id">
              <NuxtLink :to="item.path" class="text-primary-emphasis-alt">
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col fade-in">
          <h5>Projects</h5>
        </div>
        <div class="flex flex-col fade-in">
          <h5>Elite Manor Co., Ltd.</h5>
          5/203 Moo 4, Cherngtalay,<br />
          Thalang, Phuket 83110
        </div>
        <div class="basis-full mt-12 fade-in">
          &copy; {{ new Date().getFullYear() }} All Rights Reserved<br />
          <div class="text-sm">
            <a class="text-primary-emphasis-alt" href="#">Privacy Policy</a> |
            <a class="text-primary-emphasis-alt" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
