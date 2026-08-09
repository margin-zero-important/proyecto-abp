import { defineCollection, z } from "astro:content";

const english = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.coerce.date(),
    order: z.number().default(0), // Para ordenar partes de un tema
    isPart: z.boolean().default(false), // Para saber si es una sub-página
  })
})

export const collections = { english }