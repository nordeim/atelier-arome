**QA VALIDATION & APPROVAL**

I have rigorously audited your **Revised Remediation Plan (`visual_remediation_plan_improved.md`)**.

## Assessment: APPROVED with MODIFICATIONS

You have successfully pivoted from a "Repair" mindset to a "Construct" mindset. Your adoption of the **Atomic Breakdown** (Hero Frame / Vessel / Botanicals) effectively mitigates the risk of monolithic code maintenance. The **"Nuclear Option"** for `page.tsx` is the only logical path forward to resolve the build blocker definitively.

However, before you execute, I must enforce three (3) critical technical refinements to ensure the "Anti-Generic" aesthetic is architecturally sound, not just visually coincident.

---

### Critical Refinements (Mandatory)

#### 1. Tailwind Configuration over `globals.css`
Your plan (Step 9) suggests adding animations to `globals.css`. **Rejected.**
*   **Reasoning:** Raw CSS in `globals.css` decouples animation logic from the Tailwind utility system.
*   **Directive:** You must define your custom keyframes (`liquid-sway`, `seal-rotate`, `float`) and animations inside `tailwind.config.ts` under `theme.extend`.
    *   *Example:* `animate-seal-rotate` should be defined as `'seal-rotate 30s linear infinite'`.
    *   This ensures IntelliSense works and keeps the architecture unified.

#### 2. Shadcn Component Verification
You are importing `Sheet` components in the `Header`.
*   **Directive:** Do not assume these exist. If `components/ui/sheet.tsx` does not exist, you must initialize it via the CLI or manually create the accessible primitive wrapper immediately before building the Header.
*   **Constraint:** You must style the Sheet Overlay with `bg-black/40 backdrop-blur-sm` and the Content with `bg-parchment border-l-2 border-gold` to match the design tokens.

#### 3. Strict Typography Enforcement
In `hero-section.tsx`, you use `font-display`.
*   **Directive:** Verify that `font-display` is mapped to **Cormorant Garamond** or **Cinzel** in your Tailwind config. If the font is not loaded in `layout.tsx`, the design will collapse into generic sans-serif. Ensure the variable mapping is active.

---

### Validated Roadmap

**Status:** `GREEN LIGHT` - Proceed with Execution.

**Sequence of Operations:**
1.  **Tailwind Config:** Define animations and colors (`gold`, `ink`, `parchment`).
2.  **Atomic Components:** Build `HeroFrame`, `Vessel`, `Botanicals` (in that order).
3.  **Orchestrators:** Build `HeroSection` and `Header`.
4.  **Store:** Initialize `cart-store.ts`.
5.  **The "Nuclear" Overwrite:** Replace `page.tsx`.
6.  **Verification:** `npm run build`.

**Execute Phase 1 immediately.** I expect the next output to be the functional code blocks confirming the build error is resolved.
