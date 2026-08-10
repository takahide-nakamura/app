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

  /**
   * 関連活動データ
   *
   * relatedActivities は Content Collection Reference
   * なので、getEntries() で実体を取得する。
   */
  const relatedActivities = await getEntries(
    content.relatedActivities
  );

  const relatedActivitiesData = relatedActivities.map((activity) => ({
    title: activity.data.title,
    summary: activity.data.summary,
    href: `/activity/${activity.id}/`,
  }));

  /**
   * 参考資料データ
   *
   * references も Content Collection Reference
   * なので、getEntries() で実体を取得する。
   */
  const references = await getEntries(content.references);

  const referencesData = references.map((source) => ({
    title: source.data.title,
    publisher: source.data.publisher,
    year: source.data.year,
    url: source.data.url,
  }));

  return {
    content,
    relatedActivities: relatedActivitiesData,
    references: referencesData,
  };
}