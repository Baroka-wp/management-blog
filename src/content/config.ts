import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string()
  })
});

const photos = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    image: z.string()
  })
});

export const collections = {
  articles,
  photos
};
