'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import BorderBeam from './BorderBeam';

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      name: 'חבילת מתחיל',
      price: '₪497',
      highlight: 'הבסיס המושלם להתחלה',
      features: [
        'גישה ל-10 מודולים ראשונים',
        '5 שעות של וידאו',
        'קבצי תרגול בסיסיים',
        'גישה לשאלות נפוצות',
      ],
      cta: 'להתחיל עכשיו',
      href: 'https://example.com/enroll?plan=starter',
      featured: false,
    },
    {
      name: 'חבילה מלאה',
      price: '₪1,297',
      highlight: 'הבחירה המומלצת',
      features: [
        'גישה לכל התכנים - ללא הגבלה',
        'מעל 30 שעות של וידאו איכותי',
        'קבצים ותבניות להורדה',
        'תמיכה וקהילה פעילה',
        'תעודת סיום מקצועית',
        'גישה לכל החיים',
      ],
      cta: 'להירשם עכשיו',
      href: 'https://example.com/enroll?plan=full',
      featured: true,
    },
    {
      name: 'חבילה מתקדמת',
      price: '₪897',
      highlight: 'למי שרוצה להתקדם מהר',
      features: [
        'גישה לכל המודולים המתקדמים',
        '15+ שעות של וידאו',
        'קבצי תרגול ותבניות',
        'תמיכה באימייל',
      ],
      cta: 'לעבור לרמה הבאה',
      href: 'https://example.com/enroll?plan=pro',
      featured: false,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-100" id="pricing">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            בחרו את החבילה המתאימה לכם
          </h2>
          <p className="text-xl text-muted-foreground">
            השקעה חד-פעמית לקניית מיומנויות לכל החיים
          </p>
        </div>

        <div className={`grid gap-6 md:grid-cols-3 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={
                tier.featured
                  ? 'relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl'
                  : 'rounded-3xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-xl border border-gray-200 dark:border-gray-700'
              }
            >
              {tier.featured && (
                <BorderBeam
                  duration={8}
                  size={300}
                  colorFrom="rgba(255, 255, 255, 0.6)"
                  colorTo="rgba(147, 197, 253, 0.6)"
                />
              )}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  {tier.featured && <Sparkles className="w-6 h-6" />}
                  <h3 className="text-2xl font-extrabold">{tier.name}</h3>
                </div>
                <p className={tier.featured ? 'opacity-90' : 'text-gray-500 dark:text-gray-400'}>
                  {tier.highlight}
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold">{tier.price}</span>
                    <span className={tier.featured ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}>חד-פעמי</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <Check className={tier.featured ? 'w-5 h-5' : 'w-5 h-5 text-blue-500'} />
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={tier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    tier.featured
                      ? 'inline-flex items-center justify-center w-full rounded-2xl px-6 py-3 text-lg font-bold text-purple-700 bg-white hover:scale-[1.02] transition'
                      : 'inline-flex items-center justify-center w-full rounded-2xl px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] transition'
                  }
                >
                  {tier.cta}
                </a>
                <p className={tier.featured ? 'text-white/80 text-center mt-3 text-sm' : 'text-gray-500 dark:text-gray-400 text-center mt-3 text-sm'}>
                  ערבות להחזר כספי מלא תוך 30 יום
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

