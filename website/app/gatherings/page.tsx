import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock3, MapPin, UsersRound } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { gatherings, siteDetails } from '@/content/site';

export const metadata: Metadata = { title: '聚會資訊', description: `${siteDetails.name} 週間與週末聚會的時間與地點。` };

export default function GatheringsPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Gather Together" title="找一個適合你的時間，來坐坐。" description="你可以先參加崇拜聚會，也可以直接來週間聚會。沒有固定流程要背，也不會突然被點名。" tone="navy">
        <Link href="/contact" className="button button-coral">第一次來想先問問 <ArrowRight /></Link>
      </PageIntro>

      <section className="shell py-16 sm:py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {gatherings.map((gathering, index) => (
            <article key={gathering.name} className={`rounded-[2rem] p-7 sm:p-8 ${index === 0 ? 'bg-mint text-navy' : 'border border-border bg-white text-navy'}`}>
              <div className="flex items-center justify-between gap-4">
                <span className="number-chip bg-coral text-white">0{index + 1}</span>
                <span className="rounded-full border border-navy/15 px-3 py-1 text-xs font-black">{gathering.category}</span>
              </div>
              <h2 className="mt-10 text-3xl font-black tracking-[-.045em]">{gathering.name}</h2>
              <div className="mt-8 space-y-3 border-t border-navy/12 pt-6 text-sm font-bold">
                <p className="flex items-center gap-3"><CalendarDays className="size-4 text-coral" />{gathering.day}</p>
                <p className="flex items-center gap-3"><Clock3 className="size-4 text-coral" />{gathering.time}</p>
                <a href={siteDetails.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-coral"><MapPin className="mt-0.5 size-4 shrink-0 text-coral" />{gathering.venue}</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand py-20 sm:py-24">
        <div className="shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <UsersRound className="size-10 text-coral" />
            <h2 className="section-title mt-6">第一次來，大概會發生什麼？</h2>
          </div>
          <ol className="space-y-5">
            {[
              ['提早 10 分鐘抵達', '入口會有人打招呼；如果你想安靜入座，也完全可以。'],
              ['一起唱歌、聽信息', '歌詞會顯示出來，不熟悉也不用勉強跟唱。'],
              ['聚會後留下或離開', '通常有人一起吃午餐。想多認識大家就留下，臨時有事也可以先走。'],
            ].map(([title, body], index) => (
              <li key={title} className="grid gap-4 rounded-2xl bg-white p-6 sm:grid-cols-[3rem_1fr]">
                <span className="text-sm font-black text-coral">0{index + 1}</span>
                <div><h3 className="font-black text-navy">{title}</h3><p className="mt-2 leading-7 text-ink-muted">{body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </PageFrame>
  );
}
