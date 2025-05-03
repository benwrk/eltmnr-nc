<script setup lang="ts">
import { DataView } from 'primevue'
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
    <ClientOnly>
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
          <!-- <Transition> -->
          <div class="grid grid-cols-12 gap-8 p-4">
            <TransitionGroup
              name="list"
              tag="div"
              v-for="(item, index) in slotProps.items as Image[]"
              class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-4"
            >
              <Transition :key="index" :name="index.toString()" mode="out-in">
                <div
                  :key="item.imageSrc"
                  class="bg-surface-0 dark:bg-surface-900 flex flex-col w-full h-full"
                >
                  <div class="flex justify-center">
                    <Image
                      class="w-full aspect-square"
                      :src="item.imageSrc"
                      :alt="item.description"
                      preview
                    />
                  </div>
                </div>
              </Transition>
            </TransitionGroup>
          </div>
          <!-- </Transition> -->
        </template>
        <template #empty
          ><div class="flex justify-center items-center p-4">No images</div></template
        >
      </DataView>
    </ClientOnly>
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

/* .list-move, */
/* apply transition to moving elements */
.t-leave-active,
.t-enter-active {
  transition: all 0.5s ease-in-out;
}

.t-enter-from,
.t-leave-to {
  opacity: 0;
  /* transform: translateX(30px); */
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
/* .list-enter-active, */
/* .t-enter-active,
.t-leave-active {
  position: absolute;
} */
</style>
