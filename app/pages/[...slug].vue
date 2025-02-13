<script setup lang="ts">
const route = useRoute()
console.log(route.path)

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('pages').path(route.path).first()
})

useSeoMeta({
  title: page.value?.title + ' | Elite Manor',
  description: page.value?.title
})

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
  <div class="w-full">
    <img
      v-if="page?.heroImage"
      :src="page.heroImage"
      alt="Hero Image"
      class="w-full h-[80vh] object-cover fade-in"
    />
    <div class="container mx-auto py-16 px-4">
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
}
</style>
