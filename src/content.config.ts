import { defineCollection, z } from "astro:content";

const optionalImage = z.string().min(1).optional();

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    status: z.string().min(1),
    stack: z.array(z.string().min(1)).min(1),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
    coverImage: optionalImage,
    screenshots: z.array(optionalImage.unwrap()).optional(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishDate: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  projects,
  posts,
};
