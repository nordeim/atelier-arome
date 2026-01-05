import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Marketing — Atelier Arôme',
  description: 'Explore our atelier and alchemical preparations.',
};

export default function MarketingLayout({
  children,
}: Readonly<React.ReactNode> {
  return (
    <main>
      <div className="min-h-screen w-full">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>
        
        <main className="max-w-container mx-auto px-4 py-16">
          {children}
          </main>
        
        <footer className="mt-20 border-t border-gold/30 pt-10 pb-10">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Atelier Arôme. All rights reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
