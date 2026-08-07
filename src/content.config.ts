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

const activities = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/activities",
  }),
});

const sources = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/sources",
  }),
  schema: z.object({
    title: z.string(),
    publisher: z.string(),
    year: z.string().optional(),
    url: z.string().url(),
  }),
});

export const collections = {
  policies,
  activities,
  sources,
};

