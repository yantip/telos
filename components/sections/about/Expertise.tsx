'use client';

import { motion } from 'framer-motion';
import {
  Cpu,
  Dna,
  Leaf,
  Atom,
  CircuitBoard,
  Shield,
  Globe,
  Rocket,
} from 'lucide-react';

const sectors = [
  { icon: Cpu, name: 'AI & Machine Learning' },
  { icon: Dna, name: 'Life Sciences & Biotech' },
  { icon: Leaf, name: 'Climate & Clean Tech' },
  { icon: Atom, name: 'Quantum Computing' },
  { icon: CircuitBoard, name: 'Semiconductors' },
  { icon: Shield, name: 'Cybersecurity' },
  { icon: Globe, name: 'Space Technology' },
  { icon: Rocket, name: 'Advanced Materials' },
];

const programs = [
  'Israel Innovation Authority',
  'Horizon Europe',
  'EIC Accelerator',
  'Innovate UK',
  'BIRD Foundation',
  'BARD',
  'SBIR/STTR',
  'National Science Foundation',
];

export function Expertise() {
  return (
    <section className="section-padding bg-slate-100">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Our Areas of Expertise
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We specialize in deep-tech sectors and maintain expert knowledge across 
            major global funding programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Sectors */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6">
              Deep-Tech Sectors
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 shadow-sm"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <sector.icon size={20} className="text-blue-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{sector.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-heading font-semibold text-slate-900 mb-6">
              Grant Programs
            </h3>
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <ul className="space-y-4">
                {programs.map((program, index) => (
                  <motion.li
                    key={program}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-slate-700">{program}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="mt-6 pt-6 border-t border-slate-200 text-sm text-slate-500">
                ...and many more regional and sector-specific programs
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
