import { getCollection } from "astro:content";
import { activities } from "../data/activities";
import { sources } from "../data/sources";

export async function getPolicy(slug: string) {
  const allPolicies = await getCollection("policies");
  const entry = allPolicies.find((p) => p.id === slug || p.id === `${slug}.md`);

  if (!entry) {
    throw new Error(`Policy content not found for slug: ${slug}`);
  }

  const content = entry.data;

  // 関連活動データの抽出
  const relatedActivities = content.relatedActivities
    ? activities.filter((activity) => content.relatedActivities?.includes(activity.id))
    : [];

  // 参考資料データの抽出
  const references = content.references
    ? content.references.map((refId) => sources[refId as keyof typeof sources]).filter(Boolean)
    : [];

  return {
    content,
    relatedActivities,
    references,
  };
}