'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { siteDetails, siteNavigation } from '@/content/site';

export function SiteHeader({ language = 'zh' }: { language?: 'zh' | 'en' }) {
  const isEnglish = language === 'en';

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-xl">
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link href={isEnglish ? '/en' : '/'} className="flex items-center gap-2.5 font-black tracking-[-.04em] text-navy" aria-label={isEnglish ? 'One Hope home' : `${siteDetails.name} 首頁`}>
          <span className="grid size-8 place-items-center rounded-full bg-coral text-sm text-white">灣</span>
          <span className="text-xl">Hope</span>
        </Link>
        {!isEnglish && (
          <nav className="hidden items-center gap-6 lg:flex" aria-label="主要導覽">
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-navy/65 transition hover:text-coral">
                {item.label}
              </Link>
            ))}
          </nav>
        )}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href={isEnglish ? '/' : '/en'} className="inline-flex min-h-10 items-center rounded-full border border-navy/15 px-4 text-sm font-black text-navy transition hover:border-coral hover:text-coral">
            {isEnglish ? '中文' : 'EN'}
          </Link>
          {!isEnglish && (
            <Link href="/gatherings" className="hidden rounded-full bg-navy px-4 py-2.5 text-sm font-bold text-white transition hover:bg-coral sm:inline-flex">
              我想來看看
            </Link>
          )}
          {!isEnglish && (
            <Sheet>
              <SheetTrigger className="grid size-10 place-items-center rounded-full border border-border text-navy lg:hidden" aria-label="開啟選單">
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent className="w-[88vw] bg-sand sm:max-w-sm" aria-describedby="mobile-nav-description">
                <SheetHeader className="border-b border-navy/10 p-6">
                  <SheetTitle className="text-xl font-black text-navy">{siteDetails.name}</SheetTitle>
                  <SheetDescription id="mobile-nav-description">選擇想認識的內容</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col p-4" aria-label="行動版導覽">
                  {siteNavigation.map((item, index) => (
                    <SheetClose key={item.href} render={<Link href={item.href} className="flex items-center justify-between border-b border-navy/10 px-2 py-4 text-lg font-black text-navy" />}>
                      <span>{item.label}</span><span className="text-sm font-medium text-coral">0{index + 1}</span>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
