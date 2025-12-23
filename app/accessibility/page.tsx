import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Accessibility Statement for Telos - our commitment to digital accessibility.',
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-slate-100 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
              Accessibility Statement
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
            <h2 className="text-slate-900">Our Commitment</h2>
            <p className="text-slate-700">
              Telos is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying relevant 
              accessibility standards.
            </p>

            <h2 className="text-slate-900">Conformance Status</h2>
            <p className="text-slate-700">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
              These guidelines explain how to make web content more accessible for people with 
              disabilities and more user-friendly for everyone.
            </p>

            <h2 className="text-slate-900">Measures We Take</h2>
            <p className="text-slate-700">Telos takes the following measures to ensure accessibility:</p>
            <ul className="text-slate-700">
              <li>Include accessibility as part of our internal policies</li>
              <li>Provide accessibility training for our staff</li>
              <li>Assign clear accessibility goals and responsibilities</li>
              <li>Employ formal accessibility quality assurance methods</li>
            </ul>

            <h2 className="text-slate-900">Accessibility Features</h2>
            <p className="text-slate-700">Our website includes the following accessibility features:</p>

            <h3 className="text-slate-900">Navigation</h3>
            <ul className="text-slate-700">
              <li>Skip to main content link</li>
              <li>Consistent navigation throughout the website</li>
              <li>Clear page structure with proper headings</li>
              <li>Keyboard-accessible navigation</li>
            </ul>

            <h3 className="text-slate-900">Visual</h3>
            <ul className="text-slate-700">
              <li>Sufficient color contrast ratios</li>
              <li>Resizable text without loss of functionality</li>
              <li>Alternative text for images</li>
              <li>No content that flashes more than three times per second</li>
            </ul>

            <h3 className="text-slate-900">Interactive Elements</h3>
            <ul className="text-slate-700">
              <li>Clearly visible focus indicators</li>
              <li>Form inputs with associated labels</li>
              <li>Error messages that are clear and actionable</li>
              <li>Touch targets of at least 44x44 pixels on mobile</li>
            </ul>

            <h3 className="text-slate-900">Accessibility Widget</h3>
            <p className="text-slate-700">
              We provide an accessibility widget that allows you to customize your experience:
            </p>
            <ul className="text-slate-700">
              <li>Adjust text size</li>
              <li>Enable high contrast mode</li>
              <li>Reduce motion and animations</li>
              <li>Highlight links throughout the site</li>
            </ul>

            <h2 className="text-slate-900">Assistive Technology Compatibility</h2>
            <p className="text-slate-700">
              Our website is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="text-slate-700">
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Voice recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <h2 className="text-slate-900">Known Limitations</h2>
            <p className="text-slate-700">
              Despite our best efforts, there may be some limitations. We are working to identify 
              and fix any accessibility barriers. Known issues include:
            </p>
            <ul className="text-slate-700">
              <li>Some older PDF documents may not be fully accessible</li>
              <li>Some third-party content may not meet accessibility standards</li>
            </ul>

            <h2 className="text-slate-900">Feedback</h2>
            <p className="text-slate-700">
              We welcome your feedback on the accessibility of our website. If you encounter 
              accessibility barriers, please let us know:
            </p>
            <ul className="text-slate-700">
              <li>Email: <a href="mailto:contact@telosfn.com" className="text-blue-700 hover:text-blue-900">contact@telosfn.com</a></li>
              <li>Phone: Contact our main office</li>
              <li>Contact Form: Use our <Link href="/contact" className="text-blue-700 hover:text-blue-900">contact page</Link></li>
            </ul>
            <p className="text-slate-700">
              We try to respond to accessibility feedback within 5 business days.
            </p>

            <h2 className="text-slate-900">Technical Specifications</h2>
            <p className="text-slate-700">
              Accessibility of our website relies on the following technologies to work with 
              your web browser and any assistive technologies or plugins installed on your computer:
            </p>
            <ul className="text-slate-700">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>WAI-ARIA</li>
            </ul>
            <p className="text-slate-700">
              These technologies are relied upon for conformance with the accessibility standards used.
            </p>

            <h2 className="text-slate-900">Assessment Methods</h2>
            <p className="text-slate-700">Telos assessed the accessibility of this website by the following methods:</p>
            <ul className="text-slate-700">
              <li>Self-evaluation</li>
              <li>Automated testing tools</li>
              <li>Manual testing with assistive technologies</li>
            </ul>

            <h2 className="text-slate-900">Enforcement Procedure</h2>
            <p className="text-slate-700">
              If you are not satisfied with how we respond to your accessibility concern, you may 
              escalate your complaint to the relevant regulatory authorities in your jurisdiction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
