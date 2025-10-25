import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {

    about: defineCollection({
      type: 'data',
      source: './about.md',
      schema: z.object({
        name: z.string(),
        header: z.string(),
        description: z.string(),
        phones: z.array(z.string()),
        address: z.string(),
        email: z.string(),
        instagram: z.string(),
        whatsapp: z.string(),
        map: z.string(),
      }),
    }),

    comments: defineCollection({
      type: 'data',
      source: './comments.md',
      schema: z.object({
        name: z.string(),
        date: z.string(),
        content: z.string(),
      }),
    }),

    projects: defineCollection({
      type: 'page',
      source: './projects/*.md',
    }),

    sss: defineCollection({
      type: 'data',
      source: './sss.md',
      schema: z.object({
        question: z.string(),
        answer: z.string(),
      }),
    }),
  },
})
