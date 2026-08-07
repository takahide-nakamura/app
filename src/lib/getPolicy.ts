import { getCollection } from "astro:content";
import { sources } from "../data/sources";

export async function getPolicy(slug: string) {
  const allPolicies = await getCollection("policies");
  const allActivities = await getCollection("activities");
  const entry = allPolicies.find((p) => p.id === slug || p.id === `${slug}.md`);
  

  if (!entry) {
    throw new Error(`Policy content not found for slug: ${slug}`);
  }

  const content = entry.data;

  // 関連活動データの抽出
const relatedActivities = content.relatedActivities
  ? allActivities
      .filter((activity) =>
        content.relatedActivities.includes(activity.id)
      )
      .map((activity) => ({
        title: activity.data.title,
        summary: activity.data.summary,
        href: `/activity/${activity.id}/`,
      }))
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