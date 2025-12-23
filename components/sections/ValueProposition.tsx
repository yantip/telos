'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Clock, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Strategic Approach',
    description:
      'We go beyond paperwork. Our strategic methodology identifies the right opportunities and positions your application for success.',
  },
  {
    icon: Lightbulb,
    title: 'Deep-Tech Expertise',
    description:
      'Our team understands complex technologies and can articulate your innovation in ways that resonate with evaluators.',
  },
  {
    icon: Clock,
    title: 'Time Efficiency',
    description:
      'Focus on building your product while we handle the complex grant application process with precision and speed.',
  },
  {
    icon: Shield,
    title: 'Proven Track Record',
    description:
      'Years of experience securing millions in non-dilutive funding for startups across various deep-tech sectors.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ValueProposition() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Why Telos?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We partner with ambitious founders to secure the funding they need, 
            combining strategic thinking with deep technical understanding.
          </p>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={item}
              className="group relative p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors duration-300 border border-slate-200 hover:border-blue-200"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-200 transition-colors">
                <value.icon size={28} className="text-blue-700" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative number */}
              <div className="absolute top-4 right-4 text-5xl font-heading font-bold text-slate-200 group-hover:text-blue-200 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
