import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  shortDescription: z.string(),
  description: z.string(),
  image: z.string(),
  live: z.string().optional(),
  github: z.string().optional(),
  technologies: z.array(z.string()),
});

const projects = defineCollection({
  loader: glob({ base: "./content/projects", pattern: "*.md" }),
  schema: projectSchema,
});

export const collections = { projects };
