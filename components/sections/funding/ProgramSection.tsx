'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';

interface Program {
  id: string;
  name: string;
  shortName: string;
  description: string;
  overview: string;
  eligibility: string[];
  benefits: string[];
  telosHelp: string[];
}

interface ProgramSectionProps {
  program: Program;
  index: number;
}

export function ProgramSection({ program, index }: ProgramSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={program.id}
      className={`section-padding ${isEven ? 'bg-white' : 'bg-slate-100'}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4 border border-blue-200">
              {program.shortName}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
              {program.name}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              {program.description}
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                  Program Overview
                </h3>
                <p className="text-slate-600 leading-relaxed">{program.overview}</p>
              </div>

              {/* Eligibility */}
              <div>
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                  Who It&apos;s For
                </h3>
                <ul className="space-y-2">
                  {program.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-blue-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Benefits */}
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {program.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Telos Help */}
              <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-heading font-semibold text-slate-900 mb-3">
                  How Telos Helps
                </h3>
                <ul className="space-y-2 mb-6">
                  {program.telosHelp.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-green-600 mt-0.5 flex-shrink-0"
                      />
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
                <LinkButton href="/contact" variant="secondary" size="sm">
                  Discuss This Program
                  <ArrowRight size={16} className="ml-2" />
                </LinkButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
