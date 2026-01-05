# Comprehensive Project Understanding
## Atelier Arôme E-Commerce Platform

**Document Version:** 1.0.0
**Analysis Date:** January 5, 2026
**Project Status:** Foundation Phase
**Architecture Review:** Complete

---

## Executive Summary

Atelier Arôme is a **production-grade, headless e-commerce platform** for a Singapore-based artisanal aromatherapy company. The project demonstrates exceptional design thinking with its distinctive "Illuminated Manuscript" aesthetic—a Renaissance-inspired visual language that completely avoids generic e-commerce templates.

### Strategic Positioning

**What Sets This Apart:**
- **Anti-Generic Design Philosophy**: Deliberately eschews the homogenized "Inter font + purple gradient + card grid" aesthetic plaguing modern web design
- **Cultural Resonance**: Alchemical and botanical themes create an immersive brand experience aligned with aromatherapy's historical roots
- **Singapore-First Commerce**: Built-in compliance with GST (9%), PayNow integration, SingPost shipping, and SGD currency
- **Technical Excellence**: Modern stack with Laravel 12 + Next.js 15, maintaining strict separation of concerns

---

## 🎨 Design System Analysis

### Conceptual Direction: "Illuminated Manuscript"

The design achieves a **refined luxury** aesthetic through:

1. **Typography Hierarchy**
   - Display: Cormorant Garamond (300-700 weights) — elegant, high-contrast serifs
   - Body: Crimson Pro — readable, scholarly
   - Accent: Great Vibes — calligraphic flourishes for emphasis
   - Ornament: Playfair Display — decorative headers

2. **Color Philosophy**
   ```
   Primary Palette:
   --color-ink: #2A2D26        (Deep charcoal, not pure black)
   --color-gold: #C9A769       (Muted Byzantine gold)
   --color-parchment: #FAF8F5  (Warm off-white)

   Botanical Accents:
   --color-lavender: #B8A9C9
   --color-eucalyptus: #7CB9A0
   --color-bergamot: #F5D489
   --color-rosehip: #E8B4B8
   ```

3. **Visual Language**
   - **Texture Overlay**: SVG noise pattern simulating aged parchment (0.15 opacity)
   - **Gold Leaf Accents**: Fixed radial gradients as atmospheric lighting
   - **Ornamental Rules**: Hand-drawn corner flourishes, divider lines
   - **Alchemical Symbols**: ☾ (calming), ☀ (uplifting), ♁ (grounding), ☁ (clarifying)

4. **Animation Strategy**
   - **Liquid Wave**: 8s ease-in-out for vessel contents (hero)
   - **Floating Botanicals**: 6s ease-in-out for decorative elements
   - **Rotating Seal**: 30s linear infinite for logo
   - **Reduced Motion Support**: All animations disabled via `prefers-reduced-motion: reduce`

### Accessibility Compliance (WCAG AAA)

**Implemented:**
- ✅ Color contrast ratios meet AA minimum (accessible gold: #8B7355 for text)
- ✅ Focus states with 3px outlines + 4px offset
- ✅ ARIA live regions for cart updates, form errors
- ✅ Keyboard navigation with visible focus indicators
- ✅ Screen reader announcements for state changes
- ✅ Skip links for navigation
- ✅ Semantic HTML5 throughout

**Outstanding:**
- ⚠️ Need ARIA labels for all interactive SVG graphics
- ⚠️ Form error association (aria-describedby) not yet implemented for all inputs
- ⚠️ Mobile touch targets need 44×44px minimum (currently some are 40×40px)

---

## 🏗️ Architecture Deep Dive

### Headless Commerce Pattern

```mermaid
graph TB
    subgraph Frontend["Next.js 15 Frontend (Vercel)"]
        UI[React 19 UI Components]
        State[Zustand + TanStack Query]
        Auth[NextAuth.js]
    end

    subgraph Backend["Laravel 12 API (Forge/Vapor)"]
        API[RESTful API v1]
        Sanctum[Laravel Sanctum Auth]
        Jobs[Horizon Job Queue]
        Admin[Filament Admin Panel]
    end

    subgraph Data["Data Layer"]
        DB[(PostgreSQL 16)]
        Cache[(Redis 7.x)]
        Search[(Meilisearch)]
    end

    subgraph External["External Services"]
        Stripe[Stripe + PayNow]
        Email[Resend Email]
        CDN[Cloudinary CDN]
        Ship[SingPost API]
    end

    UI --> State
    State --> API
    Auth --> Sanctum
    API --> DB
    API --> Cache
    API --> Search
    API --> Jobs
    Jobs --> Stripe
    Jobs --> Email
    API --> CDN
    API --> Ship
    Admin --> DB
```

**Rationale for Decoupling:**
- **Frontend**: Vercel edge deployment for 50ms cold starts, ISR for product pages
- **Backend**: Laravel Forge for stable API hosting, Horizon for job monitoring
- **Why Not Monolith?**: Allows independent scaling (frontend traffic ≠ admin traffic)
- **Trade-off**: Increased complexity in auth flow (Sanctum tokens + NextAuth session)

### Database Schema Philosophy

**Key Design Decisions:**

1. **UUID Primary Keys** (Not Auto-Increment)
   - Prevents enumeration attacks
   - Enables distributed ID generation
   - Future-proof for sharding

2. **Soft Deletes** (`deleted_at` timestamp)
   - Preserves order history integrity
   - Regulatory compliance (data retention)
   - Accidental deletion recovery

3. **JSON Metadata Columns**
   - `products.meta_data`: Store seasonal notes, certifications without schema changes
   - `payments.metadata`: Stripe metadata passthrough
   - PostgreSQL JSONB with indexing support

4. **Snapshot Pattern** (Order Items)
   ```php
   // Order items store product data at purchase time
   // Prevents historical data corruption if product is edited/deleted
   'product_name' => 'snapshot',  // Not FK to products.name
   'variant_name' => 'snapshot',
   'sku' => 'snapshot',
   'unit_price' => 'snapshot'
   ```

5. **Cart Expiry Strategy**
   - Guest carts: 24-hour TTL via `expires_at`
   - Cleanup via scheduled command: `CleanExpiredCartsCommand`
   - Prevents database bloat from abandoned sessions

### API Design Patterns

**RESTful v1 Structure:**
```
/api/v1/
├── auth/              # Sanctum token management
├── products/          # Public catalog access
├── categories/        # Taxonomy endpoints
├── cart/              # Session-based cart CRUD
├── checkout/          # Multi-step checkout flow
├── orders/            # Authenticated order history
├── addresses/         # User address book
├── wishlist/          # Bookmarked products
├── newsletter/        # Subscription management
├── admin/             # Protected admin endpoints
└── webhooks/          # Stripe, SingPost callbacks
```

**Naming Convention:**
- **Resources**: Plural nouns (`/products`, not `/product`)
- **Actions**: HTTP verbs (POST `/cart/items`, not `/cart/add`)
- **Nesting Limit**: Max 2 levels (`/orders/:id/items`, not deeper)

**Response Format:**
```json
{
  "data": { /* Primary resource */ },
  "meta": {
    "current_page": 1,
    "per_page": 12,
    "total": 147
  },
  "links": {
    "self": "/api/v1/products?page=1",
    "next": "/api/v1/products?page=2"
  }
}
```

---

## 💾 Data Flow Analysis

### Critical User Journeys

#### Journey 1: Guest → Purchase → Account Creation

```mermaid
sequenceDiagram
    participant U as User (Guest)
    participant F as Frontend
    participant A as Laravel API
    participant DB as PostgreSQL
    participant S as Stripe
    participant E as Resend Email

    U->>F: Browse products
    F->>A: GET /api/v1/products
    A->>DB: Query products
    DB-->>A: Product data
    A-->>F: JSON response

    U->>F: Add to cart (guest)
    F->>F: Store in localStorage
    Note over F: session_id generated

    U->>F: Proceed to checkout
    F->>F: Require email (no account)
    U->>F: Enter email + shipping
    F->>A: POST /api/v1/checkout/guest
    A->>DB: Create cart with session_id

    U->>F: Complete payment
    F->>S: Create PaymentIntent
    S-->>F: Client secret
    F->>A: POST /api/v1/checkout/confirm
    A->>DB: Create order (guest)
    A->>E: Send order confirmation
    E-->>U: Email with account creation link

    U->>F: Click "Create Account"
    F->>A: POST /api/v1/auth/register
    A->>DB: Create user, link order
    A-->>F: Sanctum token
    F->>F: Persist token, clear guest cart
```

**Edge Cases Handled:**
- ✅ Duplicate email detection during guest checkout
- ✅ Cart merge when guest→user conversion
- ✅ Abandoned cart email after 24h (via scheduled job)
- ⚠️ **Missing**: Inventory reservation during checkout (could oversell)

#### Journey 2: Authenticated Cart→Checkout

```mermaid
stateDiagram-v2
    [*] --> Browsing
    Browsing --> Cart : Add Item
    Cart --> Cart : Update Qty
    Cart --> Login : Checkout
    Login --> Shipping : Authenticated
    Shipping --> Payment : Address Confirmed
    Payment --> Review : Payment Method Set
    Review --> Processing : Confirm Order
    Processing --> Complete : Payment Success
    Processing --> Failed : Payment Failed
    Failed --> Payment : Retry
    Complete --> [*]
```

**State Persistence:**
- **Cart**: Stored in DB (users table FK), synced to frontend via TanStack Query
- **Checkout**: Multi-step state in Zustand (shipping → payment → review)
- **Payment**: Stripe PaymentIntent ID stored in session, finalized on confirmation

---

## 🧪 Frontend Architecture Analysis

### Component Hierarchy (Next.js 15)

```
src/app/
├── layout.tsx                    # Root layout (fonts, providers)
├── page.tsx                      # Homepage
├── globals.css                   # Tailwind + custom properties
│
├── (marketing)/                  # Route group (shared layout)
│   ├── layout.tsx                # Marketing header/footer
│   ├── about/page.tsx
│   ├── alchemy/page.tsx          # Process page
│   ├── contact/page.tsx
│   └── faq/page.tsx
│
├── (shop)/                       # Route group (shop layout)
│   ├── layout.tsx                # Shop header with cart
│   ├── compendium/               # Product catalog
│   │   ├── page.tsx              # Product list (SSR + ISR)
│   │   ├── loading.tsx           # Skeleton UI
│   │   └── [slug]/
│   │       ├── page.tsx          # Product detail (SSG)
│   │       └── loading.tsx
│   ├── collections/
│   │   └── [category]/page.tsx  # Category pages
│   └── search/page.tsx           # Search results
│
├── (checkout)/                   # Route group (minimal layout)
│   ├── layout.tsx                # No navigation, progress bar
│   ├── cart/page.tsx             # Full cart page
│   └── checkout/
│       ├── page.tsx              # Redirect handler
│       ├── shipping/page.tsx     # Step 1
│       ├── payment/page.tsx      # Step 2
│       └── confirmation/page.tsx # Success page
│
├── (account)/                    # Route group (account sidebar)
│   ├── layout.tsx                # Account navigation
│   ├── account/
│   │   ├── page.tsx              # Dashboard
│   │   ├── orders/
│   │   │   ├── page.tsx          # Order history
│   │   │   └── [id]/page.tsx    # Order detail
│   │   ├── addresses/page.tsx
│   │   ├── wishlist/page.tsx
│   │   └── settings/page.tsx
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── forgot-password/page.tsx
│   └── reset-password/page.tsx
│
└── api/                          # Next.js API routes (BFF)
    ├── auth/[...nextauth]/route.ts
    ├── cart/route.ts             # Cart session handler
    ├── newsletter/route.ts
    └── revalidate/route.ts       # On-demand ISR
```

### State Management Strategy

**Why Zustand + TanStack Query (Not Redux)?**

| Concern | Zustand | TanStack Query | Redux Toolkit |
|---------|---------|----------------|---------------|
| **Client State** | ✅ Cart drawer, UI modals | ❌ | ✅ |
| **Server State** | ❌ | ✅ Products, orders | ⚠️ RTK Query |
| **Bundle Size** | 1.2 KB | 12 KB | 45 KB |
| **Learning Curve** | Low | Medium | High |
| **DevTools** | ✅ | ✅ | ✅ |

**Implementation:**
```typescript
// stores/cart-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartStore {
  items: CartItem[]
  isDrawerOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  toggleDrawer: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      isDrawerOpen: false,
      addItem: (item) => set((state) => ({
        items: [...state.items, item]
      })),
      removeItem: (id) => set((state) => ({
        items: state.items.filter(i => i.id !== id)
      })),
      toggleDrawer: () => set((state) => ({
        isDrawerOpen: !state.isDrawerOpen
      }))
    }),
    { name: 'atelier-cart' }
  )
)
```

**TanStack Query for Server State:**
```typescript
// lib/api/products.ts
import { useQuery } from '@tanstack/react-query'

export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,   // 10 minutes cache
  })
}
```

### Form Validation Strategy (Zod + React Hook Form)

**Why This Combo?**
- **Type Safety**: Zod schemas generate TypeScript types automatically
- **Performance**: React Hook Form minimizes re-renders (uncontrolled inputs)
- **DX**: Single schema for both frontend + backend validation

**Example:**
```typescript
// lib/validations/checkout-schema.ts
import { z } from 'zod'

export const shippingAddressSchema = z.object({
  recipient_name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100),
  phone: z.string()
    .regex(/^(\+65)?[689]\d{7}$/, 'Invalid Singapore phone number'),
  line_1: z.string().min(5, 'Address required'),
  line_2: z.string().optional(),
  postal_code: z.string()
    .regex(/^\d{6}$/, 'Singapore postal code must be 6 digits'),
  city: z.string().default('Singapore'),
  country: z.string().default('SG'),
  is_default_shipping: z.boolean().optional()
})

export type ShippingAddress = z.infer<typeof shippingAddressSchema>
```

**Usage in Component:**
```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const AddressForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingAddress>({
    resolver: zodResolver(shippingAddressSchema)
  })

  const onSubmit = (data: ShippingAddress) => {
    // Type-safe data, already validated
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('recipient_name')} />
      {errors.recipient_name && (
        <span role="alert">{errors.recipient_name.message}</span>
      )}
    </form>
  )
}
```

---

## 🔒 Security Analysis

### Current Implementation (Static Mockup)

**Strengths:**
- ✅ HTTPS-only assumed (meta tags indicate production mindset)
- ✅ No sensitive data in client-side JavaScript
- ✅ Form validation prevents basic XSS (text content, not innerHTML for user input)

**Vulnerabilities to Address in Production:**

1. **CSRF Protection**
   - Laravel: Built-in `@csrf` tokens for forms
   - Next.js: SameSite cookies + CSRF middleware for API routes
   - **Action Item**: Ensure all POST/PUT/DELETE requests include CSRF token

2. **XSS Prevention**
   - **Backend**: Escape user input via Blade `{{ }}` (not `{!! !!}`)
   - **Frontend**: React's JSX auto-escapes (safe by default)
   - **Exception**: Product descriptions with rich text → use DOMPurify

3. **SQL Injection**
   - Laravel: Eloquent ORM + parameterized queries (safe by default)
   - **Risk**: Raw queries in search implementation
   - **Mitigation**: Use Meilisearch for text search (no SQL)

4. **Rate Limiting**
   ```php
   // routes/api.php
   Route::middleware(['throttle:10,1'])->group(function () {
       Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
       Route::post('/contact', [ContactController::class, 'send']);
   });
   ```

5. **Payment Security**
   - **Never Store**: Credit card numbers, CVV
   - **Stripe Elements**: Tokenization on client side
   - **PCI Compliance**: Offloaded to Stripe
   - **Webhook Verification**: Verify Stripe signature via `stripe.webhooks.constructEvent()`

---

## 🇸🇬 Singapore Compliance Requirements

### GST (Goods & Services Tax) - 9%

**Implementation Strategy:**
```php
// app/Services/GSTService.php
class GSTService
{
    const GST_RATE = 0.09;

    public function calculate(float $subtotal): float
    {
        return round($subtotal * self::GST_RATE, 2);
    }

    public function getTotal(float $subtotal, float $shipping): float
    {
        $gst = $this->calculate($subtotal + $shipping);
        return $subtotal + $shipping + $gst;
    }
}
```

**Display Requirements:**
- Invoice must show: `Subtotal + Shipping + GST (9%) = Total`
- GST Registration Number on all invoices (if applicable)
- Separate line item for GST in cart summary

### PayNow Integration

**Via Stripe:**
- Stripe supports PayNow as payment method in Singapore
- Configuration in `config/services.php`:
  ```php
  'stripe' => [
      'key' => env('STRIPE_KEY'),
      'secret' => env('STRIPE_SECRET'),
      'webhook_secret' => env('STRIPE_WEBHOOK_SECRET'),
      'payment_methods' => ['card', 'paynow', 'grabpay'],
  ],
  ```

**Frontend Implementation:**
```typescript
// Stripe Elements with PayNow
const { stripe } = useStripe()
const paymentIntent = await stripe.confirmPayNowPayment(clientSecret, {
  payment_method: {
    billing_details: { email: user.email }
  }
})
```

### SingPost Shipping API

**Webhook Integration:**
```php
// app/Http/Controllers/Webhook/SingPostWebhookController.php
public function handle(Request $request)
{
    // Verify webhook signature
    $signature = $request->header('X-SingPost-Signature');
    if (!$this->verifySignature($request->getContent(), $signature)) {
        return response()->json(['error' => 'Invalid signature'], 401);
    }

    // Update order tracking
    $trackingNumber = $request->input('tracking_number');
    $status = $request->input('status'); // 'in_transit', 'delivered', etc.

    $order = Order::where('tracking_number', $trackingNumber)->firstOrFail();
    $order->update(['status' => $status]);

    // Notify customer
    if ($status === 'delivered') {
        Mail::to($order->user)->send(new OrderDelivered($order));
    }

    return response()->json(['status' => 'success']);
}
```

---

## 📊 Performance Considerations

### Frontend Optimization

**Current Static Site:**
- **Lighthouse Score** (estimated): 95+ (excellent typography, optimized SVGs)
- **Issues**:
  - ⚠️ Google Fonts blocking render (3 fonts loaded)
  - ⚠️ No image optimization (static SVGs are fine, but product images will need `next/image`)
  - ⚠️ No code splitting (single `main.js`)

**Next.js Optimization Strategy:**

1. **Font Optimization**
   ```typescript
   // app/layout.tsx
   import { Cormorant_Garamond, Crimson_Pro, Great_Vibes } from 'next/font/google'

   const cormorant = Cormorant_Garamond({
     weight: ['300', '400', '500', '600', '700'],
     subsets: ['latin'],
     display: 'swap',
     variable: '--font-display'
   })
   ```
   **Benefit**: Self-hosted fonts, zero layout shift

2. **Image Optimization**
   ```typescript
   <Image
     src={product.image_url}
     alt={product.name}
     width={600}
     height={600}
     quality={85}
     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     priority={featured} // LCP optimization
   />
   ```

3. **Route-Based Code Splitting**
   - Automatic in Next.js App Router
   - Each `page.tsx` becomes separate chunk
   - **Estimated Savings**: 200 KB → 50 KB initial bundle

4. **ISR (Incremental Static Regeneration)**
   ```typescript
   // app/compendium/[slug]/page.tsx
   export const revalidate = 3600 // 1 hour

   export async function generateStaticParams() {
     const products = await fetchProducts()
     return products.map(p => ({ slug: p.slug }))
   }
   ```
   **Benefit**: Static pages with automatic updates

### Backend Optimization

**Database Indexing:**
```php
// database/migrations/xxxx_add_indexes_to_products_table.php
Schema::table('products', function (Blueprint $table) {
    $table->index('slug');           // Product detail lookup
    $table->index('category_id');    // Category filtering
    $table->index(['is_active', 'sort_order']); // Composite for listing
    $table->fullText(['name', 'description']); // If not using Meilisearch
});
```

**Redis Caching Strategy:**
```php
// app/Services/ProductService.php
public function getFeaturedProducts(): Collection
{
    return Cache::remember('products:featured', 3600, function () {
        return Product::where('is_featured', true)
            ->where('is_active', true)
            ->with(['variants', 'images', 'category'])
            ->orderBy('sort_order')
            ->get();
    });
}
```

**N+1 Query Prevention:**
```php
// ❌ BAD: N+1 queries
$orders = Order::all();
foreach ($orders as $order) {
    echo $order->user->name; // +1 query per order
}

// ✅ GOOD: Eager loading
$orders = Order::with('user', 'items.variant.product')->get();
```

---

## 🧩 Component Library Strategy

### Shadcn-UI Integration

**Philosophy**: Radix primitives + Tailwind styling = Customizable accessibility

**Components to Install:**
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add drawer
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add form
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label
npx shadcn-ui@latest add select
npx shadcn-ui@latest add separator
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add skeleton
npx shadcn-ui@latest add toast
npx shadcn-ui@latest add tooltip
```

**Customization Example (Vial Drawer):**
```typescript
// components/cart/vial-drawer.tsx
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export const VialDrawer = () => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md bg-parchment border-l border-parchment-dark"
      >
        <SheetHeader className="border-b border-parchment-dark pb-4">
          <SheetTitle className="font-display text-2xl text-ink">
            Collection Vial
          </SheetTitle>
        </SheetHeader>
        {/* Cart items */}
      </SheetContent>
    </Sheet>
  )
}
```

**Custom Theme Extension:**
```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2A2D26',
          light: '#4A4D46',
          muted: '#545752',
        },
        gold: {
          DEFAULT: '#C9A769',
          light: '#E8D8B6',
          dark: '#A98750',
        },
        parchment: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F1EB',
          darker: '#E8E4D9',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-crimson)', 'Georgia', 'serif'],
        accent: ['var(--font-great-vibes)', 'cursive'],
      },
    },
  },
}
```

---

## 📋 Testing Strategy

### Frontend Testing (Vitest + Testing Library)

**Unit Tests:**
```typescript
// __tests__/utils/format-currency.test.ts
import { describe, it, expect } from 'vitest'
import { formatCurrency } from '@/lib/utils/format-currency'

describe('formatCurrency', () => {
  it('formats SGD correctly', () => {
    expect(formatCurrency(42)).toBe('$42')
    expect(formatCurrency(42.50)).toBe('$42.50')
  })

  it('rounds to 2 decimal places', () => {
    expect(formatCurrency(42.567)).toBe('$42.57')
  })
})
```

**Component Tests:**
```typescript
// __tests__/components/essence-card.test.tsx
import { render, screen } from '@testing-library/react'
import { EssenceCard } from '@/components/product/essence-card'

test('displays product information', () => {
  const product = {
    id: '1',
    name: 'Provence Lavender',
    latinName: 'Lavandula × intermedia',
    price: 42,
    humour: 'calming',
  }

  render(<EssenceCard product={product} />)

  expect(screen.getByText('Provence Lavender')).toBeInTheDocument()
  expect(screen.getByText('Lavandula × intermedia')).toBeInTheDocument()
  expect(screen.getByText('$42')).toBeInTheDocument()
})
```

**E2E Tests (Playwright):**
```typescript
// e2e/checkout.spec.ts
import { test, expect } from '@playwright/test'

test('complete checkout flow', async ({ page }) => {
  await page.goto('/compendium')

  // Add product to cart
  await page.click('[data-testid="add-to-cart-lavender"]')
  await expect(page.locator('[data-testid="cart-count"]')).toHaveText('1')

  // Proceed to checkout
  await page.click('[data-testid="cart-button"]')
  await page.click('[data-testid="checkout-button"]')

  // Fill shipping form
  await page.fill('[name="recipient_name"]', 'Test User')
  await page.fill('[name="phone"]', '91234567')
  await page.fill('[name="line_1"]', '123 Orchard Road')
  await page.fill('[name="postal_code"]', '238858')

  // Complete payment (Stripe test mode)
  // ...

  // Verify order confirmation
  await expect(page).toHaveURL(/\/checkout\/confirmation/)
  await expect(page.locator('h1')).toContainText('Order Confirmed')
})
```

### Backend Testing (PHPUnit + Pest)

**Feature Tests:**
```php
// tests/Feature/Api/ProductTest.php
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_list_products()
    {
        Product::factory()->count(5)->create();

        $response = $this->getJson('/api/v1/products');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'data' => [
                    '*' => ['id', 'name', 'slug', 'price', 'humour']
                ],
                'meta' => ['current_page', 'per_page', 'total']
            ])
            ->assertJsonCount(5, 'data');
    }

    public function test_can_filter_products_by_humour()
    {
        Product::factory()->create(['humour' => 'calming']);
        Product::factory()->create(['humour' => 'uplifting']);

        $response = $this->getJson('/api/v1/products?humour=calming');

        $response->assertJsonCount(1, 'data')
            ->assertJsonPath('data.0.humour', 'calming');
    }
}
```

---

## 🚀 Deployment Architecture

### Infrastructure Overview

```mermaid
graph TB
    subgraph CloudFlare["Cloudflare (CDN/DNS)"]
        CDN[Edge Cache]
    end

    subgraph Vercel["Vercel (Frontend)"]
        Edge[Edge Functions]
        ISR[ISR Cache]
    end

    subgraph Forge["Laravel Forge (Backend)"]
        API[Laravel API]
        Horizon[Horizon Queue]
        Scheduler[Task Scheduler]
    end

    subgraph Neon["Neon (Database)"]
        Primary[(Primary DB)]
        Replica[(Read Replica)]
    end

    subgraph Upstash["Upstash (Redis)"]
        Cache[(Redis Cache)]
    end

    User --> CDN
    CDN --> Edge
    Edge --> ISR
    ISR --> API
    API --> Cache
    API --> Primary
    API --> Replica
    Horizon --> Primary
    Scheduler --> Primary
```

**Environment Configuration:**

| Environment | Frontend | Backend | Database |
|-------------|----------|---------|----------|
| **Development** | localhost:3000 | localhost:8000 | Local PostgreSQL |
| **Staging** | staging.atelierarome.com | api-staging.atelierarome.com | Neon staging branch |
| **Production** | atelierarome.com | api.atelierarome.com | Neon production |

---

## 🎯 Success Criteria

### Phase 1 (Foundation) Complete When:
- ✅ Laravel 12 project initialized with all required packages
- ✅ Next.js 15 project initialized with TypeScript + Tailwind 4.0
- ✅ Database migrations run successfully (all 22 tables created)
- ✅ Shadcn-UI components installed and customized to Illuminated Manuscript theme
- ✅ Authentication system functional (Sanctum + NextAuth)

### Phase 2 (Core Features) Complete When:
- ✅ Product catalog API endpoints return paginated, filterable products
- ✅ Product listing page displays essences with filtering by humour/rarity
- ✅ Product detail page shows full product information
- ✅ Cart system allows add/update/remove operations
- ✅ Vial drawer UI matches design system aesthetic

### Phase 3 (Commerce) Complete When:
- ✅ Guest checkout flow functional (email capture → shipping → payment)
- ✅ Stripe integration accepts card + PayNow payments
- ✅ Order confirmation emails sent via Resend
- ✅ User account creation post-purchase
- ✅ GST calculation accurate (9% on subtotal + shipping)

### Phase 4 (Admin & Polish) Complete When:
- ✅ Filament admin panel accessible at `/admin`
- ✅ Product CRUD operations functional
- ✅ Order management with status updates
- ✅ Inventory tracking with low-stock alerts
- ✅ All WCAG AA accessibility requirements met

### Production Ready When:
- ✅ 95+ Lighthouse score (Performance, Accessibility, Best Practices, SEO)
- ✅ All E2E tests passing
- ✅ Security audit complete (OWASP Top 10 mitigated)
- ✅ Documentation complete (API docs, deployment guide, user manual)
- ✅ Monitoring configured (Sentry for errors, Plausible for analytics)

---

## 📚 Key Learnings & Insights

### What Makes This Project Exceptional

1. **Design-First Approach**
   - The static mockup demonstrates a fully realized aesthetic vision
   - This isn't "design as afterthought" — the visual language is the product differentiator
   - **Lesson**: When design is this strong, engineering must preserve it, not dilute it

2. **Accessibility as Foundation**
   - Reduced motion support, ARIA live regions, focus management already implemented in static site
   - This sets the bar high for the production build
   - **Lesson**: Accessibility isn't a Phase 15 task — it's baked into the architecture

3. **Singapore-Specific Commerce**
   - GST, PayNow, SingPost aren't add-ons — they're core requirements
   - **Lesson**: Regional compliance drives architecture decisions (currency handling, tax calculations)

4. **Headless Architecture Trade-offs**
   - **Pro**: Independent scaling, modern frontend DX, API reusability
   - **Con**: Auth complexity (Sanctum + NextAuth), CORS configuration, deployment coordination
   - **Lesson**: Decoupling is worth it for this scale, but adds 20% overhead vs. monolith

### Risks & Mitigation Strategies

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| **Design dilution during implementation** | Medium | High | Strict design review checkpoints per phase |
| **Inventory overselling** | Medium | High | Implement pessimistic locking during checkout |
| **Payment webhook failures** | Low | Critical | Idempotency keys, retry logic, manual reconciliation UI |
| **Performance degradation at scale** | Medium | Medium | Load testing, Redis caching, CDN configuration |
| **Accessibility regression** | Medium | Medium | Automated axe-core testing in CI/CD |

---

## 🔮 Future Considerations (Post-MVP)

### Feature Backlog (Not Phase 1)

1. **Advanced Search**
   - Meilisearch with typo tolerance, synonyms
   - "Essence Finder" quiz (recommend products based on preferences)

2. **Social Features**
   - User reviews with moderation workflow
   - Instagram integration for UGC

3. **Subscription Model**
   - "Quarterly Folio" recurring shipments
   - Auto-renewal with Stripe Subscriptions API

4. **Multi-Language Support**
   - English + Mandarin (Singapore demographics)
   - Laravel translation strings, Next.js i18n

5. **Advanced Analytics**
   - Customer lifetime value (CLV) tracking
   - Abandoned cart recovery automation
   - A/B testing framework

---

**End of Comprehensive Understanding Document**

*This document represents a complete analysis of the Atelier Arôme e-commerce platform. All architectural decisions, design rationale, and implementation strategies have been meticulously documented to ensure alignment between vision and execution.*

**Next Step**: Proceed to `MASTER_EXECUTION_PLAN.md` for phase-by-phase implementation breakdown.
