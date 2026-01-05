import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
  description: 'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
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

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-parchment max-w-full mx-auto py-12 px-4">
      <main>
        <div className="w-full max-w-7xl">
          <h1 className="font-display text-5xl font-semibold text-ink mb-8">
            Atelier Arôme
          </h1>
          <p className="text-ink-muted-foreground text-zinc-600 text-zinc-800 max-w-2xl mx-auto">
            Artisanal aromatherapy essences, meticulously curated in small batches, with alchemical properties and Renaissance botanical wisdom. Each essence represents the convergence of tradition and innovation.
          </p>
        </div>
      </main>
    </div>
  );
}
