<script setup lang="ts">
import { DataView, type Galleria } from 'primevue'
type Image = {
  imageSrc: string
  description: string
}
type Album = {
  name: string
  images: Image[]
}
const props = defineProps<{
  albums: Album[]
}>()

const selectedAlbumName = ref(props.albums[0]?.name)
const selectedAlbum = computed(() => props.albums.find((a) => a.name === selectedAlbumName.value))
const dataView = ref<InstanceType<typeof DataView>>()
</script>

<template>
  <div class="flex flex-col">
    <DataView
      ref="dataView"
      data-key="imageSrc"
      :value="selectedAlbum?.images"
      layout="grid"
      paginator
      paginatorPosition="bottom"
      :rows="6"
      class="rounded-none"
      paginatorTemplate="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
      currentPageReportTemplate="{first}-{last} of {totalRecords}"
    >
      <template #footer>
        <div class="flex justify-center">
          <SelectButton
            v-model="selectedAlbumName"
            :options="props.albums.map((a) => a.name)"
            :allowEmpty="false"
          >
            <template #option="{ option }">
              <i class="pi pi-images"></i> <span class="uppercase">{{ option }}</span>
            </template>
          </SelectButton>
        </div>
      </template>
      <template #grid="slotProps">
        <div class="grid grid-cols-12 gap-8 p-4">
          <div
            v-for="(item, index) in slotProps.items as Image[]"
            :key="index"
            class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4"
          >
            <div class="bg-surface-0 dark:bg-surface-900 flex flex-col">
              <div class="flex justify-center">
                <Image
                  class="w-full aspect-square"
                  :src="item.imageSrc"
                  :alt="item.description"
                  preview
                />
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<style scoped>
:deep(.p-dataview) {
  .p-dataview-header,
  .p-dataview-footer,
  .p-paginator,
  .p-paginator-current {
    @apply bg-highlight-emphasis;
    @apply !rounded-none border-none;
  }
  .p-dataview-footer {
    @apply pt-0;
  }
}

:deep(.p-selectbutton) {
  .p-togglebutton {
    @apply bg-transparent border-none text-base p-0 mx-2;
  }
}
</style>
