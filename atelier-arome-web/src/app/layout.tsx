import type { Metadata } from 'next';
import { Cormorant_Garamond, Crimson_Pro, Great_Vibes } from 'next/font/google';
import './globals.css';
import { QueryProvider } from '@/components/providers/query-provider';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
});

const crimson = Crimson_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const greatVibes = Great_Vibes({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Atelier Arôme',
    default: 'Atelier Arôme — Artisanal Aromatherapy Essences',
  },
  description:
    'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
  keywords: [
    'aromatherapy',
    'essential oils',
    'artisanal essences',
    'Singapore',
    'Renaissance',
    'botanical wisdom',
  ],
  authors: [{ name: 'Atelier Arôme' }],
  creator: 'Atelier Arôme',
  publisher: 'Atelier Arôme',
  metadataBase: new URL('https://atelierarome.sg'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: 'https://atelierarome.sg',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    siteName: 'Atelier Arôme',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atelier Arôme',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
    description:
      'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
    images: ['/og-image.jpg'],
  },
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
      <body
        <QueryProvider>
          <ThemeProvider>
            <Toaster />
            <main className="min-h-screen flex flex-col">
              {children}
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
