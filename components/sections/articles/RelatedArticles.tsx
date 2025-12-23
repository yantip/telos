'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, ArrowRight } from 'lucide-react';
import type { ArticlePreview } from '@/lib/markdown';

interface RelatedArticlesProps {
  articles: ArticlePreview[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="section-padding bg-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/articles/${article.slug}`} className="block h-full">
                  <div className="h-full p-6 bg-white rounded-xl hover:shadow-md transition-shadow border border-slate-200">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-slate-100 text-xs font-medium text-blue-700 rounded border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                      <time dateTime={article.date}>
                        {format(new Date(article.date), 'MMM d, yyyy')}
                      </time>
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-blue-700 text-sm font-medium group-hover:text-blue-900 transition-colors">
                      Read more
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
