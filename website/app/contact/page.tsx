import type { Metadata } from 'next';
import { ArrowRight, Camera, Mail, MapPin, MessageCircle, MessagesSquare } from 'lucide-react';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { contactContent, siteDetails } from '@/content/site';

export const metadata: Metadata = { title: '聯絡我們', description: `第一次來、想找小組或想多認識 ${siteDetails.name}，都歡迎與我們聯絡。` };

export default function ContactPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Say Hello" title="有問題，或只是想先打個招呼？" description="第一次來、想找小組、需要有人聊聊，都可以傳訊息給我們。" tone="mint" />
      <section className="shell grid gap-8 py-16 sm:py-24 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-[2.5rem] bg-navy p-8 text-white sm:p-12">
          <MessageCircle className="size-10 text-mint" />
          <h2 className="mt-8 max-w-lg text-balance text-4xl font-black leading-tight tracking-[-.045em]">不用想好完整的問題，再來找我們。</h2>
          <p className="mt-5 max-w-lg leading-8 text-white/65">簡單告訴我們你的名字，以及你想知道的事就好。</p>
          <a href={contactContent.emailUrl} className="button button-coral mt-9">寄一封信給 {siteDetails.name} <ArrowRight /></a>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <Mail className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Email</p>
            <a href={contactContent.emailUrl} className="mt-2 block break-all text-xl font-black text-navy hover:text-coral">{contactContent.email}</a>
          </div>
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <MessagesSquare className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Facebook</p>
            <a href={contactContent.facebook.url} target="_blank" rel="noreferrer" className="mt-2 block text-xl font-black text-navy hover:text-coral">{contactContent.facebook.label}</a>
          </div>
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <Camera className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Instagram</p>
            <a href={contactContent.instagram.url} target="_blank" rel="noreferrer" className="mt-2 block text-xl font-black text-navy hover:text-coral">{contactContent.instagram.label}</a>
          </div>
          <div className="rounded-[2rem] border border-border bg-white p-7">
            <MapPin className="size-6 text-coral" />
            <p className="eyebrow mt-8 text-navy/40">Location</p>
            <a href={contactContent.mapUrl} target="_blank" rel="noreferrer" className="mt-2 block text-xl font-black text-navy hover:text-coral">{contactContent.address}</a>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
