# AI公式情報源マップ

この文書は、「もっと住みやすい高槻へ」プロジェクトをAIが理解・分析・変更・検証・保守するための、情報アクセス設計です。

目的は、AIが「何を読めばよいか」を迷わず判断できるようにすることです。ここでは、情報源の役割・優先順位・作業別の参照ルート・矛盾時の扱いを定義します。

---

# 1. この文書の役割

この文書は、次の2つを分けて扱います。

- AI運用ルール: AIがどのように仕事をするか
- AI公式情報源マップ: AIが何を情報源として、どの順番で確認するか

両者は別物です。AI運用ルールは作業方法、情報源マップは情報の入口と参照経路です。

---

# 2. 情報源の階層

AIは、作業内容に応じて、以下の階層から必要な情報へ到達します。

## 2-1. 入口

最初に確認する場所です。

- [AGENTS.md](AGENTS.md)
- [CLAUDE.md](CLAUDE.md)
- [AI公式情報源マップ.md](AI公式情報源マップ.md)

## 2-2. 公式仕様

このレベルは、プロジェクト固有の正式な仕様です。

- [src/content.config.ts](src/content.config.ts)
  - 実装上のスキーマ
  - フィールド名・型・必須・任意・referenceなどを定義
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
  - 政策・活動・出典の意味と運用ルール

## 2-3. 設計思想・運用原則

- [src/docs/01_設計原則.md](src/docs/01_設計原則.md)
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md)

## 2-4. 専門ルール

作業内容に応じて参照します。

- [src/docs/02_コンテンツ執筆ルール.md](src/docs/02_コンテンツ執筆ルール.md)
- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- [src/docs/04_UI・デザインルール.md](src/docs/04_UI・デザインルール.md)
- [src/docs/05_アクセシビリティチェック.md](src/docs/05_アクセシビリティチェック.md)
- [src/docs/06_SEO・情報設計.md](src/docs/06_SEO・情報設計.md)
- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)

## 2-5. 実装・実データ

- [src/content](src/content)
- [src/data](src/data)
- [src/lib](src/lib)
- [src/pages](src/pages)
- [src/components](src/components)

## 2-6. 履歴・運用記録

- [src/docs/CHANGELOG.md](src/docs/CHANGELOG.md)
- [開発ロードマップ.md](開発ロードマップ.md)

## 2-7. 外部一次情報

外部情報は、政策サイトとして重要です。

優先は次の順です。

1. 法律
2. 条例
3. 公的資料
4. 公的統計
5. 学術論文
6. 国際機関資料
7. 信頼できる二次資料
8. それ以外

## 2-8. AI自身の一般知識

AIの一般知識は補助情報です。正式情報源ではありません。

特に、法律・制度・料金・統計・現行のWeb仕様などは、AIの記憶だけで断定しません。必要に応じて一次資料で確認します。

---

# 3. 正式情報源と参照情報源の区別

## 3-1. 正式情報源

次の情報源は、プロジェクトの正式な判断根拠として扱います。

- [src/content.config.ts](src/content.config.ts)
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
- [src/docs/01_設計原則.md](src/docs/01_設計原則.md)
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md)

## 3-2. 参照情報源

次の情報源は、作業の補助や文脈確認に使います。

- [src/docs/02_コンテンツ執筆ルール.md](src/docs/02_コンテンツ執筆ルール.md)
- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- [src/docs/04_UI・デザインルール.md](src/docs/04_UI・デザインルール.md)
- [src/docs/05_アクセシビリティチェック.md](src/docs/05_アクセシビリティチェック.md)
- [src/docs/06_SEO・情報設計.md](src/docs/06_SEO・情報設計.md)
- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)
- 実装や実データ
- 外部一次情報

---

# 4. 仕様と実装の関係

このプロジェクトでは、仕様と実装が完全に一致していない場合があります。

そのため、AIは勝手にどちらが正しいかを決めません。

## 4-1. 矛盾を見つけたときの流れ

1. 矛盾箇所を特定する
2. 実装と仕様の両方を確認する
3. 影響範囲を確認する
4. 人間に報告する
5. 正式な変更判断を受ける

## 4-2. 重要な判断

特に次の内容は、AIが独断で決めません。

- データ構造の変更
- 重要な設計変更
- 公開判断
- 政策判断
- 外部サービスの導入
- セキュリティ上重要な変更

---

# 5. 作業別の参照ルート

## 5-1. 政策を新規作成する

- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
- [src/content.config.ts](src/content.config.ts)
- [src/docs/02_コンテンツ執筆ルール.md](src/docs/02_コンテンツ執筆ルール.md)
- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- 既存の政策Markdown

## 5-2. 政策を修正する

- 対象の政策Markdown
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
- [src/lib/getPolicy.ts](src/lib/getPolicy.ts)
- [src/pages/policy/[slug].astro](src/pages/policy/[slug].astro)

## 5-3. スキーマを変更する

- [src/content.config.ts](src/content.config.ts)
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
- 影響するページ・コンポーネント
- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)

## 5-4. UIを変更する

- [src/docs/04_UI・デザインルール.md](src/docs/04_UI・デザインルール.md)
- [src/docs/05_アクセシビリティチェック.md](src/docs/05_アクセシビリティチェック.md)
- 対象コンポーネント
- 対象ページ

## 5-5. アクセシビリティを変更する

- [src/docs/05_アクセシビリティチェック.md](src/docs/05_アクセシビリティチェック.md)
- 対象コンポーネント
- 対象ページ

## 5-6. SEOを変更する

- [src/docs/06_SEO・情報設計.md](src/docs/06_SEO・情報設計.md)
- 対象ページ
- 必要に応じて [src/components/SEO.astro](src/components/SEO.astro)

## 5-7. 出典・エビデンスを追加する

- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- [src/content/sources](src/content/sources)
- 対象の政策Markdown

## 5-8. Activityを追加・修正する

- [src/content/activities](src/content/activities)
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md)
- [src/pages/activity.astro](src/pages/activity.astro)

## 5-9. Sourceを追加・修正する

- [src/content/sources](src/content/sources)
- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)
- 対象の政策Markdown

## 5-10. 市民の声を政策へ反映する

- [src/pages/opinions.astro](src/pages/opinions.astro)
- [src/docs/02_コンテンツ執筆ルール.md](src/docs/02_コンテンツ執筆ルール.md)
- [src/docs/03_エビデンス運用ルール.md](src/docs/03_エビデンス運用ルール.md)

## 5-11. バグを修正する

- 対象実装ファイル
- 関連する仕様・ルール
- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)

## 5-12. npm run buildが失敗した

- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)
- 関連する実装ファイル
- [src/content.config.ts](src/content.config.ts)

## 5-13. Webサイトを公開する

- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)
- [README.md](README.md)
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md)

## 5-14. 既存設計を変更する

- [src/docs/01_設計原則.md](src/docs/01_設計原則.md)
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md)
- 影響範囲の確認

## 5-15. AIが新しい機能を提案する

- [src/docs/01_設計原則.md](src/docs/01_設計原則.md)
- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md)
- [src/docs/07_公開・保守手順.md](src/docs/07_公開・保守手順.md)

---

# 6. AIが自律的にできること / 人間確認が必要なこと

## 6-1. AIが自律的に実施してよいこと

- 情報整理
- 変更案の提示
- ドキュメント更新案の作成
- 実装の修正
- ビルド検証
- 既存構造の分析

## 6-2. AIが提案まで行うこと

- 新しい構成案
- 改善案
- ルール変更案
- データ構造の提案

## 6-3. 人間の承認が必要なこと

- 政策判断
- 公開判断
- 重要な設計変更
- データ構造の変更
- 外部サービス導入
- セキュリティ上重要な変更

---

# 7. 既存文書との関係

この文書は、既存の設計書群を置き換えるものではなく、入口として機能します。

- [src/docs/08_AI運用ルール.md](src/docs/08_AI運用ルール.md) は作業ルール
- [AI公式情報源マップ.md](AI公式情報源マップ.md) は情報アクセス設計
- [src/docs/09_政策データ構造仕様書.md](src/docs/09_政策データ構造仕様書.md) はデータ仕様

これらを分けて管理することで、重複を減らし、AIが迷いにくい構造にします。
