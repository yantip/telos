'use client';

import { useEffect, useMemo, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  // Generate fixed positions to avoid hydration mismatch
  const particlePositions = useMemo(() => {
    // Use a seeded random approach for consistency
    const positions = [];
    for (let i = 0; i < 20; i++) {
      // Simple seeded pseudo-random for each index
      const seed = i * 137.508; // Golden angle approximation
      positions.push({
        left: (Math.abs(Math.sin(seed)) * 100) % 100,
        top: (Math.abs(Math.cos(seed)) * 100) % 100,
        animationDelay: (Math.abs(Math.sin(seed * 2)) * 5),
        animationDuration: 3 + (Math.abs(Math.cos(seed * 3)) * 4),
      });
    }
    return positions;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Floating particles */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {particlePositions.map((pos, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.animationDelay}s`,
                animationDuration: `${pos.animationDuration}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-up">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              מהאולפן לבמה
            </span>
            <br />
            <span className="text-white text-4xl md:text-6xl mt-4 block">
              המדריך ליצירת ההופעה המושלמת
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-up animation-delay-200">
            קורס מקצועי בעברית ללימודי הנדסת סטייג'ינג והפקת הופעות. 
            למד מהבסיס ועד לשליטה מלאה בכל מה שצריך לדעת
          </p>

          {/* Always-visible trailer */}
          <div className="animate-fade-up animation-delay-300">
            <div className="aspect-video w-full mx-auto max-w-5xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                title="Course Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 animate-fade-up animation-delay-500">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl px-8 py-4 text-lg font-extrabold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:via-blue-400 hover:to-indigo-500 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              להירשם עכשיו
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#curriculum"
        className="absolute bottom-6 inset-x-0 z-10 flex justify-center text-white/80 hover:text-white transition-colors"
        aria-label="גלול למטה"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 animate-scroll-bounce"
        >
          <path d="M12 16.5c-.27 0-.53-.11-.71-.29l-5-5a1 1 0 1 1 1.42-1.42L12 13.59l4.29-4.3a1 1 0 1 1 1.42 1.42l-5 5c-.18.18-.44.29-.71.29Z"/>
        </svg>
      </a>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-500 { animation-delay: 0.5s; }

        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(6px); opacity: 1; }
        }
        .animate-scroll-bounce {
          animation: scroll-bounce 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

