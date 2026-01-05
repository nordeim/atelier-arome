'use client';

export default function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6">
        <div className="text-center">
          <div className="mb-8">
            <svg
              className="w-24 h-24 mx-auto text-gold dark:text-zinc-800 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <path
                d="M12 17.5a2 2.002 2.002 2.002s"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 9 5a2 2.002 6a.002 2.002s"
                strokeLinejoin="round"
              />
              <text
                x="15"
                y="15"
                text-anchor="middle"
                fontFamily="sans-serif"
                fill="none"
              >
                !
              </text>
            </svg>
          </div>
          <h1 className="font-display text-3xl font-semibold text-ink dark:text-zinc-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-base text-muted-foreground text-center max-w-md text-zinc-600 mb-4">
            An unexpected error has occurred. We apologize for the inconvenience.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.location.href = '/'}
            >
              Return Home
            </button>
            <button
              className="px-6 py-2 border-2 border-solid border-ink rounded-md bg-parchment hover:bg-gold/50 transition-colors hover:text-ink dark:hover:text-zinc-800 dark:text-zinc-900"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
          <p className="text-sm text-muted-foreground text-center max-w-md text-zinc-600 mt-8">
            If the problem persists, please contact our support team or check the server logs.
          </p>
        </div>
      </main>
    </div>
  );
}
