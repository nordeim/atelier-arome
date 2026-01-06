export function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full min-h-screen bg-parchment overflow-hidden">
      <svg className="absolute top-0 left-0 w-32 h-32 text-gold opacity-80" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute top-0 right-0 w-32 h-32 text-gold opacity-80 rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-gold opacity-80 -rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-gold opacity-80 rotate-180" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </div>
    </section>
  );
}
