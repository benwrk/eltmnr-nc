<!--
  This page lists all the pages and projects in the site.
  It is also used as a hack to let the Nitro prerenderer know about all the pages,
  and prerender them correctly.
 -->
<script setup lang="ts">
const { data: pageData } = await useAsyncData('sitemap-1', () => {
  return queryCollection('page').all()
})

const { data: projectData } = await useAsyncData('sitemap-2', () => {
  return queryCollection('project').all()
})

const data = ref([...(pageData.value ?? []), ...(projectData.value ?? [])])
</script>

<template>
  <div class="container mx-auto py-16 pt-64 px-4">
    <h1>Sitemap</h1>
    <ul>
      <li v-for="page in data" :key="page.path">
        <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
