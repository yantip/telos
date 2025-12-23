'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, Calendar } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Calendar size={32} className="text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Ready to Secure Your Funding?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
            Let&apos;s discuss your innovation and explore the best funding opportunities 
            for your deep-tech venture. No commitment, just a conversation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              href="/contact"
              variant="secondary"
              size="xl"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              Schedule Free Consultation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
            <LinkButton
              href="/about"
              variant="outline"
              size="xl"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Learn About Us
            </LinkButton>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-sm text-slate-400">
            Join 100+ deep-tech founders who have secured funding with Telos
          </p>
        </motion.div>
      </div>
    </section>
  );
}
