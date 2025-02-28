<script setup lang="ts">
import {
  faBath,
  faBed,
  faCarSide,
  faExpand,
  faHouse,
  faTelevision,
  faTree,
  faTrowelBricks,
  faUtensils,
  faVideo,
  faWaterLadder
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps<{
  name: string
  bedroomCount: number
  bathroomCount: number
  plotSizeSquareWa: number
  totalAreaSquareMeter: number
  pool: { widthMeter: number; lengthMeter: number }
  builtUpAreaSquareMeter: number
  parkingCount: number
  features: ('garden' | 'cctv' | 'livingRoom' | 'diningRoom')[]
  floorPlans: { label: string; imageSrc: string }[]
}>()
</script>
<template>
  <div class="flex flex-col">
    <h3>{{ name }}</h3>
    <!-- <h4>Features</h4> -->
    <div class="rounded-lg overflow-hidden">
      <ScrollPanel
        class="h-24"
        :dt="{
          bar: {
            background: '{primary.200}'
          }
        }"
      >
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faBed" size="2x" /></i>
          <!-- <span>Bedrooms</span> -->
          <span>{{ props.bedroomCount }} bedrooms</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faBath" size="2x" /></i>
          <!-- <span>Bathrooms</span> -->
          <span>{{ props.bathroomCount }} bathrooms</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faExpand" size="2x" /></i>
          <span>Plot size</span>
          <span>{{ props.plotSizeSquareWa }} wa²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faHouse" size="2x" /></i>
          <span>Total area</span>
          <span>{{ props.totalAreaSquareMeter }} m²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faWaterLadder" size="2x" /></i>
          <span>Pool size</span>
          <span>{{ props.pool.lengthMeter }} × {{ props.pool.widthMeter }} m</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faTrowelBricks" size="2x" /></i>
          <span>Built area</span>
          <span>{{ props.builtUpAreaSquareMeter }} m²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faCarSide" size="2x" /></i>
          <span>Parking</span>
          <span>{{ props.parkingCount }} Spaces</span>
        </div>
        <div v-if="props.features.includes('garden')" class="feature-separator" />
        <div v-if="props.features.includes('garden')" class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faTree" size="2x" /></i>
          <span>Garden</span>
        </div>
        <div v-if="props.features.includes('cctv')" class="feature-separator" />
        <div v-if="props.features.includes('cctv')" class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faVideo" size="2x" /></i>
          <span>CCTV</span>
        </div>
        <div v-if="props.features.includes('diningRoom')" class="feature-separator" />
        <div v-if="props.features.includes('diningRoom')" class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faTelevision" size="2x" /></i>
          <span>Living Room</span>
        </div>
        <div v-if="props.features.includes('livingRoom')" class="feature-separator" />
        <div v-if="props.features.includes('livingRoom')" class="feature-item">
          <i class="feature-icon"><FontAwesomeIcon :icon="faUtensils" size="2x" /></i>
          <span>Dining Room</span>
        </div>
      </ScrollPanel>
    </div>
    <!-- <h4 class="mt-8">Floor plans</h4> -->
    <Galleria
      :value="floorPlans.map((f) => ({ itemImageSrc: f.imageSrc, alt: f.label }))"
      :numVisible="5"
      class="w-full"
      :showThumbnails="false"
      :showIndicators="true"
      :changeItemOnIndicatorHover="true"
      indicatorsPosition="top"
    >
      <template #item="slotProps">
        <img
          class="!rounded-none max-h-[36rem] object-contain p-4 bg-highlight"
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #indicator="{ activeIndex, index }">
        <span
          class="cursor-pointer"
          :class="{ 'text-muted-color': index !== activeIndex, 'font-bold': index === activeIndex }"
          >{{ floorPlans[index]?.label }}</span
        >
      </template>
    </Galleria>
  </div>
</template>

<style scoped>
:deep(.p-galleria-indicator-list) {
  @apply bg-highlight-emphasis gap-8 uppercase text-sm text-primary text-center;
}

:deep(.p-scrollpanel-content) {
  @apply flex bg-highlight text-primary uppercase text-xs text-center font-bold justify-evenly items-stretch;
}

.feature-item {
  @apply flex flex-col items-center p-5 shrink-0 justify-center;
}

.feature-separator {
  @apply w-0.5 bg-highlight-emphasis rounded-full shrink-0;
}

.feature-icon {
  @apply mb-2;
}
</style>
