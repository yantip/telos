'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function AboutHero() {
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
              <li className="text-slate-800 font-medium">About</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
            Strategic Partners in Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              Funding Journey
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Telos was created with a singular mission: to help deep-tech innovators 
            secure the non-dilutive funding they need to turn breakthrough ideas into reality. 
            We combine strategic expertise with genuine partnership.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
