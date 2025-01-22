<script setup lang="ts">
import { Navbar } from '#components'
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
</script>

<template>
  <div ref="root" class="flex">
    <Navbar ref="navbar" />
    <div class="flex flex-col w-full">
      <!-- {{ navbar?.height }} -->
      <div ref="translateHeroOriginDiv" class="relative w-full h-screen">
        <HeroVideoPlayer
          :class="{ 'rounded-lg': translateHeroStage === 1 }"
          :style="{
            transform: `translate(${translateHeroValues.translate.x}px, ${translateHeroValues.translate.y}px)`,
            width: `${translateHeroValues.size.w}px`,
            height: `${translateHeroValues.size.h}px`
          }"
          :videoId="videoId"
        />
      </div>
      <!-- <div id="scrollTarget"></div> -->
      <main class="flex flex-col w-full">
        <section
          :style="{
            paddingTop: `${navbar?.height}px`
          }"
        >
          <div class="container mx-auto">
            <div ref="translateHeroTargetDiv" class="h-48 aspect-[21/9] self-end max-w-full"></div>
          </div>
        </section>
        <section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, eos? Ex nostrum nobis,
          sapiente non eius perferendis quasi ipsam eligendi quos. Sint placeat velit similique
          veritatis aperiam! Illum facilis illo dicta reprehenderit accusamus! Quo, cumque eos culpa
          nostrum perferendis, ducimus obcaecati asperiores expedita impedit saepe dicta odio
          inventore eaque consequuntur animi ullam modi numquam. Nisi mollitia delectus placeat
          commodi deleniti.
        </section>
        <section>
          Sequi minima impedit sapiente, exercitationem voluptate distinctio doloribus culpa
          voluptates odio! Id ipsa eum ex quibusdam dolorum temporibus, dicta at aperiam, ad
          repellendus illo neque. Quam cumque ea voluptatibus eligendi labore! Accusamus totam ad
          cum nesciunt sequi autem minima quos fugit sapiente quasi quae voluptatum soluta, sed odio
          aspernatur ut dolor, sint vero tenetur! Nihil quibusdam possimus autem cumque repellat.
        </section>
        <section>
          Consectetur tenetur laboriosam fugit fuga quis aut, dolores illo repellendus, culpa
          delectus sequi velit nobis tempora beatae eligendi officiis quia neque, laudantium laborum
          consequuntur atque iure provident saepe? Perspiciatis alias voluptates nihil, minima atque
          harum aspernatur nam vel est cum nemo dolorum repellat. Labore, quidem nemo assumenda, ad
          quisquam dolore dolorem quod expedita quia nostrum modi numquam id, recusandae atque!
        </section>
        <section>
          Impedit cupiditate voluptas possimus repudiandae qui! Illo asperiores in facilis libero
          corporis doloribus tempora veniam rem laboriosam magni minima voluptate, minus voluptas.
          Eos, officia eligendi. Dolorum aliquam sed modi alias sapiente nesciunt, molestiae, quae,
          id minus repellat tempora aliquid! Nostrum exercitationem perferendis aperiam officiis
          laudantium deserunt? Eveniet quos officia, in explicabo fugit, nisi sit placeat veniam,
          nobis assumenda quia facilis?
        </section>
        <section>
          Cupiditate reiciendis quisquam harum odit maxime ad hic fugiat delectus animi ut expedita,
          et minus fuga amet architecto commodi exercitationem accusantium corporis, dolorem
          eligendi repellendus officia! Soluta, voluptates adipisci cupiditate voluptas, nesciunt
          animi, molestiae quia eos ut nihil sit eum atque. Rerum dignissimos culpa nostrum aliquam
          nemo voluptatibus sunt neque placeat! Beatae, eum. Exercitationem nulla possimus
          consequuntur facilis commodi molestias?
        </section>
        <section>
          Cupiditate reiciendis quisquam harum odit maxime ad hic fugiat delectus animi ut expedita,
          et minus fuga amet architecto commodi exercitationem accusantium corporis, dolorem
          eligendi repellendus officia! Soluta, voluptates adipisci cupiditate voluptas, nesciunt
          animi, molestiae quia eos ut nihil sit eum atque. Rerum dignissimos culpa nostrum aliquam
          nemo voluptatibus sunt neque placeat! Beatae, eum. Exercitationem nulla possimus
          consequuntur facilis commodi molestias?
        </section>
        <section>
          Cupiditate reiciendis quisquam harum odit maxime ad hic fugiat delectus animi ut expedita,
          et minus fuga amet architecto commodi exercitationem accusantium corporis, dolorem
          eligendi repellendus officia! Soluta, voluptates adipisci cupiditate voluptas, nesciunt
          animi, molestiae quia eos ut nihil sit eum atque. Rerum dignissimos culpa nostrum aliquam
          nemo voluptatibus sunt neque placeat! Beatae, eum. Exercitationem nulla possimus
          consequuntur facilis commodi molestias?
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
main {
  section {
    @apply p-4 container mx-auto;
  }
}
</style>
