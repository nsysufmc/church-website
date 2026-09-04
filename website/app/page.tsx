import Link from 'next/link';
import { ArrowRight, CalendarDays, Clock3, MapPin, Play } from 'lucide-react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { homeContent, siteDetails, weeklyGathering } from '@/content/site';
import { articles, events, sermons } from '@/lib/content';

export default function Home() {
  const latestSermon = sermons[0];
  const latestArticles = articles.slice(0, 2);
  const upcomingEvents = events.slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/10 bg-navy text-white">
          <div className="tide-grid absolute inset-0 -z-10 opacity-30" />
          <div className="absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
          <div className="shell grid min-h-[calc(100svh-4.5rem)] items-center gap-12 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div className="max-w-3xl">
              <p className="eyebrow text-mint">高雄・西子灣</p>
              <h1 className="mt-6 text-balance text-[clamp(3.4rem,9vw,7.6rem)] font-black leading-[.84] tracking-[-.065em]">
                {homeContent.heroTitle}
              </h1>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-white/70 sm:text-xl">
                {homeContent.heroDescription}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link className="button button-coral" href="/gatherings">
                  第一次來？從這裡開始 <ArrowRight aria-hidden="true" />
                </Link>
                <Link className="button button-ghost-light" href="/about">
                  認識{siteDetails.name}
                </Link>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="relative mx-auto aspect-square w-full max-w-[30rem]">
                <div className="absolute inset-[7%] rounded-full border border-white/15" />
                <div className="absolute inset-[17%] rounded-full border border-dashed border-mint/50" />
                <div className="absolute inset-[27%] grid place-items-center rounded-full bg-white text-navy shadow-[0_30px_90px_rgba(0,0,0,.32)]">
                  <div className="text-center">
                    <span className="block text-xs font-bold tracking-[.28em] text-coral">YOU ARE</span>
                    <span className="mt-2 block text-4xl font-black tracking-[-.06em] sm:text-6xl">WELCOME</span>
                    <span className="mt-3 block text-sm font-semibold text-navy/50">不用先成為誰</span>
                  </div>
                </div>
                <span className="orbit-dot orbit-dot-one" />
                <span className="orbit-dot orbit-dot-two" />
                <span className="absolute bottom-[6%] left-[5%] max-w-40 -rotate-3 rounded-2xl bg-mint px-4 py-3 text-sm font-bold leading-5 text-navy shadow-xl">
                  信仰可以問，生活可以聊。
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-mint/35">
          <div className="shell grid gap-6 py-7 md:grid-cols-[1fr_auto_auto_auto] md:items-center">
            <div>
              <p className="eyebrow text-navy/55">本週聚會</p>
              <h2 className="mt-1 text-xl font-black tracking-tight text-navy">{weeklyGathering.name}</h2>
            </div>
            <p className="detail-line"><CalendarDays />{weeklyGathering.day}</p>
            <p className="detail-line"><Clock3 />{weeklyGathering.time}</p>
            <a href={siteDetails.mapUrl} target="_blank" rel="noreferrer" className="detail-line hover:text-coral"><MapPin />{weeklyGathering.venue}</a>
          </div>
        </section>

        <section className="shell py-20 sm:py-28">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow text-coral">剛剛好，可以靠岸</p>
              <h2 className="section-title mt-4">一間陪你把信仰，活進真實日常的教會。</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="feature-card bg-navy text-white">
                <span className="number-chip">01</span>
                <h3>沒有標準答案，也可以先來坐坐</h3>
                <p>我們歡迎疑問、不同背景，還有還沒想清楚的你。</p>
              </article>
              <article className="feature-card border border-border bg-white">
                <span className="number-chip bg-coral text-white">02</span>
                <h3>在城市與校園之間，練習成為鄰舍</h3>
                <p>從崇拜、餐桌到小組，讓關係比活動更靠近生活。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-sand py-20 sm:py-28">
          <div className="shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-coral">最新講道</p>
              <h2 className="section-title mt-4 max-w-3xl">{latestSermon.title}</h2>
              <p className="mt-5 text-base leading-8 text-ink-muted">{latestSermon.scripture}・{latestSermon.speaker}・{latestSermon.dateLabel}</p>
            </div>
            <Link className="button button-dark" href="/sermons">
              <Play aria-hidden="true" /> 聽本週講道
            </Link>
          </div>
        </section>

        <section className="shell py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-coral">近期活動</p>
              <h2 className="section-title mt-4">一起出現在彼此的生活裡。</h2>
            </div>
            <Link href="/events" className="text-sm font-black text-navy hover:text-coral">查看全部活動 →</Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {upcomingEvents.map((event, index) => (
              <Link key={event.slug} href={`/events/${event.slug}`} className={`group rounded-[2rem] p-7 transition hover:-translate-y-1 sm:p-9 ${index === 0 ? 'bg-coral text-white' : 'bg-mint text-navy'}`}>
                <div className="flex items-center justify-between text-xs font-black"><span>{event.tag}</span><span>{event.dateLabel}</span></div>
                <h3 className="mt-16 max-w-lg text-3xl font-black leading-tight tracking-[-.045em]">{event.title}</h3>
                <p className={`mt-4 max-w-xl leading-7 ${index === 0 ? 'text-white/70' : 'text-navy/62'}`}>{event.summary}</p>
                <span className="mt-8 inline-flex text-sm font-black">活動詳情 ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-white py-20 sm:py-28">
          <div className="shell grid gap-12 lg:grid-cols-[.6fr_1.4fr]">
            <div>
              <p className="eyebrow text-coral">慢慢想清楚</p>
              <h2 className="section-title mt-4">信仰與生活的閱讀筆記。</h2>
              <Link href="/articles" className="button button-dark mt-7">閱讀所有文章</Link>
            </div>
            <div>
              {latestArticles.map((article, index) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group grid gap-3 border-t border-navy/15 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start">
                  <span className="text-xs font-black text-coral">0{index + 1}</span>
                  <div><p className="eyebrow text-navy/42">{article.category}</p><h3 className="mt-2 text-2xl font-black tracking-[-.035em] text-navy group-hover:text-coral">{article.title}</h3></div>
                  <span className="text-sm font-black text-navy/45">{article.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
