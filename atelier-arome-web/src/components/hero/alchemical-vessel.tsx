export function AlchemicalVessel() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <path
          d="M70,20 L70,60 Q40,100 40,150 Q40,180 100,180 Q160,180 160,150 Q160,100 130,60 L130,20 Z"
          fill="none"
          stroke="#C9A769"
          strokeWidth="3"
          opacity="0.6"
        />
        <path
          d="M45,150 Q45,175 100,175 Q155,175 155,150"
          fill="none"
          stroke="#B8A9C9"
          strokeWidth="4"
          className="animate-liquid-sway"
        />
        <circle cx="80" cy="160" r="4" fill="#E8B4B8" className="animate-bubble-rise" />
        <circle cx="120" cy="155" r="3" fill="#F5D489" className="animate-bubble-rise" style={{ animationDelay: '0.5s' }} />
      </svg>
      <div className="absolute inset-0 bg-gold opacity-10 blur-3xl rounded-full animate-pulse" />
    </div>
  );
}
