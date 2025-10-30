'use client';

import { Mail, Phone, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">אודות הקורס</h3>
            <p className="text-sm text-muted-foreground">
              קורס מקצועי בעברית ללימודי הנדסת סטייג'ינג והפקת הופעות. 
              למד מהבסיס ועד לשליטה מלאה במקצוע.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#curriculum" className="hover:text-primary transition-colors">
                  תוכן הקורס
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  מחירים
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  שאלות נפוצות
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">יצירת קשר</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>052-123-4567</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="btn btn-circle btn-ghost"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-ghost"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-base-content/20 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} מהאולפן לבמה. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

