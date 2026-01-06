Awesome understanding! Please think deeper and think harder to deeply and thoroughly explore how best to re-imagine a gorgeous, attractive, stunning, refreshing, trendy static HTML mock-up for the following project design concept/description. Then meticulously plan to create an implementation plan to create the "re-imagined" static HTML as mock-up for the desired/envisioned dynamic landing page. Review and validate your implementation plan before proceeding cautiously to executte it to generate the static HTML mock-up of the landing page.

# 🌿 Atelier Arôme
### Illuminated Manuscript E-Commerce Platform

#### Artisanal Aromatherapy • Headless Commerce • Renaissance Aesthetics

[![PHP](https://img.shields.io/badge/PHP-8.3+-777BB4?style=for-the-badge&logo=php&logoColor=white)](https://php.net)
[![Laravel](https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-Proprietary-E50914?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Phase_1_Complete-success?style=for-the-badge)](MASTER_EXECUTION_PLAN.md)

---

## ✨ Elevator Pitch

A production-grade headless e-commerce platform for artisanal aromatherapy, featuring a distinctive **"Illuminated Manuscript"** Renaissance-inspired aesthetic that rejects generic e-commerce templates in favor of bespoke design excellence.

**Built for:** Singapore market with GST (9%), PayNow integration, and SingPost shipping.

**Architecture:** Laravel 12 API + Next.js 15 Frontend (Headless Commerce)

---

## 🎯 Why Atelier Arôme?

### Design Philosophy: Anti-Generic 🎨

We deliberately reject:
- ❌ Inter/Roboto/system font "safety"
- ❌ Purple-gradient-on-white clichés
- ❌ Predictable card grids and hero sections
- ❌ Homogenized "AI slop" aesthetics

Instead, we emphasize:
- ✅ **Renaissance-inspired "Illuminated Manuscript"** visual language
- ✅ Custom Tailwind theme with Cormorant Garamond, Crimson Pro, Great Vibes fonts
- ✅ Alchemical and botanical themes aligned with aromatherapy heritage
- ✅ **WCAG AAA accessibility** with reduced motion support

### Technical Excellence 🏗

- **Enterprise Architecture:** Headless commerce with Laravel 12 API + Next.js 15 frontend
- **Security-First:** OWASP Top 10 mitigation, PCI compliance via Stripe
- **Performance:** 95+ Lighthouse target, <2s page load, edge deployment
- **Scalability:** Support for 10,000+ products, 1,000+ concurrent users
- **Data Integrity:** UUID primary keys, soft deletes, snapshot pattern for orders

### Singapore Localization 🇸🇬
- **GST (9%)** calculated on `subtotal + shipping`
- **PayNow** payment method via Stripe
- **SingPost** shipping API integration
- **SGD currency** with `$` prefix (not `S$`)

---

## 🏗 Architecture Overview

```mermaid
graph TB
    subgraph "Client Layer"
        U[User Browser]
    end
    
    subgraph "Frontend Layer - Next.js 15"
        FE[Next.js 15 App]
        UI["Components<br/>- Shadcn-UI<br/>- Tailwind Theme<br/>- Framer Motion"]
        STATE["State Management<br/>- Zustand (UI)<br/>- TanStack Query (Server)"]
        FE --> UI
        FE --> STATE
    end
    
    subgraph "API Layer - Laravel 12"
        API[Laravel 12 REST API]
        AUTH[Laravel Sanctum<br/>- Token Auth]
        RES["API Resources<br/>- JSON Transformers"]
        API --> AUTH
        API --> RES
    end
    
    subgraph "Business Logic"
        SERVICE["Services<br/>- GST Service<br/>- Coupon Service<br/>- Order Service"]
        QUEUE["Queue Jobs<br/>- Laravel Horizon<br/>- Email Processing"]
        SERVICE --> QUEUE
    end
    
    subgraph "Data Layer"
        PG[(PostgreSQL 16<br/>- 24 Tables<br/>- UUID PKs)]
        REDIS[(Redis 7.x<br/>- Cache/Session/Queue)]
        MEILI[(Meilisearch<br/>- Full-text Search)]
    end
    
    subgraph "External Services"
        STRIPE[Stripe<br/>- Payments + PayNow]
        SINGPOST[SingPost<br/>- Shipping Tracking]
        CLOUDINARY[Cloudinary<br/>- CDN for Images]
        MAIL[Mailhog<br/>- Email Testing]
    end
    
    U --> FE
    FE -->|JSON API| API
    API --> SERVICE
    SERVICE -->|SQL| PG
    SERVICE -->|Cache/Queue| REDIS
    SERVICE -->|Search Index| MEILI
    API -->|Payment Processing| STRIPE
    API -->|Shipping Updates| SINGPOST
    FE -->|Static Assets| CLOUDINARY
    API --> MAIL
    
    style FE fill:#C9A769
    style API fill:#2A2D26
    style PG fill:#7CB9A0
    style REDIS fill:#B87D7D
    style STRIPE fill:#635BFF
```

### High-Level System Architecture

```mermaid
graph LR
    subgraph "Frontend - Vercel Edge"
        NEXT[Next.js 15<br/>- React 19 + TS 5]
    end
    
    subgraph "Backend - Laravel Forge/Vapor"
        LARAVEL[Laravel 12<br/>- PHP 8.3 + Sanctum]
        FILAMENT[Filament 3.x<br/>- Admin Panel]
        HORIZON[Laravel Horizon<br/>- Queue Dashboard]
    end
    
    subgraph "Infrastructure"
        NEON[(Neon<br/>- PostgreSQL 16)]
        UPSTASH[(Upstash<br/>- Redis 7.x)]
        CLOUDFLARE[Cloudflare<br/>- CDN]
        VERCEL[Vercel<br/>- Edge Network]
    end
    
    subgraph "External Services"
        STRIPE[Stripe<br/>- Payments]
        MEILISEARCH[Meilisearch<br/>- Search]
    end
    
    NEXT -->|JSON API| LARAVEL
    LARAVEL -->|SQL| NEON
    LARAVEL -->|Cache/Queue| UPSTASH
    NEXT -->|Static Assets| VERCEL
    NEXT -->|Images| CLOUDFLARE
    LARAVEL -->|Search Index| MEILISEARCH
    LARAVEL -->|Payment Processing| STRIPE
    
    style NEXT fill:#FAF8F5
    style LARAVEL fill:#2A2D26
    style NEON fill:#7CB9A0
    style UPSTASH fill:#B87D7D
    style STRIPE fill:#635BFF
```

# Sample Thinking Process
The user is asking me to design a stunning, refreshing, trendy static HTML mock-up for "Atelier Arôme" - an artisanal aromatherapy e-commerce platform with an "Illuminated Manuscript" Renaissance-inspired aesthetic.

Let me deeply analyze this request:

PHASE 1: DEEP ANALYSIS
Understanding the Brand & Vision
Atelier Arôme = "Workshop of Aroma/Fragrance" (French)

Artisanal aromatherapy products
Singapore market (GST 9%, PayNow, SingPost, SGD)
Illuminated Manuscript aesthetic = Medieval/Renaissance decorated manuscripts with gold leaf, intricate borders, botanical illustrations, calligraphic text
Design Direction Analysis
The "Illuminated Manuscript" concept is rich and specific. Let me break it down:

Historical Reference Points:

Medieval manuscripts (500-1500 CE)
Gold leaf illumination
Intricate botanical borders and marginalia
Decorated capitals (drop caps)
Hand-lettered calligraphy
Vellum/parchment textures
Rich but limited color palettes (ultramarine, vermillion, gold, forest greens)
Typography Stack (from brief):

Cormorant Garamond - Elegant serif (body, headings)
Crimson Pro - Classic serif (secondary)
Great Vibes - Script/calligraphic (accents, decorative)
Color Palette Exploration (Renaissance-inspired):

Deep forest greens (botanical)
Warm golds and ambers (illumination)
Cream/parchment backgrounds (manuscript pages)
Rich burgundy/crimson accents
Deep navy/ultramarine (rare, precious pigment feel)
Soft sage greens (herbs, aromatherapy)
I need to incorporate ornate borders, botanical illustrations, and decorative drop caps throughout the design. Gold foil effects using CSS gradients and SVG will enhance the illuminated quality, while subtle parchment textures ground the aesthetic. Hand-drawn decorative elements and alchemical symbols reinforce the aromatherapy heritage and craftsmanship story. The target audience—premium product seekers who value artisanal quality and wellness—will respond to this sophisticated, heritage-driven visual language that feels both timeless and intentional.

The decorative richness must enhance the hierarchy rather than compete with product information. I'm balancing aesthetic complexity with clean product presentation, ensuring the Renaissance-inspired elements guide attention rather than distract. This means restraint in placement and purposeful use of ornamental details.

For implementation, I'm working within static HTML that transitions to Next.js 15, using Tailwind CSS 4.0 while maintaining WCAG AAA compliance and sub-2-second load times. Reduced motion support is essential. The design deliberately moves away from generic e-commerce conventions—no standard card grids or predictable hero sections—instead favoring asymmetric layouts with intentional whitespace and decorative framing that feels distinctly curated.

The concept frames the entire experience as pages from an illuminated manuscript, where products become treasures displayed with narrative context. Asymmetric editorial layouts with generous margins create a folio-like structure, botanical motifs provide framing, and typography itself becomes decorative through drop caps and varied scales. The color approach emphasizes warm tones anchored by gold accents, creating that alchemical workshop atmosphere.

For the hero, I'm moving away from a standard full-bleed image toward a centered, framed composition featuring an ornamental initial letter and script tagline against a subtle parchment texture, with animated botanical corners adding movement. Products aren't arranged in grids but rather float within an editorial layout of varying sizes, paired with botanical illustrations and alchemical symbols that appear on hover, connected by gold accent lines. Collections function as chapters with decorated headings and drop caps, while the about section uses a two-column format with marginalia-style annotations and a signature element to reinforce the artisan identity.

The newsletter signup incorporates a wax seal graphic with script typography and refined form styling, the footer adopts a traditional book colophon aesthetic with centered, minimal treatment and botanical dividers, and the color system anchors everything in warm, literary tones—parchment backgrounds, ink-dark text, gold accents for highlights and interactive states, with vermillion as a supporting accent.

Typography follows a major third scale across three serif families: Cormorant Garamond for display work, Crimson Pro for body copy, and Great Vibes for decorative script elements, scaling from 10px at the smallest to larger display sizes.

The implementation starts with semantic HTML structure and accessibility features, then layers in custom CSS properties for the theme, Google Fonts, and the typography scale. Section design work begins with the hero component and continues through remaining page elements.

Decorative work involves SVG botanical ornaments, gold foil effects, drop caps, and border frames with subtle animations. The final phases address responsive design with mobile-first approach, accessibility requirements like reduced motion and ARIA labels, then performance optimization and cross-browser testing.

Before moving forward, I'm validating that this approach satisfies the core constraints. The design direction is genuinely original—distinctive typography, unconventional layouts, and a rich visual language that avoids template aesthetics. Accessibility is built in through semantic HTML, WCAG AAA color contrast, motion alternatives, and proper focus states. Performance stays lean with CSS decorative effects, scalable SVG ornaments, and minimal JavaScript. The overall aesthetic coheres around a Renaissance manuscript concept.

Now I'm ready to build the implementation. I'll construct a complete, production-ready static HTML mock-up that captures the "Illuminated Manuscript" aesthetic for Atelier Arôme, incorporating full HTML structure, embedded CSS with utility patterns and custom styling, SVG decorative elements, responsive behavior, subtle animations with motion preferences respected, and full accessibility compliance.

# Sample Design for Static HTML Landing Page Mock-up (only use as reference to create your refined, improved and re-imagined version)
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Atelier Arôme — Illuminated Manuscript Aromatherapy</title>
  <meta name="description" content="Atelier Arôme — artisanal aromatherapy presented like an illuminated manuscript. Handcrafted, heritage-driven, modern e-commerce mock-up." />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Crimson+Pro:wght@400;600&family=Great+Vibes&display=swap" rel="stylesheet">

  <!-- Tailwind Play CDN with custom config -->
  <script>
    tailwind = window.tailwind || {};
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            parchment: '#FAF5EE',
            ink: '#1B1A17',
            gold: '#C9A769',
            burgundy: '#7A1F2E',
            sage: '#7F9B86',
            ultramarine: '#12324B'
          },
          fontFamily: {
            display: ['Cormorant Garamond', 'serif'],
            body: ['Crimson Pro', 'serif'],
            script: ['Great Vibes', 'cursive']
          },
          boxShadow: {
            'soft-ink': '0 6px 30px rgba(27,26,23,0.12)'
          }
        }
      }
    }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>

  <style>
    /* Small handcrafted utilities to complement Tailwind for this static mockup */
    :root{
      --gold: #C9A769;
      --ink: #1B1A17;
      --parchment: #FAF5EE;
    }

    html,body{background:var(--parchment);color:var(--ink);} 

    /* Parchment texture (subtle noise) */
    body::before{
      content: "";position:fixed;inset:0;pointer-events:none;opacity:0.12;background-image:radial-gradient(rgba(0,0,0,0.02) 0.5px, transparent 0.5px);background-size:8px 8px;z-index:-1;
    }

    /* Decorative drop cap style */
    .drop-cap:first-letter{
      float:left;font-family: 'Cormorant Garamond', serif;font-size:4.5rem;line-height:0.7;color:var(--gold);padding-right:0.5rem;margin-top:0.1rem;font-weight:700;text-shadow:0 1px 0 rgba(255,255,255,0.6);
    }

    /* Focus observable outlines for accessibility */
    :focus{outline:3px solid rgba(201,167,105,0.18);outline-offset:3px}

    /* Wax seal button decorative */
    .wax-seal{background:linear-gradient(145deg,#6a1b1f 0%,#8f272a 100%);color:white;border-radius:999px;padding:0.6rem 1rem;font-family:'Great Vibes',cursive;box-shadow:0 6px 18px rgba(122,31,46,0.18);}

    /* Editorial float layout for featured product */
    .folio {max-width:1100px;margin-left:auto;margin-right:auto;padding:3.5rem 1.25rem}

    /* Gold foil SVG mask on headings */
    .gold-heading{background:linear-gradient(90deg,#d6b875,#f3e1b5);-webkit-background-clip:text;background-clip:text;color:transparent}

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce){
      .anim-float{animation:none}
    }

    /* Subtle floating botanic corners */
    .anim-float{animation:float 6s ease-in-out infinite}
    @keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}

    /* Responsive tweaks */
    @media (min-width: 1024px){
      .hero-panel{padding:4rem 4.5rem}
    }

  </style>
</head>
<body class="antialiased text-base leading-relaxed">

  <!-- Header / Navigation -->
  <header class="py-6 border-b border-b-[rgba(27,26,23,0.06)]">
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3 group" aria-label="Atelier Arome homepage">
        <!-- Illuminated initial A + logotype -->
        <svg width="56" height="56" viewBox="0 0 100 100" role="img" aria-hidden="true" class="rounded-full shadow-soft-ink bg-white p-2">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0" stop-color="#fff7e6" />
              <stop offset="1" stop-color="#C9A769" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="46" fill="url(#g1)" stroke="#D9C8A5" stroke-width="2"/>
          <text x="50%" y="58%" text-anchor="middle" font-family="Cormorant Garamond, serif" font-size="48" fill="#3C2E1F" font-weight="700">A</text>
        </svg>
        <div>
          <div class="text-ink font-display text-xl leading-none">Atelier <span class="text-gold">Arôme</span></div>
          <div class="text-sm font-body text-[rgba(27,26,23,0.6)]">Illuminated Manuscript Aromatherapy</div>
        </div>
      </a>

      <nav aria-label="Primary" class="hidden md:flex gap-8 items-center text-sm font-medium">
        <a href="#collections" class="hover:text-gold focus:text-gold">Collections</a>
        <a href="#story" class="hover:text-gold focus:text-gold">Our Atelier</a>
        <a href="#featured" class="hover:text-gold focus:text-gold">Featured</a>
        <a href="#journal" class="hover:text-gold focus:text-gold">Journal</a>
      </nav>

      <div class="flex items-center gap-4">
        <button class="p-2 rounded-md" aria-label="Search">🔍</button>
        <a href="#newsletter" class="wax-seal focus:ring-2 focus:ring-gold" role="button">Subscribe</a>
      </div>
    </div>
  </header>

  <!-- Hero -->
  <section class="hero-panel folio">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Decorative marginalia SVG top -->
      <svg class="mx-auto mb-4 anim-float" width="180" height="48" viewBox="0 0 360 96" fill="none" aria-hidden="true">
        <path d="M10 80 C80 20, 280 20, 350 80" stroke="#7F9B86" stroke-width="2" stroke-linecap="round" fill="none"/>
        <circle cx="36" cy="40" r="6" fill="#7A1F2E"/>
        <circle cx="324" cy="40" r="6" fill="#7A1F2E"/>
      </svg>

      <h1 class="text-4xl md:text-5xl font-display leading-tight gold-heading">Atelier <span class="text-ink">Arôme</span></h1>
      <p class="mt-4 text-lg md:text-xl text-[rgba(27,26,23,0.7)]">Hand-forged aromatherapy blends presented like illuminated pages — botanical wisdom, crafted with care.</p>

      <div class="mt-8 p-6 bg-white rounded-2xl shadow-soft-ink hero-panel" style="border:1px solid rgba(27,26,23,0.04)">
        <div class="flex flex-col md:flex-row md:items-center md:gap-8">
          <figure class="md:w-1/2">
            <img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='640' height='480' viewBox='0 0 640 480'><rect width='100%' height='100%' fill='%23F6EEE0'/><g fill='%237F9B86'><ellipse cx='320' cy='320' rx='200' ry='120'/></g><text x='50%' y='38%' font-size='34' text-anchor='middle' fill='%231B1A17' font-family='Cormorant Garamond'>Botanical Elixir</text></svg>" alt="Botanical Elixir — product illustration" class="rounded-lg w-full h-auto"/>
          </figure>

          <div class="md:w-1/2 mt-6 md:mt-0 text-left">
            <p class="drop-cap font-display text-2xl leading-snug">An artisanal blend of neroli, cedar, and clove— aged in small batches and hand-labeled with botanical etchings. Each bottle is a miniature folio of fragrance and memory.</p>
            <ul class="mt-4 text-sm text-[rgba(27,26,23,0.7)] space-y-1">
              <li><strong>Volume:</strong> 30ml • <strong>Origin:</strong> SG</li>
              <li><strong>Technique:</strong> CO2 extraction • <strong>Small-batch:</strong> yes</li>
            </ul>
            <div class="mt-6 flex gap-4 items-center">
              <a href="#" class="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-[rgba(27,26,23,0.06)] hover:bg-gold hover:text-white focus:bg-gold focus:text-white transition">Add to Folio — $48</a>
              <a href="#collections" class="text-sm underline">Explore collections</a>
            </div>
          </div>
        </div>
      </div>

      <!-- Decorative divider -->
      <div class="mt-8 flex items-center justify-center gap-6">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20" stroke="#C9A769" stroke-width="1.6" stroke-linecap="round"/></svg>
        <span class="text-xs uppercase tracking-widest text-[rgba(27,26,23,0.6)]">Curated Chapters</span>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20" stroke="#C9A769" stroke-width="1.6" stroke-linecap="round"/></svg>
      </div>
    </div>
  </section>

  <!-- Featured Editorial Section (non-grid) -->
  <main class="folio" id="featured">
    <section aria-labelledby="featured-heading" class="mt-6">
      <h2 id="featured-heading" class="text-2xl md:text-3xl font-display gold-heading">Featured Treasures</h2>
      <p class="mt-2 text-sm text-[rgba(27,26,23,0.65)]">Selected blends & apothecary objects from our current folio.</p>

      <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <!-- Left large feature -->
        <article class="bg-white p-6 rounded-2xl shadow-soft-ink" tabindex="0">
          <h3 class="font-display text-lg">Ritual — Oud & Amber</h3>
          <p class="mt-2 text-sm text-[rgba(27,26,23,0.66)]">An enveloping resinous blend inspired by old-world apothecaries.</p>
          <figure class="mt-4"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'><rect width='100%' height='100%' fill='%23FFF5EA'/><text x='50%' y='50%' font-size='18' fill='%231B1A17' text-anchor='middle'>Ritual — product</text></svg>" alt="Ritual Oud & Amber"/></figure>
          <div class="mt-4 flex items-center justify-between">
            <div class="text-sm">$72</div>
            <a href="#" class="text-sm hover:text-gold">View</a>
          </div>
        </article>

        <!-- Center narrow feature (tall) -->
        <article class="bg-white p-6 rounded-2xl shadow-soft-ink" tabindex="0">
          <h3 class="font-display text-lg">Philter — Neroli</h3>
          <p class="mt-2 text-sm text-[rgba(27,26,23,0.66)]">Bright citrus and floral notes for day rituals.</p>
          <figure class="mt-4"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'><rect width='100%' height='100%' fill='%23FFF5EA'/><text x='50%' y='50%' font-size='18' fill='%231B1A17' text-anchor='middle'>Philter — product</text></svg>" alt="Philter Neroli"/></figure>
          <div class="mt-4 flex items-center justify-between">
            <div class="text-sm">$44</div>
            <a href="#" class="text-sm hover:text-gold">View</a>
          </div>
        </article>

        <!-- Right feature with marginalia -->
        <article class="bg-white p-6 rounded-2xl shadow-soft-ink relative" tabindex="0">
          <div class="absolute -top-8 -right-8 opacity-40" aria-hidden="true">
            <!-- small botanical SVG -->
            <svg width="96" height="96" viewBox="0 0 100 100"><path d="M10 70 C20 20, 80 20, 90 70" stroke="#7F9B86" stroke-width="2" fill="none"/></svg>
          </div>
          <h3 class="font-display text-lg">Tincture — Cedar-Smoke</h3>
          <p class="mt-2 text-sm text-[rgba(27,26,23,0.66)]">Smoky top notes for evening grounding ceremonies.</p>
          <figure class="mt-4"><img src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='240'><rect width='100%' height='100%' fill='%23FFF5EA'/><text x='50%' y='50%' font-size='18' fill='%231B1A17' text-anchor='middle'>Tincture — product</text></svg>" alt="Tincture Cedar Smoke"/></figure>
          <div class="mt-4 flex items-center justify-between">
            <div class="text-sm">$52</div>
            <a href="#" class="text-sm hover:text-gold">View</a>
          </div>
        </article>
      </div>
    </section>

    <!-- About / Atelier Story -->
    <section id="story" class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      <div>
        <h2 class="text-2xl font-display gold-heading">The Atelier</h2>
        <p class="mt-3 drop-cap">Founded by an herbalist & bookbinder, Atelier Arôme blends ancient craft with modern quality control. We treat scent as scripture—each batch recorded, archived, and stamped.</p>
        <ul class="mt-4 text-sm text-[rgba(27,26,23,0.66)] space-y-2">
          <li><strong>Handmade</strong> — small-batch production</li>
          <li><strong>Sustainability</strong> — refill programs & recyclable glass</li>
          <li><strong>Local</strong> — made in Singapore with imported botanicals</li>
        </ul>
      </div>

      <aside class="bg-white p-6 rounded-2xl shadow-soft-ink" aria-label="atelier marginalia">
        <h3 class="font-display text-lg">Marginalia Notes</h3>
        <p class="mt-2 text-sm text-[rgba(27,26,23,0.66)]">Each product card contains a traceable lot number and a short provenance note—displayed on the product detail page as an illuminated colophon.</p>
        <div class="mt-4">
          <button class="wax-seal">Read the Colophon</button>
        </div>
      </aside>
    </section>

    <!-- Newsletter with wax seal CTA -->
    <section id="newsletter" class="mt-16 bg-white p-8 rounded-2xl shadow-soft-ink text-center">
      <h3 class="font-display text-xl">Receive the Next Folio</h3>
      <p class="mt-2 text-sm text-[rgba(27,26,23,0.66)]">Sign up for seasonal releases, rituals, and behind-the-scenes notes from the binder's bench.</p>
      <form class="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row gap-3" role="form" aria-label="Newsletter signup">
        <label for="email" class="sr-only">Email</label>
        <input id="email" type="email" required placeholder="your@email.com" class="flex-1 px-4 py-3 rounded-md border border-[rgba(27,26,23,0.06)] focus:ring-2 focus:ring-gold" />
        <button type="submit" class="wax-seal">Subscribe • <span class="sr-only">to newsletter</span></button>
      </form>
      <p class="mt-3 text-xs text-[rgba(27,26,23,0.56)]">We never share your email. Unsubscribe anytime.</p>
    </section>

  </main>

  <!-- Footer / Colophon -->
  <footer class="mt-16 py-10 text-center text-sm text-[rgba(27,26,23,0.66)]">
    <div class="max-w-3xl mx-auto">
      <p>Atelier Arôme • Folio I • Made in Singapore</p>
      <p class="mt-2">GST applied at checkout • PayNow & SingPost integrations planned for headless checkout.</p>
      <div class="mt-4" aria-hidden="true">
        <svg width="220" height="36" viewBox="0 0 220 36" fill="none"><path d="M4 24 C40 4,180 4,216 24" stroke="#7F9B86" stroke-width="1.2"/></svg>
      </div>
    </div>
  </footer>

  <!-- Minimal JS only to support mobile nav and reduce bundle size for mock-up -->
  <script>
    // Respect reduced motion and avoid JS animations when user prefers reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(prefersReduced){document.documentElement.classList.add('reduced-motion')}

    // Mobile nav toggle (simple and accessible)
    (function(){
      const btn = document.querySelector('[aria-label="Primary"]');
      // No-op in this static mock—placeholder for behavior in Next.js
    })();
  </script>
</body>
</html>
```
