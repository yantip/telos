'use client';

import { motion } from 'framer-motion';
import { Compass, Handshake, Microscope } from 'lucide-react';

const principles = [
  {
    icon: Compass,
    title: 'Strategic Thinking First',
    description:
      'We don\'t just fill out applications. We start by understanding your technology, your market, and your goals. Then we identify the opportunities that align with your strategic direction and maximize your chances of success.',
  },
  {
    icon: Handshake,
    title: 'Partnership Model',
    description:
      'We work alongside you as partners, not service providers. Your success is our success. We\'re invested in understanding your technology deeply and articulating its value in ways that resonate with evaluators.',
  },
  {
    icon: Microscope,
    title: 'Technical Understanding',
    description:
      'Grant applications for deep-tech require genuine technical comprehension. Our team includes professionals with strong technical backgrounds who can engage with complex technologies and translate them into compelling narratives.',
  },
];

export function Approach() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Our Approach & Philosophy
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            We believe successful grant funding requires more than paperwork—it requires 
            strategic alignment, deep understanding, and genuine partnership.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                <principle.icon size={28} className="text-blue-400" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                {principle.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-xl md:text-2xl text-slate-300 italic leading-relaxed">
            &ldquo;The best grant applications tell a story of innovation that&apos;s impossible 
            to ignore. Our job is to help you tell that story.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
