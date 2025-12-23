import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/funding-opportunities', label: 'Funding Opportunities' },
    { href: '/market-research', label: 'Market Research' },
    { href: '/articles', label: 'Articles' },
    { href: '/contact', label: 'Contact' },
  ],
  programs: [
    { href: '/funding-opportunities#israel-innovation-authority', label: 'Israel Innovation Authority' },
    { href: '/funding-opportunities#seed-programs', label: 'SEED Programs' },
    { href: '/funding-opportunities#horizon-europe', label: 'Horizon Europe' },
    { href: '/funding-opportunities#eic-accelerator', label: 'EIC Accelerator' },
  ],
  legal: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/accessibility', label: 'Accessibility Statement' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/telos-logo.svg"
                alt="Telos"
                width={140}
                height={65}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Strategic R&D grant funding services for deep-tech companies. We help you identify, prepare, and submit winning grant applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-slate-400 hover:text-white"
                aria-label="Follow us on Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Programs</h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 text-blue-400" />
                <a
                  href="mailto:contact@telosfn.com"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  contact@telosfn.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 text-blue-400" />
                <a
                  href="tel:+972-54-874695"
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +972-54-874695
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-blue-400" />
                <span className="text-sm text-slate-400">
                  Tel Aviv, Israel
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {currentYear} Telos. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
