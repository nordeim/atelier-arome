# Day 3: Database, Seeders, and Integration - Comprehensive TODO Plan

**Status:** Ready to Execute
**Date:** January 5, 2026
**Pre-requisites:**
- ✅ Day 1: Backend Foundation (Laravel 12) - COMPLETE
- ✅ Day 2: Frontend Foundation (Next.js 15) - COMPLETE
- ✅ PostgreSQL 16 running via Docker (atelier_db on port 5432)
- ✅ Mailhog running (atelier_mailhog on ports 1025, 8025)
- ⏳ Redis (need to start or verify running)

---

## ACTIVITY 3.1: Run Migrations & Verify Schema

### Prerequisites Checklist
- [ ] PostgreSQL database is running (Docker container atelier_db)
- [ ] Laravel .env is configured correctly (DB_HOST=127.0.0.1, DB_PORT=5432)
- [ ] Laravel dependencies installed (composer install)
- [ ] APP_KEY generated (php artisan key:generate)

### Migration Execution Checklist
- [ ] Navigate to Laravel project: cd atelier-arome-api
- [ ] Copy .env.example to .env: cp .env.example .env
- [ ] Generate APP_KEY if needed: php artisan key:generate
- [ ] Verify database connection: php artisan db:show
- [ ] Run all migrations: php artisan migrate:fresh
- [ ] Verify migration success (no errors in output)
- [ ] Count tables created (should be 22 tables)
- [ ] List all tables: php artisan db:table

### Schema Verification Checklist
- [ ] Verify UUID primary keys on main tables (users, products, orders, etc.)
- [ ] Verify soft deletes on: users, products, orders, addresses
- [ ] Verify foreign key constraints exist
- [ ] Test foreign key cascade behavior (create test data, delete parent)
- [ ] Verify enum columns have correct values:
  - [ ] users.role (customer, admin, superadmin)
  - [ ] products.humour (calming, uplifting, grounding, clarifying)
  - [ ] products.rarity (common, rare, limited)
  - [ ] products.season (spring, summer, autumn, winter)
- [ ] Verify JSONB meta_data column in products table
- [ ] Verify indexes are created correctly
- [ ] Test rollback: php artisan migrate:rollback
- [ ] Test fresh migrate: php artisan migrate:fresh

### PostgreSQL Direct Verification
- [ ] Connect to PostgreSQL: docker exec -it atelier_db psql -U postgres -d atelier_arome_dev
- [ ] List all tables: \dt
- [ ] Verify 22 tables exist
- [ ] Inspect users table schema: \d users
- [ ] Verify UUID type on id column
- [ ] Verify soft deletes column (deleted_at) exists
- [ ] Exit PostgreSQL: \q

### 22 Tables Verification Checklist
Core Auth (3):
- [ ] users
- [ ] password_reset_tokens
- [ ] sessions

Products & Categories (7):
- [ ] categories
- [ ] products
- [ ] product_variants
- [ ] product_images
- [ ] tags
- [ ] product_tag (pivot table)

Cart & Orders (8):
- [ ] addresses
- [ ] carts
- [ ] cart_items
- [ ] orders
- [ ] order_items
- [ ] payments
- [ ] coupons
- [ ] coupon_usages

Reviews, Testimonials, Wishlists (4):
- [ ] reviews
- [ ] testimonials
- [ ] wishlists
- [ ] wishlist_items

Newsletter & System (3):
- [ ] newsletter_subscribers
- [ ] inventories
- [ ] inventory_movements
- [ ] settings

---

## ACTIVITY 3.2: Create Database Seeders

### Seeder Creation Checklist

#### Seeder 1: UserSeeder
- [ ] Create seeder: php artisan make:seeder UserSeeder
- [ ] Open: database/seeders/UserSeeder.php
- [ ] Define admin user:
  - [ ] Name: "Admin User"
  - [ ] Email: "admin@atelierarome.sg"
  - [ ] Password: bcrypt("password123")
  - [ ] Role: "admin"
  - [ ] Phone: "+6591234567"
- [ ] Define superadmin user:
  - [ ] Name: "Super Admin"
  - [ ] Email: "superadmin@atelierarome.sg"
  - [ ] Password: bcrypt("password123")
  - [ ] Role: "superadmin"
  - [ ] Phone: "+6592345678"
- [ ] Define 3 test customers:
  - [ ] Customer 1: "Jane Doe", "jane@example.com", role="customer"
  - [ ] Customer 2: "John Smith", "john@example.com", role="customer"
  - [ ] Customer 3: "Alice Tan", "alice@example.com", role="customer"
- [ ] Use bcrypt for all passwords
- [ ] Add timestamps
- [ ] Use factory pattern (optional) or manual creation

#### Seeder 2: CategorySeeder
- [ ] Create seeder: php artisan make:seeder CategorySeeder
- [ ] Define 4 categories:
  - [ ] Category 1: "Singles", slug="singles", description="Single essential oils", sort_order=1
  - [ ] Category 2: "Blends", slug="blends", description="Curated essential oil blends", sort_order=2
  - [ ] Category 3: "Sets", slug="sets", description="Essential oil gift sets", sort_order=3
  - [ ] Category 4: "Gifts", slug="gifts", description="Aromatherapy gifts", sort_order=4
- [ ] Set is_active=true for all
- [ ] Add optional image_url (placeholder)
- [ ] Add timestamps

#### Seeder 3: TagSeeder
- [ ] Create seeder: php artisan make:seeder TagSeeder
- [ ] Define scent note tags (15+ tags):
  - [ ] Floral tags: lavender, rose, jasmine, ylang-ylang
  - [ ] Citrus tags: bergamot, lemon, sweet-orange, grapefruit
  - [ ] Woody tags: sandalwood, cedarwood, pine
  - [ ] Herbal tags: eucalyptus, peppermint, tea-tree
  - [ ] Spicy tags: cinnamon, clove, ginger
  - [ ] Earthy tags: vetiver, patchouli
- [ ] Generate slugs from names
- [ ] Add timestamps

#### Seeder 4: ProductSeeder (MOST COMPLEX)
- [ ] Create seeder: php artisan make:seeder ProductSeeder
- [ ] Fetch categories from database
- [ ] Create 5-6 sample products:

  Product 1: Lavender Essential Oil
  - [ ] Name: "Lavender Essential Oil"
  - [ ] Latin name: "Lavandula angustifolia"
  - [ ] Slug: "lavender-essential-oil"
  - [ ] Category: Singles
  - [ ] Humour: "calming"
  - [ ] Rarity: "common"
  - [ ] Season: "summer"
  - [ ] Extraction method: "Steam Distillation"
  - [ ] Folio number: "FOL-001"
  - [ ] Is featured: true
  - [ ] Description: "Pure lavender essential oil from Provence, France"
  - [ ] Create 3 variants:
    - [ ] 5ml: SKU "LAV-005", price=$42.00, is_default=true
    - [ ] 15ml: SKU "LAV-015", price=$98.00, is_default=false
    - [ ] 30ml: SKU "LAV-030", price=$168.00, is_default=false
  - [ ] Attach tags: lavender, floral, calming
  - [ ] Create 2-3 product images (placeholder URLs)

  Product 2: Bergamot Essential Oil
  - [ ] Name: "Bergamot Essential Oil"
  - [ ] Latin name: "Citrus bergamia"
  - [ ] Slug: "bergamot-essential-oil"
  - [ ] Category: Singles
  - [ ] Humour: "uplifting"
  - [ ] Rarity: "common"
  - [ ] Season: "spring"
  - [ ] Extraction method: "Cold Press"
  - [ ] Folio number: "FOL-002"
  - [ ] Is featured: true
  - [ ] Create 3 variants: 5ml/$42, 15ml/$98, 30ml/$168
  - [ ] Attach tags: bergamot, citrus, uplifting

  Product 3: Peace & Harmony Blend
  - [ ] Name: "Peace & Harmony Blend"
  - [ ] Slug: "peace-harmony-blend"
  - [ ] Category: Blends
  - [ ] Humour: "calming"
  - [ ] Rarity: "limited"
  - [ ] Season: "winter"
  - [ ] Extraction method: "Custom Blend"
  - [ ] Folio number: "FOL-010"
  - [ ] Is featured: true
  - [ ] Create 3 variants: 5ml/$48, 15ml/$118, 30ml/$198
  - [ ] Attach tags: floral, woody, calming

  Product 4: Energy Boost Blend
  - [ ] Name: "Energy Boost Blend"
  - [ ] Slug: "energy-boost-blend"
  - [ ] Category: Blends
  - [ ] Humour: "uplifting"
  - [ ] Rarity: "rare"
  - [ ] Season: "summer"
  - [ ] Extraction method: "Custom Blend"
  - [ ] Folio number: "FOL-011"
  - [ ] Is featured: false
  - [ ] Create 3 variants: 5ml/$45, 15ml/$108, 30ml/$188
  - [ ] Attach tags: citrus, herbal, uplifting

  Product 5: Complete Sleep Set
  - [ ] Name: "Complete Sleep Set"
  - [ ] Slug: "complete-sleep-set"
  - [ ] Category: Sets
  - [ ] Humour: "calming"
  - [ ] Rarity: "limited"
  - [ ] Season: "winter"
  - [ ] Extraction method: "Curated Set"
  - [ ] Folio number: "FOL-020"
  - [ ] Is featured: true
  - [ ] Create 1 variant: Set SKU "SLEEP-SET", price=$298.00, is_default=true
  - [ ] Attach tags: floral, herbal, calming

- [ ] For each product, create inventory records:
  - [ ] Set quantity values (e.g., 100 for common, 50 for rare, 20 for limited)
  - [ ] Set reserved_quantity=0
  - [ ] Set low_stock_threshold=5

#### Seeder 5: TestimonialSeeder
- [ ] Create seeder: php artisan make:seeder TestimonialSeeder
- [ ] Create 3-5 testimonials:
  - [ ] Testimonial 1: "The lavender oil transformed my sleep routine"
  - [ ] Testimonial 2: "Best essential oils I've ever used"
  - [ ] Testimonial 3: "The blends are perfectly balanced"
  - [ ] Testimonial 4: "Gifted the Complete Sleep Set to my sister"
  - [ ] Testimonial 5: "Bergamot instantly lifts my mood"
- [ ] Set is_illuminated=true for 2-3 featured testimonials
- [ ] Add folio_reference for Renaissance aesthetic
- [ ] Set is_verified=true for all
- [ ] Set is_active=true for all

#### Seeder 6: SettingsSeeder
- [ ] Create seeder: php artisan make:seeder SettingsSeeder
- [ ] Create key-value settings:
  - [ ] GST Rate: key="gst_rate", value="0.09", type="decimal"
  - [ ] Currency: key="currency", value="SGD", type="string"
  - [ ] Currency Symbol: key="currency_symbol", value="$", type="string"
  - [ ] Store Name: key="store_name", value="Atelier Arôme", type="string"
  - [ ] Store Email: key="store_email", value="hello@atelierarome.sg", type="string"
  - [ ] Store Phone: key="store_phone", value="+6567890123", type="string"
  - [ ] Free Shipping Threshold: key="free_shipping_threshold", value="150.00", type="decimal"

---

## ACTIVITY 3.3: Run Seeders & Verify Data

### Seeder Execution Checklist
- [ ] Update DatabaseSeeder.php to include all seeders:
  - [ ] $this->call(UserSeeder::class);
  - [ ] $this->call(CategorySeeder::class);
  - [ ] $this->call(TagSeeder::class);
  - [ ] $this->call(ProductSeeder::class);
  - [ ] $this->call(TestimonialSeeder::class);
  - [ ] $this->call(SettingsSeeder::class);
- [ ] Run all seeders: php artisan db:seed
- [ ] Verify no errors in output
- [ ] Verify data inserted successfully

### Data Verification Checklist
- [ ] Verify users:
  - [ ] Count users: SELECT COUNT(*) FROM users; (should be 5)
  - [ ] Verify admin user exists: email="admin@atelierarome.sg"
  - [ ] Verify superadmin user exists: email="superadmin@atelierarome.sg"
  - [ ] Verify 3 customers exist

- [ ] Verify categories:
  - [ ] Count categories: SELECT COUNT(*) FROM categories; (should be 4)
  - [ ] Verify "Singles" category exists
  - [ ] Verify "Blends" category exists

- [ ] Verify tags:
  - [ ] Count tags: SELECT COUNT(*) FROM tags; (should be 15+)
  - [ ] Verify "lavender" tag exists
  - [ ] Verify "citrus" tag exists

- [ ] Verify products:
  - [ ] Count products: SELECT COUNT(*) FROM products; (should be 5-6)
  - [ ] Verify "Lavender Essential Oil" exists
  - [ ] Verify product_variants created for each product (3 per product)
  - [ ] Verify product_images created for each product
  - [ ] Verify product_tag relationships exist

- [ ] Verify inventories:
  - [ ] Count inventories: SELECT COUNT(*) FROM inventories; (should be 15-18)
  - [ ] Verify inventory records exist for each variant
  - [ ] Verify quantity values are reasonable

- [ ] Verify testimonials:
  - [ ] Count testimonials: SELECT COUNT(*) FROM testimonials; (should be 3-5)
  - [ ] Verify is_illuminated flag set on featured testimonials

- [ ] Verify settings:
  - [ ] Count settings: SELECT COUNT(*) FROM settings; (should be 7+)
  - [ ] Verify GST rate = 0.09
  - [ ] Verify currency = SGD
  - [ ] Verify currency_symbol = $

### Relationship Verification Checklist
- [ ] Test product → category relationship
- [ ] Test product → variants relationship
- [ ] Test product → images relationship
- [ ] Test product → tags relationship (many-to-many)
- [ ] Test user → addresses relationship (when addresses seeded)
- [ ] Test cart → cart_items relationship (when carts seeded)

---

## ACTIVITY 4: Configure Redis

### Redis Setup Checklist
- [ ] Check if Redis is running: redis-cli ping
- [ ] If not running, start Redis: redis-server
- [ ] Verify Redis version: redis-server --version (should be 7.x)
- [ ] Test Redis connection: redis-cli ping (should return PONG)
- [ ] Verify Laravel can connect to Redis: php artisan tinker > cache()->put('test', 'value') > cache()->get('test')
- [ ] Verify Redis configured for cache, session, queue in .env:
  - [ ] CACHE_DRIVER=redis
  - [ ] SESSION_DRIVER=redis
  - [ ] QUEUE_CONNECTION=redis
- [ ] Test Redis cache: php artisan cache:clear && php artisan config:clear
- [ ] Test Redis session (optional): Create test route to set session value

### Redis Configuration Verification
- [ ] Check Laravel Redis config: config/cache.php
- [ ] Verify Redis client: phpredis
- [ ] Verify Redis connection parameters in .env:
  - [ ] REDIS_HOST=127.0.0.1
  - [ ] REDIS_PORT=6379
  - [ ] REDIS_PASSWORD=null
- [ ] Test Laravel queue worker (optional): php artisan queue:work (test only)

---

## ACTIVITY 5: Test Integration

### Laravel API Server Checklist
- [ ] Navigate to Laravel project: cd atelier-arome-api
- [ ] Start Laravel server: php artisan serve
- [ ] Verify server starts on http://localhost:8000
- [ ] Test root URL: curl http://localhost:8000/ (should return Laravel welcome page)
- [ ] Keep server running in background or new terminal

### Next.js Frontend Server Checklist
- [ ] Navigate to Next.js project: cd atelier-arome-web
- [ ] Copy .env.local.example to .env.local: cp .env.local.example .env.local
- [ ] Verify NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
- [ ] Install dependencies if needed: npm install
- [ ] Start Next.js dev server: npm run dev
- [ ] Verify server starts on http://localhost:3000
- [ ] Test root URL: curl http://localhost:3000/ (should return Next.js page)
- [ ] Keep server running in background or new terminal

### Integration Testing Checklist
- [ ] Test frontend can fetch from backend:
  - [ ] Open browser: http://localhost:3000
  - [ ] Check browser console for any errors
  - [ ] Check network tab for API calls (none yet, but verify no CORS errors)
- [ ] Verify environment variables loaded:
  - [ ] Check Laravel: php artisan tinker > env('APP_NAME')
  - [ ] Check Next.js: Add console.log in page to verify NEXT_PUBLIC_API_URL
- [ ] Test database connectivity from Next.js (optional):
  - [ ] Create test API route in Laravel
  - [ ] Fetch from Next.js page
  - [ ] Verify response

### CORS Configuration Check
- [ ] Check Laravel CORS config: config/cors.php
- [ ] Verify allowed_origins includes http://localhost:3000
- [ ] Verify allowed_methods includes GET, POST, PUT, DELETE
- [ ] Verify supports_credentials=true
- [ ] Test CORS with curl command:
  - [ ] curl -H "Origin: http://localhost:3000" -H "Access-Control-Request-Method: GET" http://localhost:8000/api/test -v

---

## ACTIVITY 6: Documentation & Cleanup

### Documentation Checklist
- [ ] Update PHASE_1_EXECUTION_PLAN.md with Day 3 progress
- [ ] Mark Day 3 activities as complete in execution plan
- [ ] Update project status in MASTER_EXECUTION_PLAN.md
- [ ] Update CLAUDE.md with Day 3 completion notes
- [ ] Create notes on any issues encountered and solutions

### Cleanup Checklist
- [ ] Stop Laravel server (Ctrl+C)
- [ ] Stop Next.js server (Ctrl+C)
- [ ] Stop Redis if running (Ctrl+C)
- [ ] Clear any test data created (optional)
- [ ] Verify database is clean (optional reset: php artisan migrate:fresh --seed)

---

## FINAL VERIFICATION CHECKLIST

### Before Moving to Day 4 / Phase 2
- [ ] All 22 database tables created and verified
- [ ] All seeders executed successfully
- [ ] Test data verified in database
- [ ] Redis configured and tested
- [ ] Laravel API server tested on port 8000
- [ ] Next.js frontend server tested on port 3000
- [ ] CORS configuration verified
- [ ] Environment variables configured correctly
- [ ] Documentation updated
- [ ] No critical errors or warnings

### Issues Encountered (if any)
- [ ] List any issues encountered during Day 3
- [ ] Document solutions applied
- [ ] Note any items to address in future phases

---

## SUCCESS CRITERIA

Day 3 is considered complete when:
1. ✅ All 22 database migrations executed successfully
2. ✅ All seeders executed without errors
3. ✅ Test data verified in PostgreSQL (users, categories, products, variants, tags, testimonials, settings)
4. ✅ Redis configured and tested (cache, session, queue drivers)
5. ✅ Laravel API server running on http://localhost:8000
6. ✅ Next.js frontend server running on http://localhost:3000
7. ✅ CORS configuration verified
8. ✅ Documentation updated (PHASE_1_EXECUTION_PLAN.md, CLAUDE.md)

---

## NEXT PHASE PREPARATION

After Day 3 completion, ready to proceed to:
- **Phase 2: Backend Core** (if continuing per original plan)
- Or continue with Phase 1 remaining activities (if any)

---

**Created:** January 5, 2026
**Last Updated:** January 5, 2026
**Status:** Ready to Execute
