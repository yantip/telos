import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const pingHebrew = localFont({
  src: "../Font/PingHebrewVF.woff2",
  variable: "--font-ping",
  display: "swap",
});

export const metadata: Metadata = {
  title: "מהאופלן לבמה - המדריך ליצירת ההופעה המושלמת",
  description: "קורס מקצועי בעברית ללימודי הנדסת סטייג'ינג והפקת הופעות",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body
        className={`${pingHebrew.variable} font-sans antialiased`}
      >
        {children}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            const theme = localStorage.getItem('theme') || 'light';
            if (theme === 'dark') {
              document.documentElement.classList.add('dark');
            }
          `}
        </Script>
      </body>
    </html>
  );
}
