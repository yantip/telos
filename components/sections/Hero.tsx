'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay - Full opacity on left, fading to transparent on right */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.3) 75%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      {/* Content */}
      <div className="relative w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 rounded-full text-sm font-medium mb-6 border border-blue-200 shadow-sm"
            >
              <Sparkles size={16} className="text-blue-600" />
              Strategic R&D Grant Funding
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Turn Your Innovation Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Funded Reality
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
              Expert guidance to identify, prepare, and submit winning R&D grant applications. 
              We partner with deep-tech founders to secure non-dilutive funding that accelerates your vision.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LinkButton href="/contact" size="xl">
                Schedule Consultation
                <ArrowRight size={18} className="ml-2" />
              </LinkButton>
              <LinkButton href="/funding-opportunities" variant="outline" size="xl" className="bg-white/80 backdrop-blur-sm">
                Explore Funding
              </LinkButton>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-300/50"
            >
              <p className="text-sm text-slate-600 mb-4 font-medium">Trusted expertise across leading programs</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-medium text-slate-700 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80">
                  Israel Innovation Authority
                </span>
                <span className="text-sm font-medium text-slate-700 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80">
                  Horizon Europe
                </span>
                <span className="text-sm font-medium text-slate-700 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-slate-200/80">
                  EIC Accelerator
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
