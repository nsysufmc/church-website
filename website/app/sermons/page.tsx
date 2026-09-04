import type { Metadata } from 'next';
import { ContentCard } from '@/components/content-card';
import { PageFrame } from '@/components/page-frame';
import { PageIntro } from '@/components/page-intro';
import { sermons } from '@/lib/content';

export const metadata: Metadata = { title: '講道', description: '灣Hope近期講道與信息筆記。' };

export default function SermonsPage() {
  return (
    <PageFrame>
      <PageIntro kicker="Sermons" title="把聖經帶回星期一。" description="不只聽一篇信息，也一起練習：這段話，如何進入此刻的生活？" tone="sand" />
      <section className="shell py-12 sm:py-20">
        {sermons.map((sermon, index) => (
          <ContentCard key={sermon.slug} href={`/sermons/${sermon.slug}`} eyebrow={`${sermon.series}・${sermon.scripture}`} title={sermon.title} description={sermon.summary} meta={`${sermon.dateLabel}・${sermon.speaker}・${sermon.duration}`} index={index} />
        ))}
      </section>
    </PageFrame>
  );
}
