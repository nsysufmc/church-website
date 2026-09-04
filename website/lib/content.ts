export type Sermon = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  speaker: string;
  scripture: string;
  series: string;
  duration: string;
  summary: string;
  takeaways: string[];
  body: string[];
};

export type ArticleSection = { heading: string; paragraphs: string[] };

export type Article = {
  slug: string;
  title: string;
  published: string;
  dateLabel: string;
  author: string;
  category: string;
  readTime: string;
  excerpt: string;
  intro: string;
  sections: ArticleSection[];
};

export type Event = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  time: string;
  location: string;
  tag: string;
  summary: string;
  details: string[];
};

const sermonModules = import.meta.glob('../content/sermons/*.json', { eager: true, import: 'default' }) as Record<string, Sermon>;
const articleModules = import.meta.glob('../content/articles/*.json', { eager: true, import: 'default' }) as Record<string, Article>;
const eventModules = import.meta.glob('../content/events/*.json', { eager: true, import: 'default' }) as Record<string, Event>;

export const sermons = Object.values(sermonModules).sort((a, b) => b.date.localeCompare(a.date));
export const articles = Object.values(articleModules).sort((a, b) => b.published.localeCompare(a.published));
export const events = Object.values(eventModules).sort((a, b) => a.date.localeCompare(b.date));

export function getSermon(slug: string) { return sermons.find((item) => item.slug === slug); }
export function getArticle(slug: string) { return articles.find((item) => item.slug === slug); }
export function getEvent(slug: string) { return events.find((item) => item.slug === slug); }
