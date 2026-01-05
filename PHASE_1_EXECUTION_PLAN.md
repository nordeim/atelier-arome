# Phase 1: Foundation - Detailed Execution Plan

**Status:** Ready for Execution
**Duration:** 3 Days
**Objective:** Establish project infrastructure, version control, database schema, and development environment

---

## 🔴 CONFIRMED ASSUMPTIONS

1. **Product Variants:** Fixed sizes (5ml, 15ml, 30ml) hardcoded per product
2. **Environment Setup:** Local installation (not Docker) - user will install PHP/PostgreSQL/Redis
3. **Database Seeding:** Full sample data (~5 products as shown in Master Plan)
4. **Shadcn-UI Components:** Progressive installation (core components first)
5. **Frontend Authentication:** NextAuth.js as specified in plan

---

## 🗓️ Phase 1 Sub-Plan: Day-by-Day Breakdown

### Day 1: Backend Foundation (Laravel 12)

#### Activity 1.1: Create Laravel 12 Project Structure

**Deliverable:** Complete `atelier-arome-api/` directory with Laravel 12 scaffold

**Detailed Checklist:**
```
□ Navigate to project root: /home/project/atelier-arome
□ Create Laravel project using Composer
  □ Command: composer create-project laravel/laravel atelier-arome-api
  □ Verify Laravel version is 12.x
  □ Remove default .gitignore (will replace with custom version)
□ Verify directory structure:
  □ app/ (application code)
  □ bootstrap/ (framework bootstrap)
  □ config/ (configuration files)
  □ database/ (migrations & seeders)
  □ public/ (public assets)
  □ resources/ (views, assets)
  □ routes/ (API routes)
  □ storage/ (logs, cache)
  □ tests/ (PHPUnit tests)
  □ .env.example (environment template)
□ Test Laravel installation:
  □ Command: php artisan serve
  □ Verify server starts on http://localhost:8000
  □ Verify welcome page loads
```

---

#### Activity 1.2: Configure Backend Environment Variables

**Deliverable:** `.env.example` template with all required variables

**Detailed Checklist:**
```
□ Open .env.example file
□ Configure Application Settings:
  □ APP_NAME="Atelier Arôme API"
  □ APP_ENV=local
  □ APP_DEBUG=true
  □ APP_URL=http://localhost:8000
  □ Generate APP_KEY: php artisan key:generate
□ Configure Database (PostgreSQL):
  □ DB_CONNECTION=pgsql
  □ DB_HOST=127.0.0.1
  □ DB_PORT=5432
  □ DB_DATABASE=atelier_arome_dev
  □ DB_USERNAME=postgres
  □ DB_PASSWORD=
□ Configure Redis:
  □ REDIS_HOST=127.0.0.1
  □ REDIS_PASSWORD=null
  □ REDIS_PORT=6379
□ Configure Mail (development mode):
  □ MAIL_MAILER=log
  □ MAIL_FROM_ADDRESS=noreply@atelierarome.sg
  □ MAIL_FROM_NAME="${APP_NAME}"
□ Configure Stripe (test mode placeholders):
  □ STRIPE_KEY=pk_test_PLACEHOLDER
  □ STRIPE_SECRET=sk_test_PLACEHOLDER
  □ STRIPE_WEBHOOK_SECRET=whsec_PLACEHOLDER
□ Configure Search:
  □ MEILISEARCH_HOST=http://127.0.0.1:7700
  □ MEILISEARCH_KEY=
□ Configure Session/Queue drivers:
  □ SESSION_DRIVER=redis
  □ QUEUE_CONNECTION=redis
  □ CACHE_DRIVER=redis
□ Verify .env.example does NOT contain sensitive data (no real API keys)
```

---

#### Activity 1.3: Create Custom Backend .gitignore

**Deliverable:** Comprehensive `.gitignore` for Laravel project

**Detailed Checklist:**
```
□ Create .gitignore file in atelier-arome-api/ root
□ Add Laravel-specific ignores:
  □ /vendor/
  □ /node_modules/
  □ /.env
  □ /.env.backup
  □ /.env.production
  □ /storage/*.key
  □ /public/hot
  □ /public/storage
  □ Homestead.json
  □ Homestead.yaml
  □ auth.json
  □ npm-debug.log
  □ yarn-error.log
  □ /.fleet
  □ /.idea
  □ /.vscode
□ Add PHPUnit ignores:
  □ .phpunit.result.cache
  □ /coverage/
□ Add Laravel framework ignores:
  □ /bootstrap/cache/*
  □ !/bootstrap/cache/.gitkeep
  □ /storage/app/*
  □ !/storage/app/.gitkeep
  □ /storage/framework/cache/*
  □ !/storage/framework/cache/.gitkeep
  □ /storage/framework/sessions/*
  □ !/storage/framework/sessions/.gitkeep
  □ /storage/framework/views/*
  □ !/storage/framework/views/.gitkeep
  □ /storage/logs/*
  □ !/storage/logs/.gitkeep
□ Add database ignores:
  □ *.sqlite
  □ *.sqlite-journal
□ Test git status to verify excludes work:
  □ Create test file: vendor/test.txt (should be ignored)
  □ Run: git status
  □ Verify test.txt not in untracked files
  □ Delete test file
```

---

#### Activity 1.4: Create All 22 Database Migrations

**Deliverable:** Complete migration files with UUID primary keys, soft deletes, enums

**Detailed Checklist:**

**Core Auth (3 migrations):**
```
□ Create users table migration:
  □ Command: php artisan make:migration create_users_table --path=database/migrations/0001_01_01_000001_create_users_table.php
  □ Define schema:
    □ uuid('id')->primary()
    □ string('name')
    □ string('email')->unique()
    □ timestamp('email_verified_at')->nullable()
    □ string('password')
    □ string('phone', 20)->nullable()
    □ enum('role', ['customer', 'admin', 'superadmin'])->default('customer')
    □ rememberToken()
    □ timestamps()
    □ softDeletes()
    □ indexes: email, role, deleted_at
  □ Test migration: php artisan migrate:fresh
  □ Verify schema in PostgreSQL

□ Create password_reset_tokens table migration:
  □ Command: php artisan make:migration create_password_reset_tokens_table
  □ Define schema:
    □ string('email')->primary()
    □ string('token')
    □ timestamp('created_at')
  □ Test migration

□ Create sessions table migration:
  □ Command: php artisan make:migration create_sessions_table
  □ Define schema:
    □ string('id')->primary()
    □ uuid('user_id')->nullable()
    □ string('ip_address', 45)->nullable()
    □ string('user_agent', 255)->nullable()
    □ text('payload')
    □ integer('last_activity')
    □ indexes: user_id, last_activity
  □ Test migration
```

**Products & Categories (7 migrations):**
```
□ Create categories table:
  □ Command: php artisan make:migration create_categories_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('name', 100)
    □ string('slug', 100)->unique()
    □ text('description')->nullable()
    □ string('image_url')->nullable()
    □ integer('sort_order')->default(0)
    □ boolean('is_active')->default(true)
    □ timestamps()
    □ indexes: slug, [is_active, sort_order]
  □ Test migration

□ Create products table:
  □ Command: php artisan make:migration create_products_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('category_id')
    □ string('name', 200)
    □ string('slug', 200)->unique()
    □ string('latin_name', 200)->nullable()
    □ text('description')
    □ text('long_description')->nullable()
    □ enum('humour', ['calming', 'uplifting', 'grounding', 'clarifying'])->nullable()
    □ enum('rarity', ['common', 'rare', 'limited'])->default('common')
    □ enum('season', ['spring', 'summer', 'autumn', 'winter'])->nullable()
    □ string('extraction_method', 100)->nullable()
    □ string('folio_number', 20)->nullable()
    □ boolean('is_featured')->default(false)
    □ boolean('is_active')->default(true)
    □ integer('sort_order')->default(0)
    □ jsonb('meta_data')->nullable()
    □ timestamps()
    □ softDeletes()
    □ foreign key: category_id → categories.id (cascade)
    □ indexes: slug, category_id, [is_active, sort_order], is_featured, humour, rarity, deleted_at
  □ Test migration

□ Create product_variants table:
  □ Command: php artisan make:migration create_product_variants_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('product_id')
    □ string('name', 50)
    □ string('sku', 100)->unique()
    □ decimal('price_sgd', 10, 2)
    □ decimal('compare_at_price', 10, 2)->nullable()
    □ integer('weight_grams')->default(0)
    □ boolean('is_default')->default(false)
    □ boolean('is_active')->default(true)
    □ timestamps()
    □ foreign key: product_id → products.id (cascade)
    □ indexes: product_id, sku, [product_id, is_default]
  □ Test migration

□ Create product_images table:
  □ Command: php artisan make:migration create_product_images_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('product_id')
    □ string('url')
    □ string('alt_text')->nullable()
    □ integer('sort_order')->default(0)
    □ boolean('is_primary')->default(false)
    □ timestamps()
    □ foreign key: product_id → products.id (cascade)
    □ indexes: product_id, [product_id, sort_order], is_primary
  □ Test migration

□ Create tags table:
  □ Command: php artisan make:migration create_tags_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('name')->unique()
    □ string('slug')->unique()
    □ timestamps()
  □ Test migration

□ Create product_tag pivot table:
  □ Command: php artisan make:migration create_product_tag_table
  □ Define schema:
    □ uuid('product_id')
    □ uuid('tag_id')
    □ primary key: [product_id, tag_id]
    □ foreign key: product_id → products.id (cascade)
    □ foreign key: tag_id → tags.id (cascade)
  □ Test migration
```

**Cart & Orders (8 migrations):**
```
□ Create addresses table:
  □ Command: php artisan make:migration create_addresses_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('user_id')
    □ string('label', 100)
    □ string('recipient_name', 200)
    □ string('phone', 20)
    □ string('line_1', 255)
    □ string('line_2', 255)->nullable()
    □ string('postal_code', 20)
    □ string('city', 100)->default('Singapore')
    □ string('country', 100)->default('SG')
    □ boolean('is_default_shipping')->default(false)
    □ boolean('is_default_billing')->default(false)
    □ timestamps()
    □ foreign key: user_id → users.id (cascade)
    □ indexes: user_id
  □ Test migration

□ Create carts table:
  □ Command: php artisan make:migration create_carts_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('user_id')->nullable()
    □ string('session_id')->nullable()
    □ uuid('coupon_id')->nullable()
    □ decimal('subtotal', 10, 2)->default(0)
    □ decimal('discount_amount', 10, 2)->default(0)
    □ decimal('gst_amount', 10, 2)->default(0)
    □ decimal('total', 10, 2)->default(0)
    □ timestamp('expires_at')->nullable()
    □ timestamps()
    □ foreign key: user_id → users.id (set null)
    □ foreign key: coupon_id → coupons.id (set null)
    □ indexes: user_id, session_id, expires_at
  □ Test migration

□ Create cart_items table:
  □ Command: php artisan make:migration create_cart_items_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('cart_id')
    □ uuid('variant_id')
    □ integer('quantity')->default(1)
    □ decimal('unit_price', 10, 2)
    □ decimal('total_price', 10, 2)
    □ timestamps()
    □ foreign key: cart_id → carts.id (cascade)
    □ foreign key: variant_id → product_variants.id (cascade)
    □ indexes: cart_id, variant_id
  □ Test migration

□ Create orders table:
  □ Command: php artisan make:migration create_orders_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('user_id')->nullable() (allow guest orders)
    □ string('order_number', 20)->unique()
    □ enum('status', ['pending', 'processing', 'shipped', 'delivered', 'cancelled'])->default('pending')
    □ enum('payment_status', ['pending', 'paid', 'failed', 'refunded'])->default('pending')
    □ uuid('shipping_address_id')->nullable()
    □ uuid('billing_address_id')->nullable()
    □ uuid('coupon_id')->nullable()
    □ decimal('subtotal', 10, 2)
    □ decimal('discount_amount', 10, 2)->default(0)
    □ decimal('shipping_amount', 10, 2)->default(0)
    □ decimal('gst_amount', 10, 2)->default(0)
    □ decimal('total', 10, 2)
    □ text('notes')->nullable()
    □ text('admin_notes')->nullable()
    □ string('tracking_number')->nullable()
    □ string('tracking_url')->nullable()
    □ timestamp('shipped_at')->nullable()
    □ timestamp('delivered_at')->nullable()
    □ timestamps()
    □ foreign keys: user_id, shipping_address_id, billing_address_id, coupon_id
    □ indexes: user_id, order_number, status, created_at
  □ Test migration

□ Create order_items table (SNAPSHOT PATTERN):
  □ Command: php artisan make:migration create_order_items_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('order_id')
    □ uuid('variant_id')->nullable()
    □ string('product_name', 200) (snapshot)
    □ string('variant_name', 50) (snapshot)
    □ string('sku', 100) (snapshot)
    □ integer('quantity')
    □ decimal('unit_price', 10, 2) (snapshot)
    □ decimal('total_price', 10, 2)
    □ timestamps()
    □ foreign key: order_id → orders.id (cascade)
    □ indexes: order_id
  □ Test migration

□ Create payments table:
  □ Command: php artisan make:migration create_payments_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('order_id')
    □ string('stripe_payment_intent_id')->unique()
    □ string('stripe_charge_id')->nullable()
    □ enum('method', ['card', 'paynow', 'grabpay'])
    □ enum('status', ['pending', 'succeeded', 'failed', 'refunded'])->default('pending')
    □ decimal('amount', 10, 2)
    □ string('currency', 3)->default('SGD')
    □ jsonb('metadata')->nullable()
    □ text('failure_reason')->nullable()
    □ timestamp('paid_at')->nullable()
    □ timestamp('refunded_at')->nullable()
    □ timestamps()
    □ foreign key: order_id → orders.id (cascade)
    □ indexes: order_id, stripe_payment_intent_id
  □ Test migration

□ Create coupons table:
  □ Command: php artisan make:migration create_coupons_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('code')->unique()
    □ text('description')->nullable()
    □ enum('type', ['percentage', 'fixed_amount', 'free_shipping'])
    □ decimal('value', 10, 2)
    □ decimal('minimum_order_amount', 10, 2)->default(0)
    □ integer('usage_limit')->nullable()
    □ integer('usage_count')->default(0)
    □ boolean('is_active')->default(true)
    □ timestamp('starts_at')->nullable()
    □ timestamp('expires_at')->nullable()
    □ timestamps()
    □ indexes: code, is_active
  □ Test migration

□ Create coupon_usages table:
  □ Command: php artisan make:migration create_coupon_usages_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('coupon_id')
    □ uuid('user_id')
    □ uuid('order_id')
    □ timestamp('used_at')
    □ foreign key: coupon_id → coupons.id (cascade)
    □ foreign key: user_id → users.id (cascade)
    □ foreign key: order_id → orders.id (cascade)
    □ indexes: coupon_id, user_id, order_id
  □ Test migration
```

**Reviews, Testimonials, Wishlists (4 migrations):**
```
□ Create reviews table:
  □ Command: php artisan make:migration create_reviews_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('product_id')
    □ uuid('user_id')
    □ uuid('order_id')
    □ integer('rating')->min(1)->max(5)
    □ string('title', 200)
    □ text('body')
    □ boolean('is_verified_purchase')->default(false)
    □ boolean('is_approved')->default(false)
    □ timestamps()
    □ foreign keys: product_id, user_id, order_id
    □ indexes: product_id, user_id, is_approved
  □ Test migration

□ Create testimonials table:
  □ Command: php artisan make:migration create_testimonials_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('author_name', 200)
    □ string('author_title', 200)->nullable()
    □ text('quote')
    □ boolean('is_verified')->default(false)
    □ boolean('is_illuminated')->default(false) (featured styling)
    □ string('folio_reference', 50)->nullable()
    □ integer('sort_order')->default(0)
    □ boolean('is_active')->default(true)
    □ timestamps()
    □ indexes: is_active, is_illuminated, sort_order
  □ Test migration

□ Create wishlists table:
  □ Command: php artisan make:migration create_wishlists_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('user_id')
    □ string('name', 200)->default('Bookmarked Essences')
    □ timestamps()
    □ foreign key: user_id → users.id (cascade)
    □ unique: [user_id, name]
  □ Test migration

□ Create wishlist_items table:
  □ Command: php artisan make:migration create_wishlist_items_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('wishlist_id')
    □ uuid('product_id')
    □ timestamp('added_at')
    □ foreign key: wishlist_id → wishlists.id (cascade)
    □ foreign key: product_id → products.id (cascade)
    □ indexes: wishlist_id, product_id
  □ Test migration
```

**Newsletter & System (3 migrations):**
```
□ Create newsletter_subscribers table:
  □ Command: php artisan make:migration create_newsletter_subscribers_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('email')->unique()
    □ string('name')->nullable()
    □ boolean('is_confirmed')->default(false)
    □ string('confirmation_token')
    □ timestamp('confirmed_at')->nullable()
    □ timestamp('unsubscribed_at')->nullable()
    □ timestamps()
    □ indexes: email, is_confirmed, confirmation_token
  □ Test migration

□ Create inventories table:
  □ Command: php artisan make:migration create_inventories_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('variant_id')
    □ integer('quantity')->default(0)
    □ integer('reserved_quantity')->default(0)
    □ integer('low_stock_threshold')->default(5)
    □ timestamp('last_restocked_at')->nullable()
    □ timestamps()
    □ foreign key: variant_id → product_variants.id (cascade)
    □ indexes: variant_id
  □ Test migration

□ Create inventory_movements table:
  □ Command: php artisan make:migration create_inventory_movements_table
  □ Define schema:
    □ uuid('id')->primary()
    □ uuid('inventory_id')
    □ uuid('order_id')->nullable()
    □ enum('type', ['addition', 'subtraction', 'reservation', 'release'])
    □ integer('quantity')
    □ text('reason')->nullable()
    □ timestamps()
    □ foreign key: inventory_id → inventories.id (cascade)
    □ foreign key: order_id → orders.id (cascade)
    □ indexes: inventory_id, order_id, created_at
  □ Test migration

□ Create settings table:
  □ Command: php artisan make:migration create_settings_table
  □ Define schema:
    □ uuid('id')->primary()
    □ string('key')->unique()
    □ text('value')
    □ enum('type', ['string', 'integer', 'boolean', 'json'])->default('string')
    □ timestamps()
    □ indexes: key
  □ Test migration
```

**Final Verification:**
```
□ Run all migrations: php artisan migrate:fresh
□ Verify all 22 tables created in PostgreSQL:
  □ users, password_reset_tokens, sessions
  □ categories, products, product_variants, product_images, tags, product_tag
  □ addresses, carts, cart_items, orders, order_items, payments
  □ coupons, coupon_usages
  □ reviews, testimonials, wishlists, wishlist_items, newsletter_subscribers
  □ inventories, inventory_movements, settings
□ Test rollback: php artisan migrate:rollback
□ Test fresh migrate: php artisan migrate:fresh
□ Verify UUID primary keys on all tables
□ Verify soft deletes on: users, products, orders, addresses
□ Verify foreign key constraints work (cascade on delete)
```

---

## 🚀 BEGINNING EXECUTION - DAY 1: BACKEND FOUNDATION

**Status:** Starting Implementation
**Current Activity:** 1.1 - Create Laravel 12 Project Structure
