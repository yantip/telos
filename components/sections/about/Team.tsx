'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export function Team() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-heading font-bold text-white">TF</span>
                  </div>
                  <p className="text-white/80 font-medium">Telos Team</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Built on Experience
            </h2>
            
            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Our team brings together decades of combined experience in R&D funding, 
                technology commercialization, and deep-tech entrepreneurship. We&apos;ve sat on 
                both sides of the table—as applicants seeking funding and as evaluators 
                reviewing proposals.
              </p>
              <p>
                This dual perspective gives us unique insight into what makes grant 
                applications succeed. We know what evaluators look for, how to structure 
                compelling narratives, and how to present technical innovation in its 
                best light.
              </p>
              <p>
                More importantly, we genuinely care about the success of the companies 
                we work with. Deep-tech innovation matters. It solves real problems and 
                creates lasting value. Our role is to help these innovations find the 
                funding they deserve.
              </p>
            </div>

            <LinkButton href="/contact" size="lg">
              Start a Conversation
              <ArrowRight size={18} className="ml-2" />
            </LinkButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
