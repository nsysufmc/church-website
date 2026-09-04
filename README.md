# 灣 Hope 教會網站

面向大學生與第一次接觸教會朋友的繁體中文網站。網站程式位於 `website/`，採 React、TypeScript、Vinext（Next.js App Router 相容）與 Tailwind CSS，產出可直接交由 Vercel 託管的靜態網站。

## 本機啟動

```bash
cd website
pnpm install
pnpm dev
```

開啟終端機顯示的本機網址即可預覽。正式建置使用：

```bash
pnpm build
```

建置結果會產生在 `website/dist/client/`。Vercel 專案的 Root Directory 請設為 `website`；`vercel.json` 已包含建置與輸出設定。

## 維護內容

- 共用文案、導覽與聚會資料：`website/content/site.ts`
- 每篇講道：`website/content/sermons/` 內的一個 JSON 檔
- 每篇神學文章：`website/content/articles/` 內的一個 JSON 檔
- 每個活動：`website/content/events/` 內的一個 JSON 檔

新增講道、文章或活動時，複製同類型既有 JSON 檔、修改內容並使用不重複的 `slug` 即可；列表與內容頁會自動納入新檔案，不需要修改頁面程式。

教會名稱、固定聚會、地址與聯絡方式為正式資料；講道、神學文章、活動與講員資料目前仍為示範內容。
