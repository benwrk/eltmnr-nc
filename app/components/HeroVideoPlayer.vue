<script setup lang="ts">
import type { ScriptYouTubePlayer } from '#components'
import { useElementSize } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    videoId: string
    loop?: boolean
    autoplay?: boolean
    clickable?: boolean
  }>(),
  {
    loop: true,
    autoplay: true,
    clickable: false
  }
)

const videoRoot = ref<HTMLDivElement | undefined>()
const video = ref<InstanceType<typeof ScriptYouTubePlayer>>()
const videoStarted = ref<boolean>(false)

const { width, height } = useElementSize(videoRoot)

function videoStateChange(event: YT.OnStateChangeEvent) {
  // Loops video.
  if (event.data === YT.PlayerState.ENDED) {
    video.value?.player?.playVideo()
  }

  // Video is started.
  if (event.data !== YT.PlayerState.UNSTARTED) {
    videoStarted.value = true
  }
}
</script>

<template>
  <div ref="videoRoot" class="relative overflow-hidden flex items-center justify-center">
    <div
      :style="{
        width: `${Math.max(width, (height / 9) * 16)}px`,
        height: `${4 * height}px`
      }"
    >
      <ScriptYouTubePlayer
        ref="video"
        :above-the-fold="true"
        :trigger="autoplay ? 'immediate' : 'mousedown'"
        :video-id="videoId"
        @state-change="videoStateChange"
        :width="Math.max(width, (height / 9) * 16)"
        :height="height * 4"
        :player-vars="{
          autohide: 1,
          autoplay: props.autoplay ? 1 : 0,
          cc_load_policy: 0,
          color: 'white',
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: props.loop ? 1 : 0,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1
        }"
      >
        <template #awaitingLoad>
          <div class="absolute w-full h-full top-0 left-0">
            <div class="w-full h-full bg-black"></div>
          </div>
        </template>
        <template #loading>
          <div class="absolute w-full h-full top-0 left-0">
            <div class="w-full h-full bg-black"></div>
          </div>
        </template>
      </ScriptYouTubePlayer>
    </div>
    <div
      class="absolute w-full h-full top-0 left-0 bg-black"
      :class="{ 'bg-transparent': videoStarted, 'pointer-events-none': clickable }"
    ></div>
  </div>
</template>
