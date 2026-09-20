import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";
import { policyCategories } from "./data/policyCategories";

const dateSchema = z
  .string()
  .regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "日付は YYYY-MM-DD 形式で指定してください"
  );

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
     * 下書きフラグ
     * true の場合は本番環境では非公開となる
     */
    draft: z.boolean().optional().default(false),

    /**
     * 最終更新日
     *
     * YYYY-MM-DD の形式に統一する。
     */
    updated: dateSchema.optional(),

    /**
     * 関連する活動
     *
     * Content Collection の reference を使用することで、
     * 存在しない活動IDを指定した場合にエラーにする。
     */
    relatedActivities: z.array(reference("activities")).default([]),

    /**
     * 参考資料
     *
     * Content Collection の reference を使用することで、
     * 存在しない出典IDを指定した場合にエラーにする。
     */
    references: z.array(reference("sources")).default([]),

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
    title: z.string().min(1),
    summary: z.string().min(1),
    date: dateSchema,
    draft: z.boolean().optional().default(false),
    relatedPolicies: z.array(reference("policies")).default([]),
    thumbnail: z.string().optional(),
    photos: z.array(z.string()).default([]),
    xUrl: z.string().url().optional(),
    instagramUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
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
     *
     * 制度ページ・法令・継続更新ページなど、
     * 特定の発行年を持たない資料では省略する。
     */
    year: z.string().optional(),

    /**
     * 資料URL
     */
    url: z.string().url(),

    /**
     * 資料の種類
     *
     * official:
     *   行政機関等が公表する公式資料・制度ページ
     *
     * statistics:
     *   統計・調査結果・数値資料
     *
     * law:
     *   法令・条例・制度上の根拠
     *
     * research:
     *   論文・研究・研究機関等の資料
     *
     * meeting:
     *   審議会・委員会等の会議資料・議事録
     *
     * other:
     *   上記に分類しにくい資料
     */
    type: z
      .enum([
        "official",
        "statistics",
        "law",
        "research",
        "meeting",
        "other",
      ])
      .optional(),

    /**
     * 資料の現在性
     *
     * current:
     *   現在の制度・状況を確認するための資料
     *
     * historical:
     *   過去の制度・状況・経緯を確認するために残す資料
     *
     * archived:
     *   現在は通常の根拠として使用しない資料
     */
    status: z
      .enum(["current", "historical", "archived"])
      .optional()
      .default("current"),

    /**
     * 資料・URLを最後に確認した日
     *
     * 資料の「発行日」ではなく、
     * このサイト側で内容・URLを確認した日を記録する。
     */
    checked: dateSchema.optional(),

    /**
     * 下書きフラグ
     */
    draft: z.boolean().optional().default(false),
  }),
});



/* =========================================================
 * pages
 * ======================================================= */

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional().default(false),
    updated: dateSchema.optional(),
  }),
});


/* =========================================================
 * Export
 * ======================================================= */

export const collections = {
  policies,
  activities,
  sources,
  pages,
};