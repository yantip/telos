'use client';

import { Mic, Video, Users, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export default function CourseHighlights() {
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

  const highlights: Highlight[] = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'קורס מקיף ויסודי',
      description: 'מהבסיס ועד לטכניקות מתקדמות - כל מה שצריך לדעת בתחום',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'תוכן וידאו איכותי',
      description: 'מעל 30 שעות של תוכן מוקלט באיכות גבוהה עם הדגמות מעשיות',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'הדרכה אישית',
      description: 'גישה לקהילה פעילה ואימייל תמיכה לליווי אישי במהלך הקורס',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'תעודה מקצועית',
      description: 'קבל תעודת סיום מוכרת אשר תפתח לך דלתות בעולם המוזיקה',
      color: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            למה לבחור בקורס שלנו?
          </h2>
          <p className="text-xl text-muted-foreground">
            כל מה שצריך לדעת כדי להפוך למהנדס סטייג'ינג מקצועי
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`card bg-gradient-to-br ${highlight.color} text-white p-8 rounded-3xl transform transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 p-3 rounded-2xl">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{highlight.title}</h3>
                  <p className="text-white/90">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

