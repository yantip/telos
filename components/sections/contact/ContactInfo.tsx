'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      {/* Direct Contact */}
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-lg font-heading font-semibold text-slate-900 mb-4">
          Direct Contact
        </h3>
        <div className="space-y-4">
          <a
            href="mailto:contact@telosfn.com"
            className="flex items-center gap-3 text-slate-600 hover:text-blue-700 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail size={18} className="text-blue-700" />
            </div>
            <span>contact@telosfn.com</span>
          </a>
          <a
            href="tel:+972-54-874695"
            className="flex items-center gap-3 text-slate-600 hover:text-blue-700 transition-colors"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone size={18} className="text-blue-700" />
            </div>
            <span>+972-54-874695</span>
          </a>
          <div className="flex items-center gap-3 text-slate-600">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin size={18} className="text-blue-700" />
            </div>
            <span>Tel Aviv, Israel</span>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="p-6 bg-slate-100 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <Clock size={20} className="text-blue-700" />
          <h3 className="font-heading font-semibold text-slate-900">
            Response Time
          </h3>
        </div>
        <p className="text-slate-600 text-sm leading-relaxed">
          We typically respond to inquiries within 1-2 business days. For urgent 
          matters, please indicate so in your message.
        </p>
      </div>

      {/* What to Expect */}
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-3">
          <MessageCircle size={20} className="text-blue-700" />
          <h3 className="font-heading font-semibold text-slate-900">
            What to Expect
          </h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Initial response within 1-2 business days</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Free initial consultation (30 minutes)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>Honest assessment of your funding options</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-1">•</span>
            <span>No obligation to proceed</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
