# Phase 1 - Day 2: Frontend Foundation (Next.js 15) - Detailed Execution Plan

**Status:** Ready for Execution
**Duration:** Day 2 (of 3 days)
**Objective:** Initialize Next.js 15 project with TypeScript, App Router, and Tailwind 4.0 custom theme

---

## 🎯 Day 2 Success Criteria

- ✅ Next.js 15.0+ project running on `localhost:3000`
- ✅ TypeScript strict mode configured with path aliases
- ✅ Tailwind CSS 4.0 with Illuminated Manuscript theme active
- ✅ Shadcn-UI core components installed and customized
- ✅ App Router structure with all route groups created
- ✅ Environment variables template documented
- ✅ Frontend README.md written

---

## 📝 Activity 2.1: Create Next.js 15 Project Structure

**Deliverable:** Complete `atelier-arome-web/` directory with Next.js 15 scaffold

**Detailed Checklist:**
```
□ Navigate to project root: /home/project/atelier-arome
□ Create Next.js 15 project:
  □ Command: npx create-next-app@latest atelier-arome-web
  □ Select options:
    □ TypeScript: Yes
    □ ESLint: Yes
    □ Tailwind CSS: Yes (will customize later)
    □ src/ directory: Yes
    □ App Router: Yes
    □ Import alias: @/*
  □ Verify Next.js version is 15.x
  □ Remove default .gitignore (will replace)
□ Verify directory structure:
  □ src/app/ (App Router)
  □ src/components/ (React components)
  □ src/lib/ (utilities)
  □ public/ (static assets)
  □ next.config.ts (Next.js config)
  □ tsconfig.json (TypeScript config)
  □ package.json (dependencies)
□ Test Next.js installation:
  □ Command: cd atelier-arome-web && npm run dev (or pnpm dev)
  □ Verify server starts on http://localhost:3000
  □ Verify welcome page loads
```

---

## 📝 Activity 2.2: Install Frontend Dependencies

**Deliverable:** All required packages installed

**Detailed Checklist:**
```
□ Navigate to atelier-arome-web/
□ Install core dependencies:
  □ Command: npm install (or pnpm install)
  □ Verify no installation errors
□ Install state management:
  □ zustand (client state)
  □ @tanstack/react-query (server state)
  □ Verify installation: Check package.json
□ Install form handling:
  □ react-hook-form
  □ @hookform/resolvers
  □ zod (validation)
  □ Verify installation
□ Install UI libraries (Radix primitives):
  □ @radix-ui/react-dialog
  □ @radix-ui/react-dropdown-menu
  □ @radix-ui/react-label
  □ @radix-ui/react-select
  □ @radix-ui/react-separator
  □ @radix-ui/react-slot
  □ @radix-ui/react-sheet
  □ @radix-ui/react-toast
  □ @radix-ui/react-tooltip
  □ Verify all Radix components installed
□ Install UI styling utilities:
  □ class-variance-authority
  □ clsx
  □ tailwind-merge
  □ Verify installation
□ Install utilities:
  □ lucide-react (icons)
  □ axios (HTTP client)
  □ next-auth (authentication)
  □ framer-motion (animations)
  □ Verify installation
□ Install dev dependencies:
  □ @tailwindcss/typography
  □ tailwindcss-animate
  □ vitest (unit testing)
  □ @testing-library/react
  □ @testing-library/jest-dom
  □ @playwright/test (E2E testing)
  □ @storybook/react (optional, defer if time)
  □ prettier (code formatting)
  □ Verify installation
□ Verify package.json has correct versions:
  □ next: ^15.0.0
  □ react: ^19.0.0
  □ typescript: ^5.x
  □ tailwindcss: ^4.0.0
```

---

## 📝 Activity 2.3: Configure TypeScript

**Deliverable:** Strict TypeScript with path aliases

**Detailed Checklist:**
```
□ Open tsconfig.json
□ Enable strict mode:
  □ "strict": true
  □ "noEmit": true
  □ "noUnusedLocals": true
  □ "noUnusedParameters": true
  □ "noFallthroughCasesInSwitch": true
□ Configure path aliases:
  □ "@/*": ["./src/*"]
  □ "@/components/*": ["./src/components/*"]
  □ "@/lib/*": ["./src/lib/*"]
  □ "@/hooks/*": ["./src/hooks/*"]
  □ "@/stores/*": ["./src/stores/*"]
  □ "@/types/*": ["./src/types/*"]
  □ "@/styles/*": ["./src/styles/*"]
□ Configure Next.js plugin:
  □ Add plugins array with { name: "next" }
□ Configure module resolution:
  □ "module": "esnext"
  □ "moduleResolution": "bundler"
  □ "resolveJsonModule": true
□ Test path aliases:
  □ Create test file: src/lib/test.ts
  □ Import in component: import { test } from '@/lib/test'
  □ Verify no TypeScript errors
```

---

## ✅ Activity 2.4: Configure Tailwind CSS 4.0 with Illuminated Manuscript Theme

**Deliverable:** Custom Tailwind configuration with design tokens

**Status:** COMPLETED ✅

**Detailed Checklist:**
```
□ Create/modify tailwind.config.ts:
  □ Import type: Config
  □ Configure darkMode: ['class']
  □ Configure content: ['./src/**/*.{ts,tsx}']
  
□ Define custom color system:
  □ Ink colors:
    □ DEFAULT: '#2A2D26'
    □ light: '#4A4D46'
    □ muted: '#545752'
  □ Gold colors:
    □ DEFAULT: '#C9A769'
    □ light: '#E8D8B6'
    □ dark: '#A98750'
    □ muted: 'rgba(201, 167, 105, 0.3)'
    □ text: '#8B7355'
  □ Parchment colors:
    □ DEFAULT: '#FAF8F5'
    □ dark: '#F5F1EB'
    □ darker: '#E8E4D9'
  □ Botanical accents:
    □ lavender: '#B8A9C9'
    □ eucalyptus: '#7CB9A0'
    □ bergamot: '#F5D489'
    □ rosehip: '#E8B4B8'
  □ Supporting colors:
    □ bronze: '#9A8C6D'
    □ rose: '#B87D7D'
    □ sage: '#7C6354'
    □ slate: '#7A8C9D'

□ Define custom typography:
  □ display: ['Cormorant Garamond', 'Georgia', 'serif']
  □ body: ['Crimson Pro', 'Georgia', 'serif']
  □ accent: ['Great Vibes', 'cursive']
  □ ornament: ['Playfair Display', 'serif']

□ Define fluid typography scale (clamp):
  □ xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)
  □ sm: clamp(0.875rem, 0.8rem + 0.35vw, 1rem)
  □ base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem)
  □ lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem)
  □ xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)
  □ 2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem)
  □ 3xl: clamp(2rem, 1.5rem + 2.5vw, 3rem)
  □ 4xl: clamp(2.5rem, 2rem + 2.5vw, 4rem)
  □ 5xl: clamp(3rem, 2.5rem + 2.5vw, 5rem)

□ Define custom spacing (Golden Ratio inspired):
  □ 3xs: '0.125rem'
  □ 2xs: '0.25rem'
  □ xs: '0.5rem'
  □ sm: '0.75rem'
  □ md: '1rem'
  □ lg: '1.5rem'
  □ xl: '2rem'
  □ 2xl: '3rem'
  □ 3xl: '4rem'
  □ 4xl: '6rem'
  □ 5xl: '8rem'
  □ 6xl: '12rem'

□ Define border radius:
  □ sm: '0.125rem'
  □ md: '0.25rem'
  □ lg: '0.5rem'
  □ xl: '1rem'
  □ 2xl: '2rem'
  □ 3xl: '4rem'

□ Define custom shadows:
  □ sm: '0 1px 2px rgba(42, 45, 38, 0.05)'
  □ md: '0 4px 12px rgba(42, 45, 38, 0.08)'
  □ lg: '0 8px 24px rgba(42, 45, 38, 0.1)'
  □ xl: '0 16px 48px rgba(42, 45, 38, 0.12)'
  □ gold: '0 0 40px rgba(201, 167, 105, 0.2)'

□ Define transition durations:
  □ micro: '150ms'
  □ fast: '300ms'
  □ base: '500ms'
  □ slow: '800ms'

□ Define z-index scale:
  □ base: '1'
  □ elevated: '10'
  □ sticky: '100'
  □ overlay: '1000'
  □ modal: '2000'
  □ toast: '3000'

□ Define custom animations:
  □ liquid-wave: translateY + scaleY animation (8s ease-in-out infinite)
  □ float-botanical: translateY + rotate animation (6s ease-in-out infinite)
  □ rotate-seal: 360deg rotation (30s linear infinite)
  □ write-scroll: translateY + rotate animation (2s ease-in-out infinite)
  □ pulse: opacity + scale animation (3s ease-in-out infinite)

□ Configure plugins:
  □ require('tailwindcss-animate')
  □ require('@tailwindcss/typography')
  □ Verify plugins installed
□ Test Tailwind configuration:
  □ Create test component with custom colors
  □ Verify colors render correctly
  □ Test typography scales
  □ Test animations
```

---

## 📝 Activity 2.5: Configure Global Styles

**Deliverable:** src/app/globals.css with Illuminated Manuscript styles

**Detailed Checklist:**
```
□ Create src/app/globals.css
□ Add Tailwind directives:
  □ @tailwind base
  □ @tailwind components
  □ @tailwind utilities

□ Add CSS custom properties (root level):
  □ --font-display: var(--font-cormorant)
  □ --font-body: var(--font-crimson)
  □ --font-accent: var(--font-great-vibes)
  □ --color-ink: #2A2D26
  □ --color-gold: #C9A769
  □ --color-parchment: #FAF8F5

□ Add typography base styles:
  □ body: font-body, color-ink, bg-parchment
  □ headings: font-display
  □ Links: underline on hover, gold text

□ Add reduced motion support:
  □ @media (prefers-reduced-motion: reduce):
    □ *, *::before, *::after:
      □ animation-duration: 0.01ms !important
      □ transition-duration: 0.01ms !important
      □ scroll-behavior: auto !important

□ Add focus styles (WCAG AA):
  □ *:focus-visible:
    □ outline: 3px solid gold
    □ outline-offset: 4px

□ Add scroll behavior:
  □ html: scroll-behavior: smooth

□ Test global styles:
  □ Verify colors apply correctly
  □ Test reduced motion toggle
  □ Test keyboard navigation focus states
```

---

## 📝 Activity 2.6: Create Custom Frontend .gitignore

**Deliverable:** Comprehensive `.gitignore` for Next.js project

**Detailed Checklist:**
```
□ Create .gitignore in atelier-arome-web/ root
□ Add Next.js ignores:
  □ /.next/
  □ /out/
  □ /build
  □ .vercel
□ Add dependency ignores:
  □ /node_modules/
  □ /.pnp
  □ .pnp.js
□ Add environment ignores:
  □ .env
  □ .env*.local
  □ .env.production
□ Add debug ignores:
  □ npm-debug.log*
  □ yarn-debug.log*
  □ yarn-error.log*
□ Add IDE ignores:
  □ /.vscode/
  □ /.idea/
  □ *.swp
  □ *.swo
  □ *~
□ Add OS ignores:
  □ .DS_Store
  □ Thumbs.db
□ Add testing ignores:
  □ /coverage/
  □ /.nyc_output/
□ Add TypeScript ignores:
  □ *.tsbuildinfo
  □ next-env.d.ts
□ Test git status to verify excludes work
```

---

## ✅ Activity 2.7: Configure Next.js

**Deliverable:** Production-ready Next.js configuration

**Status:** COMPLETED ✅

**Detailed Checklist:**
```
□ Create next.config.ts (or modify existing)
□ Enable React strict mode:
  □ reactStrictMode: true
□ Configure image optimization:
  □ remotePatterns:
    □ Cloudinary:
      □ protocol: 'https'
      □ hostname: 'res.cloudinary.com'
      □ pathname: '/atelier-arome/**'
    □ Placehold.co (for dev):
      □ protocol: 'https'
      □ hostname: 'placehold.co'
  □ formats: ['image/avif', 'image/webp']
  □ deviceSizes: [640, 750, 828, 1080, 1200, 1920]
  □ imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
□ Configure experimental features:
  □ optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
□ Configure redirects:
  □ /shop → /compendium (permanent)
□ Configure security headers:
  □ X-Frame-Options: DENY
  □ X-Content-Type-Options: nosniff
  □ Referrer-Policy: strict-origin-when-cross-origin
□ Verify configuration syntax
□ Test dev server: npm run dev
```

---

## 📝 Activity 2.8: Create App Router Structure

**Deliverable:** Complete route groups with layouts

**Detailed Checklist:**

**Root Structure:**
```
□ Modify src/app/layout.tsx (root layout):
  □ Import fonts: Cormorant_Garamond, Crimson_Pro, Great_Vibes
  □ Configure font display: 'swap'
  □ Set font CSS variables
  □ Import globals.css
  □ Configure metadata:
    □ Title template: '%s | Atelier Arôme'
    □ Default title: 'Atelier Arôme — Artisanal Aromatherapy Essences'
    □ Description: SEO description
    □ Keywords: aromatherapy, essential oils, Singapore
    □ Open Graph tags
    □ Twitter Card tags
    □ metadataBase: https://atelierarome.sg
    □ alternates:
      □ canonical: '/'
    □ Export metadata object

□ Create src/app/page.tsx (homepage):
  □ Implement basic hero section structure
  □ Add placeholder content
  □ Ensure SEO-friendly heading hierarchy

□ Create src/app/loading.tsx (global loading):
  □ Implement skeleton UI
  □ Use parchment background
  □ Add subtle loading animation

□ Create src/app/error.tsx (global error):
  □ Implement error boundary UI
  □ Provide recovery options
  □ Maintain design system

□ Create src/app/not-found.tsx (404 page):
  □ Implement 404 page
  □ Add navigation back to homepage
  □ Maintain design system
```

**Marketing Routes:**
```
□ Create src/app/(marketing)/route group:
  □ Create src/app/(marketing)/layout.tsx:
    □ Import Header component (placeholder)
    □ Import Footer component (placeholder)
    □ Add SEO-friendly structure

  □ Create src/app/(marketing)/about/page.tsx:
    □ Basic content structure
    □ Design system styling

  □ Create src/app/(marketing)/alchemy/page.tsx:
    □ Basic content structure
    □ Design system styling

  □ Create src/app/(marketing)/contact/page.tsx:
    □ Basic content structure
    □ Design system styling

  □ Create src/app/(marketing)/faq/page.tsx:
    □ Basic content structure
    □ Design system styling
```

**Shop Routes:**
```
□ Create src/app/(shop)/route group:
  □ Create src/app/(shop)/layout.tsx:
    □ Import Header with cart functionality
    □ Import Footer component
    □ Add cart drawer state

  □ Create src/app/(shop)/compendium/page.tsx:
    □ Product listing structure
    □ Placeholder for products grid

  □ Create src/app/(shop)/compendium/loading.tsx:
    □ Product list skeleton UI

  □ Create src/app/(shop)/compendium/[slug]/page.tsx:
    □ Product detail structure
    □ Slug parameter handling

  □ Create src/app/(shop)/compendium/[slug]/loading.tsx:
    □ Product detail skeleton UI

  □ Create src/app/(shop)/collections/page.tsx:
    □ Categories listing

  □ Create src/app/(shop)/collections/[category]/page.tsx:
    □ Single category with products

  □ Create src/app/(shop)/search/page.tsx:
    □ Search results page
```

**Checkout Routes:**
```
□ Create src/app/(checkout)/route group:
  □ Create src/app/(checkout)/layout.tsx:
    □ Minimal layout (no full navigation)
    □ Progress indicator

  □ Create src/app/(checkout)/cart/page.tsx:
    □ Full cart page

  □ Create src/app/(checkout)/checkout/page.tsx:
    □ Checkout redirect handler

  □ Create src/app/(checkout)/checkout/shipping/page.tsx:
    □ Shipping address step

  □ Create src/app/(checkout)/checkout/payment/page.tsx:
    □ Payment step

  □ Create src/app/(checkout)/checkout/confirmation/page.tsx:
    □ Order confirmation page
```

**Account Routes:**
```
□ Create src/app/(account)/route group:
  □ Create src/app/(account)/layout.tsx:
    □ Account sidebar navigation
    □ Protected route wrapper

  □ Create src/app/(account)/account/page.tsx:
    □ User dashboard

  □ Create src/app/(account)/account/orders/page.tsx:
    □ Order history

  □ Create src/app/(account)/account/orders/[id]/page.tsx:
    □ Order detail

  □ Create src/app/(account)/account/addresses/page.tsx:
    □ Saved addresses

  □ Create src/app/(account)/account/wishlist/page.tsx:
    □ Bookmarked essences

  □ Create src/app/(account)/account/settings/page.tsx:
    □ Account settings

  □ Create src/app/(account)/login/page.tsx:
    □ Login form

  □ Create src/app/(account)/register/page.tsx:
    □ Registration form

  □ Create src/app/(account)/forgot-password/page.tsx:
    □ Password reset request

  □ Create src/app/(account)/reset-password/page.tsx:
    □ Password reset confirmation
```

**API Routes:**
```
□ Create src/app/api/route group:
  □ Create src/app/api/auth/[...nextauth]/route.ts:
    □ NextAuth.js handler

  □ Create src/app/api/cart/route.ts:
    □ Cart session BFF

  □ Create src/app/api/newsletter/route.ts:
    □ Newsletter subscription

  □ Create src/app/api/revalidate/route.ts:
    □ On-demand ISR revalidation
```

**Verification:**
```
□ Verify all routes are accessible:
  □ Visit each route in browser
  □ Check for 404 errors
  □ Verify layouts apply correctly
  □ Test navigation between routes
```

---

## 📝 Activity 2.9: Install Shadcn-UI Components (Core Set)

**Deliverable:** Core UI components installed and customized

**Detailed Checklist:**
```
□ Create components.json file:
  □ $schema: https://ui.shadcn.com/schema.json
  □ style: "default"
  □ rsc: true
  □ tsx: true
  □ tailwind:
    □ config: "tailwind.config.ts"
    □ css: "src/app/globals.css"
    □ baseColor: "neutral"
    □ cssVariables: true
    □ prefix: ""
  □ aliases:
    □ components: "@/components"
    □ utils: "@/lib"
    □ ui: "@/components/ui"
    □ lib: "@/lib"
    □ hooks: "@/hooks"
□ Install core components:
  □ Button: npx shadcn-ui@latest add button
  □ Card: npx shadcn-ui@latest add card
  □ Dialog: npx shadcn-ui@latest add dialog
  □ Sheet (for vial drawer): npx shadcn-ui@latest add sheet
  □ Dropdown Menu: npx shadcn-ui@latest add dropdown-menu
  □ Form: npx shadcn-ui@latest add form
  □ Input: npx shadcn-ui@latest add input
  □ Label: npx shadcn-ui@latest add label
  □ Select: npx shadcn-ui@latest add select
  □ Separator: npx shadcn-ui@latest add separator
  □ Skeleton: npx shadcn-ui@latest add skeleton
  □ Toast: npx shadcn-ui@latest add toast
  □ Tooltip: npx shadcn-ui@latest add tooltip
□ Verify components exist:
  □ Check src/components/ui/ directory
  □ Verify all components present
□ Customize components with Illuminated Manuscript theme:
  □ Update button.tsx:
    □ Add variants: gold, ink, parchment
    □ Apply custom colors
    □ Add focus states
  □ Update card.tsx:
    □ Add parchment background
    □ Add gold borders
    □ Add shadows
  □ Update dialog.tsx:
    □ Customize backdrop
    □ Add parchment content background
  □ Update sheet.tsx:
    □ Customize for vial drawer
    □ Add parchment background
  □ Update form components:
    □ Custom focus states (gold outline)
    □ Custom error styling
□ Test components:
  □ Create test page with all components
  □ Verify styling matches design system
  □ Test keyboard navigation
  □ Test screen reader compatibility
```

---

## 📝 Activity 2.10: Create Environment Variables Template

**Deliverable:** .env.local.example with all required variables

**Detailed Checklist:**
```
□ Create .env.local.example in atelier-arome-web/
□ Add API configuration:
  □ NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
  □ NEXT_PUBLIC_API_TIMEOUT=10000
□ Add NextAuth configuration:
  □ NEXTAUTH_URL=http://localhost:3000
  □ NEXTAUTH_SECRET= (generate instruction: openssl rand -base64 32)
□ Add Stripe configuration:
  □ NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_PLACEHOLDER
  □ STRIPE_SECRET_KEY=sk_test_PLACEHOLDER
  □ STRIPE_WEBHOOK_SECRET=whsec_PLACEHOLDER
□ Add analytics (optional):
  □ NEXT_PUBLIC_PLAUSIBLE_DOMAIN=localhost
□ Verify no real secrets in template
□ Add instructions for generating NEXTAUTH_SECRET
```

---

## 📝 Activity 2.11: Write Frontend README.md

**Deliverable:** Comprehensive documentation file

**Detailed Checklist:**
```
□ Create README.md in atelier-arome-web/
□ Include sections:
  □ Project Overview
  □ Technology Stack
  □ Prerequisites
  □ Installation Instructions
  □ Environment Configuration
  □ Development Commands
  □ Design System Documentation
  □ Component Library Usage
  □ Testing Commands
  □ Architecture Reference
  □ License
□ Verify README is clear and complete
□ Test installation instructions against actual setup
```

---

## 📊 Day 2 Success Criteria Summary

### Activity 2.1 (Project Structure):
- [ ] Next.js 15 project created
- [ ] Directory structure verified
- [ ] Development server runs on localhost:3000

### Activity 2.2 (Dependencies):
- [ ] All packages installed
- [ ] Package versions verified

### Activity 2.3 (TypeScript):
- [ ] Strict mode enabled
- [ ] Path aliases configured
- [ ] Aliases tested

### Activity 2.4 (Tailwind):
- [ ] Custom theme configured
- [ ] All design tokens defined
- [ ] Animations working

### Activity 2.5 (Global Styles):
- [ ] CSS custom properties set
- [ ] Typography base styles applied
- [ ] Reduced motion support added
- [ ] Focus styles configured (WCAG AA)

### Activity 2.6 (.gitignore):
- [ ] Comprehensive .gitignore created
- [ ] All exclusions tested

### Activity 2.7 (Next.js Config):
- [ ] Image optimization configured
- [ ] Security headers added
- [ ] Redirects configured
- [ ] Config syntax verified

### Activity 2.8 (App Router):
- [ ] Root layout with fonts configured
- [ ] All route groups created
- [ ] All pages implemented
- [ ] Navigation tested

### Activity 2.9 (Shadcn-UI):
- [ ] Core components installed
- [ ] Components customized to theme
- [ ] Components tested for accessibility

### Activity 2.10 (Environment):
- [ ] .env.local.example created
- [ ] All variables documented
- [ ] Instructions clear

### Activity 2.11 (README):
- [ ] Comprehensive README written
- [ ] All sections complete
- [ ] Installation instructions tested

---

## 📋 Day 2 Final Checklist Before Execution

**Pre-Execution Verification:**
- [ ] All 11 activities planned in detail
- [ ] Success criteria defined
- [ ] Dependencies and prerequisites verified
- [ ] Design system specifications complete

**Ready to begin Day 2 execution?** 🚀
