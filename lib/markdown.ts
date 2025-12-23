import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'content/articles');

export interface ArticleFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  slug: string;
  content: string;
}

export interface ArticlePreview extends ArticleFrontmatter {
  slug: string;
}

export function getArticleSlugs(): string[] {
  try {
    const files = fs.readdirSync(articlesDirectory);
    return files
      .filter((file) => file.endsWith('.md'))
      .map((file) => file.replace(/\.md$/, ''));
  } catch {
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'Telos',
      tags: data.tags || [],
      readTime: data.readTime || '5 min read',
      featured: data.featured || false,
      content,
    };
  } catch {
    return null;
  }
}

export async function getArticleWithHtml(slug: string): Promise<(Article & { htmlContent: string }) | null> {
  const article = getArticleBySlug(slug);
  if (!article) return null;

  const processedContent = await remark()
    .use(html)
    .process(article.content);
  
  const htmlContent = processedContent.toString();

  return {
    ...article,
    htmlContent,
  };
}

export function getAllArticles(): ArticlePreview[] {
  const slugs = getArticleSlugs();
  const articles = slugs
    .map((slug) => {
      const article = getArticleBySlug(slug);
      if (!article) return null;
      
      // Return preview data (without content)
      const { content: _, ...preview } = article;
      return preview;
    })
    .filter((article): article is ArticlePreview => article !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

export function getArticlesByTag(tag: string): ArticlePreview[] {
  const articles = getAllArticles();
  return articles.filter((article) =>
    article.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tagSet = new Set<string>();
  
  articles.forEach((article) => {
    article.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export function getFeaturedArticles(limit = 3): ArticlePreview[] {
  const articles = getAllArticles();
  const featured = articles.filter((article) => article.featured);
  
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  
  // If not enough featured, fill with recent articles
  const nonFeatured = articles.filter((article) => !article.featured);
  return [...featured, ...nonFeatured].slice(0, limit);
}
