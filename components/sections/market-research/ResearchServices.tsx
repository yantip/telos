'use client';

import { motion } from 'framer-motion';
import { BarChart3, Users, Target, TrendingUp, PieChart, Search } from 'lucide-react';

const services = [
  {
    id: 'quantitative-research',
    icon: BarChart3,
    title: 'Quantitative Market Research',
    description:
      'Rigorous data collection and statistical analysis to quantify market dynamics, validate assumptions, and support strategic decision-making.',
    features: [
      'Market size and growth projections',
      'Customer surveys and data collection',
      'Statistical analysis and modeling',
      'Pricing sensitivity analysis',
      'Demand forecasting',
      'Market segmentation studies',
    ],
    deliverables: [
      'Comprehensive market sizing report',
      'Statistical models and projections',
      'Survey results and analysis',
      'Executive summary with key insights',
    ],
  },
  {
    id: 'target-audience',
    icon: Users,
    title: 'Target Audience Analysis',
    description:
      'Deep understanding of your ideal customers—who they are, what they need, how they behave, and how to reach them effectively.',
    features: [
      'Customer persona development',
      'Behavioral analysis and patterns',
      'Needs and pain point mapping',
      'Purchase decision journey mapping',
      'Channel preference analysis',
      'Customer lifetime value modeling',
    ],
    deliverables: [
      'Detailed customer personas',
      'Audience segmentation framework',
      'Customer journey maps',
      'Targeting recommendations',
    ],
  },
  {
    id: 'competitor-analysis',
    icon: Target,
    title: 'Competitor Analysis',
    description:
      'Comprehensive competitive intelligence to understand your market position, identify threats, and uncover strategic opportunities.',
    features: [
      'Competitive landscape mapping',
      'Product and feature comparison',
      'Pricing and positioning analysis',
      'Market share estimation',
      'SWOT analysis per competitor',
      'Competitive strategy assessment',
    ],
    deliverables: [
      'Competitive landscape report',
      'Feature comparison matrix',
      'Strategic positioning map',
      'Actionable competitive insights',
    ],
  },
];

const additionalServices = [
  {
    icon: TrendingUp,
    title: 'Market Trends Analysis',
    description: 'Identify emerging trends, market shifts, and future opportunities to stay ahead of the curve.',
  },
  {
    icon: PieChart,
    title: 'Industry Reports',
    description: 'Custom industry analysis with market dynamics, regulatory landscape, and growth drivers.',
  },
  {
    icon: Search,
    title: 'Due Diligence Support',
    description: 'Market research support for investment decisions, M&A activities, and strategic partnerships.',
  },
];

export function ResearchServices() {
  return (
    <>
      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              Our Research Services
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive market intelligence services tailored to your strategic needs. 
              We combine rigorous methodology with practical insights.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <service.icon size={28} className="text-blue-700" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                      What We Analyze
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deliverables Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                    <h4 className="text-lg font-heading font-semibold text-slate-900 mb-4">
                      Key Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {service.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-4">
              Additional Research Services
            </h2>
            <p className="text-lg text-slate-600">
              Specialized research capabilities to support your strategic initiatives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon size={24} className="text-blue-700" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

