import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const policies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/policies",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroTitle: z.string(),
    heroDescription: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    updated: z.string().optional(),
    relatedActivities: z.array(z.string()).default([]),
    references: z.array(z.string()).default([]),
    problem: z.any().optional(),
    evaluation: z.any().optional(),
    issues: z.any().optional(),
    proposals: z.any().optional(),
    limitations: z.any().optional(),
  }),
});

export const collections = {
  policies,
};