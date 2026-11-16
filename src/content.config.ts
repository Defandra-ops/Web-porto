import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.enum(["Fullstack", "Mobile", "IT Support", "UI/UX"]),
    role: z.string(),
    stack: z.array(z.string()),
    featured: z.boolean().default(false),
    example: z.boolean().default(false),
    date: z.string(),
    problem: z.string(),
    solution: z.string(),
    demoUrl: z.url().optional(),
    repoUrl: z.url().optional(),
    designUrl: z.url().optional(),
    screenshots: z.array(z.object({ src: z.string(), alt: z.string() })).default([]),
  }),
});

export const collections = { projects };
