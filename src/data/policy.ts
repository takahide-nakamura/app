export type PolicyStatus =
  | "published"
  | "planned";

export type PolicyCategory =
  | "医療・介護"
  | "子育て"
  | "暮らし"
  | "環境"
  | "防災";

export interface Policy {
  id: string;
  title: string;
  category: PolicyCategory;
  summary: string;
  tags: string[];
  href: string;
  status: PolicyStatus;
}