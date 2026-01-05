'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '@/stores/cart-store';

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const { items, getTotal } = useCartStore();

  const cartCount = items.length;
  const cartTotal = getTotal();

  const openCart = () => setIsOpen(true);

  return (
    <div className="min-h-screen bg-parchment">
      <header className="sticky top-0 z-50 border-b border-gold/30 pt-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-display text-3xl text-ink font-semibold">
                Atelier Arôme
              </h1>
            </Link>

            <div className="flex items-center gap-4">
              <nav className="hidden md:flex gap-6">
                <Link 
                  href="/"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Compendium
                </Link>
                <Link 
                  href="/collections"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Collections
                </Link>
                <Link 
                  href="/search"
                  className="text-sm font-body text-ink-muted hover:text-gold-dark transition-colors"
                >
                  Search
                </Link>
              </nav>

              <div className="flex items-center gap-2">
                <button
                  onClick={openCart}
                  className="relative inline-flex items-center gap-2 p-2 group"
                >
                  <ShoppingBag className="h-6 w-6 text-gold" />
                  <span className="absolute -top-0 -right-2 rounded-full bg-gold text-white text-xs font-accent -z-50 px-2 py-1 border border-gold">
                    {cartCount}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vial Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="w-full sm:max-w-md bg-parchment border-l border-gold/30">
            <SheetHeader>
              <SheetTitle className="font-display text-2xl text-ink">
                Collection Vial
              </SheetTitle>
            </SheetHeader>
            <div className="p-6">
              {/* Cart items will be rendered here via cart store */}
              <p className="text-center text-ink-muted">
                Your vial is currently empty.
              </p>
              <Button 
                onClick={() => setIsOpen(false)}
                className="w-full mt-6"
                variant="ghost"
              >
                Continue Shopping
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
