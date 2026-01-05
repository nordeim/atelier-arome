'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-md border-b border-parchment-dark/20 transition-all duration-300">
      {/* Atelier Banner */}
      <div className="bg-gradient-to-r from-ink via-sage to-ink py-2 text-center relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-sm">
          <span className="text-gold opacity-80">✷</span>
          <span className="font-medium">The Atelier is Open</span>
          <span className="text-parchment/80">
            Current Batch: <em>N° 724 • Lavandula × intermedia</em>
          </span>
          <span className="text-gold opacity-80">✷</span>
        </div>
      </div>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Atelier Seal */}
          <Link 
            href="#hero" 
            className="flex flex-col items-center gap-2 text-decoration-none hover:text-gold transition-colors relative z-10"
            aria-label="Atelier Arôme - Home"
          >
            <div className="relative w-14 h-14 flex items-center justify-center">
              <svg className="w-10 h-10 text-ink" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2,2"/>
                <path d="M50 20 Q70 30 80 50 Q70 70 50 80 Q30 70 50 20 Z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1"/>
                <path d="M50 35 L50 65 M35 50 L65 50" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-display text-base font-semibold text-ink">Atelier</span>
                <span className="font-display text-base font-semibold text-ink">Arôme</span>
              </div>
            </div>
            <span className="text-xs text-ink-muted-foreground">Est. 2024</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Atelier navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link 
                  href="#compounds" 
                  className="flex flex-col items-center gap-2 text-ink-muted-foreground hover:text-ink transition-colors text-sm"
                >
                  <span className="text-xs text-gold/60">— I —</span>
                  <span className="font-medium text-sm uppercase tracking-widest">Compendium</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#process" 
                  className="flex flex-col items-center gap-2 text-ink-muted-foreground hover:text-ink transition-colors text-sm"
                >
                  <span className="text-xs text-gold/60">— II —</span>
                  <span className="font-medium text-sm uppercase tracking-widest">Alchemy</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#atelier" 
                  className="flex flex-col items-center gap-2 text-ink-muted-foreground hover:text-ink transition-colors text-sm"
                >
                  <span className="text-xs text-gold/60">— III —</span>
                  <span className="font-medium text-sm uppercase tracking-widest">The Atelier</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="#manuscript" 
                  className="flex flex-col items-center gap-2 text-ink-muted-foreground hover:text-ink transition-colors text-sm"
                >
                  <span className="text-xs text-gold/60">— IV —</span>
                  <span className="font-medium text-sm uppercase tracking-widest">Manuscript</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Tools */}
          <div className="flex items-center gap-3">
            <button 
              className="w-11 h-11 flex items-center justify-center border border border-parchment-dark/20 rounded-sm text-ink hover:bg-gold/10 hover:text-gold transition-colors relative"
              aria-label="Search compendium"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
            </button>

            <button 
              className="w-11 h-11 flex items-center justify-center border border border-parchment-dark/20 rounded-sm text-ink hover:bg-gold/10 hover:text-gold transition-colors relative"
              aria-label="Collection vial"
              data-count={cartCount}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 2 2h14a2 2 0-2V6l-3-4z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-gold text-parchment text-xs font-semibold rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <button 
              className="md:hidden w-11 h-11 flex items-center justify-center border border border-parchment-dark/20 rounded-sm text-ink hover:bg-gold/10 hover:text-gold transition-colors"
              aria-label="Open atelier menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-5 h-6 relative">
                <div className="absolute inset-x-0 top-0 w-0.5 h-full bg-ink transition-all duration-300"></div>
                <div className="absolute inset-x-0 bottom-0 w-0.5 h-full bg-ink"></div>
                <div className="absolute inset-0 w-full h-0.5 bg-ink"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        {mobileMenuOpen && (
          <nav className="fixed inset-0 bg-ink text-parchment z-50 transform transition-transform duration-300" aria-label="Mobile navigation">
            <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 relative">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 border border border-gold/30 rounded-full opacity-20"></div>
                <div className="absolute bottom-20 right-10 w-20 h-20 border border border-gold/30 rounded-full opacity-20"></div>
              </div>

              <div className="max-w-md mx-auto">
                {/* Mobile Nav Header */}
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto border border border-gold/30 rounded-full flex items-center justify-center">
                    <div className="text-gold text-xs opacity-60">❖</div>
                  </div>
                  <span className="font-display text-gold text-lg tracking-widest">Atelier Folio</span>
                </div>

                <ul className="flex flex-col gap-4 text-center">
                  <li>
                    <Link 
                      href="#compounds" 
                      className="flex items-center gap-3 py-4 text-ink hover:text-gold transition-colors border-b border-parchment-dark/20"
                    >
                      <span className="text-gold text-xl">❖</span>
                      <div className="flex flex-col items-center">
                        <span className="font-display text-lg">Compendium</span>
                        <span className="text-xs text-gold/60">Folio I</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#process" 
                      className="flex items-center gap-3 py-4 text-ink hover:text-gold transition-colors border-b border-parchment-dark/20"
                    >
                      <span className="text-gold text-xl">❖</span>
                      <div className="flex flex-col items-center">
                        <span className="font-display text-lg">Alchemy</span>
                        <span className="text-xs text-gold/60">Folio II</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#atelier" 
                      className="flex items-center gap-3 py-4 text-ink hover:text-gold transition-colors border-b border-parchment-dark/20"
                    >
                      <span className="text-gold text-xl">❖</span>
                      <div className="flex flex-col items-center">
                        <span className="font-display text-lg">The Atelier</span>
                        <span className="text-xs text-gold/60">Folio III</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="#manuscript" 
                      className="flex items-center gap-3 py-4 text-ink hover:text-gold transition-colors border-b border-parchment-dark/20"
                    >
                      <span className="text-gold text-xl">❖</span>
                      <div className="flex flex-col items-center">
                        <span className="font-display text-lg">Manuscript</span>
                        <span className="text-xs text-gold/60">Folio IV</span>
                      </div>
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t border-parchment-dark/20 text-center">
                  <span className="text-parchment/60">Atelier Arôme</span>
                  <span className="text-ink-muted-foreground">Anno MMXXIV</span>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
