import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Clock3, UserRound } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageFrame } from '@/components/page-frame';
import { getSermon, sermons } from '@/lib/content';

export const dynamicParams = false;
export function generateStaticParams() { return sermons.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const sermon = getSermon((await params).slug);
  return sermon ? { title: sermon.title, description: sermon.summary } : {};
}

export default async function SermonDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const sermon = getSermon((await params).slug);
  if (!sermon) notFound();

  return (
    <PageFrame>
      <article>
        <header className="relative isolate overflow-hidden bg-navy text-white">
          <div className="tide-grid absolute inset-0 -z-10 opacity-20" />
          <div className="shell py-14 sm:py-24">
            <Link href="/sermons" className="inline-flex items-center gap-2 text-sm font-bold text-white/55 hover:text-mint"><ArrowLeft className="size-4" />所有講道</Link>
            <p className="eyebrow mt-12 text-mint">{sermon.series}</p>
            <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black leading-tight tracking-[-.05em] sm:text-6xl">{sermon.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">{sermon.summary}</p>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/60">
              <span className="flex items-center gap-2"><BookOpen className="size-4 text-coral" />{sermon.scripture}</span>
              <span className="flex items-center gap-2"><UserRound className="size-4 text-coral" />{sermon.speaker}</span>
              <span className="flex items-center gap-2"><Clock3 className="size-4 text-coral" />{sermon.duration}</span>
            </div>
          </div>
        </header>

        <div className="shell grid gap-12 py-16 sm:py-24 lg:grid-cols-[1fr_20rem]">
          <div className="max-w-3xl space-y-7 text-lg leading-9 text-navy/78">
            {sermon.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <aside className="h-fit rounded-[2rem] bg-mint/55 p-7">
            <p className="eyebrow text-coral">帶回生活</p>
            <ul className="mt-6 space-y-5">
              {sermon.takeaways.map((takeaway, index) => <li key={takeaway} className="grid grid-cols-[2rem_1fr] gap-2 text-sm font-bold leading-6 text-navy"><span className="text-coral">0{index + 1}</span>{takeaway}</li>)}
            </ul>
          </aside>
        </div>
      </article>
    </PageFrame>
  );
}
