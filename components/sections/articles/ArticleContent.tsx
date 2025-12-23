'use client';

import { motion } from 'framer-motion';

interface ArticleContentProps {
  htmlContent: string;
}

export function ArticleContent({ htmlContent }: ArticleContentProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-heading prose-headings:text-slate-900
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-700 prose-p:leading-relaxed
              prose-a:text-blue-700 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 prose-strong:font-semibold
              prose-ul:text-slate-700 prose-ol:text-slate-700
              prose-li:marker:text-slate-400
              prose-blockquote:border-slate-300 prose-blockquote:bg-slate-100 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-slate-700
              prose-code:bg-slate-100 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-slate-800 prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-slate-900 prose-pre:text-slate-100
              prose-img:rounded-xl prose-img:shadow-md"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </motion.div>
      </div>
    </section>
  );
}
