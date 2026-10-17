import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    githubRepo: z.string().optional(),
    coverImage: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog };
