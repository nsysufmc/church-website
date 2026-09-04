import Link from 'next/link';
import { siteDetails, siteNavigation } from '@/content/site';

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="shell grid gap-12 py-14 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <Link href="/" className="text-3xl font-black tracking-[-.05em]">{siteDetails.name}</Link>
          <p className="mt-3 max-w-sm leading-7 text-white/58">在高雄西子灣，一起生活、提問、相信。</p>
        </div>
        <nav className="flex max-w-xl flex-wrap gap-x-5 gap-y-3 sm:justify-end" aria-label="頁尾導覽">
          {siteNavigation.map((item) => <Link key={item.href} href={item.href} className="text-sm font-bold text-white/62 hover:text-mint">{item.label}</Link>)}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="shell py-5 text-xs text-white/45">© 2026 {siteDetails.name} 教會</div>
      </div>
    </footer>
  );
}
