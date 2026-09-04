import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function ContentCard({
  href,
  eyebrow,
  title,
  description,
  meta,
  index,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
  index: number;
}) {
  return (
    <article className="group grid gap-6 border-t border-navy/15 py-8 sm:grid-cols-[4.5rem_1fr_auto] sm:items-start sm:py-10">
      <span className="text-sm font-black text-coral">0{index + 1}</span>
      <div>
        <p className="eyebrow text-navy/45">{eyebrow}</p>
        <h2 className="mt-3 text-balance text-2xl font-black leading-tight tracking-[-.035em] text-navy sm:text-3xl">
          <Link href={href} className="outline-none after:absolute focus-visible:underline">{title}</Link>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">{description}</p>
        <p className="mt-4 text-sm font-bold text-navy/48">{meta}</p>
      </div>
      <Link href={href} aria-label={`閱讀：${title}`} className="grid size-11 place-items-center rounded-full border border-navy/15 text-navy transition group-hover:-translate-y-1 group-hover:bg-coral group-hover:text-white focus-visible:ring-4 focus-visible:ring-ring/30">
        <ArrowUpRight className="size-5" />
      </Link>
    </article>
  );
}
