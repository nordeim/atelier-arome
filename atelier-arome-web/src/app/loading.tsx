export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-parchment">
      <div className="animate-pulse flex-col items-center gap-4">
        <div className="w-16 h-16 border-2 border-gold/20 rounded bg-white/30 p-8">
          <svg
            className="animate-spin h-12 w-12 text-ink dark:text-zinc-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <circle
              className="opacity-75"
              cx="12"
              cy="12"
              r="10"
              fill="none"
              strokeWidth="3"
            />
          </circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
