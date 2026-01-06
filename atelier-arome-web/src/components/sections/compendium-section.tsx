'use client'

import { useState } from 'react'

interface Essence {
  id: string
  folioNumber: number
  latinName: string
  commonName: string
  humour: 'fire' | 'earth' | 'air' | 'water'
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary'
  season: 'spring' | 'summer' | 'autumn' | 'winter'
  price: number
  notes: string
}

const MOCK_ESSENCES: Essence[] = [
  {
    id: '1',
    folioNumber: 1,
    latinName: 'Lavandula angustifolia',
    commonName: 'English Lavender',
    humour: 'air',
    rarity: 'common',
    season: 'summer',
    price: 45,
    notes: 'Floral, herbaceous, slightly sweet'
  },
  {
    id: '2',
    folioNumber: 2,
    latinName: 'Rosa damascena',
    commonName: 'Damask Rose',
    humour: 'fire',
    rarity: 'rare',
    season: 'spring',
    price: 125,
    notes: 'Rich, deep, velvety floral'
  },
  {
    id: '3',
    folioNumber: 3,
    latinName: 'Eucalyptus globulus',
    commonName: 'Blue Gum',
    humour: 'air',
    rarity: 'common',
    season: 'winter',
    price: 35,
    notes: 'Fresh, camphoraceous, clearing'
  }
]

const HUMOURS = {
  fire: { icon: '🔥', label: 'Fire' },
  earth: { icon: '🌍', label: 'Earth' },
  air: { icon: '💨', label: 'Air' },
  water: { icon: '💧', label: 'Water' }
}

const RARITY_COLORS = {
  common: 'text-gold',
  uncommon: 'text-eucalyptus',
  rare: 'text-rosehip',
  legendary: 'text-gold'
}

export function CompendiumSection() {
  const [filter, setFilter] = useState<string>('all')
  const [sort, setSort] = useState<string>('folio')

  const filteredEssences = MOCK_ESSENCES.filter(essence => {
    if (filter === 'all') return true
    if (filter === 'calming') return ['air', 'water'].includes(essence.humour)
    if (filter === 'uplifting') return essence.humour === 'fire'
    if (filter === 'grounding') return essence.humour === 'earth'
    if (filter === 'clarifying') return essence.humour === 'air'
    return true
  })

  const sortedEssences = [...filteredEssences].sort((a, b) => {
    switch (sort) {
      case 'folio':
        return a.folioNumber - b.folioNumber
      case 'price':
        return a.price - b.price
      case 'rarity':
        const rarityOrder = ['common', 'uncommon', 'rare', 'legendary']
        return rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
      default:
        return 0
    }
  })

  return (
    <section className="py-20 px-4 bg-parchment">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-ink mb-4">
            The Compendium
          </h2>
          <p className="text-xl font-accent text-gold">
            Our Collection of Botanical Essences
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {['all', 'calming', 'uplifting', 'grounding', 'clarifying'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 font-display rounded-lg transition-colors ${
                filter === f
                  ? 'bg-gold text-ink'
                  : 'border-2 border-gold text-ink hover:bg-gold/10'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border-2 border-gold font-display rounded-lg bg-parchment text-ink"
          >
            <option value="folio">Folio Order</option>
            <option value="price">Price (Low to High)</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedEssences.map(essence => (
            <div
              key={essence.id}
              className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50 hover:border-gold transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-display text-gold">
                  Folio {essence.folioNumber}
                </span>
                <span
                  className={`${RARITY_COLORS[essence.rarity]} text-sm font-display uppercase`}
                >
                  {essence.rarity}
                </span>
              </div>

              <h3 className="text-2xl font-display text-ink mb-2">
                {essence.latinName}
              </h3>

              <p className="text-lg font-accent text-gold mb-4">
                {essence.commonName}
              </p>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span>{HUMOURS[essence.humour].icon}</span>
                  <span className="text-sm text-ink-muted font-body">
                    {HUMOURS[essence.humour].label}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌸</span>
                  <span className="text-sm text-ink-muted font-body capitalize">
                    {essence.season}
                  </span>
                </div>
              </div>

              <p className="text-sm text-ink mb-4 font-body">
                {essence.notes}
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-gold/20">
                <span className="text-2xl font-display text-gold">
                  ${essence.price}
                </span>
                <button className="px-6 py-2 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors">
                  Add to Vial
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
