<script setup lang="ts">
const route = useRoute()
import type { Navbar } from '#components'

const { data: page } = await useAsyncData('project-' + route.path, () => {
  return queryCollection('project').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title + ' | Elite Manor',
  description: page.value?.title
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const props = defineProps<{
  navbar: InstanceType<typeof Navbar> | undefined
}>()
</script>

<template>
  <div class="w-full">
    <img
      :src="page?.heroImage || '/hero-images/home.jpg'"
      alt="Hero Image"
      class="w-full h-[80vh] object-cover"
    />
    <div id="main" class="container mx-auto py-16 px-4">
      <Image
        v-if="page?.logo"
        :src="page.logo"
        :alt="`${page.title} Logo`"
        class="logo h-36 mb-8"
        preview
      />
      <ContentRenderer class="content fade-in" v-if="page" :value="page" />
    </div>
  </div>
</template>

<style scoped>
:deep(.content) {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    @apply mb-4;
  }
  img {
    @apply w-full;
    /* @apply max-w-[64rem]; */
  }
}

:deep(.logo) {
  img {
    @apply object-contain;
  }
}
</style>
