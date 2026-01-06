import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-parchment py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-semibold text-gold mb-4">
              Atelier Arôme
            </h3>
            <p className="text-parchment/80 font-body leading-relaxed mb-4">
              Where botany becomes poetry through the sacred art of alchemical distillation.
              Each essence is a testament to patience, precision, and botanical devotion.
            </p>
            <div className="space-y-2 text-sm text-parchment/60 font-body">
              <p>📍 42 Orchard Road, Singapore 238823</p>
              <p>🕒 Tue–Sun: 10:00–18:00</p>
              <p>📞 +65 6789 0123</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              The Manuscript
            </h4>
            <ul className="space-y-2 font-body">
              <li>
                <Link
                  href="#compendium"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  The Compendium
                </Link>
              </li>
              <li>
                <Link
                  href="#alchemy"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  Our Alchemy
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  About the Atelier
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-parchment/80 hover:text-gold transition-colors"
                >
                  Patron Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-semibold text-gold mb-4">
              Society
            </h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 border-2 border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M16,11.37 A4,4,0,1,1,12.63,8 A4,4,0,0,1,16,11.37 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border-2 border-gold/50 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-ink transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12,6 L12,10 M10,8 L14,8" stroke="currentColor" strokeWidth="2" />
                  <path d="M12,18 L12,14" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-parchment/60 font-body">
              Follow our alchemical journey
            </p>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-parchment/60 font-body">
              © {currentYear} Atelier Arôme. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Shipping
              </Link>
              <Link
                href="#"
                className="text-parchment/60 hover:text-gold transition-colors font-body"
              >
                Returns
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block border-2 border-gold/30 rounded-lg p-4 bg-parchment/5">
            <p className="text-xs font-accent text-gold mb-2">
              — Colophon —
            </p>
            <p className="text-sm text-parchment/60 font-body">
              Crafted with devotion in Singapore
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
