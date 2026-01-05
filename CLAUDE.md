# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview

**Atelier Arôme** is a production-grade headless e-commerce platform for a Singapore-based artisanal aromatherapy company featuring a distinctive "Illuminated Manuscript" Renaissance-inspired aesthetic.

### Architecture Pattern

```
┌─────────────────────────────────────────────────────┐
│              HEADLESS COMMERCE                      │
├─────────────────────────────────────────────────────┤
│                                                      │
│  ┌──────────────┐          ┌──────────────────┐    │
│  │  Next.js 15  │◄──JSON──►│  Laravel 12 API  │    │
│  │  (Frontend)  │          │  (Backend)       │    │
│  └──────────────┘          └──────────────────┘    │
│         │                           │               │
│         │                           ▼               │
│         │                  ┌──────────────────┐    │
│         │                  │  PostgreSQL 16   │    │
│         │                  │  Redis 7.x       │    │
│         │                  │  Meilisearch     │    │
│         │                  └──────────────────┘    │
│         ▼                                           │
│  ┌──────────────┐                                  │
│  │  Stripe API  │                                  │
│  │  PayNow      │                                  │
│  └──────────────┘                                  │
└─────────────────────────────────────────────────────┘
```

### Technology Stack

**Backend (Laravel 12 API):**
- PHP 8.3+ with Laravel 12.x
- PostgreSQL 16 (primary database)
- Redis 7.x (cache, session, queue)
- Laravel Sanctum 4.x (API authentication)
- Filament 3.x (admin panel)
- Laravel Horizon 5.x (queue management)
- Meilisearch 1.x (full-text search)

**Frontend (Next.js 15):**
- Next.js 15.x with App Router
- React 19.x + TypeScript 5.x
- Tailwind CSS 4.0 (custom "Illuminated Manuscript" theme)
- Shadcn-UI + Radix primitives
- Zustand (client state) + TanStack Query (server state)
- React Hook Form + Zod (forms & validation)
- Framer Motion 11.x (animations)

---

## Repository Structure

This is a **monorepo** containing two separate projects:

```
atelier-arome/
├── atelier-arome-api/      # Laravel 12 backend API
├── atelier-arome-web/      # Next.js 15 frontend
├── docs/                    # Project documentation
│   ├── Comprehensive_Project_Understanding.md
│   └── architecture.md
├── MASTER_EXECUTION_PLAN.md # Phase-by-phase implementation plan
├── Project_Architecture_Document.md
├── index.html              # Static mockup reference
├── styles.css              # Design system reference
└── main.js                 # JavaScript reference
```

**IMPORTANT:** The `atelier-arome-api/` and `atelier-arome-web/` directories will be created during Phase 1. Currently, this repository contains planning documents and static mockup files.

---

## Development Workflow

### Backend (Laravel API)

**Prerequisites:**
- PHP 8.3+
- Composer 2.x
- PostgreSQL 16
- Redis 7.x
- Node.js 20+ (for asset compilation)

**Setup:**
```bash
cd atelier-arome-api

# Install dependencies
composer install
npm install

# Environment setup
cp .env.example .env
php artisan key:generate

# Database setup
createdb atelier_arome_dev
php artisan migrate
php artisan db:seed

# Start development server
php artisan serve
```

**Common Commands:**
```bash
# Run all tests
php artisan test

# Run specific test suite
php artisan test --testsuite=Feature
php artisan test --testsuite=Unit

# Run single test file
php artisan test tests/Feature/Api/ProductTest.php

# Generate coverage report
php artisan test --coverage

# Code quality
./vendor/bin/phpstan analyse
./vendor/bin/pint  # Laravel code style fixer

# Queue management
php artisan horizon              # Start queue worker with dashboard
php artisan queue:work           # Process queue jobs
php artisan queue:failed         # List failed jobs

# Database operations
php artisan migrate:fresh --seed # Reset database with seeders
php artisan db:seed --class=ProductSeeder

# Cache management
php artisan cache:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Search index
php artisan scout:import "App\Models\Product"
```

### Frontend (Next.js)

**Prerequisites:**
- Node.js 20+
- pnpm 8+ (preferred) or npm 10+

**Setup:**
```bash
cd atelier-arome-web

# Install dependencies
pnpm install

# Environment setup
cp .env.local.example .env.local

# Start development server
pnpm dev
```

**Common Commands:**
```bash
# Development
pnpm dev                 # Start dev server (localhost:3000)
pnpm build               # Production build
pnpm start               # Start production server

# Code quality
pnpm lint                # ESLint
pnpm type-check          # TypeScript type checking
pnpm format              # Prettier formatting

# Testing
pnpm test                # Run unit tests (Vitest)
pnpm test:watch          # Watch mode
pnpm test:ui             # Vitest UI
pnpm test:e2e            # Run E2E tests (Playwright)
pnpm test:e2e --ui       # Playwright UI mode

# Run single test file
pnpm test src/__tests__/utils/format-currency.test.ts

# Design system
pnpm storybook           # Start Storybook dev server

# Component generation (Shadcn-UI)
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
```

---

## Critical Architecture Patterns

### 1. UUID Primary Keys

**ALL tables use UUID primary keys** (not auto-increment integers):

```php
// Laravel migrations
$table->uuid('id')->primary();

// Eloquent models
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Product extends Model {
    use HasUuids;
}
```

**Why:** Security (prevents enumeration attacks), distributed ID generation, future-proof for sharding.

### 2. Soft Deletes

**Critical tables use soft deletes** (users, products, orders):

```php
// Migrations
$table->softDeletes();

// Models
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model {
    use SoftDeletes;
}
```

**Why:** Preserves order history integrity, regulatory compliance, accidental deletion recovery.

### 3. Snapshot Pattern (Order Items)

**Order items store product data at purchase time** to prevent historical corruption:

```php
// order_items table stores snapshots, NOT foreign keys
$table->string('product_name');    // Snapshot, not FK to products.name
$table->string('variant_name');    // Snapshot
$table->string('sku');             // Snapshot
$table->decimal('unit_price', 10, 2); // Snapshot
```

**Why:** Product edits/deletions don't corrupt historical order data.

### 4. Alchemical Product Properties

Products are categorized by **alchemical properties** (not just categories):

```php
// Enums in products table
$table->enum('humour', ['calming', 'uplifting', 'grounding', 'clarifying']);
$table->enum('rarity', ['common', 'rare', 'limited']);
$table->enum('season', ['spring', 'summer', 'autumn', 'winter']);
```

**Usage:**
```php
// Filter products by humour
Product::whereHumour('calming')->get();

// Scope methods
$products = Product::active()
    ->featured()
    ->whereHumour('uplifting')
    ->orderBy('sort_order')
    ->get();
```

### 5. Singapore-Specific Commerce

**GST (9% tax):**
```php
// app/Services/GSTService.php
class GSTService {
    const GST_RATE = 0.09;

    public function calculate(float $subtotal): float {
        return round($subtotal * self::GST_RATE, 2);
    }
}
```

**PayNow Integration:**
- Via Stripe payment methods
- Configuration in `config/services.php`

**SingPost Shipping:**
- Webhook integration for tracking updates
- Tracking number storage in orders table

### 6. State Management Strategy

**Frontend state is split between:**

- **Zustand** (client-side UI state):
  ```typescript
  // Cart drawer open/close, modals, temporary UI state
  import { useCartStore } from '@/stores/cart-store';
  ```

- **TanStack Query** (server state):
  ```typescript
  // Products, orders, user data from API
  import { useQuery } from '@tanstack/react-query';

  const { data: products } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  ```

**Why NOT Redux:** Bundle size (Zustand: 1.2KB, TanStack Query: 12KB, Redux Toolkit: 45KB) and simpler learning curve.

---

## Design System: "Illuminated Manuscript"

### Core Design Tokens

```css
:root {
  /* Color System */
  --color-ink: #2A2D26;           /* Deep charcoal text */
  --color-gold: #C9A769;          /* Byzantine gold accents */
  --color-parchment: #FAF8F5;     /* Warm off-white background */

  /* Accessible alternatives for WCAG AA */
  --color-ink-muted-accessible: #545752;
  --color-gold-text: #8B7355;

  /* Botanical Accents */
  --color-lavender: #B8A9C9;
  --color-eucalyptus: #7CB9A0;
  --color-bergamot: #F5D489;
  --color-rosehip: #E8B4B8;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Crimson Pro', Georgia, serif;
  --font-accent: 'Great Vibes', cursive;

  /* Fluid Typography Scale (clamp) */
  --text-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
}
```

### Tailwind Custom Theme

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#2A2D26', light: '#4A4D46', muted: '#545752' },
        gold: { DEFAULT: '#C9A769', light: '#E8D8B6', dark: '#A98750' },
        parchment: { DEFAULT: '#FAF8F5', dark: '#F5F1EB', darker: '#E8E4D9' },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Crimson Pro', 'Georgia', 'serif'],
        accent: ['Great Vibes', 'cursive'],
      },
    },
  },
};
```

### Accessibility Requirements

**WCAG AA minimum, AAA target:**
- Color contrast ratios meet AA standards
- All animations respect `prefers-reduced-motion: reduce`
- Focus states with 3px outlines + 4px offset
- ARIA live regions for cart updates, form errors
- Keyboard navigation support
- Screen reader announcements

```css
/* Reduced motion support (CRITICAL) */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Database Schema Overview

**22 Tables Total:**

**Core Commerce:**
- `users` (customer + admin unified, UUID, soft deletes, role enum)
- `products` (UUID, category FK, humour/rarity/season enums, JSONB meta_data, soft deletes)
- `product_variants` (5ml, 15ml, 30ml sizes with SKU, price_sgd, is_default flag)
- `product_images` (multiple images per product, is_primary flag, sort_order)
- `categories` (Singles, Blends, Sets, Gifts)
- `tags` (scent note tags for many-to-many with products)

**Shopping Cart:**
- `carts` (user_id nullable for guest carts, session_id, expires_at for cleanup)
- `cart_items` (variant FK, quantity, unit_price snapshot)

**Orders:**
- `orders` (UUID, order_number format: AA-YYYYMMDD-XXXX, status/payment_status enums, GST calculation)
- `order_items` (snapshot pattern: product_name, variant_name, sku, unit_price stored as strings)
- `payments` (Stripe payment_intent_id, method enum: card/paynow/grabpay)

**User Data:**
- `addresses` (shipping/billing, Singapore postal code validation, is_default flags)
- `wishlists` + `wishlist_items`
- `reviews` (product FK, user FK, order FK, rating 1-5, is_verified_purchase)

**Inventory:**
- `inventories` (variant FK, quantity, reserved_quantity, low_stock_threshold)
- `inventory_movements` (audit log: addition/subtraction/reservation/release)

**Marketing:**
- `coupons` (type enum: percentage/fixed_amount/free_shipping)
- `coupon_usages` (redemption tracking)
- `testimonials` (is_illuminated flag for featured styling)
- `newsletter_subscribers` (double opt-in with confirmation_token)

**System:**
- `settings` (key-value store, type enum: string/integer/boolean/json)

### Critical Relationships

```php
// User → Orders (one-to-many)
$user->orders()->get();

// Product → Variants (one-to-many)
$product->variants()->get();
$product->defaultVariant(); // Helper method

// Product → Images (one-to-many, ordered)
$product->images()->orderBy('sort_order')->get();
$product->primaryImage(); // Helper method

// Product → Tags (many-to-many)
$product->tags()->attach($tagIds);

// Cart → CartItems (one-to-many, with variant relationship)
$cart->items()->with('variant.product')->get();

// Order → OrderItems (one-to-many, snapshot data)
$order->items; // Uses snapshot data, not live product data
```

---

## API Structure

### Authentication (Laravel Sanctum)

```php
// Login
POST /api/v1/auth/login
// Returns: { token, user }

// Register
POST /api/v1/auth/register

// Get current user
GET /api/v1/auth/me
// Headers: Authorization: Bearer {token}
```

### Product Endpoints

```php
GET /api/v1/products                     # Paginated, filterable
GET /api/v1/products?humour=calming      # Filter by alchemical property
GET /api/v1/products?rarity=rare         # Filter by rarity
GET /api/v1/products?featured=true       # Featured products only
GET /api/v1/products/:slug               # Single product detail
GET /api/v1/categories/:slug             # Category with products
GET /api/v1/products/search?q=lavender   # Meilisearch
```

### Cart Endpoints

```php
GET    /api/v1/cart                 # Get current cart
POST   /api/v1/cart/items           # Add item { variant_id, quantity }
PATCH  /api/v1/cart/items/:id       # Update quantity
DELETE /api/v1/cart/items/:id       # Remove item
POST   /api/v1/cart/coupon          # Apply coupon code
```

### Checkout Flow

```php
POST /api/v1/checkout/initiate         # Validate cart
POST /api/v1/checkout/shipping         # Set address
POST /api/v1/checkout/payment-intent   # Create Stripe PaymentIntent
POST /api/v1/checkout/confirm          # Place order + charge
```

### Response Format

```json
{
  "data": { /* Resource or collection */ },
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

## Testing Strategy

### Backend Testing (PHPUnit/Pest)

```bash
# Run all tests
php artisan test

# Run specific test
php artisan test tests/Feature/Api/ProductTest.php

# Run with coverage
php artisan test --coverage

# Test structure
tests/
├── Feature/           # Integration tests (API, database)
│   ├── Api/
│   │   ├── AuthTest.php
│   │   ├── ProductTest.php
│   │   ├── CartTest.php
│   │   └── CheckoutTest.php
│   └── Admin/
│       └── ProductManagementTest.php
└── Unit/              # Unit tests (services, models)
    ├── Services/
    │   ├── GSTServiceTest.php
    │   └── CouponServiceTest.php
    └── Models/
        └── ProductTest.php
```

### Frontend Testing

```bash
# Unit tests (Vitest)
pnpm test
pnpm test src/__tests__/utils/format-currency.test.ts

# E2E tests (Playwright)
pnpm test:e2e
pnpm test:e2e tests/e2e/checkout.spec.ts

# Test structure
src/
├── __tests__/
│   ├── components/
│   │   ├── essence-card.test.tsx
│   │   └── vial-drawer.test.tsx
│   └── utils/
│       └── format-currency.test.ts
└── e2e/
    ├── checkout.spec.ts
    └── product-browsing.spec.ts
```

---

## Environment Variables

### Backend (.env)

```env
# Critical for development
APP_NAME="Atelier Arôme API"
APP_ENV=local
APP_KEY=                        # php artisan key:generate
APP_URL=http://localhost:8000

DB_CONNECTION=pgsql
DB_DATABASE=atelier_arome_dev
DB_USERNAME=postgres
DB_PASSWORD=

REDIS_HOST=127.0.0.1

# Stripe (test mode)
STRIPE_KEY=pk_test_...
STRIPE_SECRET=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Email (Resend)
MAIL_MAILER=smtp
MAIL_FROM_ADDRESS=noreply@atelierarome.sg

# Search
MEILISEARCH_HOST=http://127.0.0.1:7700
MEILISEARCH_KEY=
```

### Frontend (.env.local)

```env
# API connection
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_API_TIMEOUT=10000

# Auth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=                # openssl rand -base64 32

# Stripe (must match backend)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

---

## Common Pitfalls & Solutions

### 1. Cart Expiry

**Problem:** Guest carts filling up database.

**Solution:** Automatic cleanup via scheduled command:
```bash
# app/Console/Kernel.php
$schedule->command('cart:clean-expired')->daily();
```

### 2. Inventory Overselling

**Problem:** Multiple users buying last item simultaneously.

**Solution:** Pessimistic locking during checkout:
```php
// CheckoutService.php
DB::transaction(function () use ($cartItems) {
    foreach ($cartItems as $item) {
        $inventory = Inventory::where('variant_id', $item->variant_id)
            ->lockForUpdate()  // Pessimistic lock
            ->first();

        if ($inventory->quantity < $item->quantity) {
            throw new InsufficientInventoryException();
        }

        $inventory->decrement('quantity', $item->quantity);
    }
});
```

### 3. N+1 Query Problems

**Problem:** Loading products without relationships causes N+1 queries.

**Solution:** Always eager load:
```php
// ❌ BAD: N+1 queries
$products = Product::all();
foreach ($products as $product) {
    echo $product->category->name;        // +1 query
    echo $product->defaultVariant()->price; // +1 query
}

// ✅ GOOD: Eager loading
$products = Product::with(['category', 'variants', 'images'])->get();
```

### 4. Next.js Image Optimization

**Problem:** Product images not loading from Cloudinary.

**Solution:** Configure remote patterns in `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'res.cloudinary.com',
      pathname: '/atelier-arome/**',
    },
  ],
}
```

### 5. CORS Issues

**Problem:** Frontend can't connect to API.

**Solution:** Configure CORS in `config/cors.php`:
```php
'paths' => ['api/*', 'sanctum/csrf-cookie'],
'allowed_origins' => [env('FRONTEND_URL', 'http://localhost:3000')],
'supports_credentials' => true,
```

---

## Key Documentation Files

1. **`MASTER_EXECUTION_PLAN.md`** - Phase-by-phase implementation plan (16 phases, 85 days)
2. **`Project_Architecture_Document.md`** - Complete technical specification
3. **`docs/Comprehensive_Project_Understanding.md`** - Deep analysis and rationale
4. **`styles.css`** - Complete "Illuminated Manuscript" design system reference

---

## Phase Status

**Current Phase:** Phase 1 (Foundation)

The project is in the planning stage. The following must be completed before development:

**Phase 1 Checklist:**
- [ ] Create `atelier-arome-api/` Laravel 12 project
- [ ] Create `atelier-arome-web/` Next.js 15 project
- [ ] Set up PostgreSQL database with 22 table migrations
- [ ] Configure Redis for cache/session/queue
- [ ] Install Shadcn-UI components with custom theme
- [ ] Implement "Illuminated Manuscript" Tailwind theme

**See `MASTER_EXECUTION_PLAN.md` for complete phase breakdown.**

---

## Security Considerations

### OWASP Top 10 Mitigations

1. **SQL Injection:** Eloquent ORM + parameterized queries (safe by default)
2. **XSS:** React JSX auto-escapes, Blade `{{ }}` escapes (use DOMPurify for rich text)
3. **CSRF:** Laravel CSRF tokens, SameSite cookies for API routes
4. **Authentication:** Laravel Sanctum with token expiry, bcrypt password hashing
5. **Authorization:** Laravel policies, role-based access control (customer/admin/superadmin)

### Rate Limiting

```php
// routes/api.php
Route::middleware(['throttle:10,1'])->group(function () {
    Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);
    Route::post('/contact', [ContactController::class, 'send']);
});
```

### Payment Security

- **NEVER store:** Credit card numbers, CVV
- **Stripe Elements:** Client-side tokenization
- **Webhook verification:** Verify Stripe signature via `stripe.webhooks.constructEvent()`
- **PCI compliance:** Offloaded to Stripe

---

## Deployment Architecture

**Frontend:** Vercel (Edge deployment, ISR)
**Backend:** Laravel Forge or Vapor
**Database:** Neon (managed PostgreSQL)
**Cache/Queue:** Upstash (managed Redis)
**CDN:** Cloudflare
**Monitoring:** Sentry (error tracking), Plausible (analytics)

### Environment Stages

| Environment | Frontend | Backend | Database |
|-------------|----------|---------|----------|
| Development | localhost:3000 | localhost:8000 | Local PostgreSQL |
| Staging | staging.atelierarome.com | api-staging.atelierarome.com | Neon staging |
| Production | atelierarome.com | api.atelierarome.com | Neon production |

---

## Additional Notes

### Singapore-Specific Requirements

1. **GST (9%):** Calculated on `subtotal + shipping`, displayed as separate line item
2. **PayNow:** Available as Stripe payment method for Singapore customers
3. **SingPost API:** Webhook integration for tracking updates
4. **Currency:** All prices in SGD with `$` prefix (not `S$`)

### Design Philosophy: "Anti-Generic"

This project deliberately avoids:
- Generic "Inter font + purple gradient + card grid" aesthetics
- Cookie-cutter e-commerce templates
- Generic component libraries without customization

Instead, emphasizing:
- Renaissance-inspired "Illuminated Manuscript" visual language
- Custom Tailwind theme with Cormorant Garamond, Crimson Pro, Great Vibes fonts
- Alchemical and botanical themes aligned with aromatherapy heritage
- WCAG AAA accessibility standards

### Component Development Guidelines

When creating new components:

1. **Use Shadcn-UI primitives** (don't build from scratch)
2. **Customize with Tailwind theme** (ink, gold, parchment colors)
3. **Add ARIA labels** for screen readers
4. **Support reduced motion** via `prefers-reduced-motion: reduce`
5. **Test keyboard navigation** (Tab, Enter, Escape)

### When in Doubt

1. Check `MASTER_EXECUTION_PLAN.md` for phase-specific implementation details
2. Refer to `Project_Architecture_Document.md` for technical specifications
3. Review `styles.css` for design system tokens and patterns
4. Consult `docs/Comprehensive_Project_Understanding.md` for architectural rationale

---

**Last Updated:** January 5, 2026
**Project Status:** Pre-Development (Planning Phase)
**Architecture Type:** Headless Commerce (Laravel 12 API + Next.js 15)
