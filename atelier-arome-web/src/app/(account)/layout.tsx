import Link from 'next/link';

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
      </nav>

      <div className="border-t border-gold/30 p-6 rounded-lg bg-white dark:text-zinc-200">
        <main className="max-w-7xl mx-auto px-4 py-16">
          {children}
        </main>
      </div>
    </main>
  );
}
