'use client';

import { motion } from 'framer-motion';
import { Search, FileText, Send, Users, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Identify Opportunities',
    description:
      'We analyze your technology, market position, and goals to identify the most suitable grant programs.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Strategic Preparation',
    description:
      'Our team crafts compelling applications that articulate your innovation and market potential.',
  },
  {
    icon: Send,
    step: '03',
    title: 'Expert Submission',
    description:
      'We handle the complete submission process, ensuring every requirement is met with precision.',
  },
  {
    icon: Users,
    step: '04',
    title: 'Ongoing Support',
    description:
      'From evaluation to contract negotiation, we provide continuous support throughout your journey.',
  },
];

export function ProcessOverview() {
  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 drop-shadow-lg">
            Our Process
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            A systematic approach designed to maximize your chances of securing funding, 
            while minimizing the time and effort required from your team.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex"
            >
              {/* Step Card */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg flex-1 mx-2 lg:mx-3">
                {/* Step Number Badge */}
                <div className="absolute -top-3 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-5">
                  <step.icon size={28} className="text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (between cards, except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-blue-600 rounded-full items-center justify-center shadow-lg">
                  <ArrowRight size={16} className="text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
