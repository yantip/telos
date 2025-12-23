import type { Metadata } from 'next';
import { getAllArticles, getAllTags } from '@/lib/markdown';
import { ArticlesHero } from '@/components/sections/articles/ArticlesHero';
import { ArticlesList } from '@/components/sections/articles/ArticlesList';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Insights on R&D grants, funding strategies, and deep-tech innovation. Expert perspectives from Telos.',
  openGraph: {
    title: 'Articles | Telos',
    description: 'Expert insights on R&D grants and deep-tech funding strategies.',
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <>
      <ArticlesHero />
      <ArticlesList articles={articles} tags={tags} />
    </>
  );
}
