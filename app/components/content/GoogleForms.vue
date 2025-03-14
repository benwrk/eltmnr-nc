<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  height: {
    type: Number,
    required: true
  }
})
</script>
<template>
  <iframe
    class="rounded-lg mx-auto w-[48rem] min-w-16"
    :src="props.src"
    :height="props.height"
    frameborder="0"
    style="filter: sepia(0.1)"
    >Loading…</iframe
  >
</template>
