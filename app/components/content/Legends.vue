<script setup lang="ts">
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
defineProps({
  units: {
    type: Array<{ lotNumber: string; name: string; sold: boolean }>,
    required: true
  }
})
</script>
<template>
  <div>
    <h5 class="!mb-2">Legends</h5>
    <div class="rounded-lg overflow-hidden">
      <ScrollPanel
        class="h-16"
        :dt="{
          bar: {
            background: '{primary.200}'
          }
        }"
      >
        <div class="flex bg-highlight">
          <div v-for="(unit, index) in units" :key="unit.lotNumber" class="flex items-start">
            <div v-if="index !== 0" class="w-0.5 bg-primary-contrast h-full" />
            <div class="flex flex-col p-4" :class="{ 'bg-highlight-emphasis': unit.sold }">
              <span class="text-nowrap text-primary font-bold text-xs">
                <FontAwesomeIcon :icon="faHouse" size="xs" /> {{ unit.lotNumber }}
                <span class="font-normal">{{ unit.sold ? '(SOLD)' : '' }}</span>
              </span>
              <span class="text-nowrap text-sm">{{ unit.name }}</span>
            </div>
          </div>
        </div>
      </ScrollPanel>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-scrollpanel-content) {
  @apply flex shrink-0;
}
</style>
