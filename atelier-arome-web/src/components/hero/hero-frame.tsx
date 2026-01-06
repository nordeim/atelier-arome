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
      <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] text-ink opacity-5" viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <pattern id="watermark" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#watermark)" />
      </svg>
      <div className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </div>
    </section>
  );
}
