'use client';

import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: 'אבי כהן',
      role: 'מהנדס סטייג\'ינג',
      company: 'תפאורות והופעות',
      text: 'הקורס הזה שינה את הקריירה שלי. קבלתי את הכלים וההבנה שעלייתים להיות מקצועי בתחום. המרצה מעולה והתוכן מפורט ומעמיק.',
      rating: 5,
    },
    {
      name: 'שרה לוי',
      role: 'מפיקת אירועים',
      company: 'פרודקשן עצמאי',
      text: 'כקורס אונליין, זה מדהים כמה הוא מקיף. התוכן ברור, ההדגמות מעולות, וסוף סוף הבנתי מה זה סטייג\'ינג באמת. מומלץ בחום!',
      rating: 5,
    },
    {
      name: 'דני ישראלי',
      role: 'סאונדמן',
      company: 'אולפנים מתקדמים',
      text: 'למרות שיש לי רקע בתחום, הקורס לימד אותי המון דברים חדשים. הגישה המקצועית והפרטים הקטנים הפכו אותי לטוב יותר מקצועית.',
      rating: 5,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            מה אומרים הבוגרים שלנו
          </h2>
          <p className="text-xl text-muted-foreground">
            אלפי תלמידים מרוצים שעשו צעד קדימה בקריירה
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-xl p-6 rounded-3xl transform transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-primary opacity-20 mb-4" />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

