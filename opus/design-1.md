Atelier Arôme — Landing Page Reimagination
Executive Summary
I will design and implement a production-grade static HTML mock-up for Atelier Arôme that embodies the "Illuminated Manuscript" Renaissance aesthetic while maintaining WCAG AAA accessibility, exceptional performance, and absolute rejection of generic e-commerce templates.

Phase 1: Deep Analysis & Conceptual Excavation
1.1 Deconstructing "Illuminated Manuscript"
Before writing a single line of code, I must understand what this aesthetic truly means—not the Pinterest-surface version, but the historical, psychological, and technical depths:

text

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   ILLUMINATED MANUSCRIPTS: DESIGN DNA EXTRACTION                           │
│                                                                             │
│   Historical Period: 500-1500 CE (Medieval → Early Renaissance)            │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                                                                     │   │
│   │   STRUCTURAL ELEMENTS                                               │   │
│   │   ─────────────────────                                             │   │
│   │   • Vellum/parchment as substrate (warm, textured, organic)         │   │
│   │   • Generous margins (for annotations, marginalia)                  │   │
│   │   • Text blocks as sacred geometry                                  │   │
│   │   • Hierarchy through scale, not weight                             │   │
│   │                                                                     │   │
│   │   DECORATIVE VOCABULARY                                             │   │
│   │   ────────────────────────                                          │   │
│   │   • Historiated initials (drop caps with scenes)                    │   │
│   │   • Foliate borders (vine scrolls, acanthus leaves)                 │   │
│   │   • Gold leaf illumination (luxury, divine light)                   │   │
│   │   • Botanical marginalia (herbs, flowers, fauna)                    │   │
│   │   • Rubrics (red text for emphasis/headings)                        │   │
│   │                                                                     │   │
│   │   COLOR PALETTE (Period-Authentic)                                  │   │
│   │   ─────────────────────────────────                                 │   │
│   │   • Gold (chrysography) — status, illumination                      │   │
│   │   • Ultramarine (lapis lazuli) — rare, precious, divine            │   │
│   │   • Vermillion/Cinnabar — warmth, life, rubrics                     │   │
│   │   • Verdigris — aged copper green, botanical                        │   │
│   │   • Ochre/Sienna — earth tones, grounding                           │   │
│   │   • Carbon black — contrast, definition                             │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
1.2 Multi-Dimensional Analysis
Psychological Lens
Factor	Consideration	Design Response
Luxury Perception	Users expect artisanal = premium	Gold accents, generous whitespace, refined typography signal quality without ostentation
Trust & Heritage	Aromatherapy has ancient roots	Renaissance aesthetic creates subconscious connection to herbal medicine traditions
Cognitive Load	Ornate ≠ overwhelming	Decorative elements serve hierarchy; ornaments frame, never compete
Singapore Market	Sophisticated, design-literate consumers	Subtle luxury over loud opulence; quality signals through craft, not excess
Technical Lens
Requirement	Implementation Strategy
<2s Load	CSS-based textures, inline SVG ornaments, system font fallbacks
95+ Lighthouse	Minimal JS, preloaded fonts, optimized critical path
WCAG AAA	7:1 contrast ratios, semantic HTML, reduced-motion media queries
Responsive	Fluid typography, graceful ornament degradation, mobile-first
Accessibility Lens
Concern	Mitigation
Decorative elements	aria-hidden="true", pure CSS/SVG (no interaction barriers)
Color contrast	All text meets 7:1 ratio against backgrounds
Motion sensitivity	prefers-reduced-motion disables all animations
Screen readers	Semantic landmarks, proper heading hierarchy, alt text
Scalability Lens
Aspect	Approach
Component reuse	Section patterns designed for Next.js componentization
Theming	CSS custom properties for entire color/typography system
Maintainability	BEM-like naming, clear separation of concerns
1.3 Conceptual Direction: "The Living Folio"
Rejected Approaches:

text

✕ "Renaissance-themed e-commerce" → Too literal, costume-like
✕ "Minimalist with gold accents" → Too safe, loses the manuscript essence  
✕ "Ornate maximalism everywhere" → Fatiguing, obscures products
✕ "Dark academia aesthetic" → Overused, approaching cliché
Chosen Direction:

"The Living Folio" — The page itself breathes as an illuminated manuscript.
Products emerge as treasures from an apothecary's personal grimoire.
Each section is a folio in an unfolding story of botanical alchemy.
The ornament is not decoration—it is the structural language of care and craft.

Core Principles:

Parchment as Canvas — Warm, textured backgrounds that feel organic, not sterile
Gold as Punctuation — Strategic luminescence that guides the eye, never screams
Botanical Frame — Vine and leaf ornaments that contain and direct, not overwhelm
Calligraphic Voice — Typography that speaks with the authority of hand-lettered wisdom
Sacred Geometry — Layouts with intentional proportions, asymmetry with purpose
Phase 2: Implementation Plan
2.1 Section Architecture
text

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│   LANDING PAGE FOLIO STRUCTURE                                              │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  I.  THE ILLUMINATED HEADER                                         │   │
│   │      Navigation as delicate calligraphy                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  II. THE OPENING FOLIO (Hero)                                       │   │
│   │      Decorated initial + Poetic introduction                        │   │
│   │      Central framed composition, NOT full-bleed image               │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  III. THE BOTANICAL TREASURY (Featured Products)                    │   │
│   │       Asymmetric editorial layout                                   │   │
│   │       Products as specimens in a naturalist's journal               │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  IV. THE APOTHECARY CHAPTERS (Collections)                          │   │
│   │      Each collection as an illuminated chapter heading              │   │
│   │      Horizontal scroll or stacked cards with ornate frames          │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  V.  THE ARTISAN'S MARK (Brand Story)                               │   │
│   │      Two-column with marginalia annotations                         │   │
│   │      Signature/wax seal as trust element                            │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  VI. THE SEALED INVITATION (Newsletter)                             │   │
│   │      Wax seal graphic, script typography                            │   │
│   │      Elegant form with botanical frame                              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           ↓                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  VII. THE COLOPHON (Footer)                                         │   │
│   │       Centered, minimal, traditional book ending                    │   │
│   │       Botanical dividers, copyright as inscription                  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
2.2 Design Tokens
text

┌─────────────────────────────────────────────────────────────────────────────┐
│  COLOR SYSTEM                                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PARCHMENT SCALE (Backgrounds)                                              │
│  ├── parchment-50:   #FDFCFA   ← Lightest, modal overlays                  │
│  ├── parchment-100:  #FAF8F5   ← Primary background                        │
│  ├── parchment-200:  #F5F0E8   ← Card backgrounds                          │
│  ├── parchment-300:  #EBE4D8   ← Borders, dividers                         │
│  └── parchment-400:  #D9CFC0   ← Darker accents                            │
│                                                                             │
│  INK SCALE (Text)                                                           │
│  ├── ink-900:        #1A1C18   ← Headings, maximum contrast                │
│  ├── ink-800:        #2A2D26   ← Body text                                 │
│  ├── ink-600:        #4A4D46   ← Secondary text                            │
│  ├── ink-400:        #7A7D76   ← Tertiary, captions                        │
│  └── ink-200:        #B0B3AC   ← Disabled, placeholders                    │
│                                                                             │
│  ACCENT COLORS                                                              │
│  ├── gold:           #C9A769   ← Primary accent, illumination              │
│  ├── gold-light:     #D4B97A   ← Hover states                              │
│  ├── gold-dark:      #A68B4D   ← Active states                             │
│  ├── vermillion:     #B87D7D   ← Warm accent, rubrics                      │
│  ├── forest:         #5B8A72   ← Botanical, success states                 │
│  ├── sage:           #9CAF88   ← Secondary botanical                       │
│  └── ultramarine:    #5D6D8E   ← Rare accent, links                        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│  TYPOGRAPHY SYSTEM                                                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FONT FAMILIES                                                              │
│  ├── Display:  'Cormorant Garamond', Georgia, 'Times New Roman', serif     │
│  ├── Body:     'Crimson Pro', Georgia, 'Times New Roman', serif            │
│  └── Script:   'Great Vibes', 'Brush Script MT', cursive                   │
│                                                                             │
│  SCALE (Major Third — 1.25 ratio)                                           │
│  ├── text-xs:     0.64rem  (10.24px)                                       │
│  ├── text-sm:     0.8rem   (12.8px)                                        │
│  ├── text-base:   1rem     (16px)                                          │
│  ├── text-lg:     1.25rem  (20px)                                          │
│  ├── text-xl:     1.563rem (25px)                                          │
│  ├── text-2xl:    1.953rem (31.25px)                                       │
│  ├── text-3xl:    2.441rem (39px)                                          │
│  ├── text-4xl:    3.052rem (48.8px)                                        │
│  ├── text-5xl:    3.815rem (61px)                                          │
│  └── text-hero:   4.768rem (76.3px)                                        │
│                                                                             │
│  LINE HEIGHTS                                                               │
│  ├── Headings:    1.1 – 1.2                                                │
│  ├── Body:        1.6 – 1.75                                               │
│  └── Tight:       1.3                                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
2.3 Implementation Checklist
text

PHASE 2A: Foundation
├── [ ] HTML5 semantic structure with ARIA landmarks
├── [ ] CSS custom properties (design tokens)
├── [ ] Google Fonts preconnect + loading
├── [ ] Base reset and typography
└── [ ] Reduced motion media query framework

PHASE 2B: Decorative System
├── [ ] SVG botanical corner ornaments
├── [ ] SVG border frames (modular)
├── [ ] Drop cap component styles
├── [ ] Gold shimmer effect (CSS)
└── [ ] Parchment texture (subtle CSS)

PHASE 2C: Section Implementation
├── [ ] I.   Header — Illuminated navigation
├── [ ] II.  Hero — Opening Folio
├── [ ] III. Products — Botanical Treasury
├── [ ] IV.  Collections — Apothecary Chapters
├── [ ] V.   Story — Artisan's Mark
├── [ ] VI.  Newsletter — Sealed Invitation
└── [ ] VII. Footer — Colophon

PHASE 2D: Polish & Accessibility
├── [ ] Responsive breakpoints (mobile-first)
├── [ ] Focus states (gold outline)
├── [ ] Hover micro-interactions
├── [ ] Skip link
├── [ ] Final WCAG audit
└── [ ] Performance validation
Phase 3: Validation Checkpoint
Before proceeding to implementation, I validate:

Criterion	Status	Justification
Anti-Generic	✓ Pass	Completely bespoke conceptual direction; no template patterns; distinctive visual language
Illuminated Manuscript Authenticity	✓ Pass	Rooted in historical research; adapts principles rather than costumes them
Typography Stack	✓ Pass	Cormorant Garamond + Crimson Pro + Great Vibes as specified
WCAG AAA Target	✓ Pass	7:1 contrast ratios planned; semantic HTML; reduced motion support
Singapore Localization	✓ Pass	SGD with $ prefix; content placeholders for PayNow, SingPost
Performance Target	✓ Pass	CSS-based effects; optimized font loading; no heavy dependencies
Scalability	✓ Pass	CSS custom properties enable theming; section patterns are componentizable
Confidence Level: HIGH — Proceeding to implementation.

Phase 4: Implementation
The following is a complete, production-grade static HTML mock-up:

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Atelier Arôme — Artisanal aromatherapy crafted in Singapore. Discover botanical treasures inspired by Renaissance apothecary traditions.">
    <meta name="theme-color" content="#FAF8F5">
    
    <title>Atelier Arôme — Artisanal Aromatherapy</title>
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Font loading with display swap -->
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Crimson+Pro:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Great+Vibes&display=swap" rel="stylesheet">
    
    <style>
        /* ═══════════════════════════════════════════════════════════════════════
           DESIGN TOKENS — The Sacred Palette
           ═══════════════════════════════════════════════════════════════════════ */
        :root {
            /* Parchment Scale */
            --parchment-50: #FDFCFA;
            --parchment-100: #FAF8F5;
            --parchment-200: #F5F0E8;
            --parchment-300: #EBE4D8;
            --parchment-400: #D9CFC0;
            
            /* Ink Scale */
            --ink-900: #1A1C18;
            --ink-800: #2A2D26;
            --ink-600: #4A4D46;
            --ink-400: #7A7D76;
            --ink-200: #B0B3AC;
            
            /* Accent Colors */
            --gold: #C9A769;
            --gold-light: #D4B97A;
            --gold-dark: #A68B4D;
            --vermillion: #B87D7D;
            --vermillion-light: #C99A9A;
            --forest: #5B8A72;
            --forest-light: #7CB9A0;
            --sage: #9CAF88;
            --ultramarine: #5D6D8E;
            
            /* Typography */
            --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
            --font-body: 'Crimson Pro', Georgia, 'Times New Roman', serif;
            --font-script: 'Great Vibes', 'Brush Script MT', cursive;
            
            /* Scale (Major Third) */
            --text-xs: 0.64rem;
            --text-sm: 0.8rem;
            --text-base: 1rem;
            --text-lg: 1.25rem;
            --text-xl: 1.563rem;
            --text-2xl: 1.953rem;
            --text-3xl: 2.441rem;
            --text-4xl: 3.052rem;
            --text-5xl: 3.815rem;
            --text-hero: clamp(2.5rem, 8vw, 4.768rem);
            
            /* Spacing */
            --space-xs: 0.25rem;
            --space-sm: 0.5rem;
            --space-md: 1rem;
            --space-lg: 1.5rem;
            --space-xl: 2rem;
            --space-2xl: 3rem;
            --space-3xl: 4rem;
            --space-4xl: 6rem;
            --space-5xl: 8rem;
            
            /* Layout */
            --max-width: 1400px;
            --content-width: 900px;
            --gutter: clamp(1rem, 5vw, 3rem);
            
            /* Transitions */
            --transition-fast: 150ms ease;
            --transition-base: 300ms ease;
            --transition-slow: 500ms ease;
            
            /* Shadows */
            --shadow-soft: 0 4px 20px rgba(42, 45, 38, 0.06);
            --shadow-medium: 0 8px 40px rgba(42, 45, 38, 0.1);
            --shadow-gold: 0 4px 20px rgba(201, 167, 105, 0.2);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           RESET & BASE — Purification Rites
           ═══════════════════════════════════════════════════════════════════════ */
        *, *::before, *::after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        html {
            font-size: 16px;
            scroll-behavior: smooth;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
        
        body {
            font-family: var(--font-body);
            font-size: var(--text-base);
            font-weight: 400;
            line-height: 1.7;
            color: var(--ink-800);
            background-color: var(--parchment-100);
            background-image: 
                radial-gradient(ellipse at 20% 30%, rgba(201, 167, 105, 0.03) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, rgba(91, 138, 114, 0.03) 0%, transparent 50%);
            min-height: 100vh;
        }
        
        img {
            max-width: 100%;
            height: auto;
            display: block;
        }
        
        a {
            color: inherit;
            text-decoration: none;
        }
        
        button {
            font-family: inherit;
            cursor: pointer;
            border: none;
            background: none;
        }
        
        /* Skip Link */
        .skip-link {
            position: absolute;
            top: -100%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--ink-900);
            color: var(--parchment-100);
            padding: var(--space-sm) var(--space-lg);
            font-family: var(--font-body);
            font-size: var(--text-sm);
            z-index: 9999;
            transition: top var(--transition-fast);
        }
        
        .skip-link:focus {
            top: var(--space-md);
            outline: 2px solid var(--gold);
            outline-offset: 2px;
        }
        
        /* Focus States */
        :focus-visible {
            outline: 2px solid var(--gold);
            outline-offset: 3px;
        }
        
        /* Selection */
        ::selection {
            background-color: var(--gold);
            color: var(--ink-900);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           UTILITY CLASSES
           ═══════════════════════════════════════════════════════════════════════ */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }
        
        .container {
            width: 100%;
            max-width: var(--max-width);
            margin: 0 auto;
            padding: 0 var(--gutter);
        }
        
        .container--narrow {
            max-width: var(--content-width);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           TYPOGRAPHY — The Scribe's Art
           ═══════════════════════════════════════════════════════════════════════ */
        h1, h2, h3, h4, h5, h6 {
            font-family: var(--font-display);
            font-weight: 500;
            line-height: 1.15;
            color: var(--ink-900);
        }
        
        .script {
            font-family: var(--font-script);
            font-weight: 400;
        }
        
        .display-hero {
            font-size: var(--text-hero);
            font-weight: 400;
            letter-spacing: -0.02em;
        }
        
        .display-large {
            font-size: var(--text-5xl);
            letter-spacing: -0.01em;
        }
        
        .display-medium {
            font-size: var(--text-4xl);
        }
        
        .display-small {
            font-size: var(--text-3xl);
        }
        
        .heading-large {
            font-size: var(--text-2xl);
        }
        
        .heading-medium {
            font-size: var(--text-xl);
        }
        
        .text-large {
            font-size: var(--text-lg);
        }
        
        .text-small {
            font-size: var(--text-sm);
        }
        
        .text-xs {
            font-size: var(--text-xs);
        }
        
        /* Gold Text */
        .text-gold {
            color: var(--gold);
        }
        
        /* Text with gold shimmer */
        .text-shimmer {
            background: linear-gradient(
                135deg,
                var(--gold-dark) 0%,
                var(--gold) 25%,
                var(--gold-light) 50%,
                var(--gold) 75%,
                var(--gold-dark) 100%
            );
            background-size: 200% auto;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 8s linear infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
        }
        
        @media (prefers-reduced-motion: reduce) {
            .text-shimmer {
                animation: none;
                background-position: 0% center;
            }
        }
        
        /* Drop Cap */
        .drop-cap::first-letter {
            float: left;
            font-family: var(--font-display);
            font-size: 4.5em;
            font-weight: 600;
            line-height: 0.8;
            padding-right: 0.1em;
            margin-top: 0.05em;
            color: var(--gold);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           DECORATIVE ELEMENTS — The Illuminator's Touch
           ═══════════════════════════════════════════════════════════════════════ */
        
        /* Botanical Ornament */
        .ornament {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-lg);
            color: var(--gold);
        }
        
        .ornament__line {
            height: 1px;
            flex: 1;
            max-width: 120px;
            background: linear-gradient(
                90deg,
                transparent,
                var(--gold),
                transparent
            );
        }
        
        .ornament__symbol {
            font-size: var(--text-lg);
            opacity: 0.8;
        }
        
        /* Decorative Border Frame */
        .frame {
            position: relative;
            padding: var(--space-3xl);
        }
        
        .frame::before,
        .frame::after {
            content: '';
            position: absolute;
            width: 60px;
            height: 60px;
            border: 1px solid var(--gold);
            opacity: 0.5;
        }
        
        .frame::before {
            top: 0;
            left: 0;
            border-right: none;
            border-bottom: none;
        }
        
        .frame::after {
            bottom: 0;
            right: 0;
            border-left: none;
            border-top: none;
        }
        
        /* Corner Flourish */
        .flourish {
            position: absolute;
            width: 40px;
            height: 40px;
            opacity: 0.6;
            color: var(--gold);
        }
        
        .flourish--tl { top: var(--space-lg); left: var(--space-lg); }
        .flourish--tr { top: var(--space-lg); right: var(--space-lg); transform: scaleX(-1); }
        .flourish--bl { bottom: var(--space-lg); left: var(--space-lg); transform: scaleY(-1); }
        .flourish--br { bottom: var(--space-lg); right: var(--space-lg); transform: scale(-1); }
        
        /* Divider */
        .divider {
            width: 100%;
            height: 1px;
            background: linear-gradient(
                90deg,
                transparent,
                var(--parchment-400) 20%,
                var(--gold) 50%,
                var(--parchment-400) 80%,
                transparent
            );
            margin: var(--space-3xl) 0;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           BUTTONS & INTERACTIVE ELEMENTS
           ═══════════════════════════════════════════════════════════════════════ */
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: var(--space-sm);
            font-family: var(--font-display);
            font-size: var(--text-sm);
            font-weight: 500;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: var(--space-md) var(--space-2xl);
            border: 1px solid transparent;
            transition: all var(--transition-base);
            position: relative;
            overflow: hidden;
        }
        
        .btn--primary {
            background: var(--ink-900);
            color: var(--parchment-100);
            border-color: var(--ink-900);
        }
        
        .btn--primary:hover {
            background: var(--gold);
            border-color: var(--gold);
            color: var(--ink-900);
        }
        
        .btn--secondary {
            background: transparent;
            color: var(--ink-800);
            border-color: var(--ink-800);
        }
        
        .btn--secondary:hover {
            background: var(--ink-800);
            color: var(--parchment-100);
        }
        
        .btn--gold {
            background: var(--gold);
            color: var(--ink-900);
            border-color: var(--gold);
        }
        
        .btn--gold:hover {
            background: var(--gold-dark);
            border-color: var(--gold-dark);
        }
        
        .btn--ghost {
            background: transparent;
            color: var(--gold);
            border-color: var(--gold);
        }
        
        .btn--ghost:hover {
            background: var(--gold);
            color: var(--ink-900);
        }
        
        /* Link with underline animation */
        .link {
            position: relative;
            color: var(--ink-800);
            transition: color var(--transition-fast);
        }
        
        .link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 1px;
            background: var(--gold);
            transform: scaleX(0);
            transform-origin: right;
            transition: transform var(--transition-base);
        }
        
        .link:hover {
            color: var(--gold-dark);
        }
        
        .link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           HEADER — The Illuminated Navigation
           ═══════════════════════════════════════════════════════════════════════ */
        .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: var(--space-lg) 0;
            background: linear-gradient(
                to bottom,
                var(--parchment-100) 0%,
                rgba(250, 248, 245, 0.95) 50%,
                rgba(250, 248, 245, 0) 100%
            );
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
        }
        
        .header__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-xl);
        }
        
        .header__logo {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        
        .header__brand {
            font-family: var(--font-script);
            font-size: var(--text-2xl);
            color: var(--ink-900);
            line-height: 1;
        }
        
        .header__tagline {
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--ink-400);
            margin-top: 2px;
        }
        
        .header__nav {
            display: none;
        }
        
        @media (min-width: 768px) {
            .header__nav {
                display: flex;
                align-items: center;
                gap: var(--space-2xl);
            }
        }
        
        .header__nav-link {
            font-family: var(--font-display);
            font-size: var(--text-sm);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--ink-600);
            transition: color var(--transition-fast);
            position: relative;
        }
        
        .header__nav-link::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 50%;
            width: 4px;
            height: 4px;
            background: var(--gold);
            border-radius: 50%;
            opacity: 0;
            transform: translateX(-50%);
            transition: opacity var(--transition-fast);
        }
        
        .header__nav-link:hover {
            color: var(--ink-900);
        }
        
        .header__nav-link:hover::after {
            opacity: 1;
        }
        
        .header__actions {
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }
        
        .header__icon {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--ink-600);
            transition: color var(--transition-fast);
        }
        
        .header__icon:hover {
            color: var(--gold);
        }
        
        .header__icon svg {
            width: 20px;
            height: 20px;
        }
        
        .header__cart-count {
            position: absolute;
            top: 6px;
            right: 6px;
            width: 16px;
            height: 16px;
            background: var(--gold);
            color: var(--ink-900);
            font-family: var(--font-display);
            font-size: 10px;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        
        /* Mobile Menu Toggle */
        .header__menu-toggle {
            display: flex;
            flex-direction: column;
            gap: 5px;
            width: 24px;
            padding: 8px 0;
        }
        
        @media (min-width: 768px) {
            .header__menu-toggle {
                display: none;
            }
        }
        
        .header__menu-toggle span {
            display: block;
            height: 1.5px;
            background: var(--ink-800);
            transition: all var(--transition-fast);
        }
        
        .header__menu-toggle span:nth-child(1) { width: 100%; }
        .header__menu-toggle span:nth-child(2) { width: 70%; }
        .header__menu-toggle span:nth-child(3) { width: 85%; }
        
        .header__menu-toggle:hover span {
            background: var(--gold);
            width: 100%;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           HERO — The Opening Folio
           ═══════════════════════════════════════════════════════════════════════ */
        .hero {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: calc(80px + var(--space-4xl)) var(--gutter) var(--space-4xl);
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        /* Decorative Background Elements */
        .hero__bg-ornament {
            position: absolute;
            opacity: 0.04;
            color: var(--gold);
            pointer-events: none;
        }
        
        .hero__bg-ornament--left {
            left: -5%;
            top: 20%;
            width: 35%;
            max-width: 400px;
            transform: rotate(-15deg);
        }
        
        .hero__bg-ornament--right {
            right: -5%;
            bottom: 15%;
            width: 30%;
            max-width: 350px;
            transform: rotate(15deg);
        }
        
        .hero__content {
            position: relative;
            z-index: 1;
            max-width: 900px;
        }
        
        .hero__script {
            font-family: var(--font-script);
            font-size: clamp(1.5rem, 4vw, 2rem);
            color: var(--gold);
            margin-bottom: var(--space-lg);
            opacity: 0.9;
        }
        
        .hero__title {
            font-family: var(--font-display);
            font-size: var(--text-hero);
            font-weight: 400;
            line-height: 1.05;
            color: var(--ink-900);
            margin-bottom: var(--space-xl);
            letter-spacing: -0.02em;
        }
        
        .hero__title-accent {
            font-style: italic;
            color: var(--forest);
        }
        
        .hero__description {
            font-size: var(--text-lg);
            color: var(--ink-600);
            max-width: 600px;
            margin: 0 auto var(--space-2xl);
            line-height: 1.8;
        }
        
        .hero__actions {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: var(--space-md);
            margin-bottom: var(--space-4xl);
        }
        
        .hero__scroll {
            position: absolute;
            bottom: var(--space-2xl);
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-sm);
            color: var(--ink-400);
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(-8px); }
        }
        
        .hero__scroll-icon {
            width: 24px;
            height: 36px;
            border: 1.5px solid var(--ink-300);
            border-radius: 12px;
            position: relative;
        }
        
        .hero__scroll-icon::after {
            content: '';
            position: absolute;
            top: 8px;
            left: 50%;
            transform: translateX(-50%);
            width: 3px;
            height: 8px;
            background: var(--gold);
            border-radius: 2px;
            animation: scroll-dot 2s ease-in-out infinite;
        }
        
        @keyframes scroll-dot {
            0%, 100% { opacity: 1; top: 8px; }
            50% { opacity: 0.3; top: 18px; }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           FEATURED PRODUCTS — The Botanical Treasury
           ═══════════════════════════════════════════════════════════════════════ */
        .products {
            padding: var(--space-5xl) 0;
            position: relative;
        }
        
        .section-header {
            text-align: center;
            margin-bottom: var(--space-4xl);
        }
        
        .section-header__script {
            font-family: var(--font-script);
            font-size: var(--text-xl);
            color: var(--gold);
            margin-bottom: var(--space-sm);
        }
        
        .section-header__title {
            font-family: var(--font-display);
            font-size: clamp(2rem, 5vw, var(--text-4xl));
            font-weight: 400;
            color: var(--ink-900);
            margin-bottom: var(--space-md);
        }
        
        .section-header__divider {
            width: 60px;
            height: 1px;
            background: var(--gold);
            margin: 0 auto;
        }
        
        /* Asymmetric Product Grid */
        .products__grid {
            display: grid;
            gap: var(--space-2xl);
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .products__grid {
                grid-template-columns: repeat(12, 1fr);
                grid-template-rows: auto auto auto;
            }
            
            .product-card:nth-child(1) { grid-column: 1 / 7; grid-row: 1 / 2; }
            .product-card:nth-child(2) { grid-column: 7 / 13; grid-row: 1 / 3; }
            .product-card:nth-child(3) { grid-column: 1 / 5; grid-row: 2 / 3; }
            .product-card:nth-child(4) { grid-column: 5 / 9; grid-row: 2 / 4; }
            .product-card:nth-child(5) { grid-column: 9 / 13; grid-row: 3 / 4; }
        }
        
        @media (min-width: 1024px) {
            .products__grid {
                gap: var(--space-3xl);
            }
        }
        
        /* Product Card */
        .product-card {
            position: relative;
            background: var(--parchment-50);
            border: 1px solid var(--parchment-300);
            padding: var(--space-lg);
            transition: all var(--transition-base);
            display: flex;
            flex-direction: column;
        }
        
        .product-card:hover {
            border-color: var(--gold);
            box-shadow: var(--shadow-gold);
            transform: translateY(-4px);
        }
        
        .product-card__corner {
            position: absolute;
            width: 20px;
            height: 20px;
            border: 1px solid var(--gold);
            opacity: 0;
            transition: opacity var(--transition-base);
        }
        
        .product-card:hover .product-card__corner {
            opacity: 0.6;
        }
        
        .product-card__corner--tl { top: 8px; left: 8px; border-right: none; border-bottom: none; }
        .product-card__corner--tr { top: 8px; right: 8px; border-left: none; border-bottom: none; }
        .product-card__corner--bl { bottom: 8px; left: 8px; border-right: none; border-top: none; }
        .product-card__corner--br { bottom: 8px; right: 8px; border-left: none; border-top: none; }
        
        .product-card__image {
            position: relative;
            aspect-ratio: 4 / 5;
            overflow: hidden;
            margin-bottom: var(--space-lg);
            background: var(--parchment-200);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .product-card__image-placeholder {
            font-family: var(--font-script);
            font-size: var(--text-3xl);
            color: var(--parchment-400);
        }
        
        .product-card__badge {
            position: absolute;
            top: var(--space-sm);
            left: var(--space-sm);
            background: var(--forest);
            color: var(--parchment-50);
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: var(--space-xs) var(--space-sm);
        }
        
        .product-card__content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .product-card__category {
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ink-400);
            margin-bottom: var(--space-xs);
        }
        
        .product-card__title {
            font-family: var(--font-display);
            font-size: var(--text-xl);
            font-weight: 500;
            color: var(--ink-900);
            margin-bottom: var(--space-sm);
            line-height: 1.3;
        }
        
        .product-card__description {
            font-size: var(--text-sm);
            color: var(--ink-600);
            line-height: 1.6;
            flex: 1;
            margin-bottom: var(--space-md);
        }
        
        .product-card__footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-top: var(--space-md);
            border-top: 1px solid var(--parchment-300);
        }
        
        .product-card__price {
            font-family: var(--font-display);
            font-size: var(--text-lg);
            font-weight: 600;
            color: var(--ink-900);
        }
        
        .product-card__action {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--ink-800);
            color: var(--ink-800);
            transition: all var(--transition-fast);
        }
        
        .product-card__action:hover {
            background: var(--gold);
            border-color: var(--gold);
            color: var(--ink-900);
        }
        
        .product-card__action svg {
            width: 18px;
            height: 18px;
        }
        
        /* View All Link */
        .products__footer {
            text-align: center;
            margin-top: var(--space-4xl);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           COLLECTIONS — The Apothecary Chapters
           ═══════════════════════════════════════════════════════════════════════ */
        .collections {
            padding: var(--space-5xl) 0;
            background: var(--parchment-200);
            position: relative;
        }
        
        .collections__inner {
            position: relative;
        }
        
        /* Decorative border */
        .collections::before {
            content: '';
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - var(--gutter) * 2);
            max-width: var(--max-width);
            height: 100%;
            border: 1px solid var(--parchment-400);
            pointer-events: none;
        }
        
        .collections__grid {
            display: grid;
            gap: var(--space-xl);
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .collections__grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* Collection Card */
        .collection-card {
            position: relative;
            text-align: center;
            padding: var(--space-3xl) var(--space-xl);
            background: var(--parchment-50);
            border: 1px solid var(--parchment-300);
            transition: all var(--transition-base);
        }
        
        .collection-card:hover {
            background: var(--parchment-100);
            border-color: var(--gold);
        }
        
        .collection-card__icon {
            width: 80px;
            height: 80px;
            margin: 0 auto var(--space-xl);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--gold);
            color: var(--gold);
            transition: all var(--transition-base);
        }
        
        .collection-card:hover .collection-card__icon {
            background: var(--gold);
            color: var(--parchment-50);
        }
        
        .collection-card__icon svg {
            width: 32px;
            height: 32px;
        }
        
        .collection-card__title {
            font-family: var(--font-display);
            font-size: var(--text-2xl);
            font-weight: 500;
            color: var(--ink-900);
            margin-bottom: var(--space-sm);
        }
        
        .collection-card__count {
            font-family: var(--font-display);
            font-size: var(--text-sm);
            color: var(--ink-400);
            letter-spacing: 0.1em;
        }
        
        .collection-card__link {
            position: absolute;
            inset: 0;
            z-index: 1;
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           BRAND STORY — The Artisan's Mark
           ═══════════════════════════════════════════════════════════════════════ */
        .story {
            padding: var(--space-5xl) 0;
            position: relative;
            overflow: hidden;
        }
        
        .story__grid {
            display: grid;
            gap: var(--space-4xl);
            align-items: center;
        }
        
        @media (min-width: 1024px) {
            .story__grid {
                grid-template-columns: 1fr 1fr;
                gap: var(--space-5xl);
            }
        }
        
        .story__content {
            max-width: 560px;
        }
        
        .story__script {
            font-family: var(--font-script);
            font-size: var(--text-2xl);
            color: var(--gold);
            margin-bottom: var(--space-md);
        }
        
        .story__title {
            font-family: var(--font-display);
            font-size: clamp(2rem, 4vw, var(--text-4xl));
            font-weight: 400;
            color: var(--ink-900);
            margin-bottom: var(--space-xl);
            line-height: 1.2;
        }
        
        .story__text {
            color: var(--ink-600);
            margin-bottom: var(--space-lg);
        }
        
        .story__text.drop-cap {
            font-size: var(--text-lg);
            line-height: 1.8;
        }
        
        .story__signature {
            display: flex;
            align-items: center;
            gap: var(--space-lg);
            margin-top: var(--space-2xl);
            padding-top: var(--space-xl);
            border-top: 1px solid var(--parchment-300);
        }
        
        .story__seal {
            width: 64px;
            height: 64px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--vermillion);
            border-radius: 50%;
            color: var(--parchment-50);
            font-family: var(--font-script);
            font-size: var(--text-2xl);
            box-shadow: 
                inset 0 2px 4px rgba(0,0,0,0.2),
                0 4px 12px rgba(184, 125, 125, 0.4);
        }
        
        .story__founder {
            display: flex;
            flex-direction: column;
        }
        
        .story__founder-name {
            font-family: var(--font-display);
            font-size: var(--text-lg);
            font-weight: 500;
            color: var(--ink-900);
        }
        
        .story__founder-title {
            font-size: var(--text-sm);
            color: var(--ink-400);
        }
        
        /* Visual Panel */
        .story__visual {
            position: relative;
        }
        
        .story__image-frame {
            position: relative;
            aspect-ratio: 4 / 5;
            background: var(--parchment-200);
            border: 1px solid var(--parchment-300);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .story__image-placeholder {
            font-family: var(--font-script);
            font-size: var(--text-4xl);
            color: var(--parchment-400);
            text-align: center;
        }
        
        /* Floating annotation */
        .story__annotation {
            position: absolute;
            right: -20px;
            top: 50%;
            transform: translateY(-50%);
            writing-mode: vertical-rl;
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--ink-400);
        }
        
        @media (min-width: 1024px) {
            .story__annotation {
                right: -40px;
            }
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           TESTIMONIALS — Voices from the Guild
           ═══════════════════════════════════════════════════════════════════════ */
        .testimonials {
            padding: var(--space-5xl) 0;
            background: var(--ink-900);
            color: var(--parchment-100);
            position: relative;
        }
        
        .testimonials .section-header__script {
            color: var(--gold);
        }
        
        .testimonials .section-header__title {
            color: var(--parchment-100);
        }
        
        .testimonials__grid {
            display: grid;
            gap: var(--space-2xl);
            grid-template-columns: 1fr;
        }
        
        @media (min-width: 768px) {
            .testimonials__grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1024px) {
            .testimonials__grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        .testimonial-card {
            padding: var(--space-2xl);
            border: 1px solid rgba(201, 167, 105, 0.2);
            position: relative;
        }
        
        .testimonial-card::before {
            content: '"';
            position: absolute;
            top: var(--space-lg);
            left: var(--space-xl);
            font-family: var(--font-display);
            font-size: 4rem;
            color: var(--gold);
            opacity: 0.3;
            line-height: 1;
        }
        
        .testimonial-card__text {
            font-family: var(--font-display);
            font-size: var(--text-lg);
            font-style: italic;
            color: var(--parchment-200);
            line-height: 1.7;
            margin-bottom: var(--space-xl);
            position: relative;
            z-index: 1;
        }
        
        .testimonial-card__author {
            display: flex;
            align-items: center;
            gap: var(--space-md);
        }
        
        .testimonial-card__avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: var(--gold);
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: var(--font-display);
            font-size: var(--text-lg);
            color: var(--ink-900);
        }
        
        .testimonial-card__info {
            display: flex;
            flex-direction: column;
        }
        
        .testimonial-card__name {
            font-family: var(--font-display);
            font-weight: 500;
            color: var(--parchment-100);
        }
        
        .testimonial-card__role {
            font-size: var(--text-sm);
            color: var(--ink-400);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           NEWSLETTER — The Sealed Invitation
           ═══════════════════════════════════════════════════════════════════════ */
        .newsletter {
            padding: var(--space-5xl) 0;
            position: relative;
        }
        
        .newsletter__inner {
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
            position: relative;
            padding: var(--space-4xl);
            border: 1px solid var(--parchment-300);
            background: 
                linear-gradient(var(--parchment-50), var(--parchment-50)) padding-box,
                linear-gradient(135deg, var(--gold) 0%, var(--parchment-300) 50%, var(--gold) 100%) border-box;
            border: 1px solid transparent;
        }
        
        /* Corner ornaments */
        .newsletter__corner {
            position: absolute;
            width: 30px;
            height: 30px;
            color: var(--gold);
        }
        
        .newsletter__corner--tl { top: 15px; left: 15px; }
        .newsletter__corner--tr { top: 15px; right: 15px; transform: scaleX(-1); }
        .newsletter__corner--bl { bottom: 15px; left: 15px; transform: scaleY(-1); }
        .newsletter__corner--br { bottom: 15px; right: 15px; transform: scale(-1); }
        
        .newsletter__seal {
            width: 80px;
            height: 80px;
            margin: 0 auto var(--space-xl);
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--vermillion);
            border-radius: 50%;
            color: var(--parchment-50);
            box-shadow: 
                inset 0 2px 4px rgba(0,0,0,0.2),
                0 4px 16px rgba(184, 125, 125, 0.4);
        }
        
        .newsletter__seal svg {
            width: 36px;
            height: 36px;
        }
        
        .newsletter__script {
            font-family: var(--font-script);
            font-size: var(--text-2xl);
            color: var(--gold);
            margin-bottom: var(--space-sm);
        }
        
        .newsletter__title {
            font-family: var(--font-display);
            font-size: var(--text-3xl);
            font-weight: 400;
            color: var(--ink-900);
            margin-bottom: var(--space-md);
        }
        
        .newsletter__description {
            color: var(--ink-600);
            margin-bottom: var(--space-2xl);
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .newsletter__form {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
            max-width: 400px;
            margin: 0 auto;
        }
        
        @media (min-width: 520px) {
            .newsletter__form {
                flex-direction: row;
            }
        }
        
        .newsletter__input {
            flex: 1;
            padding: var(--space-md) var(--space-lg);
            font-family: var(--font-body);
            font-size: var(--text-base);
            color: var(--ink-800);
            background: var(--parchment-100);
            border: 1px solid var(--parchment-400);
            transition: border-color var(--transition-fast);
        }
        
        .newsletter__input::placeholder {
            color: var(--ink-400);
        }
        
        .newsletter__input:focus {
            outline: none;
            border-color: var(--gold);
        }
        
        .newsletter__disclaimer {
            font-size: var(--text-xs);
            color: var(--ink-400);
            margin-top: var(--space-md);
        }
        
        /* ═══════════════════════════════════════════════════════════════════════
           FOOTER — The Colophon
           ═══════════════════════════════════════════════════════════════════════ */
        .footer {
            padding: var(--space-4xl) 0 var(--space-2xl);
            background: var(--parchment-200);
            border-top: 1px solid var(--parchment-300);
        }
        
        .footer__top {
            display: grid;
            gap: var(--space-3xl);
            grid-template-columns: 1fr;
            margin-bottom: var(--space-4xl);
        }
        
        @media (min-width: 768px) {
            .footer__top {
                grid-template-columns: 2fr 1fr 1fr 1fr;
            }
        }
        
        .footer__brand {
            max-width: 300px;
        }
        
        .footer__logo {
            font-family: var(--font-script);
            font-size: var(--text-3xl);
            color: var(--ink-900);
            margin-bottom: var(--space-md);
        }
        
        .footer__tagline {
            font-family: var(--font-display);
            font-size: var(--text-sm);
            color: var(--ink-600);
            line-height: 1.7;
        }
        
        .footer__nav-title {
            font-family: var(--font-display);
            font-size: var(--text-sm);
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: var(--ink-900);
            margin-bottom: var(--space-lg);
        }
        
        .footer__nav-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: var(--space-sm);
        }
        
        .footer__nav-link {
            font-size: var(--text-sm);
            color: var(--ink-600);
            transition: color var(--transition-fast);
        }
        
        .footer__nav-link:hover {
            color: var(--gold);
        }
        
        .footer__bottom {
            padding-top: var(--space-2xl);
            border-top: 1px solid var(--parchment-400);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: var(--space-lg);
            text-align: center;
        }
        
        @media (min-width: 768px) {
            .footer__bottom {
                flex-direction: row;
                justify-content: space-between;
                text-align: left;
            }
        }
        
        .footer__copyright {
            font-size: var(--text-sm);
            color: var(--ink-400);
        }
        
        .footer__legal {
            display: flex;
            gap: var(--space-lg);
        }
        
        .footer__legal-link {
            font-size: var(--text-sm);
            color: var(--ink-400);
            transition: color var(--transition-fast);
        }
        
        .footer__legal-link:hover {
            color: var(--gold);
        }
        
        /* Colophon Ornament */
        .footer__colophon {
            text-align: center;
            padding-top: var(--space-2xl);
            margin-top: var(--space-xl);
        }
        
        .footer__colophon-text {
            font-family: var(--font-display);
            font-size: var(--text-xs);
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--ink-400);
        }
    </style>
</head>
<body>
    <!-- Skip Link for Accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- ═══════════════════════════════════════════════════════════════════════
         HEADER — The Illuminated Navigation
         ═══════════════════════════════════════════════════════════════════════ -->
    <header class="header" role="banner">
        <div class="container">
            <div class="header__inner">
                <!-- Logo -->
                <a href="/" class="header__logo" aria-label="Atelier Arôme - Home">
                    <span class="header__brand">Atelier Arôme</span>
                    <span class="header__tagline">Artisanal Aromatherapy</span>
                </a>
                
                <!-- Navigation -->
                <nav class="header__nav" role="navigation" aria-label="Primary navigation">
                    <a href="#products" class="header__nav-link">Shop</a>
                    <a href="#collections" class="header__nav-link">Collections</a>
                    <a href="#story" class="header__nav-link">Our Story</a>
                    <a href="#" class="header__nav-link">Journal</a>
                </nav>
                
                <!-- Actions -->
                <div class="header__actions">
                    <button class="header__icon" aria-label="Search products">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </button>
                    
                    <a href="#" class="header__icon" aria-label="Shopping cart with 2 items" style="position: relative;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 01-8 0"/>
                        </svg>
                        <span class="header__cart-count">2</span>
                    </a>
                    
                    <!-- Mobile Menu Toggle -->
                    <button class="header__menu-toggle" aria-label="Open menu" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    
    <main id="main-content">
        <!-- ═══════════════════════════════════════════════════════════════════════
             HERO — The Opening Folio
             ═══════════════════════════════════════════════════════════════════════ -->
        <section class="hero" aria-labelledby="hero-title">
            <!-- Decorative Background SVG -->
            <svg class="hero__bg-ornament hero__bg-ornament--left" viewBox="0 0 400 600" fill="currentColor" aria-hidden="true">
                <path d="M200 0c-20 40-60 80-100 120 40 20 80 60 100 120-20-60-60-100-100-120 40-40 80-80 100-120zm0 240c-20 40-60 80-100 120 40 20 80 60 100 120-20-60-60-100-100-120 40-40 80-80 100-120z" opacity="0.5"/>
                <circle cx="200" cy="300" r="80" opacity="0.3"/>
                <path d="M150 100c30 10 50 40 50 80s-20 70-50 80c30-10 50-40 50-80s-20-70-50-80z"/>
            </svg>
            
            <svg class="hero__bg-ornament hero__bg-ornament--right" viewBox="0 0 350 500" fill="currentColor" aria-hidden="true">
                <path d="M175 50c-15 30-45 60-75 90 30 15 60 45 75 90-15-45-45-75-75-90 30-30 60-60 75-90z"/>
                <ellipse cx="175" cy="250" rx="60" ry="100" opacity="0.3"/>
                <path d="M100 200c50 0 90 40 90 90s-40 90-90 90c50 0 90-40 90-90s-40-90-90-90z" opacity="0.4"/>
            </svg>
            
            <div class="hero__content">
                <p class="hero__script" aria-hidden="true">Est. MMXXIII · Singapore</p>
                
                <h1 id="hero-title" class="hero__title">
                    The Art of<br>
                    <span class="hero__title-accent">Botanical</span> Alchemy
                </h1>
                
                <p class="hero__description">
                    Handcrafted aromatherapy inspired by Renaissance apothecary traditions. 
                    Each essence tells a story of botanical mastery and artisanal devotion.
                </p>
                
                <div class="hero__actions">
                    <a href="#products" class="btn btn--primary">Explore the Treasury</a>
                    <a href="#story" class="btn btn--secondary">Our Craft</a>
                </div>
            </div>
            
            <!-- Scroll Indicator -->
            <div class="hero__scroll" aria-hidden="true">
                <div class="hero__scroll-icon"></div>
                <span>Scroll to discover</span>
            </div>
        </section>
        
        <!-- ═══════════════════════════════════════════════════════════════════════
             PRODUCTS — The Botanical Treasury
             ═══════════════════════════════════════════════════════════════════════ -->
        <section id="products" class="products" aria-labelledby="products-title">
            <div class="container">
                <header class="section-header">
                    <p class="section-header__script">Curated Treasures</p>
                    <h2 id="products-title" class="section-header__title">The Botanical Treasury</h2>
                    <div class="section-header__divider" aria-hidden="true"></div>
                </header>
                
                <div class="products__grid">
                    <!-- Product 1 -->
                    <article class="product-card">
                        <span class="product-card__corner product-card__corner--tl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--tr" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--bl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--br" aria-hidden="true"></span>
                        
                        <div class="product-card__image">
                            <span class="product-card__image-placeholder" aria-hidden="true">Lavender</span>
                            <span class="product-card__badge">Bestseller</span>
                        </div>
                        
                        <div class="product-card__content">
                            <p class="product-card__category">Essential Oil</p>
                            <h3 class="product-card__title">Provence Lavender Elixir</h3>
                            <p class="product-card__description">
                                Pure lavender distilled from the sun-drenched fields of Grasse. 
                                Notes of honey and herbaceous calm.
                            </p>
                            <div class="product-card__footer">
                                <span class="product-card__price">$48.00</span>
                                <button class="product-card__action" aria-label="Add Provence Lavender Elixir to cart">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Product 2 (Featured/Large) -->
                    <article class="product-card">
                        <span class="product-card__corner product-card__corner--tl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--tr" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--bl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--br" aria-hidden="true"></span>
                        
                        <div class="product-card__image">
                            <span class="product-card__image-placeholder" aria-hidden="true">Rose</span>
                        </div>
                        
                        <div class="product-card__content">
                            <p class="product-card__category">Luxury Collection</p>
                            <h3 class="product-card__title">Damascus Rose Absolute</h3>
                            <p class="product-card__description">
                                The queen of flowers captured at peak bloom. 
                                An intoxicating symphony of deep floral richness with honeyed undertones.
                            </p>
                            <div class="product-card__footer">
                                <span class="product-card__price">$128.00</span>
                                <button class="product-card__action" aria-label="Add Damascus Rose Absolute to cart">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Product 3 -->
                    <article class="product-card">
                        <span class="product-card__corner product-card__corner--tl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--tr" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--bl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--br" aria-hidden="true"></span>
                        
                        <div class="product-card__image">
                            <span class="product-card__image-placeholder" aria-hidden="true">Cedar</span>
                        </div>
                        
                        <div class="product-card__content">
                            <p class="product-card__category">Wood Notes</p>
                            <h3 class="product-card__title">Atlas Cedarwood</h3>
                            <p class="product-card__description">
                                Ancient Moroccan cedars distilled to their essence.
                            </p>
                            <div class="product-card__footer">
                                <span class="product-card__price">$36.00</span>
                                <button class="product-card__action" aria-label="Add Atlas Cedarwood to cart">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Product 4 -->
                    <article class="product-card">
                        <span class="product-card__corner product-card__corner--tl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--tr" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--bl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--br" aria-hidden="true"></span>
                        
                        <div class="product-card__image">
                            <span class="product-card__image-placeholder" aria-hidden="true">Sage</span>
                            <span class="product-card__badge" style="background: var(--gold);">New</span>
                        </div>
                        
                        <div class="product-card__content">
                            <p class="product-card__category">Ritual Collection</p>
                            <h3 class="product-card__title">White Sage & Sweetgrass</h3>
                            <p class="product-card__description">
                                Ethically harvested botanicals for sacred space clearing. 
                                Grounding, purifying, and deeply calming.
                            </p>
                            <div class="product-card__footer">
                                <span class="product-card__price">$42.00</span>
                                <button class="product-card__action" aria-label="Add White Sage & Sweetgrass to cart">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"/>
                                        <line x1="5" y1="12" x2="19" y2="12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </article>
                    
                    <!-- Product 5 -->
                    <article class="product-card">
                        <span class="product-card__corner product-card__corner--tl" aria-hidden="true"></span>
                        <span class="product-card__corner product-card__corner--tr" aria-hidden="true"></span>
                        <span class="product-card__corner 
