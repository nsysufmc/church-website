import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Camera, Mail, MapPin, MessageCircle } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { contactContent } from '@/content/site';

export const metadata: Metadata = { title: '聯絡我們', description: '第一次來、想找小組或想多認識灣Hope，都歡迎與我們聯絡。' };

export default function ContactPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Say Hello" title="有問題，或只是想先打個招呼？" description="第一次來、想找小組、需要有人聊聊，都可以傳訊息給我們。" tone="mint" />
      <section className="shell grid gap-8 py-16 sm:py-24 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[2.5rem] bg-navy p-8 text-white sm:p-12">
          <MessageCircle className="size-10 text-mint" />
          <h2 className="mt-8 max-w-lg text-balance text-4xl font-black leading-tight tracking-[-.045em]">不用想好完整的問題，再來找我們。</h2>
          <p className="mt-5 max-w-lg leading-8 text-white/65">簡單告訴我們你的名字，以及你想知道的事就好。{contactContent.responseTime}。</p>
          <a href={`mailto:${contactContent.email}`} className="button button-coral mt-9">寄一封信給灣Hope <ArrowRight /></a>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <Mail className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Email</p>
            <a href={`mailto:${contactContent.email}`} className="mt-2 block break-all text-xl font-black text-navy hover:text-coral">{contactContent.email}</a>
          </div>
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <Camera className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Instagram</p>
            <p className="mt-2 text-xl font-black text-navy">{contactContent.instagram}</p>
          </div>
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <MapPin className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Location</p>
            <p className="mt-2 text-xl font-black text-navy">高雄・西子灣</p>
            <Link href="/gatherings" className="mt-3 inline-flex text-sm font-bold text-coral hover:underline">查看聚會地點</Link>
          </div>
        </div>
      </section>
      <section className="border-t border-border bg-sand py-6">
        <p className="shell text-sm font-bold leading-6 text-navy/60">聯絡方式為網站架構示範，正式公開前請替換為教會實際使用的信箱與社群帳號。</p>
      </section>
    </PageFrame>
  );
}
