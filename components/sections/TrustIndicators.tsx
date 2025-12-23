'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Telos transformed our grant application process. Their strategic approach helped us secure critical funding that accelerated our R&D roadmap by two years.",
    author: 'Dr. Sarah Chen',
    role: 'CEO, BioTech Innovations',
    sector: 'Life Sciences',
  },
  {
    quote:
      "Working with Telos was like having an expert co-pilot. They helped us articulate our vision in ways that resonated with evaluators. The result was a successful €2.5M Horizon Europe grant.",
    author: 'Michael Rosenberg',
    role: 'CTO, Quantum Solutions',
    sector: 'Quantum Computing',
  },
  {
    quote:
      "As first-time grant applicants, we were overwhelmed. Telos guided us through every step with professionalism and patience. Our IIA application was approved on the first attempt.",
    author: 'Yael Goldstein',
    role: 'Founder, CleanEnergy AI',
    sector: 'Climate Tech',
  },
];

const stats = [
  { value: 50, suffix: 'M+', prefix: '€', label: 'Funding Secured' },
  { value: 85, suffix: '%', prefix: '', label: 'Success Rate' },
  { value: 100, suffix: '+', prefix: '', label: 'Projects Supported' },
  { value: 15, suffix: '+', prefix: '', label: 'Years Experience' },
];

function AnimatedCounter({ value, suffix, prefix, inView }: { value: number; suffix: string; prefix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [inView, value]);
  
  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export function TrustIndicators() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Row */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-200"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-blue-600 mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                  inView={isInView}
                />
              </div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We've helped deep-tech founders across industries secure the funding they need to build the future.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Quote size={20} className="text-blue-600" />
              </div>

              {/* Sector Badge */}
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full mb-4 border border-slate-200">
                {testimonial.sector}
              </div>

              {/* Quote */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold text-sm">
                    {testimonial.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
