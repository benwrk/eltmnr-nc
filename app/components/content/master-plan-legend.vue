<script setup lang="ts">
const props = defineProps({
  units: {
    type: Array<{ lotNumber: string | undefined; name: string | undefined }>,
    required: true
  }
})
</script>
<template>
  <ScrollPanel class="bg-highlight w-full rounded-lg shadow-lg h-16" :dt="{
        bar: {
            background: '{primary.200}'
        }
    }">
    <!-- <div class="flex p-4 gap-4 shrink-0 bg-red-500"> -->
    <div v-for="unit in units" :key="unit.lotNumber" class="flex flex-col items-start">
      <span class="text-nowrap text-primary font-bold text-xs">
        <!-- <i class="pi pi-map-marker text-xs"></i> -->
        {{ unit.lotNumber }}
      </span>
      <span class="text-nowrap text-xs">{{ unit.name }}</span>
    </div>
    <!-- </div> -->
  </ScrollPanel>
</template>

<style scoped>
:deep(.p-scrollpanel-content) {
  @apply flex p-4 pr-8 gap-8 shrink-0;
}
</style>
