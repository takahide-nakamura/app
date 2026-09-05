import { policyCategories, type PolicyCategory } from "./policyCategories";

export interface PolicyTagMeta {
  reading: string;
  category: PolicyCategory | "all"; // "all" は全カテゴリー共通（重点政策など）
  label?: string;
  featured?: boolean; // 真っ先に着目させる注目タグフラグ
}

/**
 * 政策タグ辞書
 *
 * Markdown側ではタグ名（文字列）のみを記述し、
 * 読み仮名、所属カテゴリー、表示補助情報はこの辞書で一元管理します。
 */
export const policyTags: Record<string, PolicyTagMeta> = {
  // ===== 🌟 全カテゴリー共通・注目タグ =====
  "重点政策": {
    reading: "じゅうてんせいさく",
    category: "all",
    featured: true,
  },

  // ===== 🏥 医療・介護 =====
  "医療": {
    reading: "いりょう",
    category: "🏥 医療・介護",
  },
  "医療・介護": {
    reading: "いりょうかいご",
    category: "🏥 医療・介護",
  },
  "医療費": {
    reading: "いりょうひ",
    category: "🏥 医療・介護",
  },
  "介護予防": {
    reading: "かいごよぼう",
    category: "🏥 医療・介護",
  },
  "国保": {
    reading: "こくほ",
    category: "🏥 医療・介護",
  },
  "国民健康保険": {
    reading: "こくみんけんこうほけん",
    category: "🏥 医療・介護",
  },
  "高齢者": {
    reading: "こうれいしゃ",
    category: "🏥 医療・介護",
  },
  "末期がん": {
    reading: "まっきがん",
    category: "🏥 医療・介護",
  },
  "社会保障": {
    reading: "しゃかいほしょう",
    category: "🏥 医療・介護",
  },
  "特定健診": {
    reading: "とくていけんしん",
    category: "🏥 医療・介護",
  },
  "認知症支援": {
    reading: "にんちしょうしえん",
    category: "🏥 医療・介護",
  },

  // ===== 👨‍👩‍👧 子育て =====
  "いじめ": {
    reading: "いじめ",
    category: "👨‍👩‍👧 子育て",
  },
  "大雨臨時休業": {
    reading: "おおあめりんじきゅうぎょう",
    category: "👨‍👩‍👧 子育て",
  },
  "学校教育": {
    reading: "がっこうきょういく",
    category: "👨‍👩‍👧 子育て",
  },
  "学校防災": {
    reading: "がっこうぼうさい",
    category: "👨‍👩‍👧 子育て",
  },
  "子ども": {
    reading: "こども",
    category: "👨‍👩‍👧 子育て",
  },
  "子育て": {
    reading: "こそだて",
    category: "👨‍👩‍👧 子育て",
  },
  "待機児童": {
    reading: "たいきじどう",
    category: "👨‍👩‍👧 子育て",
  },
  "利用保留児": {
    reading: "りようほりゅうじ",
    category: "👨‍👩‍👧 子育て",
  },
  "保育園": {
    reading: "ほいくえん",
    category: "👨‍👩‍👧 子育て",
  },
  "こども園": {
    reading: "こどもえん",
    category: "👨‍👩‍👧 子育て",
  },
  "病児送迎": {
    reading: "びょうじそうげい",
    category: "👨‍👩‍👧 子育て",
  },
  "病児保育": {
    reading: "びょうじほいく",
    category: "👨‍👩‍👧 子育て",
  },
  "訪問支援": {
    reading: "ほうもんしえん",
    category: "👨‍👩‍👧 子育て",
  },
  "共働き": {
    reading: "ともばたらき",
    category: "👨‍👩‍👧 子育て",
  },

  // ===== 🛡️ 防災 =====
  "国民保護": {
    reading: "こくみんほご",
    category: "🛡️ 防災",
  },
  "防災": {
    reading: "ぼうさい",
    category: "🛡️ 防災",
  },

  // ===== 🏙️ 暮らし =====
  "暮らし": {
    reading: "くらし",
    category: "🏙️ 暮らし",
  },
  "ごみ": {
    reading: "ごみ",
    category: "🏙️ 暮らし",
  },
  "ごみ問題": {
    reading: "ごみもんだい",
    category: "🏙️ 暮らし",
  },
  "ゴミ出し支援": {
    reading: "ごみだししえん",
    category: "🏙️ 暮らし",
  },
  "市営バス": {
    reading: "しえいばす",
    category: "🏙️ 暮らし",
  },
  "生活騒音": {
    reading: "せいかつそうおん",
    category: "🏙️ 暮らし",
  },
  "騒音": {
    reading: "そうおん",
    category: "🏙️ 暮らし",
  },
  "夜間騒音": {
    reading: "やかんそうおん",
    category: "🏙️ 暮らし",
  },

  "富田": {
    reading: "とんだ",
    category: "🏙️ 暮らし",
  },

  "踏切": {
    reading: "ふみきり",
    category: "🏙️ 暮らし",
  },

  "渋滞": {
    reading: "じゅうたい",
    category: "🏙️ 暮らし",
  },

  "阪急京都線": {
    reading: "はんきゅうきょうとせん",
    category: "🏙️ 暮らし",
  },

  // ===== 将来用・基本タグ（現時点で使用されていないタグはUIに非表示） =====
  "介護": {
    reading: "かいご",
    category: "🏥 医療・介護",
  },
  "認知症": {
    reading: "にんちしょう",
    category: "🏥 医療・介護",
  },
  "要介護認定": {
    reading: "ようかいごにんてい",
    category: "🏥 医療・介護",
  },
  "介護保険": {
    reading: "かいごほけん",
    category: "🏥 医療・介護",
  },
  "介護サービス": {
    reading: "かいごさーびす",
    category: "🏥 医療・介護",
  },
  "訪問介護": {
    reading: "ほうもんかいご",
    category: "🏥 医療・介護",
  },
  "教育": {
    reading: "きょういく",
    category: "👨‍👩‍👧 子育て",
  },
  "保育": {
    reading: "ほいく",
    category: "👨‍👩‍👧 子育て",
  },
  "避難": {
    reading: "ひなん",
    category: "🛡️ 防災",
  },
  "交通": {
    reading: "こうつう",
    category: "🏙️ 暮らし",
  },
};

/**
 * タグのメタデータを取得（未登録タグに対する安全なフォールバック付き）
 *
 * 辞書に未登録のタグがある場合でもビルドエラーにせず、
 * タグ名をそのまま読み仮名とし、指定の政策カテゴリー（またはデフォルトカテゴリー）に所属させます。
 * 開発環境（DEV）ではコンソールに警告を出力します。
 */
export function getPolicyTagMeta(
  tagName: string,
  fallbackCategory?: PolicyCategory
): PolicyTagMeta {
  const meta = policyTags[tagName];
  if (meta) {
    return meta;
  }

  if (import.meta.env.DEV) {
    console.warn(`[policyTags] 未登録のタグが使用されています: "${tagName}"（タグ辞書 src/data/policyTags.ts に追加を検討してください）`);
  }

  return {
    reading: tagName,
    category: fallbackCategory || policyCategories[0],
  };
}
