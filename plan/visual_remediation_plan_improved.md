Thinking: The user is asking me to:
1. Review and analyze the QA feedback to my previous remediation plan
2. Meticulously validate the suggestions
3. Re-evaluate and re-formulate the remediation plan
4. Review and validate the improved plan before proceeding
Let me analyze the QA feedback:
QA Feedback Summary
Executive Summary
- My previous analysis was technically sound but operationally inefficient
- I fell into a trap of "Repair then Replace" logic
- The QA agent suggests "Construct and Conquer" strategy instead
- Build new components outside the broken file, then overwrite page.tsx entirely
Detailed Critique
1. Strategy Error: "Patching the Titanic"
- My plan: Fix JSX syntax errors in page.tsx, then extract components
- QA critique: This is grunt work, not architecture. The file is too broken to fix.
- Correction: Create components first, then overwrite page.tsx with clean imports
2. Aesthetic Gap: "Generic Definitions"
- My plan: Mentions Shadcn-UI and Tailwind but no specifics
- QA critique: Risks "Generic SaaS" look, no "Illuminated Manuscript" specifics
- Correction: Define Design Token Map - Toast = Wax Seal Notification, Cart Drawer = Parchment Overlay
3. Architecture: "Monolithic Components"
- My plan: Single hero-section.tsx file
- QA critique: Hero section is too complex for one file
- Correction: Atomic breakdown:
  - hero-frame.tsx (Layout & Borders)
  - alchemical-vessel.tsx (WebGL/CSS Animation)
  - botanical-layer.tsx (Parallax Elements)
Refined Plan
Phase 1: Foundation (Immediate Action)
1.1 Establish Component Shells (Clean Slate)
I'll develop structural placeholders for key components. The Hero Section will use a grid layout featuring illuminated typography, while the Layout will focus on semantic structure. The Cart Store will be a basic Zustand scaffold to support initial functionality.
The approach prioritizes creating clean, modular component foundations that provide immediate structural support and enable future architectural complexity.
1.2 The "Nuclear" Option
I'll implement a complete page overwrite strategy, ensuring a pristine build environment. By importing a clean Header and HeroSection, I'll eliminate syntax errors and establish a solid build foundation. The result will be a streamlined page structure with zero syntax complications.
Phase 2: Visual & Logical Porting
The next phase involves detailed component refinement. I'll focus on implementing the Header with mobile menu integration and creating a hero section that balances aesthetic complexity with functional design. The goal is to create a visually cohesive and technically robust component architecture.
Validation Checkpoints
I'll establish rigorous testing criteria to ensure component integrity. Key validation points include successful build compilation, accurate browser rendering, and complete elimination of console errors. Each component must meet stringent visual and technical standards before moving forward.
The "Construct and Conquer" strategy provides a systematic approach to component development, emphasizing deliberate, iterative construction over hasty modifications. This method ensures each component is thoughtfully engineered and thoroughly validated before integration.
The QA team's atomic breakdown recommendation offers compelling architectural guidance. By creating granular components like hero-frame.tsx, alchemical-vessel.tsx, and botanical-layer.tsx, we introduce modular flexibility and precise component isolation. This approach promotes clearer code structure and potential for more targeted testing and maintenance.
Balancing this with pragmatic project constraints is crucial. While an atomic breakdown offers theoretical elegance, I'll carefully evaluate the actual complexity to determine the most efficient implementation strategy. The goal is to achieve a clean, maintainable architecture without unnecessary abstraction.
The "Nuclear Option" - a complete page.tsx rewrite - emerges as a decisive, clean approach to resolving the build blocker. This method eliminates incremental complexity by creating a pristine new page structure, providing immediate architectural clarity and a fresh foundation for development.
I'll develop a strategic implementation roadmap that prioritizes modularity and clarity. The approach involves creating placeholder components with clear semantic structure, then systematically reconstructing the page with a clean, streamlined architecture. This method ensures each component serves a distinct purpose while maintaining overall design coherence.
The next phase involves crafting detailed component specifications, focusing on typography, visual elements, and subtle interactions that enhance the user experience without overwhelming the interface.
I'll implement the header with precision, integrating the animated Atelier seal, mobile quill menu, and responsive navigation tools. The hero section will follow, featuring an illuminated initial, vessel visualization, botanical layering, and a scroll indicator to guide user engagement.
State management will leverage Zustand for the cart and UI interactions, with strategic persistence mechanisms to maintain user session context. The implementation emphasizes visual consistency and seamless component integration.
I'll validate the design approach, ensuring modular hero components can coexist as a unified section. This strategy allows granular control over visual elements while maintaining cohesive architectural structure.
The atomic breakdown provides flexibility, enabling independent component development and potential reuse across different page sections. I'll focus on creating a clean, modular implementation that supports both immediate design needs and future scalability.
The implementation plan follows a systematic approach: first constructing the hero section, then expanding with a header and a minimalist page design. This incremental strategy ensures each component is carefully developed and integrated.
Key priorities include creating a clean, modular component structure with clear separation of concerns. The goal is to build a flexible, maintainable system that supports dynamic rendering and easy future extensions.
The strategy involves breaking down complex components into focused, purpose-built subcomponents, each handling specific responsibilities like layout, animation, and botanical visualizations. This approach promotes code reusability and easier maintenance.
I'll focus on creating a clean implementation starting with a simple atomic structure, with potential for future enhancements. The goal is to build modular components that can evolve organically as project needs develop.
The validation plan establishes clear, measurable criteria: achieving a successful build with zero errors, ensuring accurate visual rendering, and maintaining console integrity. These checkpoints provide a robust framework for systematic component development and verification.
I'll document the comprehensive approach across strategic, tactical, and implementation levels, ensuring a holistic view of the project's progression from initial plan to concrete execution.
✅ REMEDIATION PLAN RE-EVALUATION
📋 VALIDATION OF QA SUGGESTIONS
After meticulous review, I validate and accept all QA critique points:
✅ Strategy Validation: "Patching the Titanic"
Original Plan: Fix JSX errors → Extract components  
Corrected Plan: Build components → Overwrite page.tsx
Why This is Superior:
- Eliminates "grunt work" of debugging 300+ line broken file
- Fix occurs as side effect of replacement, not as separate step
- Architectural progress happens simultaneously
- Reduces risk of cascade failures from partial fixes
✅ Aesthetic Validation: "Generic Definitions"
Original Plan: Mentions Shadcn-UI without specifics  
Corrected Plan: Design Token Map (Toast = Wax Seal, Drawer = Parchment Overlay)
Why This is Critical:
- Prevents "Generic SaaS" look (the project's anti-pattern)
- Explicitly encodes "Illuminated Manuscript" aesthetic in component naming
- Ensures design consistency across all components
- Aligns with project's "Anti-Generic" philosophy
✅ Architecture Validation: "Monolithic Components"
Original Plan: Single hero-section.tsx file (~400 lines)  
Corrected Plan: Atomic breakdown (hero-frame, alchemical-vessel, botanical-layer)
Why This Matters:
- Hero section contains 7+ distinct concerns (typography, animations, parallax, borders, vessel, botanicals, scroll indicator)
- Single file would be unmaintainable
- Atomic breakdown enables:
  - Isolated testing of animations
  - Independent visual polishing
  - Reusability across pages
  - Clearer cognitive load per file
---
🎯 RE-FORMULATED REMEDIATION PLAN
STRATEGY LEVEL: "Construct and Conquer"
Core Principle: Do not debug the broken. Build the new. Then replace.
Why This Works:
1. Efficiency: Components start as semantic shells → no debugging
2. Architecture: Atomic design from day 1 → no refactoring needed
3. Build Success: Malformed code deleted, not fixed → syntax error eliminated
4. Progress: Every step creates functional architecture → no wasted effort
---
TACTICAL LEVEL: Implementation Roadmap
Phase 1: The Foundation (Immediate - 30-45 minutes)
1.1 Create Component Directory Structure
mkdir -p src/components/layout
mkdir -p src/components/hero
mkdir -p src/stores
1.2 Build Component Shells (Semantic HTML + Tailwind)
File: src/components/hero/hero-frame.tsx
- Purpose: Layout & Border Ornaments
- Content: <section> with grid layout, SVG gold-leaf borders
- Complexity: Low (~80 lines)
File: src/components/hero/alchemical-vessel.tsx
- Purpose: WebGL/CSS Vessel Animation
- Content: SVG vessel with liquid animation
- Complexity: Medium (~120 lines)
File: src/components/hero/botanical-layer.tsx
- Purpose: Parallax Botanical Elements
- Content: Lavender, rose, eucalyptus SVG images
- Complexity: Low (~60 lines)
File: src/components/hero/hero-section.tsx
- Purpose: Orchestrator Component
- Content: Composes hero-frame, alchemical-vessel, botanical-layer, typography, actions, credentials, scroll indicator
- Complexity: Low (~100 lines, mostly composition)
File: src/components/layout/header.tsx
- Purpose: Global Navigation
- Content: Header, seal animation, desktop/mobile nav, cart button
- Complexity: Medium (~150 lines)
File: src/stores/cart-store.ts
- Purpose: Cart State Management
- Content: Zustand store with persistence
- Complexity: Low (~80 lines)
1.3 The "Nuclear" Page Overwrite
Action: Replace entire src/app/page.tsx content with:
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-paper-texture text-ink-900 font-serif selection:bg-gold-200">
      <Header />
      <HeroSection />
      <section className="py-12 px-4 text-center">
        <p className="text-lg text-ink-muted">Compendium coming soon...</p>
      </section>
    </main>
  );
}
Expected Result:
- Line 285 syntax error ELIMINATED (code deleted, not fixed)
- Build succeeds
- Visual foundation established
---
Phase 2: Visual & Logical Porting (2-3 hours)
2.1 Design Token Implementation
Wax Seal Toast:
// src/components/ui/toast.tsx (custom override)
export const WaxSealToast = ({ message }: { message: string }) => (
  <div className="bg-gold-light border-2 border-gold rounded-full p-4 shadow-lg animate-seal-bounce">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-gold" />
      <p className="text-ink font-display">{message}</p>
    </div>
  </div>
);
Parchment Overlay (Cart Drawer):
// src/components/ui/sheet.tsx (custom override)
export const ParchmentDrawer = ({ children }: { children: React.ReactNode }) => (
  <Sheet>
    <SheetContent className="bg-parchment border-gold shadow-xl">
      {children}
    </SheetContent>
  </Sheet>
);
2.2 Header Detail Work
- SVG Seal animation (rotate 30s infinite)
- Mobile menu: Hamburger → Quill Pen transition
- Shadcn Sheet styled with bg-parchment, border-gold
- Cart button: Glass vial with badge count
2.3 Hero Section Enhancement
- Typography: font-display (Cormorant/Cinzel) for "Alchemy" title
- SVG gold-leaf borders ported from index.html
- Scroll indicator: Floating quill animation
- Credentials: "72-Hour Distillation", "∞ Patience", "100% Artisanal"
2.4 Zustand Integration
- Wire cart-store.ts to localStorage
- Implement use-toast.tsx with WaxSeal component
- Add cart badge updates
---
Phase 3: Validation & Testing (30 minutes)
3.1 Build Verification
cd /home/project/atelier-arome/atelier-arome-web
pnpm type-check  # Zero TypeScript errors
pnpm run build   # Exit code 0
3.2 Visual Verification
pnpm dev
# Access http://localhost:3000
- Header renders with seal animation
- Hero section displays illuminated "A" initial
- Typography uses Cormorant Garamond / Crimson Pro
- Colors: ink, gold, parchment correct
- Console shows zero errors
3.3 Interactive Testing
- Mobile menu toggles
- Cart drawer opens/closes
- Toast notifications appear
- Scroll indicator visible
---
IMPLEMENTATION LEVEL: File-by-File
File 1: src/components/hero/hero-frame.tsx
Purpose: Layout + Border Ornaments
Implementation:
export function HeroFrame({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative w-full min-h-screen bg-paper-texture overflow-hidden">
      {/* Top-left gold-leaf corner */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-gold opacity-80" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      {/* Top-right gold-leaf corner */}
      <svg className="absolute top-0 right-0 w-32 h-32 text-gold opacity-80 rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      {/* Bottom-left gold-leaf corner */}
      <svg className="absolute bottom-0 left-0 w-32 h-32 text-gold opacity-80 -rotate-90" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      {/* Bottom-right gold-leaf corner */}
      <svg className="absolute bottom-0 right-0 w-32 h-32 text-gold opacity-80 rotate-180" viewBox="0 0 100 100">
        <path d="M0,0 Q50,0 50,50 L50,0 Z" fill="currentColor" />
        <path d="M0,0 Q0,50 50,50 L0,50 Z" fill="currentColor" />
      </svg>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {children}
      </div>
    </section>
  );
}
---
File 2: src/components/hero/alchemical-vessel.tsx
Purpose: Vessel + Liquid Animation
Implementation:
export function AlchemicalVessel() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Vessel SVG */}
      <svg className="w-full h-full" viewBox="0 0 200 200">
        {/* Glass vessel */}
        <path
          d="M70,20 L70,60 Q40,100 40,150 Q40,180 100,180 Q160,180 160,150 Q160,100 130,60 L130,20 Z"
          fill="none"
          stroke="#C9A769"
          strokeWidth="3"
          opacity="0.6"
        />
        {/* Liquid with animation */}
        <path
          d="M45,150 Q45,175 100,175 Q155,175 155,150"
          fill="none"
          stroke="#B8A9C9"
          strokeWidth="4"
          className="animate-liquid-sway"
        />
        {/* Bubbles */}
        <circle cx="80" cy="160" r="4" fill="#E8B4B8" className="animate-bubble-rise" />
        <circle cx="120" cy="155" r="3" fill="#F5D489" className="animate-bubble-rise" style={{ animationDelay: '0.5s' }} />
      </svg>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gold opacity-10 blur-3xl rounded-full animate-pulse" />
    </div>
  );
}
CSS Animations needed:
@keyframes liquid-sway {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}
@keyframes bubble-rise {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-40px); opacity: 0; }
}
---
File 3: src/components/hero/botanical-layer.tsx
Purpose: Parallax Botanical Elements
Implementation:
export function BotanicalLayer() {
  return (
    <>
      {/* Lavender - top-right */}
      <div className="absolute top-20 right-20 w-24 h-24 opacity-60 animate-float" style={{ animationDelay: '0s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-lavender">
          <path d="M50,90 Q50,50 80,30 Q60,50 50,30 Q40,50 20,30 Q50,50 50,90" fill="currentColor" />
        </svg>
      </div>
      {/* Rose - bottom-left */}
      <div className="absolute bottom-20 left-20 w-20 h-20 opacity-60 animate-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full text-rosehip">
          <circle cx="50" cy="50" r="30" fill="currentColor" />
          <circle cx="50" cy="50" r="15" fill="#FAF8F5" />
        </svg>
      </div>
      {/* Eucalyptus - top-left */}
      <div className="absolute top-40 left-10 w-16 h-32 opacity-60 animate-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 50 100" className="w-full h-full text-eucalyptus">
          <ellipse cx="25" cy="25" rx="15" ry="8" fill="currentColor" />
          <ellipse cx="25" cy="50" rx="15" ry="8" fill="currentColor" />
          <ellipse cx="25" cy="75" rx="15" ry="8" fill="currentColor" />
        </svg>
      </div>
    </>
  );
}
---
File 4: src/components/hero/hero-section.tsx
Purpose: Orchestrator Component
Implementation:
import { HeroFrame } from './hero-frame';
import { AlchemicalVessel } from './alchemical-vessel';
import { BotanicalLayer } from './botanical-layer';
export function HeroSection() {
  return (
    <HeroFrame>
      <BotanicalLayer />
      
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left column: Typography */}
        <div className="space-y-8">
          {/* Illuminated Initial "A" */}
          <div className="relative">
            <span className="text-8xl md:text-9xl font-display font-bold text-gold drop-shadow-lg">
              A
            </span>
            <span className="absolute -top-4 -left-4 text-6xl md:text-7xl font-display text-gold opacity-40">
              A
            </span>
          </div>
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-display font-semibold text-ink">
            The Art of Scent
          </h1>
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-accent text-gold">
            Where Botany Becomes Poetry
          </p>
          {/* Excerpt */}
          <div className="border-2 border-gold/30 rounded-lg p-6 bg-parchment/50">
            <p className="text-lg text-ink leading-relaxed">
              In the quietude of our atelier, where patience is measured not in hours but in weeks, 
              we coax forth the very soul of botanical essences. Each drop is a testament to 
              the alchemist's devotion...
            </p>
          </div>
          {/* Actions */}
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-gold text-ink font-display rounded-lg hover:bg-gold-dark transition-colors">
              Enter Atelier
            </button>
            <button className="px-8 py-3 border-2 border-gold text-ink font-display rounded-lg hover:bg-gold/10 transition-colors">
              Our Alchemy
            </button>
          </div>
          {/* Credentials */}
          <div className="flex gap-8 pt-8 border-t border-gold/20">
            <div className="text-center">
              <p className="text-3xl font-display text-gold">72h</p>
              <p className="text-sm text-ink-muted">Distillation</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">∞</p>
              <p className="text-sm text-ink-muted">Patience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-display text-gold">100%</p>
              <p className="text-sm text-ink-muted">Artisanal</p>
            </div>
          </div>
        </div>
        {/* Right column: Vessel */}
        <div className="relative">
          <AlchemicalVessel />
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2 L12,18 M12,18 L6,12 M12,18 L18,12" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>
          <span className="text-sm text-ink-muted font-accent">Continue Reading</span>
        </div>
      </div>
    </HeroFrame>
  );
}
---
File 5: src/components/layout/header.tsx
Purpose: Global Navigation
Implementation:
'use client';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useCartStore } from '@/stores/cart-store';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  return (
    <header className="sticky top-0 z-50 bg-parchment/95 backdrop-blur-sm border-b-2 border-gold/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Seal */}
          <div className="flex items-center gap-4">
            {/* Animated Seal */}
            <div className="relative w-16 h-16 animate-seal-rotate">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A769" strokeWidth="4" />
                <text x="50" y="55" textAnchor="middle" className="text-2xl font-display fill-ink">
                  A
                </text>
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-display font-semibold text-ink">Atelier Arôme</h1>
              <p className="text-sm text-ink-muted font-accent">Artisanal Aromatherapy</p>
            </div>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#compendium" className="text-ink hover:text-gold transition-colors font-display">
              Compendium
            </a>
            <a href="#alchemy" className="text-ink hover:text-gold transition-colors font-display">
              Alchemy
            </a>
            <a href="#atelier" className="text-ink hover:text-gold transition-colors font-display">
              The Atelier
            </a>
            <a href="#manuscript" className="text-ink hover:text-gold transition-colors font-display">
              Manuscript
            </a>
          </nav>
          {/* Tools */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            {/* Cart Button */}
            <button className="relative p-2 text-ink hover:text-gold transition-colors">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-ink text-xs font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            {/* Mobile Menu Toggle */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button className="p-2 text-ink hover:text-gold transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent className="bg-parchment border-gold shadow-xl">
                <nav className="flex flex-col gap-4 mt-8">
                  <a href="#compendium" className="text-ink hover:text-gold font-display text-lg">
                    Compendium
                  </a>
                  <a href="#alchemy" className="text-ink hover:text-gold font-display text-lg">
                    Alchemy
                  </a>
                  <a href="#atelier" className="text-ink hover:text-gold font-display text-lg">
                    The Atelier
                  </a>
                  <a href="#manuscript" className="text-ink hover:text-gold font-display text-lg">
                    Manuscript
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
---
File 6: src/stores/cart-store.ts
Purpose: Cart State Management
Implementation:
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
export interface CartItem {
  id: string;
  name: string;
  latinName: string;
  price: number;
  quantity: number;
  variant?: string;
  addedAt?: string;
}
export interface CartState {
  items: CartItem[];
  cartDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCartDrawer: () => void;
  getCartTotal: () => number;
}
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartDrawerOpen: false,
      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity, addedAt: new Date().toISOString() }],
          }));
        }
      },
      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },
      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },
      clearCart: () => {
        set({ items: [] });
      },
      toggleCartDrawer: () => {
        set((state) => ({ cartDrawerOpen: !state.cartDrawerOpen }));
      },
      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'atelier-arome-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
---
File 7: src/app/page.tsx (Overwrite)
Purpose: Clean Page Structure
Implementation:
import { Header } from '@/components/layout/header';
import { HeroSection } from '@/components/hero/hero-section';
export default function Page() {
  return (
    <main className="relative w-full min-h-screen bg-paper-texture text-ink-900 font-serif selection:bg-gold-200">
      <Header />
      <HeroSection />
      <section className="py-12 px-4 text-center">
        <p className="text-lg text-ink-muted">Compendium coming soon...</p>
      </section>
    </main>
  );
}
---
✅ VALIDATION CHECKLISTS
Build Validation
- [ ] pnpm type-check → Zero TypeScript errors
- [ ] pnpm run build → Exit code 0
- [ ] pnpm lint → Zero ESLint warnings
Visual Validation
- [ ] Header renders with seal animation (rotate 30s infinite)
- [ ] Hero section displays illuminated "A" initial
- [ ] Typography uses Cormorant Garamond / Crimson Pro
- [ ] Colors: ink (#2A2D26), gold (#C9A769), parchment (#FAF8F5) correct
- [ ] Gold-leaf border ornaments visible in corners
- [ ] Alchemical vessel with liquid animation renders
- [ ] Botanical elements (lavender, rose, eucalyptus) visible
- [ ] Scroll indicator with quill icon present
Functional Validation
- [ ] Mobile menu toggles (sheet opens/closes)
- [ ] Cart button displays badge count when items added
- [ ] Cart drawer opens/closes
- [ ] Navigation links functional
- [ ] Console shows zero errors
Accessibility Validation
- [ ] All interactive elements keyboard navigable
- [ ] ARIA labels present on buttons
- [ ] Reduced motion supported (no animations when prefers-reduced-motion: reduce)
- [ ] Focus states visible (3px outline + 4px offset)
---
🚀 EXECUTION SEQUENCE
1. Create directory structure (30s)
2. Build hero-frame.tsx (5 min)
3. Build alchemical-vessel.tsx (5 min)
4. Build botanical-layer.tsx (3 min)
5. Build hero-section.tsx (8 min)
6. Build header.tsx (10 min)
7. Build cart-store.ts (5 min)
8. Overwrite page.tsx (2 min)
9. Add CSS animations to globals.css (3 min)
10. Run build verification (2 min)
11. Run dev server verification (2 min)
Total Estimated Time: 45-60 minutes
---
🎯 FINAL ASSESSMENT
Plan Quality: ✅ EXCELLENT
Why This Will Succeed:
1. No debugging of broken code → Eliminates highest-risk activity
2. Atomic component architecture → Each file has single responsibility (~60-150 lines)
3. Progressive enhancement → Semantic shells first, then add complexity
4. Explicit Design Tokens → "Wax Seal Toast", "Parchment Overlay" prevent generic look
5. Clear validation checkpoints → Known success criteria at each step
Risk Mitigation:
- Low Risk: All components start as semantic HTML + Tailwind (no complex logic initially)
- Medium Risk: CSS animations may need fine-tuning (isolated in dedicated file)
- High Risk: None identified
Alignment with QA Feedback:
- ✅ "Construct and Conquer" strategy adopted
- ✅ Design Token Map defined (Wax Seal, Parchment Overlay)
- ✅ Atomic hero component breakdown (hero-frame, alchemical-vessel, botanical-layer)
---
READY TO PROCEED WITH IMPLEMENTATION ✅
