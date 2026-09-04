# 內容維護說明

這個資料夾是網站內容區。頁面版型放在 `app/` 與 `components/`，日常新增內容不需要改動那些檔案。

## 新增內容

1. 在對應資料夾複製一個現有的 `.json` 檔。
2. 以 `YYYY-MM-DD-short-title.json` 命名。
3. 修改欄位內容；`slug` 必須使用小寫英文字母與連字號，且不可重複。
4. 執行 `pnpm build`。系統會自動把新檔案加入列表並建立內容頁。

資料夾用途：

- `sermons/`：講道與信息筆記
- `articles/`：神學文章
- `events/`：活動資訊
- `site.ts`：首頁、教會介紹、固定聚會與聯絡資訊

所有日期排序都使用 `YYYY-MM-DD` 格式的 `date` 或 `published` 欄位。`dateLabel` 則是顯示給讀者看的文字，可以自由調整。
