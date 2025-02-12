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
            youtubeVideoId: z.string()
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
            heroImage: z.string()
          })
          .partial()
      )
    })
  }
})
