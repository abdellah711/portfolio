import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ base: "./content/projects", pattern: "*.md" }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    live: z.string().optional(),
    github: z.string().optional(),
    technologies: z.array(z.string()),
  }),
});

export const collections = { projects };
