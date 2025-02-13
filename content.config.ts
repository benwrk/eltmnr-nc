import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const baseSchema = z
  .object({
    title: z.string()
  })
  .partial()

export default defineContentConfig({
  collections: {
    homePage: defineCollection({
      type: 'page',
      source: {
        include: 'index.md',
        prefix: '/'
      },
      schema: baseSchema.merge(
        z
          .object({
            youtubeVideoId: z.string(),
            faqs: z.array(z.object({ question: z.string(), answer: z.string() }))
          })
          .required()
      )
    }),
    pages: defineCollection({
      type: 'page',
      source: {
        include: 'pages/**',
        prefix: '/'
      },
      schema: baseSchema.merge(
        z
          .object({
            /**
             * URL of the hero image
             */
            heroImage: z.string(),
            /**
             * Whether to hide the navigation to this page
             */
            navHidden: z.boolean()
          })
          .partial()
      )
    }),
    projects: defineCollection({
      type: 'page',
      source: {
        include: 'projects/**',
        prefix: '/projects'
      },
      schema: baseSchema.merge(
        z
          .object({
            heroImage: z.string(),
            gallery: z
              .object({
                images: z.array(
                  z
                    .object({
                      name: z.string(),
                      hrefs: z.array(z.string())
                    })
                    .partial()
                )
              })
              .partial()
          })
          .partial()
      )
    })
  }
})
