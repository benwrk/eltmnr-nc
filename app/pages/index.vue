<script setup lang="ts">
import { Navbar } from '#components'
import { animate, inView, stagger } from 'motion'
import HeroImage from '/home/hero.jpg'
import Award1 from '/home/award-1.svg'
import Award2 from '/home/award-2.svg'
import { Image } from 'primevue'
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const navbar = ref<InstanceType<typeof Navbar>>()

const videoId = page.value?.meta.youtubeVideoId as string

const windowScroll = useWindowScroll()
const translateHeroOriginDiv = ref<HTMLDivElement>()
const translateHeroOriginSize = useElementSize(translateHeroOriginDiv)
const translateHeroTargetDiv = ref<HTMLDivElement>()
const translateHeroTargetSize = useElementSize(translateHeroTargetDiv)

const translateHeroValues = computed(() => ({
  size: {
    w:
      translateHeroOriginSize.width.value -
      translateHeroStage.value *
        (translateHeroOriginSize.width.value - translateHeroTargetSize.width.value),
    h:
      translateHeroOriginSize.height.value -
      translateHeroStage.value *
        (translateHeroOriginSize.height.value - translateHeroTargetSize.height.value)
  },
  translate: {
    x:
      translateHeroStage.value *
      ((translateHeroTargetDiv.value?.offsetLeft ?? 0) -
        (translateHeroOriginDiv.value?.offsetLeft ?? 0)),
    y:
      translateHeroStage.value *
      ((translateHeroTargetDiv.value?.offsetTop ?? 0) -
        (translateHeroOriginDiv.value?.offsetTop ?? 0))
  }
}))

const translateHeroStage = computed(() =>
  Math.min(
    1,
    windowScroll.y.value /
      (translateHeroOriginSize.height.value + (translateHeroOriginDiv.value?.offsetTop ?? 0))
  )
)

const previousActiveScrollDirection = ref<'top' | 'bottom' | undefined>(undefined)

watch(windowScroll.isScrolling, function stickyScroll() {
  if (windowScroll.isScrolling.value === true) {
    previousActiveScrollDirection.value = windowScroll.directions.top
      ? 'top'
      : windowScroll.directions.bottom
      ? 'bottom'
      : undefined
    return
  }

  if (!previousActiveScrollDirection) {
    return
  }

  const top = translateHeroOriginDiv.value?.offsetTop ?? 0
  const bottom = top + translateHeroOriginSize.height.value
  const scrollTop = windowScroll.y.value
  console.log({ top, bottom, scrollTop, direction: previousActiveScrollDirection.value })

  if (scrollTop <= top || scrollTop >= bottom) {
    return
  }

  const scrollTarget =
    previousActiveScrollDirection.value === 'top'
      ? top
      : previousActiveScrollDirection.value === 'bottom'
      ? bottom
      : undefined

  if (scrollTarget === undefined) {
    return
  }

  const scrollToOptions: ScrollToOptions = {
    top: scrollTarget,
    behavior: 'smooth'
  }

  scrollTo(scrollToOptions)
})

onMounted(() => {
  const elements = [...document.getElementsByClassName('fade-in')]

  elements.forEach((element) => {
    ;(element as HTMLElement).style.opacity = '0'
    inView(element, () => {
      animate(element, { opacity: [0, 1, 1, 1] }, { delay: stagger(1, { startDelay: 0.2 }) })
    })
  })
})
</script>

<template>
  <div ref="root">
    <Navbar ref="navbar" />
    <div class="flex flex-col w-full">
      <!-- {{ navbar?.height }} -->
      <div ref="translateHeroOriginDiv" class="relative w-full h-screen">
        <HeroVideoPlayer
          class="shadow-2xl"
          :class="{ 'rounded-lg': translateHeroStage === 1 }"
          :style="{
            transform: `translate(${translateHeroValues.translate.x}px, ${translateHeroValues.translate.y}px)`,
            width: `${translateHeroValues.size.w}px`,
            height: `${translateHeroValues.size.h}px`
          }"
          :videoId="videoId"
        />
      </div>
      <div class="flex flex-col w-full">
        <section
          :style="{
            paddingTop: `${navbar?.height}px`
          }"
          class="flex flex-col gap-y-24 my-32"
        >
          <div class="flex container mx-auto items-center">
            <div class="w-1/2 pr-12">
              <header class="text-right fade-in">
                <slot name="header">
                  <h1 class="text-9xl">
                    Elite<br />
                    Manor
                  </h1>
                </slot>
              </header>
            </div>
            <div ref="translateHeroTargetDiv" class="w-1/2 max-h-80 aspect-video ms-auto"></div>
          </div>
          <div class="flex items-center">
            <Image
              :src="HeroImage"
              alt="Hero Image"
              class="w-3/5 max-h-80 rounded-lg rounded-l-none fade-in shadow-2xl"
            />
            <div class="w-2/5 pl-12">
              <header class="text-left">
                <slot name="subheader">
                  <h1 class="text-5xl text-muted-color-emphasis font-normal fade-in">
                    Innovate Living
                  </h1>
                  <h1 class="text-5xl text-muted-color font-normal fade-in">Classic Luxury</h1>
                </slot>
              </header>
            </div>
          </div>
          <div class="flex flex-col items-center container mx-auto max-w-[48rem] text-center">
            <h1 class="text-primary text-2xl">
              To redefine innovative living through luxury, comfort, and pristine quality residences
            </h1>
            <p class="mt-6">
              Elite Manor is a real estate development firm that tailors to a global array of
              clients who seek the highest luxury in upscale homes.
            </p>
            <p class="mt-6">
              Headquartered in Phuket, Thailand, we pride ourselves in constructing high quality
              builds and modern smart-home designs to families, investors, and homeowners from all
              walks of life.
            </p>
            <Button
              label="Register Now"
              icon="pi pi-arrow-right"
              iconPos="right"
              class="mt-16"
            ></Button>
            <p class="mt-4">
              Register now to receive the latest special privileges & exclusive project information
            </p>
          </div>
        </section>
      </div>
      <main>
        <section class="flex flex-col w-full bg-highlight fade-in">
          <div class="flex items-center container mx-auto py-16 gap-x-32">
            <div class="flex gap-x-16 shrink-0">
              <Image
                :src="Award1"
                alt="Award 1"
                class="h-96 bg-primary-300 p-1 rounded-lg shadow-2xl"
                preview
              />
              <Image
                :src="Award2"
                alt="Award 2"
                class="h-96 bg-primary-300 p-1 rounded-lg shadow-2xl"
                preview
              />
            </div>
            <div class="shrink flex flex-col gap-y-8">
              <p>
                We tailor to international clients who seek luxury and high-end housing in Thailand.
                Headquartered in Phuket, Thailand and focused on a target market of families,
                foreigners, and investors. We pride ourselves in our high quality builds and modern
                smart-home designs.
              </p>
              <Button
                label="Learn More"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="self-end"
              ></Button>
            </div>
          </div>
        </section>
        <section class="flex flex-col w-full">
          <div class="flex items-center container mx-auto py-16 gap-x-32">
            <div class="flex gap-x-16 shrink-0">
              <!-- <Image :src="Award1" class="h-96 object-cover bg-primary-300 p-1 rounded-lg" />
              <Image :src="Award2" class="h-96 object-cover bg-primary-300 p-1 rounded-lg" /> -->
            </div>
            <div class="shrink flex flex-col gap-y-8">
              <p>
                We tailor to international clients who seek luxury and high-end housing in Thailand.
                Headquartered in Phuket, Thailand and focused on a target market of families,
                foreigners, and investors. We pride ourselves in our high quality builds and modern
                smart-home designs.
              </p>
              <Button
                label="Learn More"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="self-end"
              ></Button>
            </div>
          </div>
        </section>
        <section class="flex flex-col w-full">
          <div class="flex flex-col items-center container mx-auto py-16 gap-x-32">
            <h1 class="text-4xl">Our Projects</h1>
            <div class="shrink flex flex-col gap-y-8">
              <p>
                We tailor to international clients who seek luxury and high-end housing in Thailand.
                Headquartered in Phuket, Thailand and focused on a target market of families,
                foreigners, and investors. We pride ourselves in our high quality builds and modern
                smart-home designs.
              </p>
              <Button
                label="Learn More"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="self-end"
              ></Button>
            </div>
          </div>
        </section>
        <section class="flex flex-col w-full">
          <div class="flex items-center container mx-auto py-16 gap-x-32">
            <div class="flex gap-x-16 shrink-0"></div>
            <div class="shrink flex flex-col gap-y-8">
              <p>
                We tailor to international clients who seek luxury and high-end housing in Thailand.
                Headquartered in Phuket, Thailand and focused on a target market of families,
                foreigners, and investors. We pride ourselves in our high quality builds and modern
                smart-home designs.
              </p>
              <Button
                label="Learn More"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="self-end"
              ></Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* main {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    @apply text-primary;
  }
  h1 {
    @apply text-4xl;
  }
} */
</style>
