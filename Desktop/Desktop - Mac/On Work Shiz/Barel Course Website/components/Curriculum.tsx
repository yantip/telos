'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

export default function Curriculum() {
  const [openModule, setOpenModule] = useState(0);
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

  const modules = [
    {
      title: 'מבוא לעולם הסטייג\'ינג',
      duration: '5 שעות',
      lessons: 12,
      topics: ['הכרות עם התחום', 'ציוד בסיסי', 'תקנים וערכים', 'מושגי יסוד'],
    },
    {
      title: 'ציוד וטכנולוגיה',
      duration: '6 שעות',
      lessons: 15,
      topics: ['מגברים ומיקסרים', 'מיקרופונים', 'תאורה', 'וידאו קליפים'],
    },
    {
      title: 'תכנון הופעה',
      duration: '7 שעות',
      lessons: 18,
      topics: ['תקציב ונהלים', 'מיקום ציוד', 'בדיקות טכניות', 'תכנית חירום'],
    },
    {
      title: 'תפעול במהלך ההופעה',
      duration: '8 שעות',
      lessons: 20,
      topics: ['ניהול חיות', 'פתרון בעיות', 'תקשורת עם הצוות', 'אופטימיזציה'],
    },
    {
      title: 'תפעול מיוחד',
      duration: '5 שעות',
      lessons: 12,
      topics: ['מולטימדיה', 'אפקטים מיוחדים', 'הקלטת המופע', 'חיבורים מיוחדים'],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-100" id="curriculum">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            תוכן הקורס
          </h2>
          <p className="text-xl text-muted-foreground">
            מעל 30 שעות של תוכן מקיף ומקצועי
          </p>
        </div>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`card bg-base-200 shadow-lg rounded-3xl transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="collapse collapse-plus bg-base-100"
                onClick={() => setOpenModule(openModule === index ? -1 : index)}
              >
                <input
                  type="checkbox"
                  checked={openModule === index}
                  onChange={() => {}}
                />
                <div className="collapse-title text-xl font-bold flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    {module.title}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {module.duration}
                  </div>
                </div>
                <div className="collapse-content">
                  <div className="p-4 space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {module.lessons} שיעורים מלאים
                    </p>
                    <div className="grid md:grid-cols-2 gap-2">
                      {module.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

