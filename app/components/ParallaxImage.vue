<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';
// import Rellax from 'rellax'
// onMounted(() => {
//   const rellax = new Rellax('.rellax', {
//     // center: true,
//     vertical: true,
//     horizontal: false,
//     speed: -3,
//     wrapper: root.value,
//     relativeToWrapper: true,
//   })
// })
// import { type CSSProperties } from 'vue'
const root = ref<HTMLDivElement | undefined>()
// const scroll = reactive(useScroll(document))
// const cssProps = computed<CSSProperties>(() => {
//   return {
//     position: 'absolute',
//     transition: '.3s ease-out all',
//     transform: `translateY(${(scroll.y - (root.value?.offsetTop ?? 0)) * 0.1}px) scale(1.33)`,
//     transformOrigin: 'center center'
//   }
// })
</script>

<template>
  <!-- <div v-bind="$attrs" class="overflow-hidden relative" ref="root">
    {{ scroll.y }} {{ root?.offsetTop }}
    <img v-bind="$attrs" class="w-full h-full object-cover" :style="cssProps" />
  </div> -->
  <div v-bind="$attrs" class="overflow-hidden relative" ref="root">
    <Parallaxy direction="opposite" :speed="1" :animation="(delta: number) => `transform: translate3d(0, ${delta * 48}px, 0);`">
      <img v-bind="$attrs" class="rellax w-full h-full object-cover origin-center transition-all duration-1000" style="scale: 1.33" />
    </Parallaxy>
  </div>
  <!-- <img class="rellax scale-110" v-bind /> -->
</template>
