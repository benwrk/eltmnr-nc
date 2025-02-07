<script setup lang="ts">
import { Navbar } from '#components'
import { animate, inView, stagger } from 'motion'
import HeroImage from '/home/hero.jpg'
import Award1 from '/home/award-1.svg'
import Award2 from '/home/award-2.svg'
import Project1 from '/home/project-1.jpg'
import Project2 from '/home/project-2.jpg'
import ProjectLogo1 from '/logos/project-1-light.svg'
import ProjectLogo2 from '/logos/project-2-light.svg'
import { Image } from 'primevue'
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

const faqs = [
  {
    question: 'What types of properties does Elite Manor Developer offer?',
    answer:
      'Elite Manor Developer specializes in luxury residential properties, including single-family homes, townhouses, and high-rise condominiums. We also offer commercial real estate projects such as office spaces and retail centers.'
  },
  {
    question: 'Where are your properties located?',
    answer:
      'Our properties are primarily located in prime urban and suburban areas, offering convenient access to amenities, schools, and transportation hubs.'
  },
  {
    question: 'How can I schedule a visit to one of your properties?',
    answer:
      'You can schedule a visit by contacting our sales team through our website or by calling our customer service hotline. Our team will arrange a convenient time for you to tour the property.'
  },
  {
    question: 'What financing options are available for purchasing a property?',
    answer:
      'We work with a variety of financial institutions to offer competitive mortgage options. Our sales team can connect you with preferred lenders who can assist with financing tailored to your needs.'
  },
  {
    question: 'Are your properties customizable?',
    answer:
      'Yes, we offer a range of customization options for our properties, allowing you to select finishes, layouts, and additional features to suit your preferences.'
  },
  {
    question: 'What is the warranty period for your properties?',
    answer:
      'All our properties come with a standard one-year warranty for workmanship and materials. Additional warranties may be available for specific systems or components, such as HVAC or roofing.'
  },
  {
    question: 'How do you ensure the quality of your construction?',
    answer:
      'We adhere to stringent quality control measures and utilize top-grade materials in our construction process. Our projects are overseen by experienced engineers and contractors to ensure they meet the highest standards.'
  },
  {
    question: 'What amenities are included in your residential developments?',
    answer:
      'Our residential developments often feature amenities such as swimming pools, fitness centers, community gardens, playgrounds, and 24/7 security services to enhance your living experience.'
  },
  {
    question: 'Do you offer property management services?',
    answer:
      'Yes, we offer comprehensive property management services to ensure the upkeep and maintenance of your property, providing peace of mind and convenience for homeowners.'
  },
  {
    question: 'How can I get updates on upcoming projects and developments?',
    answer:
      'You can subscribe to our newsletter via our website to receive regular updates on our upcoming projects, new releases, and exclusive offers. You can also follow us on social media for the latest news and announcements.'
  }
]

const videoId = page.value?.meta.youtubeVideoId as string

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
          :videoId="videoId"
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
            <h1 class="text-primary text-2xl">
              To redefine innovative living through luxury, comfort, and pristine quality residences
            </h1>
            <p class="mt-6">
              Elite Manor is a real estate development firm that tailors to a global array of
              clients who seek the highest luxury in upscale homes.
            </p>
            <p class="mt-2">
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
          <div class="flex flex-col container mx-auto py-16 px-4 gap-y-8">
            <h1 class="text-4xl">Our Projects</h1>
            <div class="flex flex-col bg-highlight rounded-xl shadow-lg">
              <div class="flex items-end p-4 md:p-12 gap-x-16 flex-wrap md:flex-nowrap gap-y-12">
                <Image
                  :src="Project1"
                  alt="Project 1"
                  class="basis-full md:basis-1/2 w-full rounded-lg aspect-square max-h-96"
                />
                <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                  <Image :src="ProjectLogo1" alt="Project Logo 1" class="w-36 self-start" />
                  <p>
                    The harmony of innovative living through luxury, comfort, and pristine quality
                    residences in Phuket
                  </p>
                  <Button
                    label="Learn More"
                    icon="pi pi-arrow-right"
                    iconPos="right"
                    class="self-end"
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
                />
                <div class="basis-full md:basis-1/2 p-4 md:p-0 flex flex-col gap-y-8">
                  <Image :src="ProjectLogo2" alt="Project Logo 2" class="w-36 self-start" />
                  <p>
                    The harmony of innovative living through luxury, comfort, and pristine quality
                    residences in Phuket
                  </p>
                  <Button label="Coming Soon" class="self-end" disabled></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col w-full">
          <div class="flex flex-col container mx-auto px-4">
            <h1>FAQs</h1>
            <Accordion class="mt-4" expand-icon="pi pi-plus" collapse-icon="pi pi-times" value="0">
              <AccordionPanel v-for="(item, index) in faqs" :value="index">
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
        <WorldClock timezone="Asia/Bangkok" />
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
