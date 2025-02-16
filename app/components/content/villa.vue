<script setup lang="ts">
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
  <div class="flex flex-col p-8 rounded-lg bg-highlight-emphasis">
    <h3>{{ name }}</h3>
    <div class="rounded-lg overflow-hidden">
      <ScrollPanel
        class="h-20"
        :dt="{
          bar: {
            background: '{primary.200}'
          }
        }"
      >
        <div class="feature-items">
          <span><i class="pi pi-server text-2xl mb-2"></i></span>
          <!-- <span>Bedrooms</span> -->
          <span>{{ props.bedroomCount }} bedrooms</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-server text-2xl mb-2"></i></span>
          <!-- <span>Bathrooms</span> -->
          <span>{{ props.bathroomCount }} bathrooms</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-window-maximize text-2xl mb-2"></i></span>
          <span>Plot size</span>
          <span>{{ props.plotSizeSquareWa }} wa²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-warehouse text-2xl mb-2"></i></span>
          <span>Total area</span>
          <span>{{ props.totalAreaSquareMeter }} m²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-align-justify text-2xl mb-2"></i></span>
          <span>Pool size</span>
          <span>{{ props.pool.lengthMeter }} × {{ props.pool.widthMeter }} m</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-align-justify text-2xl mb-2"></i></span>
          <span>Built area</span>
          <span>{{ props.builtUpAreaSquareMeter }} m²</span>
        </div>
        <div class="feature-separator" />
        <div class="feature-items">
          <span><i class="pi pi-car text-2xl mb-2"></i></span>
          <span>{{ props.parkingCount }} Parking</span>
        </div>
        <div v-if="props.features.includes('garden')" class="feature-separator" />
        <div v-if="props.features.includes('garden')" class="feature-items">
          <span><i class="pi pi-car text-2xl mb-2"></i></span>
          <span>Garden</span>
        </div>
        <div v-if="props.features.includes('cctv')" class="feature-separator" />
        <div v-if="props.features.includes('cctv')" class="feature-items">
          <span><i class="pi pi-video text-2xl mb-2"></i></span>
          <span>CCTV</span>
        </div>
        <div v-if="props.features.includes('diningRoom')" class="feature-separator" />
        <div v-if="props.features.includes('diningRoom')" class="feature-items">
          <span><i class="pi pi-car text-2xl mb-2"></i></span>
          <span>Living Room</span>
        </div>
        <div v-if="props.features.includes('livingRoom')" class="feature-separator" />
        <div v-if="props.features.includes('livingRoom')" class="feature-items">
          <span><i class="pi pi-car text-2xl mb-2"></i></span>
          <span>Dining Room</span>
        </div>
      </ScrollPanel>
    </div>
    <div class="flex flex-col gap-4 mt-4">
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Bedrooms</span>
        <span>{{ bedroomCount }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Bathrooms</span>
        <span>{{ bathroomCount }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Plot Size</span>
        <span>{{ plotSizeSquareWa }} Sq.Wa</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Total Area</span>
        <span>{{ totalAreaSquareMeter }} Sq.M</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Built-up Area</span>
        <span>{{ builtUpAreaSquareMeter }} Sq.M</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Parking</span>
        <span>{{ parkingCount }}</span>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Features</span>
        <div class="flex gap-2">
          <span
            v-for="feature in features"
            :key="feature"
            class="text-xs text-primary bg-primary-200 rounded-full px-2"
          >
            {{ feature }}
          </span>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <span class="text-primary font-bold">Pool</span>
        <span>{{ pool.lengthMeter }}m x {{ pool.widthMeter }}m</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-scrollpanel-content) {
  /* @apply flex p-4 pr-8 gap-8 shrink-0; */
  @apply flex bg-primary-contrast text-primary uppercase text-xs text-center font-bold justify-evenly items-stretch;
}

.feature-items {
  @apply flex flex-col items-center p-5 shrink-0 justify-center bg-primary-contrast;
}

.feature-separator {
  @apply w-0.5 bg-highlight-emphasis rounded-full shrink-0;
}
</style>
