import type { Metadata } from 'next';
import { ArrowUpRight, CalendarDays, Camera, Clock3, Mail, MapPin, MessagesSquare } from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { englishPageContent } from '@/content/en';

export const metadata: Metadata = englishPageContent.metadata;

export default function EnglishPage() {
  return (
    <div lang="en" className="min-h-screen bg-background text-foreground">
      <SiteHeader language="en" />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-navy text-white">
          <div className="tide-grid absolute inset-0 -z-10 opacity-30" />
          <div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
          <div className="shell py-20 sm:py-28 lg:py-32">
            <p className="eyebrow text-mint">Kaohsiung · Taiwan</p>
            <h1 className="mt-6 max-w-5xl text-balance text-[clamp(4rem,11vw,8rem)] font-black leading-[.84] tracking-[-.065em]">
              {englishPageContent.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-balance text-xl font-black leading-8 tracking-[-.025em] text-white sm:text-2xl">
              {englishPageContent.hero.churchName}
            </p>
            <div className="mt-8 max-w-2xl space-y-2 text-lg leading-8 text-white/68">
              {englishPageContent.hero.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="shell grid gap-10 py-20 sm:py-28 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="eyebrow text-coral">About Us</p>
            <div className="mt-5 h-1 w-16 rounded-full bg-coral" />
          </div>
          <div>
            <h2 className="section-title">{englishPageContent.about.title}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-muted">{englishPageContent.about.description}</p>
          </div>
        </section>

        <section className="bg-sand py-20 sm:py-28">
          <div className="shell">
            <p className="eyebrow text-coral">Gatherings</p>
            <h2 className="section-title mt-4 max-w-3xl">Come and join us during the week.</h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {englishPageContent.gatherings.map((gathering, index) => (
                <article key={gathering.name} className={`rounded-[2rem] p-7 sm:p-8 ${index === 2 ? 'bg-mint text-navy' : 'border border-border bg-white text-navy'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="number-chip bg-coral text-white">0{index + 1}</span>
                    <span className="flex items-center gap-2 text-sm font-black"><CalendarDays className="size-4 text-coral" />{gathering.day}</span>
                  </div>
                  <h3 className="mt-10 min-h-16 text-2xl font-black leading-tight tracking-[-.035em]">{gathering.name}</h3>
                  <p className="mt-7 flex items-center gap-3 border-t border-navy/12 pt-6 text-sm font-bold"><Clock3 className="size-4 text-coral" />{gathering.time}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="shell grid gap-6 py-20 sm:py-28 lg:grid-cols-2">
          <article className="rounded-[2.5rem] bg-mint p-8 text-navy sm:p-12">
            <MapPin className="size-9 text-coral" />
            <p className="eyebrow mt-10 text-navy/45">Location</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-.04em]">Next to National Sun Yat-sen University</h2>
            <a href={englishPageContent.location.mapUrl} target="_blank" rel="noreferrer" className="mt-6 flex max-w-md items-start gap-3 text-lg font-bold leading-8 hover:text-coral">
              {englishPageContent.location.address}<ArrowUpRight className="mt-1 size-4 shrink-0" />
            </a>
          </article>

          <article className="rounded-[2.5rem] bg-navy p-8 text-white sm:p-12">
            <p className="eyebrow text-mint">Contact</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-.04em]">Say hello</h2>
            <div className="mt-9 divide-y divide-white/12 border-y border-white/12">
              <a href={englishPageContent.contact.facebook.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5 font-bold text-white/78 transition hover:text-mint">
                <MessagesSquare className="size-5 text-coral" /><span>Facebook: {englishPageContent.contact.facebook.label}</span><ArrowUpRight className="ml-auto size-4" />
              </a>
              <a href={englishPageContent.contact.instagram.url} target="_blank" rel="noreferrer" className="flex items-center gap-4 py-5 font-bold text-white/78 transition hover:text-mint">
                <Camera className="size-5 text-coral" /><span>Instagram: {englishPageContent.contact.instagram.label}</span><ArrowUpRight className="ml-auto size-4" />
              </a>
              <a href={englishPageContent.contact.emailUrl} className="flex items-center gap-4 py-5 font-bold text-white/78 transition hover:text-mint">
                <Mail className="size-5 text-coral" /><span className="break-all">{englishPageContent.contact.email}</span><ArrowUpRight className="ml-auto size-4 shrink-0" />
              </a>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter language="en" />
    </div>
  );
}
