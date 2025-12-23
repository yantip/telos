import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsentBanner } from "@/components/compliance/CookieConsent";
import { AccessibilityWidget } from "@/components/compliance/AccessibilityWidget";

export const metadata: Metadata = {
  title: {
    default: "Telos - R&D Grant Funding for Deep-Tech Companies",
    template: "%s | Telos",
  },
  description: "Strategic R&D grant funding services for deep-tech companies. Expert identification, preparation, and submission of grant applications.",
  keywords: ["R&D grants", "deep-tech funding", "grant applications", "Israel Innovation Authority", "Horizon Europe", "EIC Accelerator"],
  authors: [{ name: "Telos" }],
  creator: "Telos",
  metadataBase: new URL("https://telosfounding.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Telos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Source+Sans+3:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieConsentBanner />
        <AccessibilityWidget />
      </body>
    </html>
  );
}
