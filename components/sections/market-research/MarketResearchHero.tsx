'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function MarketResearchHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-slate-100 via-white to-blue-50 relative overflow-hidden">
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
                <Link href="/" className="text-slate-500 hover:text-slate-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-800 font-medium">Market Research</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            Data-Driven{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Market Research
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
            Make informed strategic decisions with comprehensive market intelligence. 
            Our research services provide the insights you need to understand your market, 
            identify opportunities, and outpace competitors.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-slate-700">Quantitative Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-slate-700">Audience Insights</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-sm font-medium text-slate-700">Competitive Intelligence</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

