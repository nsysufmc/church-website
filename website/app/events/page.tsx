import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { events } from '@/lib/content';

export const metadata: Metadata = { title: '活動', description: '灣Hope近期活動與新朋友聚會。' };

export default function EventsPage() {
  return (
    <PageFrame>
      <PageIntro kicker="What’s On" title="一起做些有意思的事。" description="從一頓飯、一段散步，到一場誠實對話。選一個你感興趣的，來認識我們。" tone="navy" />
      <section className="shell py-16 sm:py-24">
        <div className="mb-10 rounded-2xl border border-coral/25 bg-coral/8 px-5 py-4 text-sm font-bold leading-6 text-navy">以下活動為示範內容，日期與報名方式請於正式上線前確認。</div>
        <div className="grid gap-5 lg:grid-cols-3">
          {events.map((event, index) => (
            <article key={event.slug} className={`group flex min-h-[30rem] flex-col rounded-[2rem] p-7 ${index === 1 ? 'bg-coral text-white' : 'border border-border bg-white text-navy'}`}>
              <div className="flex items-center justify-between">
                <span className={`rounded-full px-3 py-1 text-xs font-black ${index === 1 ? 'bg-white/15' : 'bg-mint'}`}>{event.tag}</span>
                <span className={`text-xs font-black ${index === 1 ? 'text-white/55' : 'text-coral'}`}>0{index + 1}</span>
              </div>
              <h2 className="mt-12 text-3xl font-black leading-tight tracking-[-.045em]">{event.title}</h2>
              <p className={`mt-4 leading-7 ${index === 1 ? 'text-white/70' : 'text-ink-muted'}`}>{event.summary}</p>
              <div className={`mt-auto space-y-3 border-t pt-6 text-sm font-bold ${index === 1 ? 'border-white/20' : 'border-navy/10'}`}>
                <p className="flex items-center gap-3"><CalendarDays className="size-4" />{event.dateLabel}</p>
                <p className="flex items-center gap-3"><Clock3 className="size-4" />{event.time}</p>
                <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0" />{event.location}</p>
              </div>
              <Link href={`/events/${event.slug}`} className={`mt-6 flex items-center justify-between rounded-full border px-5 py-3 text-sm font-black transition ${index === 1 ? 'border-white/30 hover:bg-white hover:text-coral' : 'border-navy/15 hover:bg-navy hover:text-white'}`}>活動詳情 <ArrowUpRight className="size-4" /></Link>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
