import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Clock3, MapPin } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageFrame } from '@/components/page-frame';
import { events, getEvent } from '@/lib/content';

export const dynamicParams = false;
export function generateStaticParams() { return events.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const event = getEvent((await params).slug);
  return event ? { title: event.title, description: event.summary } : {};
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const event = getEvent((await params).slug);
  if (!event) notFound();

  return (
    <PageFrame>
      <article>
        <header className="bg-coral text-white">
          <div className="shell py-14 sm:py-24">
            <Link href="/events" className="inline-flex items-center gap-2 text-sm font-bold text-white/65 hover:text-white"><ArrowLeft className="size-4" />所有活動</Link>
            <p className="eyebrow mt-12 text-white/62">{event.tag}</p>
            <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-[1.02] tracking-[-.055em] sm:text-7xl">{event.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/75">{event.summary}</p>
          </div>
        </header>
        <div className="shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_22rem]">
          <div>
            <p className="eyebrow text-coral">活動說明</p>
            <div className="mt-7 max-w-3xl space-y-6 text-lg leading-9 text-navy/72">
              {event.details.map((detail) => <p key={detail}>{detail}</p>)}
            </div>
            <div className="mt-10 rounded-2xl border border-coral/25 bg-coral/8 p-5 text-sm font-bold leading-6 text-navy">此為示範活動。正式上線前，請確認日期、地點與報名方式。</div>
          </div>
          <aside className="h-fit rounded-[2rem] bg-navy p-7 text-white">
            <h2 className="text-2xl font-black">活動資訊</h2>
            <div className="mt-7 space-y-5 text-sm font-bold text-white/72">
              <p className="flex items-start gap-3"><CalendarDays className="mt-0.5 size-4 shrink-0 text-mint" />{event.dateLabel}</p>
              <p className="flex items-start gap-3"><Clock3 className="mt-0.5 size-4 shrink-0 text-mint" />{event.time}</p>
              <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-mint" />{event.location}</p>
            </div>
            <Link href="/contact" className="button button-coral mt-8 w-full">詢問參加方式</Link>
          </aside>
        </div>
      </article>
    </PageFrame>
  );
}
