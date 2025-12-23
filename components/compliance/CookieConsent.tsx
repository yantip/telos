'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings } from 'lucide-react';
import Link from 'next/link';

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay to prevent layout shift on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(defaultPreferences));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-content mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-6 md:p-8">
              {!showSettings ? (
                /* Main Banner */
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                      <Cookie size={24} className="text-navy-700" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-navy-900 mb-2">
                      We value your privacy
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      We use cookies to enhance your browsing experience and analyze our traffic. 
                      By clicking &quot;Accept All&quot;, you consent to our use of cookies. 
                      Read our{' '}
                      <Link href="/cookie-policy" className="text-navy-700 underline hover:text-navy-900">
                        Cookie Policy
                      </Link>
                      {' '}for more information.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowSettings(true)}
                      className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-navy-900 hover:bg-neutral-50 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Settings size={16} />
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-navy-900 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-colors"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-4 py-2.5 text-sm font-medium text-white bg-navy-800 hover:bg-navy-900 rounded-lg transition-colors"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                /* Settings Panel */
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-heading font-semibold text-navy-900">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="p-2 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-50 transition-colors"
                      aria-label="Close settings"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Essential Cookies */}
                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <div className="font-medium text-navy-900">Essential Cookies</div>
                        <div className="text-sm text-neutral-600">
                          Required for the website to function properly
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-navy-100 text-navy-700 text-sm font-medium rounded-full">
                        Always Active
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <div className="font-medium text-navy-900">Analytics Cookies</div>
                        <div className="text-sm text-neutral-600">
                          Help us understand how visitors interact with our website
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) =>
                            setPreferences({ ...preferences, analytics: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-700"></div>
                      </label>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                      <div>
                        <div className="font-medium text-navy-900">Marketing Cookies</div>
                        <div className="text-sm text-neutral-600">
                          Used to deliver personalized advertisements
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) =>
                            setPreferences({ ...preferences, marketing: e.target.checked })
                          }
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-700"></div>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShowSettings(false)}
                      className="px-4 py-2.5 text-sm font-medium text-neutral-600 hover:text-navy-900 border border-neutral-200 hover:border-neutral-300 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-4 py-2.5 text-sm font-medium text-white bg-navy-800 hover:bg-navy-900 rounded-lg transition-colors"
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
