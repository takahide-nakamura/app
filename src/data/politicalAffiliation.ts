/**
 * 政党・肩書・ロゴの共通設定。
 *
 * 将来、政党名・役職・ロゴ差し替え・所属表示のON/OFFを変更する際は、
 * このファイルだけを更新すれば、ヘッダー・フッター・SEO・JSON-LD側へ反映される。
 */
export const politicalAffiliation = {
  enabled: true,
  partyName: "国民民主党",
  role: "政策委員（高槻市担当）",
  officialUrl: "",
  logoSrc: "/app/images/party/kokumin-logo.png",
  get logoAlt() {
    return `${this.partyName} ロゴ`;
  },
  get displayName() {
    return `${this.partyName} ${this.role}`;
  },
};
