<script setup lang="ts">
import { type Galleria } from 'primevue'
const props = defineProps<{
  albums: {
    name: string
    images: { imageSrc: string; description: string }[]
  }[]
}>()

const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
])

const selectedAlbum = ref(props.albums[0]?.name)
const activeAlbum = computed(() =>
  props.albums
    .find((a) => a.name === selectedAlbum.value)
    ?.images.map((i) => ({
      itemImageSrc: i.imageSrc,
      alt: i.description,
      title: i.description,
      thumbnailImageSrc: i.imageSrc
    }))
)
const galleria = ref<InstanceType<typeof Galleria>>()
const activeIndex = ref(0)

onMounted(() => {
  console.log(
    props.albums
      .find((a) => a.name === selectedAlbum.value)
      ?.images.map((i) => ({
        itemImageSrc: i.imageSrc,
        alt: i.description,
        title: i.description,
        thumbnailImageSrc: i.imageSrc
      }))
  )
})

// watch(selectedAlbum, () => {
//   activeIndex.value = 0
// })
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
    <Galleria
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
    </Galleria>
    <!-- <SelectButton
      :allowEmpty="false"
      class="w-full"
      v-model="selectedAlbum"
      @change="() => (activeIndex = 0)"
      :options="props.albums.map((a) => a.name)"
    /> -->
  </div>
</template>
