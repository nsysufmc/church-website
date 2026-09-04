import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { aboutContent } from '@/content/site';

export const metadata: Metadata = { title: '教會介紹', description: '認識灣Hope的故事、我們重視的事，以及我們所相信的群體生活。' };

export default function AboutPage() {
  return (
    <PageFrame>
      <PageIntro kicker="About WanHope" title="信仰不是獨自完成的功課。" description="我們想成為一個真實、有空間，也願意一起走的群體。" tone="mint" />

      <section className="shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-coral">我們的故事</p>
          <div className="mt-5 h-1 w-16 rounded-full bg-coral" />
        </div>
        <div className="space-y-7 text-pretty text-xl font-medium leading-9 tracking-[-.02em] text-navy sm:text-2xl sm:leading-10">
          {aboutContent.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="shell">
          <p className="eyebrow text-mint">我們重視的事</p>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">成為一個可以真實相遇的地方。</h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] bg-white/12 lg:grid-cols-3">
            {aboutContent.values.map((value) => (
              <article key={value.number} className="min-h-72 bg-navy p-7 sm:p-9">
                <span className="text-xs font-black tracking-[.2em] text-coral">{value.number}</span>
                <h3 className="mt-14 text-2xl font-black tracking-[-.035em]">{value.title}</h3>
                <p className="mt-4 leading-7 text-white/60">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-20 sm:py-28">
        <div className="rounded-[2.5rem] bg-coral p-8 text-white sm:p-12 lg:flex lg:items-end lg:justify-between lg:gap-10">
          <div>
            <p className="eyebrow text-white/65">Come as you are</p>
            <h2 className="mt-4 max-w-2xl text-balance text-4xl font-black leading-tight tracking-[-.045em] sm:text-5xl">不必等到準備好，現在的你就可以來。</h2>
          </div>
          <Link href="/gatherings" className="button mt-8 shrink-0 bg-white text-navy hover:-translate-y-0.5 lg:mt-0">看看聚會資訊 <ArrowRight /></Link>
        </div>
      </section>
    </PageFrame>
  );
}
