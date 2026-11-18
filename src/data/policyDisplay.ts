export type PolicyDisplayMode = "summary" | "full";

/** サイト全体の表示モード（本番環境に適用される） */
export const POLICY_DISPLAY_MODE: PolicyDisplayMode = "summary";

export type DetailRelease = "auto" | "summary" | "full";

export function resolveDisplayMode(
  detailRelease?: DetailRelease | null
): PolicyDisplayMode {
  if (detailRelease === "full" || detailRelease === "summary") {
    return detailRelease;
  }
  return POLICY_DISPLAY_MODE;
}

export function shouldShowDetail(
  detailRelease?: DetailRelease | null
): boolean {
  return import.meta.env.DEV || resolveDisplayMode(detailRelease) === "full";
}
