import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';

const Header = dynamic(() => import('@/components/Header').then(mod => mod.Header), {
  ssr: false,
  loading: () => (
    <div className="w-full h-12 flex items-center justify-center border-b border-parchment-dark/20">
      <div className="animate-pulse"></div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Atelier Arôme — Artisanal Aromatherapy Essences',
  description:
    'Discover our meticulously curated collection of artisanal aromatherapy essences, blends, and alchemical preparations inspired by Renaissance botanical wisdom.',
};

const products = [
  {
    id: 1,
    latinName: 'Lavandula × intermedia',
    commonName: 'Provence Lavender',
    humour: 'calming',
    humourIcon: '☾',
    humourLabel: 'Calming',
    rarity: 'rare',
    season: 'spring',
    seasonLabel: 'Early Summer',
    notes: 'Floral • Herbaceous • Sweet',
    extraction: 'Steam Distillation',
    price: 42,
    description: 'Harvested at dawn in the Provençal hills, this lavender possesses a sweetness found only in blossoms kissed by the morning\'s first light. Its effect is one of profound calm, like the silence between breaths.',
    folio: 'I',
    featured: true,
  },
  {
    id: 2,
    latinName: 'Eucalyptus globulus',
    commonName: 'Tasmanian Eucalyptus',
    humour: 'clarifying',
    humourIcon: '☁',
    humourLabel: 'Clarifying',
    rarity: 'common',
    season: 'autumn',
    seasonLabel: 'Autumn',
    notes: 'Camphorous • Fresh • Clean',
    extraction: 'Steam Distillation',
    price: 36,
    description: 'The crisp, clean scent of Tasmania\'s ancient forests. This essence clears the mind as morning mist clears from mountain valleys.',
    folio: 'II',
    featured: false,
  },
  {
    id: 3,
    latinName: 'Citrus bergamia',
    commonName: 'Calabrian Bergamot',
    humour: 'uplifting',
    humourIcon: '☀',
    humourLabel: 'Uplifting',
    rarity: 'limited',
    season: 'spring',
    seasonLabel: 'Late Winter',
    notes: 'Citrus • Bright • Spicy',
    extraction: 'Cold Press',
    price: 48,
    description: 'From Italy\'s sun-drenched Calabrian coast, this essence captures the joyful brightness of citrus groves at harvest. A note of pure sunlight.',
    folio: 'III',
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section - Illuminated Manuscript */}
      <section className="relative min-h-screen flex items-center justify-center bg-parchment py-20 px-4 overflow-hidden" id="hero">
        {/* Hand-drawn Border */}
        <div className="absolute top-24 right-24 bottom-24 left-24 pointer-events-none z-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-ink"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-ink"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-ink"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-ink"></div>
        </div>

        {/* Watermark Illustration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none z-5" aria-hidden="true">
          <svg className="w-96 h-96" viewBox="0 0 400 400">
            <path d="M200 100 Q300 150 300 250 Q250 350 200 350 Q150 350 100 250 Q100 150 200 100 Z" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.1"/>
            <path d="M200 120 Q280 160 280 240 Q240 320 200 320 Q160 320 200 320 Q120 320 100 320" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.08"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full">
          {/* Illuminated Initial */}
          <div className="absolute -top-10 -left-10 w-32 h-32 hidden md:block" aria-hidden="true">
            <span className="text-9xl font-display text-gold">A</span>
            <div className="absolute top-20 right-20 bottom-20 left-20 w-16 h-16 border-2 border-gold opacity-20 rounded-full"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20">
            <div className="text-center mb-12">
              {/* Calligraphic Title */}
              <h1 className="font-display text-5xl md:text-7xl font-semibold text-ink mb-8">
                <div className="space-y-2">
                  <span className="block">The</span>
                  <span className="block">Art</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <span className="block">of</span>
                  <span className="font-display text-5xl md:text-7xl text-gold font-semibold">Scent</span>
                </div>
                <span className="block">as Alchemy</span>
              </h1>

              {/* Subtitle with Flourish */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-gold/30"></div>
                <p className="font-body text-lg text-ink-muted-foreground italic">
                  Where Botany Becomes Poetry
                </p>
                <div className="h-px w-16 bg-gold/30"></div>
              </div>

              {/* Manuscript Excerpt */}
              <div className="mb-12">
                <p className="font-body text-lg text-ink-light max-w-2xl mx-auto leading-relaxed text-center">
                  Within our atelier, time slows to the rhythm of distillation. Each botanical is treated as a verse in nature&apos;s manuscript, its essence carefully extracted and preserved. Our practice honors the ancient alchemical tradition&mdash;transforming raw botanical matter into olfactory gold through patience, precision, and profound respect for the natural world.
                </p>
                <div className="w-32 h-px mx-auto bg-gold mb-8"></div>
                <p className="font-body text-sm text-gold text-center">&mdash; Master Perfumer&apos;s Journal</p>
              </div>

              {/* Atelier Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a href="#compounds" className="btn btn--primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-parchment rounded-sm hover:bg-gold transition-colors">
                  <span className="btn__text relative z-10">Enter the Atelier</span>
                  <svg className="btn__icon relative z-10" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7"/>
                  </svg>
                </a>
                <a href="#process" className="btn btn--secondary inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-ink text-ink rounded-sm hover:bg-ink hover:text-parchment transition-colors">
                  <span className="btn__text">Our Alchemy</span>
                  <span className="text-gold">❧</span>
                </a>
              </div>

              {/* Atelier Credentials */}
              <div className="flex flex-wrap gap-8 justify-center">
                <div className="text-center">
                  <div className="text-3xl font-display text-gold mb-2">72</div>
                  <div className="text-sm text-ink-muted-foreground uppercase tracking-widest">Hour Distillation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-gold mb-2">∞</div>
                  <div className="text-sm text-ink-muted-foreground uppercase tracking-widest">Patience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-display text-gold mb-2">100%</div>
                  <div className="text-sm text-ink-muted-foreground uppercase tracking-widest">Artisanal</div>
                </div>
              </div>

              {/* Hero Visual - Hand-blown Vessel */}
              <div className="relative mt-16 mb-24 order-2 md:order-none">
                <div className="mx-auto w-full max-w-2xl flex items-center justify-center">
                  {/* Vessel */}
                  <div className="relative w-64 h-80">
                    {/* Vessel Neck */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-12 mx-auto">
                      <div className="w-full h-full bg-gradient-to-b from-bronze/90 via-bronze/70 to-bronze/95 rounded-t-2xl border-b border-parchment-dark/20"></div>
                    </div>

                    {/* Vessel Body */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-64 mx-auto rounded-b-3xl rounded-b-3xl overflow-hidden shadow-xl">
                      {/* Vessel Liquid */}
                      <div className="absolute bottom-8 left-8 right-8 h-24 bg-gradient-to-b from-lavender/0 via-lavender/50 to-lavender/100 rounded-full opacity-60">
                        {/* Meniscus */}
                        <div className="absolute top-2 left-2 w-12 h-2 bg-lavender/80 rounded-full blur-sm"></div>
                        {/* Reflection */}
                        <div className="absolute top-12 right-8 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
                      </div>

                      {/* Vessel Label */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 bg-bronze/90 text-parchment rounded-lg shadow-lg px-4 py-2 border-2 border-parchment-dark/20">
                        <div className="text-center">
                          <div className="text-2xl font-display text-gold">N°</div>
                          <div className="text-4xl font-display text-ink">724</div>
                        </div>
                      </div>
                    </div>

                    {/* Vessel Base */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-56 h-4 bg-ink mx-auto rounded-t-3xl rounded-t-3xl border-t border-parchment-dark/20"></div>
                  </div>

                  {/* Vessel Stand */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-4 mx-auto rounded-t-3xl rounded-t-3xl border-t border-parchment-dark/20"></div>

                  {/* Botanical Specimens */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Lavender */}
                    <div className="absolute top-20 left-20 w-2 h-20 bg-sage rounded-full opacity-80" style={{ animation: 'floatBotanical 6s ease-in-out infinite' }}>
                      <div className="absolute -top-8 -left-4 w-16 h-16 bg-lavender rounded-full opacity-60"></div>
                      <div className="absolute bottom-0 left-4 w-16 h-16 bg-lavender rounded-full opacity-40 blur-sm"></div>
                    </div>

                    {/* Rose */}
                    <div className="absolute top-40 right-32 w-3 h-24 bg-rosehip rounded-full opacity-80" style={{ animation: 'floatBotanical 6s ease-in-out infinite', animationDelay: '2s' }}>
                      <div className="absolute -top-10 -right-6 w-12 h-12 bg-rose rounded-full opacity-60"></div>
                      <div className="absolute bottom-0 right-6 w-12 h-12 bg-rose rounded-full opacity-40 blur-sm"></div>
                    </div>

                    {/* Eucalyptus */}
                    <div className="absolute bottom-32 right-24 w-2 h-20 bg-eucalyptus rounded-full opacity-80" style={{ animation: 'floatBotanical 6s ease-in-out infinite', animationDelay: '4s' }}>
                      <div className="absolute -top-8 -right-4 w-16 h-16 bg-eucalyptus rounded-full opacity-60"></div>
                      <div className="absolute bottom-0 right-4 w-16 h-16 bg-eucalyptus rounded-full opacity-40 blur-sm"></div>
                    </div>
                  </div>

                  {/* Alchemical Symbol */}
                  <div className="absolute -bottom-40 -right-32 opacity-10 pointer-events-none" aria-hidden="true">
                    <svg className="w-32 h-32" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1,2"/>
                      <path d="M50 20 L80 50 L50 80 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator - Quill */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ animation: 'writeScroll 2s ease-in-out infinite' }}>
                <div className="w-8 h-12">
                  {/* Quill Nib */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-10 bg-ink rounded-b-full"></div>
                  {/* Quill Shaft */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2 h-16 bg-gold rounded-t-full"></div>
                  {/* Quill Feather */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-12 bg-gold rounded-t-full"></div>
                </div>
                <span className="font-body text-sm text-ink-muted-foreground uppercase tracking-widest">Continue Reading</span>
              </div>
            </div>
          </div>
        </section>

      <section className="py-20 px-4 bg-parchment-dark" id="compounds">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-accent text-gold tracking-widest uppercase">First Folio</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-4 mb-6">
              The Botanical<br />Compendium
            </h2>
            <div className="h-px w-32 bg-gold mx-auto mb-6"></div>
            <p className="font-body text-ink-muted-foreground max-w-2xl mx-auto">
              A curated collection of botanical essences, each documented with the care of an illuminated manuscript.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <article 
                key={product.id} 
                className={`bg-parchment rounded-sm p-8 relative ${
                  product.featured ? 'ring-2 ring-gold' : ''
                }`}
              >
                {product.featured && (
                  <div className="absolute -top-3 -right-3 bg-gold text-parchment text-xs px-3 py-1 rounded-sm">
                    Rare
                  </div>
                )}
                
                <div className="text-gold text-2xl mb-4" aria-hidden="true">
                  {product.folio}
                </div>
                
                <div className="mb-4">
                  <div className="font-display text-sm text-gold italic mb-1">
                    {product.latinName}
                  </div>
                  <h3 className="font-display text-2xl text-ink">
                    {product.commonName}
                  </h3>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl" aria-label={`${product.humourLabel} essence`}>
                    {product.humourIcon}
                  </span>
                  <span className="text-sm text-ink-muted-foreground">
                    {product.humourLabel}
                  </span>
                </div>

                <p className="font-body text-ink-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-ink-muted-foreground">Season</span>
                    <span className="text-ink">{product.seasonLabel}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted-foreground">Notes</span>
                    <span className="text-ink">{product.notes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ink-muted-foreground">Extraction</span>
                    <span className="text-ink">{product.extraction}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gold/20">
                  <div>
                    <div className="text-2xl font-display text-ink">
                      ${product.price}
                    </div>
                    <div className="text-xs text-ink-muted-foreground">
                      per 5ml phial
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-ink text-parchment rounded-sm hover:bg-gold transition-colors">
                    To Vial
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn btn--outline inline-flex items-center gap-2 px-8 py-4 border-2 border-ink text-ink rounded-sm hover:bg-ink hover:text-parchment transition-colors">
              <span>Continue Reading</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-parchment" id="process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-accent text-gold tracking-widest uppercase">Second Folio</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mt-4 mb-6">
              The Art of<br />Alchemical Transformation
            </h2>
            <div className="h-px w-32 bg-gold mx-auto mb-6"></div>
            <p className="font-body text-ink-muted-foreground max-w-2xl mx-auto">
              Our practice follows the ancient alchemical principle: solve et coagula. To dissolve and reconstitute.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-parchment-dark rounded-sm p-8">
              <div className="text-gold text-4xl font-display mb-4">I</div>
              <h3 className="font-display text-2xl text-ink mb-4">Nigredo • The Blackening</h3>
              <p className="font-body text-ink-muted-foreground mb-6">
                The raw botanical material undergoes its initial transformation through careful drying and preparation.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Duration</span>
                  <span className="text-ink">7-14 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Temperature</span>
                  <span className="text-ink">Ambient</span>
                </div>
              </div>
            </div>

            <div className="bg-parchment-dark rounded-sm p-8">
              <div className="text-gold text-4xl font-display mb-4">II</div>
              <h3 className="font-display text-2xl text-ink mb-4">Albedo • The Whitening</h3>
              <p className="font-body text-ink-muted-foreground mb-6">
                Through gentle steam distillation at precisely 40°C, the volatile aromatic compounds are released.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Duration</span>
                  <span className="text-ink">72 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Temperature</span>
                  <span className="text-ink">40°C ±0.1</span>
                </div>
              </div>
            </div>

            <div className="bg-parchment-dark rounded-sm p-8">
              <div className="text-gold text-4xl font-display mb-4">III</div>
              <h3 className="font-display text-2xl text-ink mb-4">Citrinitas • The Yellowing</h3>
              <p className="font-body text-ink-muted-foreground mb-6">
                The separated essential oil undergoes a period of maturation in hand-blown glass vessels.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Duration</span>
                  <span className="text-ink">30-90 Days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Vessel</span>
                  <span className="text-ink">Hand-blown Glass</span>
                </div>
              </div>
            </div>

            <div className="bg-parchment-dark rounded-sm p-8">
              <div className="text-gold text-4xl font-display mb-4">IV</div>
              <h3 className="font-display text-2xl text-ink mb-4">Rubedo • The Reddening</h3>
              <p className="font-body text-ink-muted-foreground mb-6">
                The final essence is evaluated, filtered, and bottled by hand. Each phial receives our wax seal.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Process</span>
                  <span className="text-ink">Hand-bottling</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted-foreground">Seal</span>
                  <span className="text-ink">Beeswax</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-parchment py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-display text-2xl text-gold mb-4">Atelier Arôme</h3>
              <address className="font-body text-parchment/80 not-italic">
                <p>Rue des Alchimistes, 7</p>
                <p>Provence-Alpes-Côte d&apos;Azur</p>
                <p>France</p>
              </address>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-gold mb-4">The Folios</h4>
              <ul className="font-body space-y-2">
                <li><a href="#compounds" className="hover:text-gold transition-colors">Compendium</a></li>
                <li><a href="#process" className="hover:text-gold transition-colors">Alchemy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-gold mb-4">Correspondence</h4>
              <ul className="font-body space-y-2">
                <li>
                  <a href="mailto:correspondence@atelierarome.com" className="hover:text-gold transition-colors">
                    correspondence@atelierarome.com
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg text-gold mb-4">Colophon</h4>
              <p className="font-body text-parchment/80 text-sm">
                This digital folio was typeset in Cormorant Garamond and Crimson Pro.
                The alchemical processes described herein are both literal and metaphorical.
              </p>
            </div>
          </div>
          
          <div className="border-t border-parchment/20 pt-8 text-center font-body text-parchment/60 text-sm">
            <p>© Anno MMXXIV Atelier Arôme. All rights preserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
