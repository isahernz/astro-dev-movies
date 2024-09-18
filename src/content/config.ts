import { defineCollection, z } from "astro:content";

// Secure the form collection
const movies = defineCollection({
  schema: z.object({
    title: z.string(),
    director: z.string(),
    release: z.string(),
    image: z.string(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      mexico: z.string().url(),
    }),
  }),
});

export const collections = { movies };
