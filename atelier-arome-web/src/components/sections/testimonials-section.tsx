'use client'

import { useState } from 'react'

interface Testimonial {
  id: string
  patron: string
  verified: boolean
  essence: string
  content: string
  date: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    patron: 'Lady Eleanor',
    verified: true,
    essence: 'Damask Rose',
    content: 'The rose essence transports me to an English garden at dawn. Sublime beyond measure.',
    date: 'December 2025'
  },
  {
    id: '2',
    patron: 'Sir William',
    verified: true,
    essence: 'English Lavender',
    content: 'A masterwork of botanical alchemy. The lavender essence calms my spirit like nothing else.',
    date: 'November 2025'
  },
  {
    id: '3',
    patron: 'Duchess Arabella',
    verified: true,
    essence: 'Blue Gum Eucalyptus',
    content: 'Exceptional clarity and purity. The eucalyptus essence clears both body and mind.',
    date: 'October 2025'
  }
]

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(TESTIMONIALS.length / testimonialsPerPage)

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  )

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            Words From Our Patrons
          </h2>
          <p className="text-xl font-accent text-gold">
            Verified Accounts of Alchemical Delight
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {currentTestimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50 relative"
            >
              {testimonial.verified && (
                <div className="absolute top-4 right-4 text-gold text-xs font-display uppercase tracking-wide">
                  ✓ Verified Patron
                </div>
              )}

              <div className="mb-4">
                <svg className="w-8 h-8 text-gold/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2 C9,2 7,4 7,7 L7,10 L4,10 L4,22 L20,22 L20,10 L17,10 L17,7 C17,4 15,2 12,2 Z M12,4 C13.66,4 15,5.34 15,7 L15,10 L9,10 L9,7 C9,5.34 10.34,4 12,4 Z" />
                </svg>
              </div>

              <p className="text-ink font-body leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="pt-4 border-t border-gold/20">
                <p className="text-gold font-display font-semibold mb-1">
                  {testimonial.patron}
                </p>
                <p className="text-sm text-ink-muted font-body mb-2">
                  On {testimonial.essence}
                </p>
                <p className="text-xs text-ink-muted font-accent">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className="px-4 py-2 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 font-display rounded-lg transition-colors ${
                  currentPage === i
                    ? 'bg-gold text-ink'
                    : 'border-2 border-gold text-ink hover:bg-gold/10'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            →
          </button>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border-2 border-gold/30 rounded-lg p-6 bg-parchment/50">
            <p className="text-sm font-body text-ink mb-2">
              Verified Patronage Badge
            </p>
            <svg className="w-12 h-12 mx-auto text-gold" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="M14,24 L22,32 L34,18"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
