import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Miki Yaron | Filmmaker / Director',
  description: 'Portfolio of Miki Yaron - Director and Editor based in Israel.',
  icons: {
    icon: '/miki-logo.svg',
    apple: '/miki-logo.svg',
  },
  openGraph: {
    title: 'Miki Yaron | Filmmaker / Director',
    description: 'Portfolio of Miki Yaron - Director and Editor based in Israel.',
    url: 'https://portfolio-vercel-sigma-nine.vercel.app',
    siteName: 'Miki Yaron Portfolio',
    images: [
      {
        url: '/miki-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Miki Yaron',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miki Yaron | Filmmaker / Director',
    description: 'Portfolio of Miki Yaron - Director and Editor based in Israel.',
    images: ['/miki-logo.svg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
