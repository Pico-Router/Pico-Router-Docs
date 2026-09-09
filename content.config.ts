import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const repository = {
  url: 'https://github.com/Pico-Router/Pico-Router',
  branch: 'main'
}

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: {
        repository,
        include: 'docs/**',
        exclude: ['docs/[0-9]*'],
        prefix: '/'
      }
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        repository,
        include: 'docs/**',
        exclude: ['docs/index.md'],
        prefix: '/'
      },
      schema: z.object({
        links: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          to: z.string(),
          target: z.string().optional()
        })).optional()
      })
    })
  }
})
