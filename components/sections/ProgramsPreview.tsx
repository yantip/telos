'use client';

import { motion } from 'framer-motion';
import { LinkButton } from '@/components/ui/Button';
import { ArrowRight, Globe, Rocket, Cpu, Leaf } from 'lucide-react';

const programs = [
  {
    icon: Globe,
    name: 'Israel Innovation Authority',
    description: 'National R&D funding for Israeli companies across all technology sectors.',
    highlights: ['Up to 50% R&D costs', 'All tech sectors', 'Fast-track programs'],
  },
  {
    icon: Rocket,
    name: 'EIC Accelerator',
    description: 'EU flagship program for breakthrough innovations with high growth potential.',
    highlights: ['Up to €2.5M grant', 'Equity component', 'Business acceleration'],
  },
  {
    icon: Cpu,
    name: 'Horizon Europe',
    description: 'EU research and innovation framework supporting collaborative projects.',
    highlights: ['Consortium projects', 'Research excellence', '€95B+ budget'],
  },
  {
    icon: Leaf,
    name: 'Innovate UK',
    description: 'UK innovation agency supporting transformative business innovations.',
    highlights: ['UK companies', 'Sector-specific calls', 'Smart grants'],
  },
];

export function ProgramsPreview() {
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
            Funding Programs We Support
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We have deep expertise across the major R&D funding programs, 
            helping you navigate requirements and maximize your chances of success.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors border border-slate-200 hover:border-blue-200"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <program.icon size={24} className="text-blue-700" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-slate-600 mb-4">{program.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-white text-sm text-slate-700 rounded-full border border-slate-200"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <LinkButton href="/funding-opportunities" variant="secondary" size="lg">
            View All Programs
            <ArrowRight size={18} className="ml-2" />
          </LinkButton>
        </motion.div>
      </div>
    </section>
  );
}
