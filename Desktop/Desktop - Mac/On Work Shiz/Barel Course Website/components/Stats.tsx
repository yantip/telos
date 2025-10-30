'use client';

import { useEffect, useRef, useState } from 'react';
import { Clock, GraduationCap, Users } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const targetValues = [30, 1500, 4500];

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

  useEffect(() => {
    if (isVisible) {
      targetValues.forEach((target, index) => {
        const duration = 1500;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          const easeOutQuad = (t: number) => t * (2 - t);
          const currentValue = Math.floor(easeOutQuad(progress) * target);

          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      });
    }
  }, [isVisible]);

  const stats = [
    {
      icon: <Clock className="w-10 h-10" />,
      value: String(animatedValues[0]),
      suffix: '+',
      label: 'שעות תוכן',
      description: 'שיעורים מוקלטים באיכות גבוהה',
      iconColor: 'text-red-500',
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      value: String(animatedValues[1]),
      suffix: '+',
      label: 'בוגרים מקצועיים',
      description: 'בוגרי הקורס שנכנסו לתחום',
      iconColor: 'text-blue-500',
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: String(animatedValues[2]),
      suffix: '+',
      label: '% הצלחה',
      description: 'שיעור ההצלחה בקורס',
      iconColor: 'text-green-500',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-base-200">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            הנתונים מדברים בעד עצמם
          </h2>
          <p className="text-xl text-muted-foreground">
            הצטרף לאלפי בוגרים שהשיגו את המטרות שלהם
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1e1e1e] to-[#2a2a2a] p-8 rounded-3xl text-center text-white relative overflow-hidden transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[8px_8px_20px_#0a0a0a,_-8px_-8px_20px_#2a2a2a] shadow-[5px_5px_15px_#0a0a0a,_-5px_-5px_15px_#2a2a2a] group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-gradient-radial from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon with neumorphic style */}
              <div className="mx-auto mb-5 w-[60px] h-[60px] flex items-center justify-center bg-gradient-to-br from-[#2a2a2a] to-[#1e1e1e] rounded-2xl shadow-[inset_2px_2px_5px_#0a0a0a,inset_-2px_-2px_5px_#2a2a2a] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#3a3a3a] group-hover:to-[#2a2a2a] group-hover:shadow-[4px_4px_8px_#0a0a0a,_inset_-4px_-4px_8px_#2a2a2a]">
                <div className={stat.iconColor}>
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <h2 className="text-[3.5rem] md:text-6xl font-bold mb-4 text-white">
                {stat.value}
                <span className="text-[2rem] md:text-3xl text-red-500">+</span>
              </h2>

              {/* Label */}
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {stat.label}
              </h3>
              
              {/* Description */}
              <p className="text-base text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
