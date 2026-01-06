import { HeroFrame } from './hero-frame';
import { AlchemicalVessel } from './alchemical-vessel';
import { BotanicalLayer } from './botanical-layer';

export function HeroSection() {
  return (
    <HeroFrame>
      <BotanicalLayer />
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div className="space-y-8">
          <div className="relative">
            <svg className="absolute -top-8 -left-8 w-32 h-32 text-gold opacity-30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M50,5 L50,15 M50,85 L50,95 M5,50 L15,50 M85,50 L95,50" stroke="currentColor" strokeWidth="1" />
              <path d="M20,20 L27,27 M73,73 L80,80 M20,80 L27,73 M73,27 L80,20" stroke="currentColor" strokeWidth="1" />
            </svg>
            <span className="text-8xl md:text-9xl font-display font-bold text-gold drop-shadow-lg relative z-10">
              A
            </span>
            <span className="absolute -top-4 -left-4 text-6xl md:text-7xl font-display text-gold opacity-40">
              A
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-ink">
            The Art of Scent
          </h1>
          <p className="text-2xl md:text-3xl font-accent text-gold">
            Where Botany Becomes Poetry
          </p>
          <div className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50">
            <p className="text-lg text-ink leading-relaxed font-body">
              In the quietude of our atelier, where patience is measured not in hours but in weeks,
              we coax forth the very soul of botanical essences. Each drop is a testament to
              the alchemist&apos;s devotion...
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors">
              Enter Atelier
            </button>
            <button className="px-8 py-3 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 transition-colors">
              Our Alchemy
            </button>
          </div>
          <div className="flex gap-8 pt-8 border-t border-gold/20">
            <div className="text-center">
              <p className="text-3xl font-display text-gold">72h</p>
              <p className="text-sm text-ink-muted font-body">Distillation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">∞</p>
              <p className="text-sm text-ink-muted font-body">Patience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">100%</p>
              <p className="text-sm text-ink-muted font-body">Artisanal</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <AlchemicalVessel />
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2 L12,18 M12,18 L6,12 M12,18 L18,12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-sm text-ink-muted font-accent">Continue Reading</span>
        </div>
      </div>
    </HeroFrame>
  );
}
