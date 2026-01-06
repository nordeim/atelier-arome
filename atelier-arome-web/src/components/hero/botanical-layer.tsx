export function BotanicalLayer() {
  return (
    <>
      <div className="absolute top-20 right-20 w-24 h-24 opacity-60 animate-float" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-lavender">
          <path d="M50,95 Q50,50 75,35 Q60,45 50,30 Q40,45 25,35 Q50,50 50,95" fill="currentColor" />
          <ellipse cx="50" cy="30" rx="8" ry="4" fill="currentColor" />
          <path d="M42,30 L38,20" stroke="currentColor" strokeWidth="2" />
          <path d="M50,25 L50,15" stroke="currentColor" strokeWidth="2" />
          <path d="M58,30 L62,20" stroke="currentColor" strokeWidth="2" />
          <ellipse cx="38" cy="18" rx="3" ry="4" fill="currentColor" />
          <ellipse cx="50" cy="14" rx="3" ry="4" fill="currentColor" />
          <ellipse cx="62" cy="18" rx="3" ry="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-20 h-20 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-rosehip">
          <path d="M50,95 Q50,60 70,50 Q60,55 50,45 Q40,55 30,50 Q50,60 50,95" fill="currentColor" />
          <path d="M50,45 Q65,40 70,30 Q65,38 50,35 Q35,38 30,30 Q35,40 50,45" fill="currentColor" />
          <path d="M50,45 Q50,30 50,20 Q50,30 50,45" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="18" r="6" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-40 left-10 w-16 h-32 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 50 100" className="w-full h-full text-eucalyptus">
          <path d="M25,95 Q25,60 15,50 Q20,55 25,50 Q30,55 35,50 Q25,60 25,95" fill="currentColor" />
          <ellipse cx="15" cy="50" rx="10" ry="4" fill="currentColor" transform="rotate(-30 15 50)" />
          <ellipse cx="35" cy="50" rx="10" ry="4" fill="currentColor" transform="rotate(30 35 50)" />
          <ellipse cx="25" cy="40" rx="10" ry="4" fill="currentColor" />
          <ellipse cx="18" cy="30" rx="8" ry="3" fill="currentColor" transform="rotate(-20 18 30)" />
          <ellipse cx="32" cy="30" rx="8" ry="3" fill="currentColor" transform="rotate(20 32 30)" />
        </svg>
      </div>
    </>
  );
}
