<!--
 YouTube player note:
  - Audio must be muted, otherwise autoplay will not work.
-->
<script setup lang="ts">
import { Navbar, ScriptYouTubePlayer } from '#components'
import { data } from 'autoprefixer'
import { Button } from 'primevue'

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const navbar = ref<InstanceType<typeof Navbar>>()

const videoId = page.value?.meta.youtubeVideoId as string

const button = ref<InstanceType<typeof Button>>()

const video = ref<InstanceType<typeof ScriptYouTubePlayer>>()

onMounted(() => {
  console.log(page.value)
})
</script>

<template>
  <div ref="root" class="flex">
    <Navbar ref="navbar" />
    <div class="flex flex-col w-full">
      <!-- {{ navbar?.height }} -->

      <HeroVideoPlayer :videoId="videoId" />
      <div>
        <Button ref="button" label="Test"></Button>
      </div>
    </div>
  </div>
</template>
