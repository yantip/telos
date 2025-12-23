'use client';

import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import type { Article } from '@/lib/markdown';

interface ArticleHeaderProps {
  article: Article;
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-br from-slate-100 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link
                  href="/articles"
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-800 font-medium truncate max-w-[200px]">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <Link
                key={tag}
                href={`/articles?tag=${encodeURIComponent(tag)}`}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors border border-blue-200"
              >
                {tag}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-600" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <time dateTime={article.date}>
                {format(new Date(article.date), 'MMMM d, yyyy')}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-600" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
