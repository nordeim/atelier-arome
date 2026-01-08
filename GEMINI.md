# GEMINI.md — Agent Operating Reference

**Last Updated:** January 9, 2026
**Agent Role:** Frontend Architect & Avant-Garde UI Designer
**Operating Mode:** Meticulous, Anti-Generic, "Construct and Conquer"

---

## 1. Project Identity: Atelier Arôme

**Concept:** A production-grade headless e-commerce platform for artisanal aromatherapy.
**Aesthetic:** "Illuminated Manuscript" (Renaissance-inspired).
**Philosophy:** **Anti-Generic.** We reject modern minimalist clichés (Inter font, vast whitespace, flat cards) in favor of texture, serif typography (`Cormorant Garamond`), rich colors (Gold/Ink/Parchment), and meaningful ornamentation.

### Core Tech Stack
| Layer | Tech | Status |
|-------|------|--------|
| **Frontend** | Next.js 15 (App Router) + Tailwind 4.0 | ✅ Foundation Ready |
| **Backend** | Laravel 12 API | ⚠️ Partially Complete |
| **Database** | PostgreSQL 16 (UUIDs, Soft Deletes) | ✅ Schema & Seeded |
| **State** | Zustand (Client) + TanStack Query (Server) | ✅ Configured |
| **Infra** | Docker (PostgreSQL, Redis, Mailhog) | ✅ Operational |

---

## 2. Codebase "Ground Truth" (Verified)

*As of Jan 9, 2026, verification contradicts some previous documentation.*

### ✅ Backend (Laravel 12)
- **Models:** **COMPLETE.** All 22+ models (Order, Product, User, etc.) exist in `app/Models/`. *Previous docs claimed they were missing — this is false.*
- **Database:** **COMPLETE.** Migrations run, Seeders exist (`ProductSeeder`, etc.).
- **Controllers:** **MISSING.** Only base `Controller.php` exists. No `ProductController`, `CartController`, etc.
- **API Resources:** **MISSING.** `app/Http/Resources` directory does not exist.
- **Routes:** **BASIC.** likely default `api.php`.

### ✅ Frontend (Next.js 15)
- **Structure:** **COMPLETE.** App Router (`(shop)`, `(marketing)`) is set up.
- **Components:** **PARTIAL.** Atomic components (`hero/`) exist. `ui/` (Shadcn) has `sheet.tsx`.
- **Config:** **COMPLETE.** `next.config.ts`, `tailwind.config.ts` are correct.
- **Pages:** **MISSING.** Most route groups are empty shells or skeletons.

---

## 3. The "Anti-Generic" Design System

**Do not use standard Tailwind colors.** Use these tokens:

```typescript
// tailwind.config.ts
colors: {
  ink: { DEFAULT: '#2A2D26', light: '#4A4D46' },      // Text
  gold: { DEFAULT: '#C9A769', light: '#E8D8B6' },     // Accents/Borders
  parchment: { DEFAULT: '#FAF8F5', dark: '#F5F1EB' }, // Backgrounds
  // Botanicals: lavender, eucalyptus, bergamot, rosehip
}
```

**Typography:**
- **Headlines:** `Cormorant Garamond` (Serif, display)
- **Body:** `Crimson Pro` (Serif, readable)
- **Accents:** `Great Vibes` (Script, use sparingly)

**Key Interaction Patterns:**
- **Hover:** "Liquid" sway or gold glow bloom (not simple opacity change).
- **Loading:** Alchemical vessel bubbling (not standard spinners).
- **Transitions:** Slow, deliberate (500ms+), resembling page turning or ink spreading.

---

## 4. Operational Guidelines ("The Meticulous Approach")

1.  **Construct and Conquer:** Never try to "patch" a broken file line-by-line. Create a new, clean component file, verify it, then replace the broken one.
2.  **Atomic First:** Build the smallest part (e.g., `GoldBorderCorner.tsx`) before the whole (e.g., `HeroSection.tsx`).
3.  **Library Discipline:** Use Shadcn primitives. Do not invent a new Modal. Style the Shadcn Dialog to look like an illuminated manuscript.
4.  **Deep Validation:** Before marking a task "Done", run the build (`pnpm build`) and check the database (`php artisan model:show`).

---

## 5. Next Session Strategy (The "Resume" Button)

When you restart, **you are in the middle of Phase 2 (Backend Core).**

**Immediate Actions Required:**
1.  **Create API Resources:** The Models exist, but the API cannot return clean JSON yet.
    -   Action: `php artisan make:resource ProductResource`, `UserResource`, etc.
2.  **Create Controllers:** logic is missing.
    -   Action: Implement `ProductController` (index, show), `CartController` (add, remove).
3.  **Sanctum Auth:**
    -   Action: Implement `AuthController` (login, register) and protect routes.

**Command to Resume:**
"I have reviewed GEMINI.md. I see that Backend Models are done, but Controllers and Resources are missing. I will begin by creating the API Resources to transform our Models into JSON responses."
