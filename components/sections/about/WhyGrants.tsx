'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Award, Rocket } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Non-Dilutive Capital',
    description:
      'Grants allow you to fund R&D without giving up equity. Maintain ownership and control while accelerating your technology development.',
  },
  {
    icon: Award,
    title: 'Validation & Credibility',
    description:
      'Winning competitive grants signals market validation to investors, customers, and partners. It\'s a stamp of approval from expert evaluators.',
  },
  {
    icon: TrendingUp,
    title: 'De-Risk Innovation',
    description:
      'R&D grants reduce the financial risk of pursuing ambitious technical objectives, enabling you to tackle harder problems with less pressure.',
  },
  {
    icon: Rocket,
    title: 'Accelerate Timelines',
    description:
      'Additional funding means more resources. Hire key talent, acquire equipment, and hit milestones faster than bootstrapping alone.',
  },
];

export function WhyGrants() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Why R&D Grants Matter
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                For deep-tech companies, the path from breakthrough technology to market success 
                is long and capital-intensive. Traditional venture capital often requires founders 
                to give up significant equity before their technology has proven its full potential.
              </p>
              <p>
                R&D grants offer an alternative: substantial funding that lets you develop your 
                technology, build your team, and prove your market—all without diluting your ownership. 
                When done strategically, grant funding becomes a powerful lever in your overall 
                funding strategy.
              </p>
              <p>
                At Telos, we believe every promising deep-tech venture deserves the 
                opportunity to compete for this non-dilutive funding. Our role is to level the 
                playing field, bringing the expertise and strategic thinking needed to succeed.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-200"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-blue-700" />
                </div>
                <h3 className="font-heading font-semibold text-slate-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
