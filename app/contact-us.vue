<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('pages').path(route.path).first()
})
</script>

<template>
  <div>
    <img
      v-if="page?.heroImage"
      :src="page.heroImage"
      alt="Hero Image"
      class="w-full h-[80vh] object-cover"
    />
    <div class="container mx-auto py-16">
      <ContentRenderer class="content" v-if="page" :value="page" />
    </div>
  </div>
</template>
