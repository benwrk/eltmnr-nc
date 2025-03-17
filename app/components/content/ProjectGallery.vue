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

// const responsiveOptions = ref([
//   {
//     breakpoint: '1300px',
//     numVisible: 4
//   },
//   {
//     breakpoint: '575px',
//     numVisible: 1
//   }
// ])

const selectedAlbumName = ref(props.albums[0]?.name)
const selectedAlbum = computed(() => props.albums.find((a) => a.name === selectedAlbumName.value))
const dataView = ref<InstanceType<typeof DataView>>()
// const activeAlbum = computed(() =>
//   props.albums
//     .find((a) => a.name === selectedAlbum.value)
//     ?.images.map((i) => ({
//       itemImageSrc: i.imageSrc,
//       alt: i.description,
//       title: i.description,
//       thumbnailImageSrc: i.imageSrc
//     }))
// )
// const galleria = ref<InstanceType<typeof Galleria>>()
// const activeIndex = ref(0)

// onMounted(() => {
//   console.log(
//     props.albums
//       .find((a) => a.name === selectedAlbum.value)
//       ?.images.map((i) => ({
//         itemImageSrc: i.imageSrc,
//         alt: i.description,
//         title: i.description,
//         thumbnailImageSrc: i.imageSrc
//       }))
//   )
// })

// watch(selectedAlbum, () => {
//   activeIndex.value = 0
// })
// function resetDataView() {
//   dataView.value?.$slots.
// }
</script>

<template>
  <!-- <Galleria
      :value="
        props.albums
          .find((a) => a.name === selectedAlbum)
          ?.images.map((i) => ({
            itemImageSrc: i.imageSrc,
            alt: i.description,
            title: i.description,
            thumbnailImageSrc: i.imageSrc
          }))
      "
      :numVisible="5"
      :circular="true"
      :showItemNavigators="true"
      :showItemNavigatorsOnHover="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria> -->
  <!-- <Galleria
    :value="
      props.albums
        .find((a) => a.name === selectedAlbum)
        ?.images.map((i) => ({
          itemImageSrc: i.imageSrc,
          alt: i.description,
          title: i.description,
          thumbnailImageSrc: i.imageSrc
        }))
    "
    :circular="true"
    :responsiveOptions="responsiveOptions"
    :numVisible="5"
    class="w-full"
    :showThumbnails="true"
    :changeItemOnIndicatorHover="true"
    indicatorsPosition="bottom"
    :showItemNavigatorsOnHover="true"
    :showItemNavigators="true"
  >
    <template #item="slotProps">
      <img
        class="!rounded-none max-h-[36rem] object-contain p-4"
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>
    <template #thumbnail="slotProps">
      <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" />
    </template>
  </Galleria> -->
  <!-- <template #indicator="{ activeIndex, index }">
    <span
      class="cursor-pointer"
      :class="{ 'text-muted-color': index !== activeIndex, 'font-bold': index === activeIndex }"
      >{{ floorPlans[index]?.label }}</span
    >
  </template> -->
  <div class="flex flex-col">
    <!-- <Galleria
      ref="galleria"
      :value="activeAlbum"
      :active-index="activeIndex"
      :numVisible="5"
      :circular="false"
      :showItemNavigators="true"
      :showThumbnails="false"
      :showIndicators="true"
      :changeItemOnIndicatorHover="true"
      :autoPlay="true"
      indicatorsPosition="bottom"
    >
      <template #item="slotProps">
        <img
          loading="lazy"
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="max-h-[36rem] max-w-full m-4 object-contain rounded-none"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          loading="lazy"
          class="rounded-none max-h-[36rem] object-cover"
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
        />
      </template>
    </Galleria> -->
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
      <!--
      <template #list="slotProps">
        <div class="flex flex-col">
          <div v-for="(item, index) in slotProps.items" :key="index">
            <div
              class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
              :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }"
            >
              <div class="md:w-40 relative">
                <img
                  class="block xl:block mx-auto rounded w-full"
                  :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                  :alt="item.name"
                />
                <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px">
                  <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag>
                </div>
              </div>
              <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                      item.category
                    }}</span>
                    <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                  </div>
                  <div class="bg-surface-100 p-1" style="border-radius: 30px">
                    <div
                      class="bg-surface-0 flex items-center gap-2 justify-center py-1 px-2"
                      style="
                        border-radius: 30px;
                        box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04),
                          0px 1px 2px 0px rgba(0, 0, 0, 0.06);
                      "
                    >
                      <span class="text-surface-900 font-medium text-sm">{{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col md:items-end gap-8">
                  <span class="text-xl font-semibold">${{ item.price }}</span>
                  <div class="flex flex-row-reverse md:flex-row gap-2">
                    <Button icon="pi pi-heart" outlined></Button>
                    <Button
                      icon="pi pi-shopping-cart"
                      label="Buy Now"
                      :disabled="item.inventoryStatus === 'OUTOFSTOCK'"
                      class="flex-auto md:flex-initial whitespace-nowrap"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template> -->

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
                <!-- <div class="absolute bg-black/70 rounded-border" style="left: 4px; top: 4px"> -->
                <!-- <Tag :value="item.inventoryStatus" :severity="getSeverity(item)"></Tag> -->
                <!-- </div> -->
              </div>
              <!-- <div class="pt-6">
                <div class="flex flex-row justify-between items-start gap-2">
                  <div>
                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                      item.category
                    }}</span>
                    <div class="text-lg font-medium mt-1">{{ item.name }}</div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </template>
    </DataView>
    <!-- <SelectButton
      :allowEmpty="false"
      class="w-full"
      v-model="selectedAlbum"
      @change="() => (activeIndex = 0)"
      :options="props.albums.map((a) => a.name)"
    /> -->
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
