export function AlchemySection() {
  const steps = [
    {
      number: 1,
      name: 'Nigredo',
      subtitle: 'The Blackening',
      description: 'Preparation of botanical materials through gentle maceration, allowing the essence to emerge from darkness.',
      color: 'bg-ink'
    },
    {
      number: 2,
      name: 'Albedo',
      subtitle: 'The Whitening',
      description: 'Purification through slow distillation, separating the pure essence from earthly impurities.',
      color: 'bg-gold'
    },
    {
      number: 3,
      name: 'Citrinitas',
      subtitle: 'The Yellowing',
      description: 'Transformation through careful aging and blending, developing depth and complexity.',
      color: 'bg-amber-600'
    },
    {
      number: 4,
      name: 'Rubedo',
      subtitle: 'The Reddening',
      description: 'Final perfection where essence reaches its ultimate form, ready for the discerning patron.',
      color: 'bg-rosehip'
    }
  ]

  return (
    <section className="py-20 px-4 bg-ink text-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-gold mb-4">
            Our Alchemical Process
          </h2>
          <p className="text-xl font-accent text-gold">
            Where Botany Becomes Poetry
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative pl-12 border-l-2 border-gold/30 pb-8"
            >
              <div
                className={`absolute left-0 top-0 w-10 h-10 -translate-x-1/2 ${step.color} rounded-full flex items-center justify-center text-parchment font-display font-bold`}
              >
                {step.number}
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-display font-semibold text-gold mb-1">
                  {step.name}
                </h3>
                <p className="text-lg font-accent text-gold/80">
                  {step.subtitle}
                </p>
              </div>

              <p className="text-parchment/80 font-body leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-gold/30">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,4 L12,20 M12,20 L6,14 M12,20 L18,14" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="border-2 border-gold/30 rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-lg font-body leading-relaxed mb-4">
              Each essence undergoes this sacred alchemical journey, taking
              between 72 hours and several months to complete. We do not rush
              what nature cannot be hurried.
            </p>
            <p className="text-sm font-accent text-gold">
              — The Alchemist&apos;s Manifesto
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
