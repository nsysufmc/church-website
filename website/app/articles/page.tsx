import type { Metadata } from 'next';
import { ContentCard } from '@/components/content-card';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { articles } from '@/lib/content';

export const metadata: Metadata = { title: '神學文章', description: '從日常問題出發，慢慢思考信仰、聖經與生活。' };

export default function ArticlesPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Think Faith" title="讓問題有空間，讓信仰有深度。" description="從大學生與城市生活的真實處境出發，一起把問題想深，也把神學說得清楚。" tone="mint" />
      <section className="shell py-12 sm:py-20">
        {articles.map((article, index) => (
          <ContentCard key={article.slug} href={`/articles/${article.slug}`} eyebrow={article.category} title={article.title} description={article.excerpt} meta={`${article.dateLabel}・${article.author}・閱讀 ${article.readTime}`} index={index} />
        ))}
      </section>
    </PageFrame>
  );
}
