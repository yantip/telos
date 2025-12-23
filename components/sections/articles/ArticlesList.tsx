'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, ArrowRight, Search } from 'lucide-react';
import type { ArticlePreview } from '@/lib/markdown';

interface ArticlesListProps {
  articles: ArticlePreview[];
  tags: string[];
}

export function ArticlesList({ articles, tags }: ArticlesListProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter((article) => {
    const matchesTag = !selectedTag || article.tags.includes(selectedTag);
    const matchesSearch =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Filters */}
        <div className="mb-10 space-y-4">
          {/* Search */}
          <div className="relative max-w-md">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-colors bg-white text-slate-900 placeholder:text-slate-400"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                !selectedTag
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All
            </button>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="h-full p-6 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-slate-200 hover:border-blue-200">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white text-xs font-medium text-blue-700 rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-heading font-semibold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                      <time dateTime={article.date}>
                        {format(new Date(article.date), 'MMM d, yyyy')}
                      </time>
                    </div>

                    {/* Read More */}
                    <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-blue-700 font-medium group-hover:text-blue-900 transition-colors">
                      Read article
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-600">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedTag(null);
                setSearchQuery('');
              }}
              className="mt-4 text-blue-700 font-medium hover:text-blue-900 underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
