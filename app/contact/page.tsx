import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Telos. Schedule a consultation to discuss your R&D grant funding strategy.',
  openGraph: {
    title: 'Contact Us | Telos',
    description: 'Schedule a consultation to discuss your R&D grant funding strategy.',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="section-padding bg-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
