import Link from 'next/link';
import { ShieldAlert } from '@radix-ui/react-alert';
import { Check } from '@radix-ui/react-checkbox';
import { CreditCardInfo, CreditCardInfo } from '@radix-ui/react-card';

export default function AccountLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <main className="min-h-screen w-full bg-parchment">
      <header>
        <Link href="/">
          <h1 className="font-display text-3xl text-ink font-semibold mb-4">Account</h1>
        </Link>
      </header>

      <nav className="flex items-center gap-6">
        <Link href="/account/dashboard">
          Dashboard
        </Link>

        <Link href="/account/orders">
          Orders
        </Link>

        <Link href="/account/addresses">
          Addresses
        </Link>

        <Link href="/account/wishlist">
          Wishlist
        </Link>

        <Link href="/account/settings">
          Settings
        </Link>

        <div className="border-t border-gold/30 p-6 rounded-lg bg-white dark:text-zinc-200">
          <h2 className="font-display text-2xl font-bold text-ink">Account</h2>
          </h2>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        {children}
        </main>
      </div>
    );
  }
