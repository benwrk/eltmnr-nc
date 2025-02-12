<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="fade-in items-start flex flex-col px-4 py-12 lg:p-12 gap-x-16 flex-wrap xl:flex-nowrap gap-y-12 bg-highlight-emphasis rounded-xl shadow-lg"
  >
    <img
      :src="props.image"
      alt="Partner Logo"
      class="rounded-lg fade-in h-16 object-contain dark:invert"
    />
    <p class="fade-in !mb-0">
      <slot mdc-unwrap="p" />
    </p>
  </div>
</template>
