# AI開発入口・プロジェクト案内

このファイルは、AIがこのプロジェクトを理解・更新・検証するための入口です。

作業を始める前に、まず [AI公式情報源マップ.md](AI公式情報源マップ.md) を確認してください。

その後、作業内容に応じて、必要な正式情報源を参照してください。

---

# 1. まず最初に読むもの

- [AI公式情報源マップ.md](AI公式情報源マップ.md)
- [src/content.config.ts](src/content.config.ts)
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)

---

# 2. プロジェクトの基本構造

このサイトは、Astro + TypeScript + Markdownで構成されています。

主要なデータは、次の3つのContent Collectionで管理します。

- policies
- activities
- sources

政策・活動・出典の関係は、基本的に policy → activity / source の参照関係で表現します。

---

# 3. 重要な情報源

- [src/content.config.ts](src/content.config.ts): 実装上の正式なSchema
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md): 政策データの意味と運用ルール
- [src/docs/01_設計原則.md](src/docs/01_設計原則.md): サイト全体の設計思想
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md): AIの作業ルール

---

# 4. 変更するときの基本方針

- 仕様と実装が異なる場合は、勝手にどちらかを採用しない
- 変更前に対象ファイルと関連仕様を確認する
- 必要最小限の変更に留める
- 変更後は npm run build で確認する

---

# 5. 追加で確認すべき文書

作業内容に応じて、次を参照してください。

- 政策本文: [src/docs/02_コンテンツ執筆ルール.md](src/docs/02_コンテンツ執筆ルール.md)
- 出典・根拠: [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- UI: [src/docs/04_UI・デザインルール.md](src/docs/04_UI・デザインルール.md)
- アクセシビリティ: [src/docs/05_アクセシビリティチェック.md](src/docs/05_アクセシビリティチェック.md)
- SEO: [src/docs/06_SEO・情報設計.md](src/docs/06_SEO・情報設計.md)
- 公開・保守: [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)

