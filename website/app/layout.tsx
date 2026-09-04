import type { Metadata } from 'next';
import { siteDetails } from '@/content/site';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${siteDetails.name}｜在港邊一起生活、提問、相信`,
    template: `%s｜${siteDetails.name}`,
  },
  description: `${siteDetails.name} 是一個在高雄西子灣，陪伴大學生與城市新朋友探索信仰、建立真實關係的教會群體。`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
