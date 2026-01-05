Meticulously plan to create a comprehensive `MASTER_EXECUTION_PLAN.md` document that breaks down the entire project into logical, independent phases. For each phase, you need to:

1. List all files to create/modify
2. Describe features and interfaces for each file
3. Include a checklist for each file

This needs to be extremely detailed and production-ready. So think through thoroughly and think deeper how to structure this:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           TECHNOLOGY STACK                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  BACKEND (Laravel 12)                 FRONTEND (Next.js 15)                │
│  ─────────────────────                ──────────────────────               │
│  • PHP 8.3+                           • React 19                           │
│  • Laravel 12.x                       • TypeScript 5.x                     │
│  • PostgreSQL 16+                     • Tailwind CSS 4.0                   │
│  • Redis 7.x                          • Shadcn-UI + Radix                  │
│  • Laravel Sanctum                    • Framer Motion                      │
│  • Filament 3.x (Admin)               • Zustand + TanStack Query           │
│  • Meilisearch                        • React Hook Form + Zod              │
│                                                                             │
│  INTEGRATIONS                         INFRASTRUCTURE                        │
│  ────────────                         ──────────────                        │
│  • Stripe (Payments)                  • Vercel (Frontend)                  │
│  • PayNow via Stripe                  • Laravel Forge (Backend)            │
│  • Resend (Email)                     • Neon/Supabase (Database)           │
│  • Cloudinary (Media)                 • Cloudflare (CDN/DNS)               │
│  • SingPost (Shipping)                • Sentry (Monitoring)                │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

# Structure of MASTER_EXECUTION_PLAN.md

1. Executive Overview

- Project summary
- Architecture recap
- Phase overview

2. Phase Breakdown

- Each phase should be independent/deployable
- Clear dependencies between phases
- Logical grouping of features

3. For Each Phase:

- Phase objective
- Prerequisites
- Files to create/modify with:
  * File path
  * Purpose/description
  * Key features/functionality
  * Interfaces (inputs/outputs, API endpoints, props, etc.)
  * Dependencies on other files
  * Checklist of items to implement

4. Testing Strategy

5. Deployment Strategy

Now think deeply about the logical phases:

```text
flowchart TB
    subgraph Foundation["🏗️ FOUNDATION (Weeks 1-2)"]
        P1[Phase 1: Backend Foundation]
        P2[Phase 2: Frontend Foundation]
        P3[Phase 3: Design System]
    end

    subgraph Core["⚙️ CORE FEATURES (Weeks 3-6)"]
        P4[Phase 4: Authentication]
        P5[Phase 5: Product Catalog Backend]
        P6[Phase 6: Product Catalog Frontend]
        P7[Phase 7: Cart System]
    end

    subgraph Commerce["🛒 COMMERCE (Weeks 7-10)"]
        P8[Phase 8: User Accounts]
        P9[Phase 9: Checkout Flow]
        P10[Phase 10: Payment Integration]
        P11[Phase 11: Order Management]
    end

    subgraph Admin["🔧 ADMINISTRATION (Weeks 11-12)"]
        P12[Phase 12: Admin Panel]
        P13[Phase 13: Inventory & Analytics]
    end

    subgraph Launch["🚀 LAUNCH (Weeks 13-15)"]
        P14[Phase 14: Content & Marketing]
        P15[Phase 15: Testing & QA]
        P16[Phase 16: Deployment]
    end

    P1 --> P2
    P2 --> P3
    P3 --> P4
    P4 --> P5
    P5 --> P6
    P6 --> P7
    P7 --> P8
    P7 --> P9
    P8 --> P9
    P9 --> P10
    P10 --> P11
    P11 --> P12
    P12 --> P13
    P13 --> P14
    P14 --> P15
    P15 --> P16

    style Foundation fill:#e0f2fe
    style Core fill:#fef3c7
    style Commerce fill:#d1fae5
    style Admin fill:#fce7f3
    style Launch fill:#f3e8ff
```

## Phase 1: Project Foundation & Infrastructure
- Django or Laravel or "Ruby by Rails" project setup (if specified)
- Next.js (frontend or full-stack depending on specification requirement) project setup
- Database migrations
- Base configurations
- Core utilities

## Phase 2: Design System & UI Foundation
- Tailwind configuration
- Shadcn-UI setup and customization
- Layout components
- Shared UI components
- Typography and styling

## Phase 3: Authentication System
- Laravel Sanctum setup
- Auth API endpoints
- NextAuth.js configuration
- Auth UI components
- Protected routes

## Phase 4: Product Catalog (Backend)
- Product models and migrations
- Product API endpoints
- Category management
- Search implementation
 
## Phase 5: Product Catalog (Frontend)
- Product listing pages
- Product detail pages
- Filtering and sorting
- Search UI
 
## Phase 6: Cart System
- Cart models and migrations
- Cart API endpoints
- Cart state management
- Cart UI components
- Vial drawer

## Phase 7: User Account System
- Address management
- Wishlist feature
- Account settings
- Order history views
 
## Phase 8: Checkout Flow
- Checkout API endpoints
- Multi-step checkout UI
- Address forms
- Shipping calculation
 
## Phase 9: Payment Integration
- Stripe setup
- PayNow integration
- Payment processing
- Webhooks
 
## Phase 10: Order Management
- Order creation
- Order status management
- Email notifications
- Invoice generation
 
## Phase 11: Admin Panel
- Dashboard and analytics
- Product management interface
- Order management interface
- User management tools
- Reporting features

## Phase 12: Content & Marketing
- Testimonials section
- Newsletter subscription
- SEO optimization
- Analytics integration
 
## Phase 13: Testing & QA
- Unit tests
- Integration tests
- End-to-end tests
 
## Phase 14: Deployment & Launch
- CI/CD pipeline configuration
- Production environment setup
- System monitoring and alerts

Now build out this implementation guide with comprehensive detail for each component. I'll structure it using Markdown with Mermaid diagrams for architecture visualization, detailed checklists with checkboxes for tracking progress, explicit interface definitions, and clear dependency mapping throughout.

