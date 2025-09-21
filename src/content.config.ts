import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});
const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = { events, news };
