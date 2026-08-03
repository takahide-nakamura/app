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

     heroDescription: z.string(),

     updated: z.string().optional(),

     relatedActivities: z.array(z.string()).default([]),

     references: z.array(z.string()).default([]),

     problem: z.object({
     paragraphs: z.array(z.string())
    }),

    evaluation: z.object({

      subjective: z.object({

       heading: z.string(),

       paragraphs: z.array(z.string())

      }),

      objective: z.object({

       heading: z.string(),

       paragraphs: z.array(z.string())

      })

    }),

    issues: z.array(

      z.object({

        title: z.string(),

        description: z.string()

      })

    ),

    proposals: z.array(

      z.object({

       heading: z.string(),

       timeframe: z.string().optional(),

       items: z.array(z.string())

      })

    ),

    limitations: z.object({

     paragraphs: z.array(z.string())

    })

  })
});

export const collections = {
  policies,
};