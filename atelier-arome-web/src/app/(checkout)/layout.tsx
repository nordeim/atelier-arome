'use client';

import Link from 'next/link';

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen w-full">
      <div className="max-w-container mx-auto px-4 py-16">
        <header>
          <Link href="/">
            <h1 className="font-display text-3xl text-ink">Atelier Arôme</h1>
          </Link>
        </header>
        
        <main className="max-w-container mx-auto px-4">
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
