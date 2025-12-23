'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Accessibility, X, Type, Contrast, MousePointer, Eye } from 'lucide-react';

type AccessibilitySettings = {
  fontSize: 'normal' | 'large' | 'xlarge';
  highContrast: boolean;
  reducedMotion: boolean;
  highlightLinks: boolean;
};

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  highlightLinks: false,
};

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load saved settings
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      applySettings(parsed);
    }
  }, []);

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const html = document.documentElement;
    const body = document.body;

    // Font size
    html.classList.remove('text-normal', 'text-large', 'text-xlarge');
    if (newSettings.fontSize === 'large') {
      body.style.fontSize = '18px';
    } else if (newSettings.fontSize === 'xlarge') {
      body.style.fontSize = '20px';
    } else {
      body.style.fontSize = '16px';
    }

    // High contrast
    if (newSettings.highContrast) {
      html.classList.add('high-contrast');
    } else {
      html.classList.remove('high-contrast');
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      html.style.setProperty('--reduce-motion', 'reduce');
      html.classList.add('reduce-motion');
    } else {
      html.style.removeProperty('--reduce-motion');
      html.classList.remove('reduce-motion');
    }

    // Highlight links
    if (newSettings.highlightLinks) {
      html.classList.add('highlight-links');
    } else {
      html.classList.remove('highlight-links');
    }
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
    applySettings(newSettings);
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
    applySettings(defaultSettings);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-4 z-40 w-12 h-12 bg-navy-800 hover:bg-navy-900 text-white rounded-full shadow-lg flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-navy-600 focus:ring-offset-2"
        aria-label="Open accessibility settings"
      >
        <Accessibility size={24} />
      </button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 z-50"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-xl z-50 overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center">
                    <Accessibility size={20} className="text-navy-700" />
                  </div>
                  <h2 className="font-heading font-semibold text-navy-900">
                    Accessibility Settings
                  </h2>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-neutral-400 hover:text-neutral-600 rounded-lg hover:bg-neutral-50 transition-colors"
                  aria-label="Close accessibility settings"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Settings */}
              <div className="p-4 space-y-6">
                {/* Font Size */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-navy-900 font-medium">
                    <Type size={18} />
                    <span>Text Size</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {(['normal', 'large', 'xlarge'] as const).map((size) => (
                      <button
                        key={size}
                        onClick={() => updateSetting('fontSize', size)}
                        className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                          settings.fontSize === size
                            ? 'bg-navy-100 border-navy-300 text-navy-900'
                            : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300'
                        }`}
                      >
                        {size === 'normal' && 'A'}
                        {size === 'large' && 'A+'}
                        {size === 'xlarge' && 'A++'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* High Contrast */}
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Contrast size={18} className="text-navy-700" />
                    <div>
                      <div className="font-medium text-navy-900">High Contrast</div>
                      <div className="text-sm text-neutral-600">Increase color contrast</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={(e) => updateSetting('highContrast', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-700"></div>
                  </label>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MousePointer size={18} className="text-navy-700" />
                    <div>
                      <div className="font-medium text-navy-900">Reduced Motion</div>
                      <div className="text-sm text-neutral-600">Minimize animations</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.reducedMotion}
                      onChange={(e) => updateSetting('reducedMotion', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-700"></div>
                  </label>
                </div>

                {/* Highlight Links */}
                <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Eye size={18} className="text-navy-700" />
                    <div>
                      <div className="font-medium text-navy-900">Highlight Links</div>
                      <div className="text-sm text-neutral-600">Underline all links</div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.highlightLinks}
                      onChange={(e) => updateSetting('highlightLinks', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-700"></div>
                  </label>
                </div>

                {/* Reset Button */}
                <button
                  onClick={resetSettings}
                  className="w-full px-4 py-3 text-sm font-medium text-neutral-600 border border-neutral-200 hover:border-neutral-300 hover:text-navy-900 rounded-lg transition-colors"
                >
                  Reset to Default
                </button>

                {/* Info */}
                <p className="text-xs text-neutral-500 text-center">
                  Your preferences are saved locally and will persist across sessions.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Global styles for accessibility features */}
      <style jsx global>{`
        .reduce-motion * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        .highlight-links a {
          text-decoration: underline !important;
          text-underline-offset: 3px;
        }
      `}</style>
    </>
  );
}
