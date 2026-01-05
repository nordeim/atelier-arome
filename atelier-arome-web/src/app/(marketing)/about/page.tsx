import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Atelier Arôme',
  description: 'Learn about our atelier and alchemical heritage.',
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-parchment">
        <header className="sticky top-0 z-50 border-b border-gold/30 pt-10 pb-20">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-body text-ink hover:text-gold transition-colors hover:text-gold">
              Atelier Arôme
            </Link>

            <Link href="/compendium" className="text-sm font-body text-ink hover:text-gold transition-colors hover:text-gold">
              Compendium
            </Link>

            <Link href="/alchemy" className="text-sm font-body text-ink hover:text-gold transition-colors hover:text-gold">
              Alchemy
            </Link>

            <Link href="/contact" className="text-sm font-body text-ink hover:text-gold transition-colors hover:text-gold">
              Contact
            </Link>

            <Link href="/faq" className="text-sm font-body text-ink hover:text-gold transition-colors hover:text-gold">
              FAQ
            </Link>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-12">
          <div>
            <h1 className="font-display text-4xl font-semibold text-ink mb-4">Our Atelier</h1>
            <p className="font-body text-lg text-ink max-w-3xl mb-8">
              A sanctuary where ancient alchemical wisdom meets contemporary design. Our story begins in 15th century Singapore with a single mission: to elevate the art of aromatherapy through meticulous curation and transparent craftsmanship.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="font-display text-2xl font-bold text-gold mb-4">The Atelier Story</h2>
              <p className="font-body text-base text-ink mb-4">
                Founded in 2025 by Master Aroma Architect, the Atelier has grown from a passion project into a renowned artisanal aromatherapy brand. Each essence is hand-blended in small batches using traditional methods passed down through generations.
              </p>
              <p className="font-body text-base text-ink">
                Atelier Arôme represents the convergence of two distinct streams: the scientific rigour of modern aromatherapy and the artistic vision of Renaissance illuminated manuscripts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-gold mb-4">Our Process</h2>
              <p className="font-body text-base text-ink mb-4">
                Every essence undergoes a rigorous 10-stage alchemical process before reaching our atelier vial shelves.
              </p>
              <ol className="list-decimal list-disc space-y-2 ml-8">
                <li>
                  <span className="font-bold text-gold">1.</span>
                  <span className="font-semibold">Sourcing:</span>
                  We partner with sustainable farmers and ethical wild-harvesters across Southeast Asia, ensuring fair compensation and environmentally responsible practices.
                </li>
                <li>
                  <span className="font-bold text-gold">2.</span>
                  <span className="font-semibold">Extraction:</span>
                  Steam distillation or CO₂ extraction methods chosen based on the essence's aromatic profile and intended alchemical effect.
                </li>
                <li>
                  <span className="font-bold text-gold">3.</span>
                  <span className="font-semibold">Bottling:</span>
                  Hand-blended in amber glass vials with natural cork seals to preserve freshness and integrity.
                </li>
                <li>
                  <span className="font-bold text-gold">4.</span>
                  <span className="font-semibold">Quality Control:</span>
                  Multiple checkpoints: Gas chromatography, organoleptic testing, GC-MS compliance.
                </li>
                <li>
                  <span className="font-bold text-gold">5.</span>
                  <span className="font-semibold">Labelling:</span>
                  Each batch is meticulously tested for alchemical consistency and purity.
                </li>
                <li>
                  <span className="font-bold text-gold">6.</span>
                  <span className="font-semibold">Folioing:</span>
                  Each essence receives a unique folio number and complete documentation tracing its journey.
                </li>
              </ol>
            </section>
          </div>
        </main>
      </>
  );
}
