<script setup lang="ts">
const root = ref<HTMLDivElement | undefined>()
</script>

<template>
  <div v-bind="$attrs" class="overflow-hidden relative" ref="root">
    <Parallaxy
      direction="opposite"
      :speed="1"
      :animation="(delta: number) => `transform: translate3d(0, ${delta * 48}px, 0);`"
    >
      <img
        v-bind="$attrs"
        class="w-full h-full object-cover origin-center transition-all duration-1000 delay-1000"
        style="scale: 1.33"
      />
    </Parallaxy>
  </div>
</template>
