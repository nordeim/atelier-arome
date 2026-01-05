import { Metadata } from 'next';

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
      <section className="relative min-h-screen flex items-center justify-center bg-parchment py-20 px-4" id="hero">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <div className="text-gold text-6xl mb-6" aria-hidden="true">❧</div>
            <h1 className="font-display text-6xl md:text-7xl font-semibold text-ink mb-8">
              <span className="block mb-2">The Art of</span>
              <span className="text-gold">Scent as Alchemy</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-24 bg-gold/30"></div>
              <p className="font-body text-lg text-ink-muted-foreground">
                Where Botany Becomes Poetry
              </p>
              <div className="h-px w-24 bg-gold/30"></div>
            </div>
            <p className="font-body text-ink-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed mb-12">
              Within our atelier, time slows to the rhythm of distillation. Each botanical is treated as a verse in nature&apos;s manuscript, its essence carefully extracted and preserved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#compounds" className="btn btn--primary inline-flex items-center justify-center gap-2 px-8 py-4 bg-ink text-parchment rounded-sm hover:bg-gold transition-colors">
              <span>Enter the Atelier</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#process" className="btn btn--secondary inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-ink text-ink rounded-sm hover:bg-ink hover:text-parchment transition-colors">
              <span>Our Alchemy</span>
              <span className="text-gold">❧</span>
            </a>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display text-gold mb-2">72</div>
              <div className="text-sm text-ink-muted-foreground">Hour Distillation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-gold mb-2">∞</div>
              <div className="text-sm text-ink-muted-foreground">Patience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-gold mb-2">100%</div>
              <div className="text-sm text-ink-muted-foreground">Artisanal</div>
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
