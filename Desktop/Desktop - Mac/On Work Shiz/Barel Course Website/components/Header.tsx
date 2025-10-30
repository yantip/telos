'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after passing ~60% of the first viewport height
      const threshold = window.innerHeight * 0.6;
      setVisible(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={
        `pointer-events-none fixed top-0 inset-x-0 z-50 transition-all duration-300 ` +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3')
      }
      aria-hidden={!visible}
    >
      <div className="mx-auto w-[70%] max-w-none px-0">
        <div className="pointer-events-auto mt-4 rounded-2xl border border-white/10 bg-white/70 backdrop-blur-md shadow-lg dark:bg-gray-900/70">
          <nav className="flex items-center justify-between px-6 py-4" dir="rtl">
            {/* Right side - nav links (RTL) */}
            <ul className="flex items-center gap-8 text-lg font-extrabold text-gray-900 dark:text-gray-100">
              <li>
                <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  עמוד הבית
                </Link>
              </li>
              <li>
                <Link href="#community" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  קהילה
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                  יצירת קשר
                </Link>
              </li>
            </ul>

            {/* Left side - CTA */}
            <div className="flex items-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-extrabold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                הירשם עכשיו
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}


