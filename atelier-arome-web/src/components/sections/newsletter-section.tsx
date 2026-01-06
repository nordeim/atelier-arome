'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setSubscribed(true)
    setEmail('')
  }

  if (subscribed) {
    return (
      <section className="py-20 px-4 bg-gold text-ink">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-ink"
                viewBox="0 0 80 80"
                style={{ animation: 'rotate-seal 3s ease-in-out infinite' }}
              >
                <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
                <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
                <path
                  d="M40,15 L40,65 M15,40 L65,40 M25,25 L55,55 M55,25 L25,55"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-display font-semibold mb-4">
              Subscription Confirmed
            </h2>
            <p className="text-lg font-body">
              You shall receive tidings of new essences, alchemical revelations,
              and exclusive offers for the discerning patron.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-display font-semibold text-ink mb-4">
              Join Our Circle of Patrons
            </h2>
            <p className="text-lg font-body text-ink mb-2">
              Receive alchemical revelations and exclusive offers
            </p>
            <p className="text-sm font-accent text-gold">
              New essences, process insights, patron privileges
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 w-16 h-16 text-gold opacity-20">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
              </svg>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-display text-ink mb-2">
                  Your Electronic Correspondence
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@example.com"
                  required
                  className="w-full px-4 py-3 border-2 border-gold/30 rounded-lg bg-parchment text-ink placeholder:text-ink-muted focus:border-gold focus:outline-none font-body"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors text-lg"
              >
                Subscribe to the Circle
              </button>
            </form>

            <div className="absolute -right-4 -bottom-4 w-16 h-16 text-gold opacity-20">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M50,0 Q50,50 100,50 Q50,50 50,100 Q50,50 0,50 Q50,50 50,0 Z" />
              </svg>
            </div>
          </div>

          <p className="text-xs text-ink-muted text-center mt-4 font-body">
            Your privacy is sacred. We shall not share your correspondence with others.
          </p>

          <div className="mt-8 flex justify-center">
            <svg
              className="w-12 h-12 text-gold"
              viewBox="0 0 48 48"
              style={{ animation: 'rotate-seal 4s ease-in-out infinite' }}
            >
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
              <path
                d="M24,8 L24,40 M8,24 L40,24 M14,14 L34,34 M34,14 L14,34"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
