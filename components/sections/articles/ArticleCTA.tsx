'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ArticleCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
            <MessageCircle size={28} className="text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Want to Discuss Your Grant Strategy?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Our team is ready to help you navigate the R&D funding landscape. 
            Schedule a free consultation to explore your options.
          </p>

          {/* CTA */}
          <LinkButton
            href="/contact"
            variant="secondary"
            size="lg"
            className="bg-white text-slate-900 hover:bg-slate-100"
          >
            Schedule Consultation
            <ArrowRight size={18} className="ml-2" />
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
