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
        include: 'index.md'
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
    page: defineCollection({
      type: 'page',
      source: {
        include: 'page/**',
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
            navHidden: z.boolean().default(false)
            /**
             * Navigation order
             */
            // navOrder: z.number().default(0)
          })
          .partial()
      )
    }),
    project: defineCollection({
      type: 'page',
      source: {
        include: 'projects/**',
        prefix: '/projects'
      },
      schema: baseSchema.merge(
        z
          .object({
            heroImage: z.string(),
            navHidden: z.boolean().default(false),
            // navOrder: z.number().default(0),
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
