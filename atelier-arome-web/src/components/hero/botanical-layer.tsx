export function BotanicalLayer() {
  return (
    <>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-60 animate-float" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-lavender">
          <path d="M50,90 Q50,50 80,30 Q60,50 50,30 Q40,50 20,30 Q50,50 50,90" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-20 h-20 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-rosehip">
          <circle cx="50" cy="50" r="30" fill="currentColor" />
          <circle cx="50" cy="50" r="15" fill="#FAF8F5" />
        </svg>
      </div>
      <div className="absolute top-40 left-10 w-16 h-32 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 50 100" className="w-full h-full text-eucalyptus">
          <ellipse cx="25" cy="25" rx="15" ry="8" fill="currentColor" />
          <ellipse cx="25" cy="50" rx="15" ry="8" fill="currentColor" />
          <ellipse cx="25" cy="75" rx="15" ry="8" fill="currentColor" />
        </svg>
      </div>
    </>
  );
}
