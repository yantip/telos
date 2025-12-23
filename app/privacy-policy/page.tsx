import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Telos - how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-100 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl prose prose-lg prose-slate">
            <h2 className="text-slate-900">1. Introduction</h2>
            <p className="text-slate-700">
              Telos (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>

            <h2 className="text-slate-900">2. Information We Collect</h2>
            <h3 className="text-slate-900">Personal Information</h3>
            <p className="text-slate-700">We may collect personal information that you voluntarily provide when you:</p>
            <ul className="text-slate-700">
              <li>Contact us through our website forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Request our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-slate-700">This information may include:</p>
            <ul className="text-slate-700">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Message content</li>
            </ul>

            <h3 className="text-slate-900">Automatically Collected Information</h3>
            <p className="text-slate-700">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="text-slate-700">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
            </ul>

            <h2 className="text-slate-900">3. How We Use Your Information</h2>
            <p className="text-slate-700">We use the collected information for various purposes:</p>
            <ul className="text-slate-700">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you information about our services</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and trends</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="text-slate-900">4. Cookies and Tracking Technologies</h2>
            <p className="text-slate-700">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              For more information, please see our <Link href="/cookie-policy" className="text-blue-700 hover:text-blue-900">Cookie Policy</Link>.
            </p>

            <h2 className="text-slate-900">5. Data Sharing and Disclosure</h2>
            <p className="text-slate-700">We do not sell your personal information. We may share your information with:</p>
            <ul className="text-slate-700">
              <li>Service providers who assist in operating our website and services</li>
              <li>Professional advisors (lawyers, accountants) when necessary</li>
              <li>Law enforcement or regulatory authorities when required by law</li>
            </ul>

            <h2 className="text-slate-900">6. Data Security</h2>
            <p className="text-slate-700">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-slate-900">7. Your Rights (GDPR)</h2>
            <p className="text-slate-700">If you are in the European Economic Area, you have the right to:</p>
            <ul className="text-slate-700">
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>

            <h2 className="text-slate-900">8. Data Retention</h2>
            <p className="text-slate-700">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              for which it was collected, or as required by applicable laws.
            </p>

            <h2 className="text-slate-900">9. International Data Transfers</h2>
            <p className="text-slate-700">
              Your information may be transferred to and processed in countries other than your country 
              of residence. We ensure appropriate safeguards are in place for such transfers.
            </p>

            <h2 className="text-slate-900">10. Children&apos;s Privacy</h2>
            <p className="text-slate-700">
              Our services are not intended for individuals under 18 years of age. We do not knowingly 
              collect personal information from children.
            </p>

            <h2 className="text-slate-900">11. Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
            </p>

            <h2 className="text-slate-900">12. Contact Us</h2>
            <p className="text-slate-700">
              If you have questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at:
            </p>
            <ul className="text-slate-700">
              <li>Email: <a href="mailto:contact@telosfn.com" className="text-blue-700 hover:text-blue-900">contact@telosfn.com</a></li>
              <li>Address: Tel Aviv, Israel</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
