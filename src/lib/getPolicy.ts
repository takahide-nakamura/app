import { getCollection, getEntries } from "astro:content";

export async function getPolicy(slug: string) {
  const allPolicies = await getCollection("policies");

  const entry = allPolicies.find(
    (p) => p.id === slug || p.id === `${slug}.md`
  );

  if (!entry) {
    throw new Error(`Policy content not found for slug: ${slug}`);
  }

  const content = entry.data;

  // 関連活動データを参照から取得
  const activityEntries = await getEntries(
    content.relatedActivities
  );

  const relatedActivities = activityEntries.map((activity) => ({
    title: activity.data.title,
    summary: activity.data.summary,
    href: `/activity/${activity.id}/`,
  }));

  // 参考資料データを参照から取得
  const sourceEntries = await getEntries(
    content.references
  );

  const references = sourceEntries.map((source) => ({
    title: source.data.title,
    publisher: source.data.publisher,
    year: source.data.year,
    url: source.data.url,
  }));

  return {
    content,
    relatedActivities,
    references,
  };
}