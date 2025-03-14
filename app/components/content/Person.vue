<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
  // persons: {
  //   type: Array<{
  //     image: String,
  //     name: String,
  //     description: String
  //   }
  // }
})
</script>

<template>
  <div
    class="fade-in flex items-end p-4 lg:p-12 lg:pb-0 gap-x-16 flex-wrap lg:flex-nowrap gap-y-12"
  >
    <img
      :src="props.image"
      :alt="props.name"
      class="basis-full lg:basis-1/6 w-full rounded-lg max-h-[32rem] object-contain fade-in"
    />
    <div class="basis-full lg:basis-5/6 p-4 lg:p-0 flex flex-col gap-y-4 -order-1 lg:order-1">
      <h1 class="fade-in">{{ props.name }}</h1>
      <p class="fade-in">
        <slot />
      </p>
    </div>
  </div>
</template>
