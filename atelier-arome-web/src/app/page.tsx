import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
  description:
    'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
};

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-parchment max-w-full mx-auto py-12 px-4">
      <div className="w-full max-w-7xl">
        <h1 className="font-display text-5xl font-semibold text-ink mb-8">
          Atelier Arôme
        </h1>
        <p className="font-body text-ink-muted-foreground text-zinc-600 text-zinc-800 max-w-2xl mx-auto">
          Artisanal aromatherapy essences, meticulously curated in small batches, with alchemical properties and Renaissance botanical wisdom. Each essence represents a convergence of tradition and innovation.
        </p>
      </div>
    </main>
  );
}
