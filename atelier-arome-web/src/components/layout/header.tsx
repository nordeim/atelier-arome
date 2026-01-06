'use client'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { useCartStore } from '@/stores/cart-store'

export function Header() {
  const cartItems = useCartStore((state) => state.items)

  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b-2 border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 animate-seal-rotate">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A769" strokeWidth="4" />
                <text x="50" y="55" textAnchor="middle" className="text-2xl font-display fill-ink">
                  A
                </text>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-display font-semibold text-ink">
                Atelier Arôme
              </h1>
              <p className="text-sm text-ink-muted font-accent">
                Artisanal Aromatherapy
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#compendium" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— I —</span> Compendium
            </a>
            <a href="#alchemy" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— II —</span> Alchemy
            </a>
            <a href="#atelier" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— III —</span> The Atelier
            </a>
            <a href="#manuscript" className="text-ink hover:text-gold transition-colors font-display">
              <span className="text-gold-light">— IV —</span> Manuscript
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <button className="relative p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 14 0 00-8 0v4M5 9l14 14m0 0H5l14-14"
                />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-ink text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            <Sheet>
              <SheetTrigger className="md:hidden p-2 text-ink hover:text-gold transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </SheetTrigger>
              <SheetContent className="bg-parchment border-l-2 border-gold shadow-xl w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#compendium" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— I —</span> Folio I: Compendium
                  </a>
                  <a href="#alchemy" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— II —</span> Folio II: Alchemy
                  </a>
                  <a href="#atelier" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— III —</span> Folio III: The Atelier
                  </a>
                  <a href="#manuscript" className="text-ink hover:text-gold font-display text-lg py-2">
                    <span className="text-gold-light">— IV —</span> Folio IV: Manuscript
                  </a>
                </nav>

                <div className="colophon mt-8 border-t border-gold/20 pt-8">
                  <p className="text-gold font-display text-sm mb-2">
                    Atelier Arôme
                  </p>
                  <address className="text-ink-muted font-body text-sm leading-relaxed">
                    <p>42 Orchard Road, Singapore 238823</p>
                    <p>Provence-Alpes-Côte d&apos;Azur, France</p>
                    <p className="font-accent text-gold mt-2">Anno MMXXIV</p>
                  </address>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
