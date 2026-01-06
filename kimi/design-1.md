# Executive Summary

I will re-imagine the Atelier Arôme landing page as an immersive *manuscript folio experience* rather than a conventional website. The static HTML mock-up will feature asymmetric manuscript layouts, realistic gold leaf illumination effects, botanical marginalia that responds to scroll, and typography that behaves like hand-calligraphed text. This delivers a production-ready HTML/CSS artifact that demonstrates the "Illuminated Manuscript" concept at maximum fidelity while maintaining WCAG AAA compliance and sub-2s load performance.

---

# Phase 1: ANALYZE – Deep Requirement Mining

## Explicit Requirements
- Static HTML mock-up demonstrating "Illuminated Manuscript" Renaissance aesthetic
- Laravel 12 + Next.js 15 architecture (forward-compatible)
- Singapore market localization (GST, PayNow, SingPost)
- WCAG AAA accessibility compliance
- Anti-Generic design rejection of templated aesthetics
- Performance target: <2s load, 95+ Lighthouse

## Implicit Needs
- **Psychological**: Convey artisanal heritage, premium scarcity, botanical authenticity
- **Perceptual**: Create "unforgettable" visual signature that differentiates from Shopify/D2C clones
- **Technical**: CSS-first approach (no JS dependencies), scalable to 10K+ products via headless API
- **Accessibility**: Screen reader narrative must match manuscript storytelling metaphor
- **Cultural**: Singaporean market expects trust signals, local payment integration awareness, and subtle Peranakan influence without appropriation

## Current Design Gaps (Anti-Generic Diagnosis)
❌ **Generic Elements in Sample**:
- Block-centered hero with predictable padding
- Standard card grid (even if 3-column)
- Conventional header navigation
- Minimal scroll choreography
- Flat gold gradients (lack realistic illumination)
- Underutilized marginalia concept
- No manuscript "page spread" asymmetry

✅ **Opportunities for Distinction**:
- True manuscript folio layout (verso/recto asymmetric grids)
- CSS `size-adjust` for zero-layout-shift font loading
- Scroll-driven botanical border reveals
- Realistic gold leaf: multi-layer gradients + `filter: brightness()` hover
- Alchemical symbol system per product category
- Peranakan tile-inspired border patterns (abstracted)
- "Ink spreading" animation for text reveal
- Focus indicators as "gold illumination" rings

---

# Phase 2: PLAN – Structured Execution Roadmap

## Design Manifesto:  **"The Digital Folio"**

The interface is not a page—it's a **folio spread** from a botanical manuscript. Users don't scroll; they *turn pages*. Products aren't cards; they're *illuminated miniatures*. Navigation isn't a menu; it's a *table of contents* with rubrication.

### Aesthetic Direction: **Renaissance Apothecary + Peranakan Minimalism**

- **Typography**: Fluid major-third scale (12px → 96px) using CSS `clamp()` and `size-adjust` for perfect baseline grid
- **Color**: Manuscript-inspired but Peranakan-tinted: 
  - *Burgundy* → Deep Teh Tarik brown (`#3A2C24`)
  - *Sage* → Pandan Green (`#7B9A6B`)
  - *Gold* → Kueh Lapis gold (`#D4AF37 → #F4E4BC` layer stack)
- **Layout**: CSS Grid with `grid-template-areas` creating asymmetric manuscript margins
- **Decorations**: SVG sprite with 24 botanical elements (ginger flower, pandan, frangipani, lotus) used as marginalia

### Technical Architecture for Static Mock-Up

```css
/* Core Design Tokens (CSS Custom Properties) */
:root {
  /* Colors (WCAG AAA: 7:1+ ratios) */
  --ink: #1B1A17; /* AAA on parchment */
  --parchment: #FAF5EE; /* Base */
  --gold-base: #D4AF37;
  --gold-mid: #E8C882;
  --gold-light: #F4E4BC;
  --burgundy: #3A2C24; /* Localized: Teh Tarik brown */
  --sage: #7B9B86;
  --ultramarine: #12324B;
  
  /* Typography (Fluid Scale, Major Third: 1.25) */
  --text-xs: clamp(0.69rem, 0.66rem + 0.17vw, 0.79rem);
  --text-sm: clamp(0.83rem, 0.79rem + 0.21vw, 0.96rem);
  --text-base: clamp(1.00rem, 0.95rem + 0.26vw, 1.20rem);
  --text-lg: clamp(1.20rem, 1.14rem + 0.31vw, 1.44rem);
  --text-xl: clamp(1.44rem, 1.37rem + 0.37vw, 1.73rem);
  --text-2xl: clamp(1.73rem, 1.64rem + 0.45vw, 2.07rem);
  --text-3xl: clamp(2.07rem, 1.97rem + 0.54vw, 2.49rem);
  --text-4xl: clamp(2.49rem, 2.37rem + 0.65vw, 2.99rem);
  
  /* Manuscript Grid (Asymmetric Margins) */
  --margin-outside: 8vw; /* Wider outer margin (book spine side) */
  --margin-inside: 3vw;  /* Narrower inner margin */
  --text-block: min(65ch, 60vw);
}

/* Gold Leaf Mixin (Realistic Illumination) */
.gold-illumination {
  background: 
    radial-gradient(ellipse at 20% 20%, var(--gold-light) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, var(--gold-mid) 0%, transparent 50%),
    linear-gradient(135deg, var(--gold-base), var(--gold-mid));
  filter: brightness(1.05) contrast(1.1);
  transition: filter 0.3s ease;
}
.gold-illumination:hover {
  filter: brightness(1.15) contrast(1.2) drop-shadow(0 0 8px var(--gold-light));
}
```

### Component Architecture

1. **`<nav class="manuscript-toc">`** – Table of contents with rubricated active states
2. **`<header class="folio-header">`** – Ornate initial with botanical surround
3. **`<section class="page-spread">`** – Asymmetric grid creating verso/recto layout
4. **`<article class="illuminated-miniature">`** – Product with botanical frame reveal
5. **`<p class="rubricated-text">`** – Text with gold initial and hanging punctuation
6. **`<aside class="marginalia">`** – Side notes with SVG illustrations
7. **`<form class="wax-seal">`** – Newsletter with interactive seal button

---

## Implementation Roadmap

### **Phase 1: Design Tokens & Foundation** (Effort: 2h)
- [ ] Define CSS custom properties for colors, typography, spacing
- [ ] Create fluid typography scale with `clamp()` and `size-adjust` fallbacks
- [ ] Build manuscript grid system using CSS Grid + custom properties
- [ ] Design 24 botanical SVG sprite (data URI encoded)
- [ ] Create gold illumination mixin with layered gradients

**Success Criteria**: 
- Color contrast ratios verified (7:1 minimum)
- Typography scale renders without CLS
- Grid system allows asymmetric layouts

### **Phase 2: Layout & Navigation** (Effort: 2h)
- [ ] Build `<nav>` as manuscript table of contents
- [ ] Create `<header>` with large illuminated initial "A" (3D effect)
- [ ] Implement CSS Grid page spread with marginalia areas
- [ ] Add decorative borders using SVG masks
- [ ] Design responsive breakpoints (mobile collapses to single column)

**Success Criteria**:
- Layout is asymmetric on desktop, readable on mobile
- Navigation is keyboard accessible with gold focus rings
- Marginalia appears/disappears gracefully

### **Phase 3: Hero Section (The Folio Opening)** (Effort: 3h)
- [ ] Large illuminated "A" with CSS animations (ink spreading)
- [ ] Marginalia SVG that parallaxes on scroll (respects reduced motion)
- [ ] Asymmetric product showcase: image on left, text on right with drop cap
- [ ] Gold foil heading with realistic lighting effects
- [ ] Decorative divider with animated botanical elements

**Success Criteria**:
- Hero has "wow" moment on load
- Parallax respects `prefers-reduced-motion`
- Text remains readable with animations disabled

### **Phase 4: Product Miniatures** (Effort: 3h)
- [ ] Reframe products as "illuminated miniatures" (no cards)
- [ ] Botanical border that "grows" on hover (CSS `transition` + SVG stroke-dashoffset)
- [ ] Alchemical symbol system (24 unique symbols for product types)
- [ ] Hand-lettered price labels using Great Vibes font
- [ ] Asymmetric sizing: featured product larger, others in marginalia style

**Success Criteria**:
- Products feel like manuscript illustrations, not e-commerce cards
- Hover effects are smooth (60fps, GPU-accelerated)
- Screen readers announce as "Illustration of [product name]"

### **Phase 5: Collections & About (Chapter Sections)** (Effort: 2h)
- [ ] Collections as decorated "chapters" with drop caps
- [ ] About section as two-column manuscript spread
- [ ] Marginalia notes with Peranakan tile patterns (abstracted)
- [ ] Timeline using manuscript conventions (folio numbers instead of dates)

**Success Criteria**:
- Each section feels like a new manuscript chapter
- Typographic hierarchy is scannable
- Marginalia adds context without clutter

### **Phase 6: Newsletter & Footer (Colophon)** (Effort: 1h)
- [ ] Wax seal button with 3D CSS transforms
- [ ] Form validation with gold error states
- [ ] Footer as traditional colophon (centered, minimal)
- [ ] Decorative dividers using SVG + CSS masks

**Success Criteria**:
- Newsletter signup is memorable and accessible
- Footer feels authentic to manuscript tradition

### **Phase 7: Accessibility & Performance Polish** (Effort: 2h)
- [ ] Comprehensive ARIA labels for decorative elements
- [ ] `:focus-visible` for keyboard-only outlines
- [ ] `prefers-reduced-motion` disables all parallax
- [ ] `prefers-contrast: more` boosts color contrast
- [ ] Critical CSS inlined, non-critical deferred
- [ ] SVG spritesheet reduces HTTP requests

**Success Criteria**:
- WCAG AAA compliance (automated + manual audit)
- Lighthouse 95+ (Performance, A11y, Best Practices, SEO)
- No JavaScript required for core experience

### **Phase 8: Validation & Documentation** (Effort: 1h)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
- [ ] Device testing (iOS Safari, Android Chrome)
- [ ] Screen reader flow verification (NVDA, VoiceOver)
- [ ] Create ADR documenting design decisions
- [ ] Handoff notes for Next.js 15 migration

---

# Phase 3: VALIDATE – Explicit Confirmation

Before proceeding, I must confirm the design direction aligns with your vision. Here are the key decisions requiring validation:

1. **Aesthetic Direction**: Renaissance Manuscript + Peranakan Minimalism (approved?)
2. **Layout**: Asymmetric folio spread with marginalia (vs. centered blocks)
3. **Typography**: Fluid major-third scale, no system fonts (approved?)
4. **Color**: Localized burgundy to Teh Tarik brown (approved?)
5. **Interactions**: CSS scroll animations, parallax botanicals (with reduced motion fallback)
6. **Product Framing**: Illuminated miniatures vs. cards (approved?)
7. **No JavaScript**: Pure CSS for static mock-up (approved?)

**Effort Estimate**: 16 hours over 8 phases  
**Deliverable**: Single static HTML file with embedded CSS/SVG, WCAG AAA compliant, Lighthouse 95+

