import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
import { CompendiumSection } from '@/components/sections/compendium-section';
import { AlchemySection } from '@/components/sections/alchemy-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { NewsletterSection } from '@/components/sections/newsletter-section';
import { Footer } from '@/components/layout/footer';

export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-parchment text-ink-900 font-serif selection:bg-gold/20">
      <Header />
      <HeroSection />
      <CompendiumSection />
      <AlchemySection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
