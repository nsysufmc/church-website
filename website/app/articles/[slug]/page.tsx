import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { PageFrame } from '@/components/page-frame';
import { siteDetails } from '@/content/site';
import { articles, getArticle } from '@/lib/content';

export const dynamicParams = false;
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const article = getArticle((await params).slug);
  return article ? { title: article.title, description: article.excerpt } : {};
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  return (
    <PageFrame>
      <article>
        <header className="border-b border-navy/10 bg-mint/55">
          <div className="shell py-14 sm:py-24">
            <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-bold text-navy/55 hover:text-coral"><ArrowLeft className="size-4" />所有文章</Link>
            <p className="eyebrow mt-12 text-coral">{article.category}</p>
            <h1 className="mt-5 max-w-5xl text-balance text-4xl font-black leading-tight tracking-[-.05em] text-navy sm:text-6xl">{article.title}</h1>
            <p className="mt-7 text-sm font-bold text-navy/48">{article.dateLabel}・{article.author}・閱讀 {article.readTime}</p>
          </div>
        </header>
        <div className="shell py-16 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="text-balance text-2xl font-black leading-10 tracking-[-.025em] text-navy sm:text-3xl sm:leading-[1.5]">{article.intro}</p>
            <div className="mt-14 space-y-14">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-black tracking-[-.035em] text-navy">{section.heading}</h2>
                  <div className="mt-5 space-y-6 text-lg leading-9 text-navy/72">
                    {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-16 rounded-[2rem] bg-sand p-7 sm:p-9">
              <p className="eyebrow text-coral">繼續聊聊</p>
              <p className="mt-4 text-xl font-black leading-8 text-navy">如果這篇文章碰到你正在想的問題，歡迎來聚會，或傳訊息和我們說說。</p>
              <Link href="/contact" className="button button-dark mt-6">聯絡 {siteDetails.name}</Link>
            </div>
          </div>
        </div>
      </article>
    </PageFrame>
  );
}
