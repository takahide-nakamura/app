import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";
import { policyCategories } from "./data/policyCategories";

/**
 * 政策本文内の「段落」の共通構造
 */
const paragraphsSchema = z.object({
  paragraphs: z.array(z.string().min(1)),
});

/**
 * 評価セクション
 *
 * subjective:
 *   現場経験・主観的評価
 *
 * objective:
 *   公的資料・統計・制度等に基づく客観的評価
 */
const evaluationSchema = z.object({
  subjective: z
    .object({
      heading: z.string(),
      paragraphs: z.array(z.string().min(1)),
    })
    .optional(),

  objective: z
    .object({
      heading: z.string(),
      paragraphs: z.array(z.string().min(1)),
    })
    .optional(),
});

/**
 * 課題1件の構造
 */
const issueSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

/**
 * 政策提案1ブロックの構造
 */
const proposalSchema = z.object({
  heading: z.string().min(1),
  items: z.array(z.string().min(1)),
});

/**
 * 制約・限界の構造
 */
const limitationsSchema = z.object({
  paragraphs: z.array(z.string().min(1)),
});


/* =========================================================
 * policies
 * ======================================================= */

const policies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/policies",
  }),

  schema: z.object({
    /**
     * 基本情報
     */
    title: z.string().min(1),

    description: z.string().min(1),

    heroTitle: z.string().min(1),

    heroDescription: z.string().min(1).optional(),

    /**
     * 政策カテゴリー
     *
     * src/data/policyCategories.ts と同じ定義を使用する。
     */
    category: z.enum(policyCategories).optional(),

    /**
     * 検索・分類用タグ
     */
    tags: z.array(z.string().min(1)).default([]),

    /**
     * 最終更新日
     *
     * YYYY-MM-DD の形式に統一する。
     */
    updated: z
      .string()
      .regex(
        /^\d{4}-\d{2}-\d{2}$/,
        "updated は YYYY-MM-DD 形式で指定してください"
      )
      .optional(),

    /**
     * 関連する活動
     *
     * Content Collection の reference を使用することで、
     * 存在しない活動IDを指定した場合にエラーにする。
     */
    relatedActivities: z
      .array(reference("activities"))
      .default([]),

    /**
     * 参考資料
     *
     * Content Collection の reference を使用することで、
     * 存在しない出典IDを指定した場合にエラーにする。
     */
    references: z
      .array(reference("sources"))
      .default([]),

    /**
     * YouTube動画
     */
    youtube: z
      .object({
        title: z.string().min(1),
        url: z.string().url(),
      })
      .optional(),

    /**
     * 問題
     */
    problem: paragraphsSchema.optional(),

    /**
     * 評価
     */
    evaluation: evaluationSchema.optional(),

    /**
     * 課題
     */
    issues: z.array(issueSchema).optional(),

    /**
     * 政策提案
     */
    proposals: z.array(proposalSchema).optional(),

    /**
     * 制約・限界
     */
    limitations: limitationsSchema.optional(),
  }),
});


/* =========================================================
 * activities
 * ======================================================= */

const activities = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/activities",
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    status: z.enum(["published", "draft"]),
  }),
});


/* =========================================================
 * sources
 * ======================================================= */

const sources = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/sources",
  }),

  schema: z.object({
    /**
     * 資料タイトル
     */
    title: z.string().min(1),

    /**
     * 発行元
     */
    publisher: z.string().min(1),

    /**
     * 発行年
     */
    year: z.string().optional(),

    /**
     * 資料URL
     */
    url: z.string().url(),
  }),
});


/* =========================================================
 * Export
 * ======================================================= */

export const collections = {
  policies,
  activities,
  sources,
};