'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';

export function FundingCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <HelpCircle size={32} className="text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Not Sure Which Program Fits?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Every company&apos;s funding journey is unique. Let&apos;s discuss your technology, 
            stage, and goals to identify the opportunities that make the most sense for you.
          </p>

          {/* CTA */}
          <LinkButton
            href="/contact"
            variant="secondary"
            size="xl"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Get a Free Assessment
            <ArrowRight size={18} className="ml-2" />
          </LinkButton>

          {/* Trust note */}
          <p className="mt-8 text-sm text-slate-400">
            No commitment required. We&apos;ll provide an honest evaluation of your options.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
