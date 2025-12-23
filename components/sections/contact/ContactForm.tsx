'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import Link from 'next/link';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  inquiryType: '',
  message: '',
  consent: false,
};

const inquiryTypes = [
  { value: '', label: 'Select inquiry type' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'consultation', label: 'Schedule Consultation' },
  { value: 'specific-program', label: 'Specific Program Question' },
  { value: 'partnership', label: 'Partnership Opportunity' },
  { value: 'other', label: 'Other' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please agree to the privacy policy' as unknown as boolean;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState('submitting');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In production, you would send to your API endpoint here
      console.log('Form submitted:', formData);
      
      setFormState('success');
      setFormData(initialFormData);
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 bg-green-50 rounded-2xl text-center border border-green-200"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. We&apos;ll review your message and get back to you 
          within 1-2 business days.
        </p>
        <button
          onClick={() => setFormState('idle')}
          className="text-blue-700 font-medium hover:text-blue-900 underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-200"
    >
      <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
        Send Us a Message
      </h2>

      {formState === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0" />
          <p className="text-red-700">
            Something went wrong. Please try again or contact us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.name ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors bg-white text-slate-900`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors bg-white text-slate-900`}
            placeholder="your@email.com"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
            Company <span className="text-slate-400">(optional)</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-colors bg-white text-slate-900"
            placeholder="Your company name"
          />
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-900 mb-2">
            Inquiry Type
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0 transition-colors bg-white text-slate-900"
          >
            {inquiryTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? 'border-red-300 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-offset-0 transition-colors resize-none bg-white text-slate-900`}
            placeholder="Tell us about your project, questions, or how we can help..."
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-700 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-600">
              I agree to the{' '}
              <Link href="/privacy-policy" className="text-blue-700 hover:text-blue-900 underline">
                Privacy Policy
              </Link>
              . Telos will use this information to respond to my inquiry. <span className="text-red-500">*</span>
            </span>
          </label>
          {errors.consent && (
            <p className="mt-2 text-sm text-red-600">{String(errors.consent)}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={formState === 'submitting'}
          className="w-full px-6 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formState === 'submitting' ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </form>
    </motion.div>
  );
}
