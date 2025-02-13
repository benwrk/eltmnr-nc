<script setup lang="ts">
import { Image } from 'primevue'
import Award1 from '/home/award-1.svg'
import Award2 from '/home/award-2.svg'
import HeroImage from '/home/hero.jpg'
import Project1 from '/home/project-1.jpg'
import Project2 from '/home/project-2.jpg'
import ProjectLogo1 from '/logos/project-1-light.svg'
import ProjectLogo2 from '/logos/project-2-light.svg'

const route = useRoute()

const { data } = await useAsyncData(route.path, () => {
  return queryCollection('homePage').path(route.path).first()
})

const videoId = data.value?.youtubeVideoId

const windowScroll = useWindowScroll()
const translateHeroOriginDiv = ref<HTMLDivElement>()
const translateHeroOriginSize = useElementSize(translateHeroOriginDiv)
const translateHeroTargetDiv = ref<HTMLDivElement>()
const translateHeroTargetSize = useElementSize(translateHeroTargetDiv)

let navbarHeight: Ref<Number> | undefined

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
  navbarHeight = useElementSize(document.getElementById('navbar')).height
})
</script>

<template>
  <div ref="root" class="mb-16">
    <!-- {{ page }} -->
    <div class="flex flex-col w-full">
      <!-- HELLO: {{ navbar?.height }} {{ navbar === undefined }} -->
      <!-- {{ getCurrentInstance()?.parent.navbar }} -->
      <!-- {{ navbarHeight }} -->
      <div ref="translateHeroOriginDiv" class="relative w-full h-screen">
        <HeroVideoPlayer
          class="shadow-2xl"
          :class="{ 'rounded-l-lg': translateHeroStage === 1 }"
          :style="{
            transform: `translate(${translateHeroValues.translate.x}px, ${translateHeroValues.translate.y}px)`,
            width: `${translateHeroValues.size.w}px`,
            height: `${translateHeroValues.size.h}px`
          }"
          :videoId="videoId!"
        />
      </div>
      <div class="flex flex-col w-full">
        <section
          :style="{
            paddingTop: `${navbarHeight}px`
          }"
          class="flex flex-col gap-y-12 md:gap-y-24 md:my-32"
        >
          <div class="flex items-center flex-wrap md:flex-nowrap gap-y-12">
            <div class="basis-full md:basis-2/5 p-12">
              <header class="md:text-right fade-in">
                <h1 class="text-5xl md:text-9xl">
                  Elite<br />
                  Manor
                </h1>
              </header>
            </div>
            <div
              ref="translateHeroTargetDiv"
              class="basis-4/5 md:basis-3/5 h-96 ms-auto -order-1 md:-order-none"
            ></div>
          </div>
          <div class="flex items-center flex-wrap gap-y-12">
            <Image
              :src="HeroImage"
              alt="Hero Image"
              class="basis-4/5 md:basis-3/5 h-96 rounded-lg rounded-l-none fade-in shadow-2xl"
            />
            <div class="basis-full md:basis-2/5 p-12">
              <header class="text-right md:text-left flex flex-col gap-y-4">
                <h1 class="text-5xl text-muted-color-emphasis font-normal fade-in">
                  Innovate Living
                </h1>
                <h1 class="text-5xl text-muted-color font-normal fade-in">Classic Luxury</h1>
              </header>
            </div>
          </div>
          <div class="flex flex-col items-center container mx-auto text-center px-4">
            <h1 class="text-primary text-2xl fade-in">
              To redefine innovative living through luxury, comfort, and pristine quality residences
            </h1>
            <p class="mt-6 fade-in">
              Elite Manor is a real estate development firm that tailors to a global array of
              clients who seek the highest luxury in upscale homes.
            </p>
            <p class="mt-2 fade-in">
              Headquartered in Phuket, Thailand, we pride ourselves in constructing high quality
              builds and modern smart-home designs to families, investors, and homeowners from all
              walks of life.
            </p>
            <Button
              label="Register Now"
              icon="pi pi-arrow-right"
              iconPos="right"
              class="mt-16 fade-in"
            ></Button>
            <p class="mt-4 fade-in">
              Register now to receive the latest special privileges & exclusive project information
            </p>
          </div>
        </section>
      </div>
      <main>
        <section class="flex flex-col w-full bg-highlight fade-in mt-64 md:mt-32">
          <div
            class="flex items-center container mx-auto py-16 px-4 gap-x-32 gap-y-16 flex-wrap md:flex-nowrap"
          >
            <div class="basis-full md:basis-auto flex gap-x-16 shrink-0 -mt-48">
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
            <div class="basis-full md:basis-auto flex flex-col gap-y-8">
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
          <div class="flex flex-col container mx-auto py-16 px-4 gap-y-8 fade-in">
            <h1 class="text-4xl fade-in">Our Projects</h1>
            <div class="flex flex-col bg-highlight rounded-xl shadow-lg">
              <div class="flex items-end p-4 md:p-12 gap-x-16 flex-wrap md:flex-nowrap gap-y-12">
                <Image
                  :src="Project1"
                  alt="Project 1"
                  class="basis-full md:basis-1/2 w-full rounded-lg aspect-square max-h-96"
                  preview
                />
                <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                  <Image :src="ProjectLogo1" alt="Project Logo 1" class="w-36 self-start fade-in" />
                  <p class="fade-in">
                    The harmony of innovative living through luxury, comfort, and pristine quality
                    residences in Phuket
                  </p>
                  <Button
                    label="Learn More"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="self-end fade-in"
                  ></Button>
                </div>
              </div>
              <hr
                class="border-2 rounded-full border-primary-contrast w-[calc(100%-4rem)] self-center"
              />
              <div
                class="my-4 md:my-0 flex items-end p-4 md:p-12 gap-x-16 flex-wrap md:flex-nowrap gap-y-12"
              >
                <Image
                  :src="Project2"
                  alt="Project 2"
                  class="basis-full md:basis-1/2 w-full rounded-lg aspect-square max-h-96"
                  preview
                />
                <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                  <Image :src="ProjectLogo2" alt="Project Logo 2" class="w-36 self-start fade-in" />
                  <p class="fade-in">
                    The harmony of innovative living through luxury, comfort, and pristine quality
                    residences in Phuket
                  </p>
                  <Button label="Coming Soon" class="self-end fade-in" disabled></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section v-if="data?.faqs" class="flex flex-col w-full fade-in">
          <div class="flex flex-col container mx-auto px-4">
            <h1 class="fade-in">FAQs</h1>
            <Accordion class="mt-4" expand-icon="pi pi-plus" collapse-icon="pi pi-times" value="0">
              <AccordionPanel v-for="(item, index) in data.faqs" :value="index">
                <AccordionHeader>{{ item.question }}</AccordionHeader>
                <AccordionContent>
                  <p class="m-0">
                    {{ item.answer }}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </section>
        <section class="flex container mx-auto justify-center px-4 py-16">
          <div
            class="fade-in flex justify-center md:justify-between rounded-lg shadow-lg pt-4 pb-12 w-full bg-highlight dark:bg-surface-800"
          >
            <div class="shrink fade-in hidden lg:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="Europe/London" />
              London
            </div>
            <div class="shrink fade-in hidden md:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="Europe/Paris" />
              Paris
            </div>
            <div class="shrink fade-in flex flex-col items-center">
              <WorldClock class="-my-8 -mx-8 scale-75" timezone="Asia/Bangkok" />
              Phuket
            </div>
            <div class="shrink fade-in hidden md:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="America/Los_Angeles" />
              Los Angeles
            </div>
            <div class="shrink fade-in hidden lg:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="Asia/Seoul" />
              Seoul
            </div>
          </div>
        </section>
        <section class="container mx-auto px-4">
          <div class="h-full w-full shadow-xl">
            <iframe
              class="rounded-xl shadow-lg invert-[.85] saturate-[.8] sepia-[.8] min-h-[36rem]"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.110005276163!2d98.3336935!3d7.8397258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f8b828258dd%3A0x65e112219235d17f!2sLavish%20Estates%20by%20Elite%20Manor!5e0!3m2!1sen!2sth!4v1716525107023!5m2!1sen!2sth"
              width="100%"
              frameborder="0"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
:deep(.p-accordion) {
  /* @apply border-none; */
  :deep(.p-accordionpanel) {
    @apply border-none;
    :deep(.p-accordionheader) {
      @apply border-none;
      @apply bg-transparent;
    }
  }
}
</style>
