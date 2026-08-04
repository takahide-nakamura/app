export const policyCategories = [
  "🏥 医療・介護",
  "👨‍👩‍👧 子育て",
  "🛡️ 防災",
  "🏙️ 暮らし",
] as const;

export type PolicyCategory = (typeof policyCategories)[number];