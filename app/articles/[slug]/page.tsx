import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleWithHtml, getArticleSlugs, getAllArticles } from '@/lib/markdown';
import { ArticleHeader } from '@/components/sections/articles/ArticleHeader';
import { ArticleContent } from '@/components/sections/articles/ArticleContent';
import { RelatedArticles } from '@/components/sections/articles/RelatedArticles';
import { ArticleCTA } from '@/components/sections/articles/ArticleCTA';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await getArticleWithHtml(resolvedParams.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Telos`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = await getArticleWithHtml(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Get related articles (same tags, excluding current)
  const allArticles = getAllArticles();
  const relatedArticles = allArticles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        a.tags.some((tag) => article.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <>
      <ArticleHeader article={article} />
      <ArticleContent htmlContent={article.htmlContent} />
      {relatedArticles.length > 0 && <RelatedArticles articles={relatedArticles} />}
      <ArticleCTA />
    </>
  );
}
