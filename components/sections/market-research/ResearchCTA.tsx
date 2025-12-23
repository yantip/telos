'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, BarChart3 } from 'lucide-react';

export function ResearchCTA() {
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
            <BarChart3 size={32} className="text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Understand Your Market?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Let&apos;s discuss your research needs and how we can provide the insights 
            that drive better strategic decisions. Every engagement starts with understanding your goals.
          </p>

          {/* CTA */}
          <LinkButton
            href="/contact"
            variant="secondary"
            size="xl"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Start a Research Project
            <ArrowRight size={18} className="ml-2" />
          </LinkButton>

          {/* Trust note */}
          <p className="mt-8 text-sm text-slate-400">
            Custom research tailored to your specific market and strategic questions
          </p>
        </motion.div>
      </div>
    </section>
  );
}

