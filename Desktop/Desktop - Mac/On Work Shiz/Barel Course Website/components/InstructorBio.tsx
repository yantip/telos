'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GraduationCap, Briefcase, Star } from 'lucide-react';

export default function InstructorBio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            הכירו את המורה שלכם
          </h2>
        </div>

        <div className="card bg-base-100 shadow-xl overflow-hidden rounded-3xl">
          <div className="grid md:grid-cols-2">
            {/* Image Side */}
            <div className="relative min-h-[320px] md:min-h-[500px]">
              <Image
                src="/210656396_10227177024353997_4861621125835889552_n.jpg"
                alt="תמונת המדריך"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12">
              <div
                className={`transition-opacity duration-700 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <h3 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    בראל עובד
                  </span>
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  בעל ניסיון של מעל 15 שנה בתעשיית המוזיקה הישראלית והבינלאומית. 
                  עבד עם אמנים מהשורה הראשונה והפיק מאות הופעות מצליחות.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    { icon: <Briefcase />, text: '15+ שנות ניסיון בתעשייה' },
                    { icon: <GraduationCap />, text: 'תעודות מקצועיות מוכרות' },
                    { icon: <Star />, text: 'בוגרים מצליחים במקומות מובילים' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-primary">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="stats stats-vertical shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950">
                  <div className="stat">
                    <div className="stat-value text-primary">500+</div>
                    <div className="stat-desc">הופעות שהופקו</div>
                  </div>
                  <div className="stat">
                    <div className="stat-value text-primary">1000+</div>
                    <div className="stat-desc">בוגרים מקצועיים</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

