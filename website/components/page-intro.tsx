import type { ReactNode } from 'react';

const toneClasses = {
  navy: 'bg-navy text-white border-white/10',
  mint: 'bg-mint/55 text-navy border-navy/10',
  sand: 'bg-sand text-navy border-navy/10',
};

export function PageIntro({
  kicker,
  title,
  description,
  tone = 'sand',
  children,
}: {
  kicker: string;
  title: string;
  description: string;
  tone?: keyof typeof toneClasses;
  children?: ReactNode;
}) {
  return (
    <section className={`relative isolate overflow-hidden border-b ${toneClasses[tone]}`}>
      {tone === 'navy' && <div className="tide-grid absolute inset-0 -z-10 opacity-20" />}
      <div className="shell py-16 sm:py-24">
        <p className={`eyebrow ${tone === 'navy' ? 'text-mint' : 'text-coral'}`}>{kicker}</p>
        <h1 className="mt-5 max-w-5xl text-balance text-5xl font-black leading-[.98] tracking-[-.055em] sm:text-7xl">{title}</h1>
        <p className={`mt-6 max-w-2xl text-pretty text-lg leading-8 ${tone === 'navy' ? 'text-white/68' : 'text-navy/65'}`}>{description}</p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
