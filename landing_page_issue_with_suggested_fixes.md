Awesome job on your meticulous analysis, planning and execution! Please keep up the good work in your rigorous and meticulous approach to planning and execution! Now, please think deeper and think harder to deeply explore thoroughly and systematically to examine the current dynamic landing page @landing_page.html and compare it with the reference static HTML mockup represented by the 3 component files: @index.html , @main.js and @styles.css . The issue is that the dynamic landing page is still looking "messed up" in the browser. I need you to critically compare the dynamic HTML with the static HTML mockup to find out the root cause. You can review the actual frontend code files to validate your findings and assumptions to finalize your analysis and recommendations. Below is QA's analysis report.

**Landing page appears "messed up" - Analysis**

I have performed a pixel-level comparison between the dynamic `landing_page.html`, the static `index.html` (Reference), and the codebase.

## 🚨 Critical Diagnosis: Why the Page Looks "Messed Up"

The dynamic page is not merely "unpolished"; it is structurally incomplete and architecturally disconnected from the design system's core "Illuminated" aesthetic.

### 1. The Missing "Texture" (The Paper Feel)
*   **Static Mockup:** Uses a `<div class="texture-overlay">` with a noise filter SVG/image to simulate the physical grain of parchment.
*   **Dynamic Page:** Renders a flat hex color `bg-parchment` (#FAF8F5).
*   **Impact:** The page looks like a flat digital wireframe rather than an ancient manuscript. The "Anti-Generic" aesthetic relies heavily on this texture to break the digital sterility.
*   **Missing Code:** `src/app/layout.tsx` is missing the texture overlay div and the corresponding CSS in `globals.css`.

### 2. Typography Disconnect (The Font Failure)
*   **Root Cause:** There is a breakage between Next.js Font Optimization and Tailwind Configuration.
*   **Evidence:**
    *   `src/app/layout.tsx` defines the variable `--font-display`.
    *   `tailwind.config.ts` defines the font family as the literal string `['Cormorant Garamond', ...]`.
    *   **The Conflict:** Next.js `next/font` generates a hashed font family name (e.g., `__Cormorant_Garamond_4e3f2a`). It does *not* globally name the font "Cormorant Garamond".
*   **Result:** Tailwind classes like `font-display` are trying to apply a font family name ("Cormorant Garamond") that does not exist in the browser context. The browser falls back to `Georgia` or generic `serif`. The typography looks "system default" rather than bespoke.

### 3. Header Simplification (Loss of Hierarchy)
*   **Static Mockup:** The Navigation links use a specific visual hierarchy:
    *   Top: Roman Numeral (e.g., "— I —")
    *   Bottom: Label (e.g., "Compendium")
*   **Dynamic Code (`header.tsx`):** Implements standard text links: `<Link>Compendium</Link>`.
*   **Impact:** The "Renaissance" navigation style is completely lost, reverting to a standard SaaS header look.

### 4. Missing Atmospheric Elements
The `hero-frame.tsx` component imported the border corners, but **missed** the internal watermarks and subtle layering that give the static mockup its depth:
*   **Missing:** `hero__watermark` (The faint geometric pattern behind the text).
*   **Missing:** The `hero__initial-flourish` circle around the illuminated "A".

---

## 🛠️ Remediation Plan: The "Polishing Phase"

We will now execute a targeted remediation to align the Dynamic Frontend with the Static Vision.

### 1. Fix Typography Binding
We must update `tailwind.config.ts` to reference the CSS variables injected by Next.js, ensuring the correct hashed fonts are used.

### 2. Restore Textures
We will add the noise texture overlay to `layout.tsx` and define the noise pattern in `globals.css` (using a base64 or CSS-generated noise filter to avoid asset dependency issues).

### 3. Elevate the Header
We will rewrite `src/components/layout/header.tsx` to match the split-line "Roman Numeral" design of the static mockup.

### 4. Deepen the Hero
We will update `src/components/hero/hero-frame.tsx` to include the missing watermark SVG.
