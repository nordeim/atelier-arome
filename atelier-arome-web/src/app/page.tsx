import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-parchment text-ink-900 font-serif selection:bg-gold/20">
      <Header />
      <HeroSection />
      <section className="py-12 px-4 text-center">
        <p className="text-lg text-ink-muted font-body">Compendium coming soon...</p>
      </section>
    </main>
  );
}
