<script setup lang="ts">
import { Image } from 'primevue'
import Award1 from '/home/award-1.svg'
import Award2 from '/home/award-2.svg'
import Award3 from '/home/award-3.jpg'
import HeroImage from '/hero-images/home.jpg'
import Project1 from '/projects/lavish-estates/hero.jpg'
import Project2 from '/home/project-2.jpg'
import ProjectLogo1 from '/logos/project-1-light.svg'
import ProjectLogo2 from '/logos/project-2-light.svg'
import LavishEstatesLe from '/logos/lavish-estates-le-black.svg'

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
  const bottom = top + translateHeroOriginSize.height.value + 1
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

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]
</script>

<template>
  <div ref="root">
    <div class="flex flex-col w-full">
      <div ref="translateHeroOriginDiv" class="relative w-full h-screen bg-surface-950 dark-theme">
        <HeroVideoPlayer
          class="shadow-2xl"
          :class="{ 'rounded-l-lg': translateHeroStage >= 0.99 }"
          :style="{
            transform: `translate3d(${translateHeroValues.translate.x}px, ${translateHeroValues.translate.y}px, 0)`,
            width: `${translateHeroValues.size.w}px`,
            height: `${translateHeroValues.size.h}px`
          }"
          :videoId="videoId!"
        />
      </div>
      <div class="flex flex-col w-full pb-16 bg-surface-950 dark-theme text-surface-300">
        <section
          :style="{
            paddingTop: `${navbarHeight}px`
          }"
          class="flex flex-col gap-y-0 md:gap-y-24 md:my-32"
        >
          <div class="flex items-center flex-wrap md:flex-nowrap gap-y-0 md:gap-y-12">
            <div class="basis-full md:basis-2/5 p-12">
              <header class="text-right fade-in">
                <span class="text-8xl text-primary font-display md:text-9xl uppercase"> Elite </span
                ><br />
                <span class="text-5xl font-display md:text-6xl uppercase font-normal"> Manor </span>
              </header>
            </div>
            <div
              ref="translateHeroTargetDiv"
              class="basis-4/5 md:basis-3/5 aspect-video max-h-96 ms-auto -order-1 md:-order-none"
            ></div>
          </div>
          <div class="flex items-center flex-wrap gap-y-0 md:gap-y-12">
            <ParallaxImage
              :src="HeroImage"
              alt="Hero Image"
              class="basis-4/5 md:basis-3/5 aspect-video max-h-96 rounded-lg rounded-l-none fade-in shadow-2xl"
            />
            <div class="basis-full md:basis-2/5 p-12">
              <header class="flex flex-col gap-y-4">
                <span
                  class="font-display text-5xl text-muted-color-emphasis font-normal fade-in uppercase"
                >
                  The<br />Innovate<br />Living
                </span>
              </header>
            </div>
            <div
              class="basis-full flex justify-center md:justify-center items-baseline flex-wrap p-4 md:p-12 mb-12"
            >
              <span class="font-display text-5xl md:text-6xl uppercase">Classic </span>
              <span class="font-display text-primary text-7xl md:text-9xl md:ml-4 uppercase">
                Luxury</span
              >
            </div>
          </div>
          <div class="flex flex-col items-start container mx-auto px-4">
            <div class="md:w-1/2 md:ml-auto">
              <h1 class="text-primary text-2xl fade-in">
                To redefine innovative living through luxury, comfort, and pristine quality
                residences
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
                as="router-link"
                to="/register#main"
                label="Register Now"
                icon="pi pi-arrow-right"
                iconPos="right"
                class="mt-16 fade-in"
              ></Button>
              <p class="mt-4 fade-in">
                Register now to receive the latest special privileges & exclusive project
                information
              </p>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section class="flex flex-col w-full fade-in">
          <div
            class="flex items-center container mx-auto px-4 gap-x-32 gap-y-16 flex-wrap md:flex-nowrap"
          >
            <div class="basis-full md:basis-auto flex gap-x-8 md:gap-x-16 shrink-0 md:-mt-48">
              <Image
                :src="Award1"
                alt="Award 1"
                class="h-48 md:h-96 bg-primary-300 p-1 rounded-lg shadow-2xl"
                preview
              />
              <Image
                :src="Award2"
                alt="Award 2"
                class="h-48 md:h-96 bg-primary-300 p-1 rounded-lg shadow-2xl"
                preview
              />
              <Image
                :src="Award3"
                alt="Award 3"
                class="h-48 md:h-96 bg-primary-300 p-1 rounded-lg shadow-2xl"
                preview
              />
            </div>
            <div class="basis-full md:basis-auto flex flex-col gap-y-8 items-start">
              <p>
                We tailor to international clients who seek luxury and high-end housing in Thailand.
                Headquartered in Phuket, Thailand and focused on a target market of families,
                foreigners, and investors. We pride ourselves in our high quality builds and modern
                smart-home designs.
              </p>
              <Button
                as="router-link"
                to="/about#main"
                label="Learn More"
                icon="pi pi-arrow-right"
                iconPos="right"
              ></Button>
            </div>
          </div>
        </section>

        <section class="flex flex-col w-full">
          <div class="flex flex-col container mx-auto px-4 gap-y-8 fade-in">
            <h1 class="text-4xl fade-in">Our Projects</h1>
            <!-- <div class="flex flex-col bg-highlight rounded-xl shadow-lg"> -->
            <div class="flex items-end gap-x-16 flex-wrap md:flex-nowrap gap-y-8 md:gap-y-12">
              <ParallaxImage
                :src="Project1"
                alt="Project 1"
                class="basis-full md:basis-1/2 w-full rounded-lg aspect-square max-h-96"
              />
              <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                <Image
                  :src="ProjectLogo1"
                  alt="Project Logo 1"
                  class="w-36 md:w-48 self-center md:self-start fade-in"
                />
                <p class="fade-in text-center md:text-start">
                  The harmony of innovative living through luxury, comfort, and pristine quality
                  residences in Phuket
                </p>
                <Button
                  as="router-link"
                  to="/projects/lavish-estates"
                  label="Learn More"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  class="self-center md:self-start fade-in"
                ></Button>
              </div>
            </div>
            <hr class="border-2 w-full self-center" />
            <div class="my-4 md:my-0 flex items-end gap-x-16 flex-wrap md:flex-nowrap gap-y-12">
              <ParallaxImage
                :src="Project2"
                alt="Project 2"
                class="basis-full md:basis-1/2 w-full rounded-lg aspect-square max-h-96"
              />
              <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                <Image
                  :src="ProjectLogo2"
                  alt="Project Logo 2"
                  class="w-36 md:w-48 self-center md:self-start fade-in"
                />
                <p class="fade-in text-center md:text-start">
                  We are working on something amazing. Stay tuned for updates!
                </p>
                <Button
                  label="Coming Soon"
                  class="self-center md:self-start fade-in"
                  disabled
                ></Button>
              </div>
            </div>
            <!-- </div> -->
          </div>
        </section>
        <section v-if="data?.faqs" class="flex flex-col w-full fade-in dark-theme !bg-surface-950">
          <div class="flex flex-col container mx-auto px-4">
            <h1 class="fade-in">FAQs</h1>
            <Accordion class="mt-4" expand-icon="pi pi-plus" collapse-icon="pi pi-times" value="0">
              <AccordionPanel v-for="(item, index) in data.faqs" :value="index">
                <hr
                  v-if="index > 0"
                  class="border-2 w-full self-center border-primary-contrast my-1"
                />
                <AccordionHeader>
                  <template #default>
                    {{ item.question }}
                  </template>
                  <template #toggleicon>
                    <img class="w-4 opacity-70 dark:invert" :src="LavishEstatesLe" alt="expand" />
                  </template>
                </AccordionHeader>
                <AccordionContent>
                  <p class="m-0">
                    {{ item.answer }}
                  </p>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </section>
        <!-- <section class="flex container mx-auto justify-center px-4">
          <div class="p-4 fade-in flex justify-center md:justify-between pt-4 pb-12 w-full">
            <div class="shrink fade-in hidden lg:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="Europe/London" />
              London
            </div>
            <div class="shrink fade-in hidden md:flex flex-col items-center">
              <WorldClock class="scale-[.6] -my-8 -mx-8" timezone="Europe/Paris" />
              Paris
            </div>
            <div class="shrink fade-in flex flex-col items-center font-bold text-primary">
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
        </section> -->
        <section class="fade-in">
          <Carousel
            class="container mx-auto"
            :value="[
              { label: 'London', timezone: 'Europe/London', scale: 0.6 },
              { label: 'Paris', timezone: 'Europe/Paris', scale: 0.6 },
              { label: 'Phuket', timezone: 'Asia/Bangkok', scale: 0.75 },
              { label: 'Los Angeles', timezone: 'America/Los_Angeles', scale: 0.6 },
              { label: 'Seoul', timezone: 'Asia/Seoul', scale: 0.6 }
            ]"
            :numVisible="5"
            :numScroll="5"
            :responsiveOptions="responsiveOptions"
            :show-indicators="false"
            :circular="true"
          >
            <template #item="slotProps">
              <div class="flex-col items-center justify-center">
                <WorldClock
                  class="overflow-visible -my-10"
                  :style="{ scale: slotProps.data.scale }"
                  :timezone="slotProps.data.timezone"
                />
                <div class="text-center">{{ slotProps.data.label }}</div>
              </div>
            </template>
          </Carousel>
        </section>
        <section class="!p-0">
          <div class="shadow-lg">
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
main {
  > section {
    @apply py-16;
    &:nth-child(odd) {
      @apply bg-highlight;
    }
  }
}

:deep(.p-accordionpanel) {
  .p-accordionheader {
    @apply bg-transparent;
    @apply border-0;
    @apply px-0;
    @apply text-surface-300;
  }
  .p-accordioncontent-content {
    @apply bg-transparent;
    @apply border-0;
    @apply px-0;
    @apply text-surface-300;
  }
}
</style>
