# 📦 Phase 2: Backend Core — Comprehensive Implementation Plan

**Document Version:** 1.0.0
**Planning Date:** January 9, 2026
**Phase Duration:** 5 days (40 hours)
**Prerequisites:** Phase 1 (Foundation) - ✅ Complete
**Status:** Ready to Begin

---

## 📊 Current Backend State Analysis

### ✅ Completed (Phase 1 Deliverables)

| Category | Status | Details |
|----------|---------|----------|
| **Migrations** | ✅ Complete | 26 tables created with foreign key constraints |
| **Models** | ⚠️ Partial | 9 of 22 models created (User, Product, ProductVariant, ProductImage, Category, Tag, Inventory, Setting, Testimonial) |
| **Seeders** | ✅ Complete | 6 seeders executed (5 users, 4 categories, 27 tags, 5 products, 5 testimonials, 7 settings) |
| **Database** | ✅ Healthy | PostgreSQL 16 running, all data seeded |
| **Infrastructure** | ✅ Complete | Docker, Redis, Mailhog all operational |

### ❌ Missing (Phase 2 Requirements)

| Category | Count | Details |
|-----------|--------|----------|
| **Eloquent Models** | 13 missing | Address, Cart, CartItem, Order, OrderItem, Payment, Coupon, CouponUsage, Review, Wishlist, WishlistItem, NewsletterSubscriber, InventoryMovement |
| **Model Relationships** | All incomplete | Existing models need relationships (User→Orders, Product→Tags, etc.) |
| **API Resources** | 0 created | No resource transformers implemented |
| **API Controllers** | 0 created | Only base Controller.php exists (empty) |
| **API Routes** | 0 created | No routes/api.php file exists |
| **Middleware** | 0 created | No custom middleware (auth, rate limiting, CORS) |
| **Services** | 0 created | No service layer (GST, Coupon, Order services) |
| **Exception Handler** | Default | Not customized for API responses |
| **Rate Limiting** | Not configured | No throttling rules defined |

---

## 🎯 Phase 2 Objectives

1. **Complete Eloquent Models**: Create all 13 missing models with relationships, scopes, and helper methods
2. **Enhance Existing Models**: Add missing relationships to User, Product, and other existing models
3. **API Resource Transformers**: Create standardized JSON API responses for all models
4. **Base Controller**: Implement common CRUD methods, error handling, and pagination
5. **Exception Handler**: Customize for consistent API error responses
6. **Middleware**: Implement authentication, rate limiting, and CORS configuration
7. **API Routes**: Define versioned RESTful API endpoints

---

## 📅 Phase 2 Breakdown: Logical Sub-Phases

### **Phase 2.1: Complete Eloquent Models** (2 hours - Day 1, Morning)

**Objective:** Create all 13 missing models and enhance existing 9 models with relationships

---

## 📁 Phase 2.1: Eloquent Models — Files to Create/Update

### ✅ Files to Create (13 new models)

#### 1. `Address.php`
**Path:** `/atelier-arome-api/app/Models/Address.php`

**Purpose:** User shipping and billing addresses with Singapore postal code validation

**Key Features:**
- UUID primary key
- BelongsTo User relationship
- Soft deletes
- Address type enum (shipping, billing)
- Default address flags

**Interfaces:**
- **Relationships:**
  - `belongsTo`: user
  - `hasMany`: orders (as shipping), orders (as billing)
- **Scopes:** `whereDefault()`, `whereShipping()`, `whereBilling()`

**Dependencies:** None

**Implementation Checklist:**
- [ ] Create Address model with HasUuids and SoftDeletes
- [ ] Add fillable: user_id, type, first_name, last_name, company, address_line1, address_line2, city, postal_code, country, phone, is_default
- [ ] Add type enum (shipping/billing) validation
- [ ] Implement user relationship
- [ ] Add scope methods: whereDefault, whereShipping, whereBilling
- [ ] Add Singapore postal code validation (6 digits)
- [ ] Test model creation and relationships

---

#### 2. `Cart.php`
**Path:** `/atelier-arome-api/app/Models/Cart.php`

**Purpose:** Shopping cart supporting both guest and authenticated users

**Key Features:**
- UUID primary key
- BelongsTo User (nullable for guest carts)
- BelongsTo Coupon (nullable)
- HasMany CartItems
- Expires_at timestamp for automatic cleanup
- GST calculation fields

**Interfaces:**
- **Relationships:**
  - `belongsTo`: user (nullable), coupon (nullable)
  - `hasMany`: items
  - `hasOne`: activeCoupon
- **Scopes:** `whereActive()`, `whereGuest()`, `whereAuth()`
- **Accessors:** `subtotal`, `discountAmount`, `gstAmount`, `total`

**Dependencies:** User, Coupon, CartItem models

**Implementation Checklist:**
- [ ] Create Cart model with HasUuids
- [ ] Add fillable: user_id, session_id, coupon_id, subtotal, discount_amount, gst_amount, total, expires_at
- [ ] Add casts: expires_at to datetime, amounts to decimal
- [ ] Implement user relationship (nullable)
- [ ] Implement coupon relationship (nullable)
- [ ] Implement items relationship
- [ ] Add scope: whereActive (expires_at > now())
- [ ] Add accessors: subtotal, discountAmount, gstAmount, total
- [ ] Test guest vs authenticated cart scenarios

---

#### 3. `CartItem.php`
**Path:** `/atelier-arome-api/app/Models/CartItem.php`

**Purpose:** Individual cart items with product snapshot

**Key Features:**
- UUID primary key
- BelongsTo Cart
- BelongsTo ProductVariant
- Unit price snapshot (not FK to live price)
- Quantity tracking

**Interfaces:**
- **Relationships:**
  - `belongsTo`: cart, variant
  - `hasOne`: product (through variant)
- **Accessors:** `lineTotal`, `product`, `variant`

**Dependencies:** Cart, ProductVariant, Product models

**Implementation Checklist:**
- [ ] Create CartItem model with HasUuids
- [ ] Add fillable: cart_id, variant_id, quantity, unit_price
- [ ] Add casts: unit_price to decimal, quantity to integer
- [ ] Implement cart relationship
- [ ] Implement variant relationship (with eager loading: variant.product)
- [ ] Add accessor: lineTotal (quantity * unit_price)
- [ ] Add accessor: product (through variant.product)
- [ ] Test cart item calculations

---

#### 4. `Order.php`
**Path:** `/atelier-arome-api/app/Models/Order.php`

**Purpose:** Order records with status tracking and Singapore GST calculation

**Key Features:**
- UUID primary key
- BelongsTo User
- HasMany OrderItems
- HasOne Payment
- BelongsTo Address (shipping and billing)
- BelongsTo Coupon (nullable)
- Order number format: AA-YYYYMMDD-XXXX
- Status enums (pending, processing, shipped, delivered, cancelled)
- Payment status enums (pending, paid, failed, refunded)
- GST calculation fields (9% of subtotal + shipping)
- Soft deletes

**Interfaces:**
- **Relationships:**
  - `belongsTo`: user, shippingAddress, billingAddress, coupon
  - `hasMany`: items, payments
  - `hasOne`: primaryPayment
- **Scopes:** `whereStatus()`, `wherePaymentStatus()`, `whereUser()`
- **Accessors:** `formattedOrderNumber`, `statusBadge`

**Dependencies:** User, Address, OrderItem, Payment, Coupon models

**Implementation Checklist:**
- [ ] Create Order model with HasUuids and SoftDeletes
- [ ] Add fillable: user_id, order_number, status, payment_status, shipping_address_id, billing_address_id, coupon_id, subtotal, discount_amount, gst_amount, shipping_amount, total, tracking_number, notes, admin_notes
- [ ] Add casts: amounts to decimal, statuses to string, timestamps
- [ ] Implement user relationship
- [ ] Implement shippingAddress relationship
- [ ] Implement billingAddress relationship
- [ ] Implement coupon relationship (nullable)
- [ ] Implement items relationship
- [ ] Implement payments relationship
- [ ] Implement primaryPayment relationship
- [ ] Add scopes: whereStatus, wherePaymentStatus, whereUser
- [ ] Add accessor: formattedOrderNumber (uppercase, padded)
- [ ] Add accessor: statusBadge (color-coded)
- [ ] Implement order number generation (boot method)
- [ ] Test order creation and status transitions

---

#### 5. `OrderItem.php`
**Path:** `/atelier-arome-api/app/Models/OrderItem.php`

**Purpose:** Order line items with snapshot pattern to prevent historical corruption

**Key Features:**
- UUID primary key
- BelongsTo Order
- SNAPSHOT data (product_name, variant_name stored as strings, NOT foreign keys)
- SKU snapshot
- Unit price snapshot
- Soft deletes

**Interfaces:**
- **Relationships:**
  - `belongsTo`: order
- **Accessors:** `lineTotal`, `formattedPrice`

**Dependencies:** Order model

**Implementation Checklist:**
- [ ] Create OrderItem model with HasUuids and SoftDeletes
- [ ] Add fillable: order_id, product_name, variant_name, sku, quantity, unit_price, total
- [ ] Add casts: amounts to decimal, quantity to integer
- [ ] Implement order relationship
- [ ] Add accessor: lineTotal (quantity * unit_price)
- [ ] Add accessor: formattedPrice (SGD currency)
- [ ] Test snapshot data preservation

---

#### 6. `Payment.php`
**Path:** `/atelier-arome-api/app/Models/Payment.php`

**Purpose:** Payment transaction records with Stripe and PayNow integration

**Key Features:**
- UUID primary key
- BelongsTo Order
- Payment method enum (card, paynow, grabpay)
- Stripe payment intent ID
- Payment status tracking
- Currency fields

**Interfaces:**
- **Relationships:**
  - `belongsTo`: order
- **Scopes:** `whereMethod()`, `whereStatus()`

**Dependencies:** Order model

**Implementation Checklist:**
- [ ] Create Payment model with HasUuids
- [ ] Add fillable: order_id, stripe_payment_intent_id, method, status, amount, currency, transaction_id, failure_reason
- [ ] Add casts: amount to decimal, status to string, method to string
- [ ] Implement order relationship
- [ ] Add scope: whereMethod (card, paynow, grabpay)
- [ ] Add scope: whereStatus (pending, completed, failed, refunded)
- [ ] Test payment creation and status updates

---

#### 7. `Coupon.php`
**Path:** `/atelier-arome-api/app/Models/Coupon.php`

**Purpose:** Discount coupon codes with usage tracking

**Key Features:**
- UUID primary key
- Coupon type enum (percentage, fixed_amount, free_shipping)
- Validity period (starts_at, expires_at)
- Usage limits (max_uses, max_uses_per_user)
- Discount value fields

**Interfaces:**
- **Relationships:**
  - `hasMany`: usages, carts, orders
- **Scopes:** `whereActive()`, `whereCode()`
- **Accessors:** `isActive`, `isExpired`

**Dependencies:** CouponUsage, Cart, Order models

**Implementation Checklist:**
- [ ] Create Coupon model with HasUuids
- [ ] Add fillable: code, type, value, minimum_amount, maximum_amount, max_uses, max_uses_per_user, starts_at, expires_at, is_active
- [ ] Add casts: value to decimal, amounts to decimal, booleans to bool, dates to datetime
- [ ] Implement usages relationship
- [ ] Implement carts relationship
- [ ] Implement orders relationship
- [ ] Add scope: whereActive (within date range AND is_active)
- [ ] Add scope: whereCode (case-insensitive)
- [ ] Add accessor: isActive (checks validity)
- [ ] Add accessor: isExpired (checks expiration)
- [ ] Test coupon validation logic

---

#### 8. `CouponUsage.php`
**Path:** `/atelier-arome-api/app/Models/CouponUsage.php`

**Purpose:** Track coupon redemption by users

**Key Features:**
- UUID primary key
- BelongsTo Coupon
- BelongsTo User
- BelongsTo Order
- Timestamp tracking

**Interfaces:**
- **Relationships:**
  - `belongsTo`: coupon, user, order
- **Scopes:** `whereUser()`, `whereCoupon()`

**Dependencies:** Coupon, User, Order models

**Implementation Checklist:**
- [ ] Create CouponUsage model with HasUuids
- [ ] Add fillable: coupon_id, user_id, order_id
- [ ] Implement coupon relationship
- [ ] Implement user relationship
- [ ] Implement order relationship
- [ ] Add scope: whereUser
- [ ] Add scope: whereCoupon
- [ ] Test coupon usage tracking

---

#### 9. `Review.php`
**Path:** `/atelier-arome-api/app/Models/Review.php`

**Purpose:** Product reviews with verified purchase flag

**Key Features:**
- UUID primary key
- BelongsTo Product
- BelongsTo User
- BelongsTo Order
- Verified purchase flag (is_verified_purchase)
- Rating (1-5 stars)
- Approval workflow (is_approved)

**Interfaces:**
- **Relationships:**
  - `belongsTo`: product, user, order
- **Scopes:** `whereApproved()`, `whereVerified()`, `whereRating()`
- **Accessors:** `ratingStars`

**Dependencies:** Product, User, Order models

**Implementation Checklist:**
- [ ] Create Review model with HasUuids and SoftDeletes
- [ ] Add fillable: product_id, user_id, order_id, rating, title, body, is_verified_purchase, is_approved
- [ ] Add casts: rating to integer, booleans to bool
- [ ] Implement product relationship
- [ ] Implement user relationship
- [ ] Implement order relationship
- [ ] Add scope: whereApproved (is_approved = true)
- [ ] Add scope: whereVerified (is_verified_purchase = true)
- [ ] Add scope: whereRating (min/max rating)
- [ ] Add accessor: ratingStars (★ symbols)
- [ ] Test review creation and approval workflow

---

#### 10. `Wishlist.php`
**Path:** `/atelier-arome-api/app/Models/Wishlist.php`

**Purpose:** User wishlists with items

**Key Features:**
- UUID primary key
- BelongsTo User
- HasMany WishlistItems
- Unique constraint (one wishlist per user)

**Interfaces:**
- **Relationships:**
  - `belongsTo`: user
  - `hasMany`: items
- **Scopes:** `whereUser()`

**Dependencies:** User, WishlistItem models

**Implementation Checklist:**
- [ ] Create Wishlist model with HasUuids
- [ ] Add fillable: user_id, name (optional)
- [ ] Implement user relationship
- [ ] Implement items relationship
- [ ] Add scope: whereUser
- [ ] Add boot method to ensure one wishlist per user
- [ ] Test wishlist creation and management

---

#### 11. `WishlistItem.php`
**Path:** `/atelier-arome-api/app/Models/WishlistItem.php`

**Purpose:** Wishlist line items (products in wishlist)

**Key Features:**
- UUID primary key
- BelongsTo Wishlist
- BelongsTo Product
- Timestamp tracking

**Interfaces:**
- **Relationships:**
  - `belongsTo`: wishlist, product
- **Scopes:** `whereProduct()`

**Dependencies:** Wishlist, Product models

**Implementation Checklist:**
- [ ] Create WishlistItem model with HasUuids
- [ ] Add fillable: wishlist_id, product_id
- [ ] Implement wishlist relationship
- [ ] Implement product relationship
- [ ] Add scope: whereProduct
- [ ] Test wishlist item creation and removal

---

#### 12. `NewsletterSubscriber.php`
**Path:** `/atelier-arome-api/app/Models/NewsletterSubscriber.php`

**Purpose:** Email newsletter subscribers with double opt-in

**Key Features:**
- UUID primary key
- Email field (unique)
- Confirmation token for double opt-in
- Subscribed status tracking
- Unsubscribe token

**Interfaces:**
- **Relationships:** None (standalone)
- **Scopes:** `whereSubscribed()`, `wherePending()`

**Dependencies:** None

**Implementation Checklist:**
- [ ] Create NewsletterSubscriber model with HasUuids
- [ ] Add fillable: email, confirmation_token, unsubscribe_token, subscribed_at, unsubscribed_at, is_subscribed
- [ ] Add casts: dates to datetime, booleans to bool
- [ ] Add scope: whereSubscribed (is_subscribed = true)
- [ ] Add scope: wherePending (subscribed_at is null)
- [ ] Add boot method to generate confirmation_token on creation
- [ ] Test subscription and unsubscription workflow

---

#### 13. `InventoryMovement.php`
**Path:** `/atelier-arome-api/app/Models/InventoryMovement.php`

**Purpose:** Audit log for inventory stock changes

**Key Features:**
- UUID primary key
- BelongsTo Inventory
- BelongsTo Order (nullable)
- Movement type enum (purchase, sale, adjustment, return)
- Quantity change (+/-)
- Timestamp tracking

**Interfaces:**
- **Relationships:**
  - `belongsTo`: inventory, order
- **Scopes:** `whereType()`, `whereOrder()`

**Dependencies:** Inventory, Order models

**Implementation Checklist:**
- [ ] Create InventoryMovement model with HasUuids
- [ ] Add fillable: inventory_id, order_id, type, quantity, reference, notes
- [ ] Add casts: quantity to integer, type to string, timestamp to datetime
- [ ] Implement inventory relationship
- [ ] Implement order relationship (nullable)
- [ ] Add scope: whereType (purchase, sale, adjustment, return)
- [ ] Add scope: whereOrder
- [ ] Test inventory movement tracking

---

### ✅ Files to Update (9 existing models - add relationships)

#### 14. Update `User.php`
**Path:** `/atelier-arome-api/app/Models/User.php`

**Purpose:** Add missing relationships to User model

**Features to Add:**
- HasApiTokens trait (for Laravel Sanctum)
- Add HasFactory trait
- Relationships: addresses, cart, reviews, wishlists, orders
- Helper methods: isAdmin(), isSuperAdmin()

**Implementation Checklist:**
- [ ] Add Laravel\Sanctum\HasApiTokens trait
- [ ] Add HasFactory trait
- [ ] Add addresses relationship (hasMany)
- [ ] Add cart relationship (hasOne, with expires_at check)
- [ ] Add reviews relationship (hasMany)
- [ ] Add wishlists relationship (hasMany)
- [ ] Add orders relationship (hasMany)
- [ ] Add isAdmin() helper method
- [ ] Add isSuperAdmin() helper method
- [ ] Test all relationships and helper methods

---

#### 15. Update `Product.php`
**Path:** `/atelier-arome-api/app/Models/Product.php`

**Purpose:** Add missing relationships and helper methods

**Features to Add:**
- SoftDeletes trait (already present)
- HasFactory trait
- Review relationship (hasMany)
- DefaultVariant() helper method (already present - verify)
- PrimaryImage() helper method (already present - verify)
- Boot method for auto-slug generation

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add reviews relationship (hasMany)
- [ ] Verify defaultVariant() helper exists
- [ ] Verify primaryImage() helper exists
- [ ] Verify slug auto-generation in boot method
- [ ] Test all relationships

---

#### 16. Update `Category.php`
**Path:** `/atelier-arome-api/app/Models/Category.php`

**Purpose:** Add factory and relationships

**Features to Add:**
- HasFactory trait
- Products relationship (hasMany)
- Scope: whereActive()

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add products relationship (hasMany)
- [ ] Add scope: whereActive (is_active = true)
- [ ] Test relationships and scope

---

#### 17. Update `ProductVariant.php`
**Path:** `/atelier-arome-api/app/Models/ProductVariant.php`

**Purpose:** Add factory and inventory relationship

**Features to Add:**
- HasFactory trait
- Inventory relationship (hasOne)
- SoftDeletes trait
- Scope: whereActive()

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add inventory relationship (hasOne)
- [ ] Add SoftDeletes trait
- [ ] Add scope: whereActive (is_active = true)
- [ ] Test relationships and scope

---

#### 18. Update `ProductImage.php`
**Path:** `/atelier-arome-api/app/Models/ProductImage.php`

**Purpose:** Add factory and primary image helper

**Features to Add:**
- HasFactory trait
- Primary image scope
- URL accessor for Cloudinary integration

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add scope: wherePrimary (is_primary = true)
- [ ] Add accessor: url (full Cloudinary URL)
- [ ] Test scope and accessor

---

#### 19. Update `Tag.php`
**Path:** `/atelier-arome-api/app/Models/Tag.php`

**Purpose:** Add factory and products relationship

**Features to Add:**
- HasFactory trait
- Products relationship (belongsToMany)

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add products relationship (belongsToMany with product_tag pivot)
- [ ] Test relationship

---

#### 20. Update `Inventory.php`
**Path:** `/atelier-arome-api/app/Models/Inventory.php`

**Purpose:** Add factory and movements relationship

**Features to Add:**
- HasFactory trait
- Movements relationship (hasMany)
- Variant relationship (belongsTo)
- Scope: whereInStock()

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add movements relationship (hasMany)
- [ ] Add variant relationship (belongsTo)
- [ ] Add scope: whereInStock (quantity > 0)
- [ ] Test relationships and scope

---

#### 21. Update `Setting.php`
**Path:** `/atelier-arome-api/app/Models/Setting.php`

**Purpose:** Add factory and helper methods

**Features to Add:**
- HasFactory trait
- Scope: whereKey(), whereType()
- Helper method: getValue()

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add scope: whereKey (exact match)
- [ ] Add scope: whereType (string, integer, boolean, json)
- [ ] Add helper: getValue() (with fallback)
- [ ] Test scopes and helper

---

#### 22. Update `Testimonial.php`
**Path:** `/atelier-arome-api/app/Models/Testimonial.php`

**Purpose:** Add factory and illuminated flag scope

**Features to Add:**
- HasFactory trait
- Scope: whereIlluminated()

**Implementation Checklist:**
- [ ] Add HasFactory trait
- [ ] Add scope: whereIlluminated (is_illuminated = true)
- [ ] Test scope

---

### Phase 2.1 Completion Checklist

- [ ] All 13 new models created with HasUuids trait
- [ ] All models have fillable attributes defined
- [ ] All models have proper casts defined
- [ ] All relationships implemented (belongsTo, hasMany, belongsToMany, hasOne)
- [ ] All scopes added where appropriate
- [ ] All accessors added where appropriate
- [ ] All helper methods added where appropriate
- [ ] User model updated with Sanctum HasApiTokens trait
- [ ] All models tested with tinker or unit tests

---

### **Phase 2.2: API Resource Transformers** (3 hours - Day 1, Afternoon)

**Objective:** Create standardized JSON API responses for all models

---

## 📁 Phase 2.2: API Resources — Files to Create

#### 23. `App/Http/Resources/UserResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/UserResource.php`

**Purpose:** Transform User model to API JSON response with selective fields

**Key Features:**
- Hide sensitive fields (password, remember_token)
- Include relationships (orders, addresses count)
- Format timestamps

**Response Structure:**
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+65 1234 5678",
  "role": "customer",
  "created_at": "2024-01-09T12:00:00Z"
}
```

**Implementation Checklist:**
- [ ] Create UserResource extending JsonResource
- [ ] Define toArray method
- [ ] Hide sensitive fields (password, remember_token)
- [ ] Include only necessary fields
- [ ] Format timestamps as ISO 8601
- [ ] Test resource transformation

---

#### 24. `App/Http/Resources/ProductResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/ProductResource.php`

**Purpose:** Transform Product model to API JSON response

**Key Features:**
- Include category data
- Include default variant
- Include primary image
- Include tags
- Include meta_data (JSONB)
- Format prices as currency

**Response Structure:**
```json
{
  "id": "uuid",
  "name": "Lavender Essential Oil",
  "slug": "lavender-essential-oil",
  "latin_name": "Lavandula × intermedia",
  "description": "Calming essence...",
  "long_description": "...",
  "humour": "calming",
  "rarity": "common",
  "season": "summer",
  "extraction_method": "Steam Distillation",
  "folio_number": "AAF-001",
  "is_featured": true,
  "is_active": true,
  "sort_order": 1,
  "meta_data": {...},
  "category": {...},
  "default_variant": {...},
  "primary_image": {...},
  "tags": [...],
  "created_at": "2024-01-09T12:00:00Z",
  "updated_at": "2024-01-09T12:00:00Z"
}
```

**Implementation Checklist:**
- [ ] Create ProductResource extending JsonResource
- [ ] Eager load category, defaultVariant, primaryImage, tags
- [ ] Define toArray method
- [ ] Include category (CategoryResource)
- [ ] Include default_variant (ProductVariantResource)
- [ ] Include primary_image (ProductImageResource)
- [ ] Include tags (TagResource collection)
- [ ] Format meta_data as array
- [ ] Format booleans and enums
- [ ] Test resource transformation

---

#### 25. `App/Http/Resources/ProductVariantResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/ProductVariantResource.php`

**Purpose:** Transform ProductVariant model to API JSON response

**Key Features:**
- Format price as currency (SGD)
- Include inventory data
- Format compare_at_price

**Response Structure:**
```json
{
  "id": "uuid",
  "name": "15ml",
  "sku": "LAV-15-001",
  "price_sgd": 45.00,
  "price_sgd_formatted": "SGD 45.00",
  "compare_at_price": 55.00,
  "compare_at_price_formatted": "SGD 55.00",
  "weight_grams": 30,
  "is_default": true,
  "is_active": true,
  "inventory": {
    "quantity": 25,
    "in_stock": true
  }
}
```

**Implementation Checklist:**
- [ ] Create ProductVariantResource extending JsonResource
- [ ] Eager load inventory
- [ ] Define toArray method
- [ ] Format prices with currency symbol
- [ ] Calculate price_formatted field
- [ ] Calculate compare_at_price_formatted field
- [ ] Include inventory data
- [ ] Add in_stock boolean helper
- [ ] Test resource transformation

---

#### 26. `App/Http/Resources/ProductImageResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/ProductImageResource.php`

**Purpose:** Transform ProductImage model to API JSON response

**Key Features:**
- Include Cloudinary URL
- Sort order
- Primary flag

**Response Structure:**
```json
{
  "id": "uuid",
  "url": "https://res.cloudinary.com/atelier-arome/...",
  "alt_text": "Lavender Essential Oil",
  "is_primary": true,
  "sort_order": 1
}
```

**Implementation Checklist:**
- [ ] Create ProductImageResource extending JsonResource
- [ ] Define toArray method
- [ ] Include full Cloudinary URL
- [ ] Include alt_text field
- [ ] Include is_primary flag
- [ ] Include sort_order
- [ ] Test resource transformation

---

#### 27. `App/Http/Resources/CategoryResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/CategoryResource.php`

**Purpose:** Transform Category model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "name": "Singles",
  "slug": "singles",
  "description": "...",
  "image_url": "...",
  "sort_order": 1,
  "is_active": true
}
```

**Implementation Checklist:**
- [ ] Create CategoryResource extending JsonResource
- [ ] Define toArray method
- [ ] Include all necessary fields
- [ ] Format URLs
- [ ] Test resource transformation

---

#### 28. `App/Http/Resources/TagResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/TagResource.php`

**Purpose:** Transform Tag model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "name": "Lavender",
  "type": "scent_note"
}
```

**Implementation Checklist:**
- [ ] Create TagResource extending JsonResource
- [ ] Define toArray method
- [ ] Include name and type fields
- [ ] Test resource transformation

---

#### 29. `App/Http/Resources/CartResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/CartResource.php`

**Purpose:** Transform Cart model to API JSON response with items

**Key Features:**
- Include cart items with product data
- Include calculated totals (subtotal, discount, gst, total)
- Include coupon data if applied

**Response Structure:**
```json
{
  "id": "uuid",
  "items": [...],
  "subtotal": 100.00,
  "subtotal_formatted": "SGD 100.00",
  "discount_amount": 10.00,
  "discount_amount_formatted": "SGD 10.00",
  "gst_amount": 8.10,
  "gst_amount_formatted": "SGD 8.10",
  "total": 98.10,
  "total_formatted": "SGD 98.10",
  "coupon": {...}
}
```

**Implementation Checklist:**
- [ ] Create CartResource extending JsonResource
- [ ] Eager load items.variant.product and coupon
- [ ] Define toArray method
- [ ] Include items collection (CartItemResource)
- [ ] Calculate formatted totals
- [ ] Include coupon if present (CouponResource)
- [ ] Test resource transformation

---

#### 30. `App/Http/Resources/CartItemResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/CartItemResource.php`

**Purpose:** Transform CartItem model to API JSON response

**Key Features:**
- Include product and variant data
- Calculate line total

**Response Structure:**
```json
{
  "id": "uuid",
  "variant": {...},
  "product": {...},
  "quantity": 2,
  "unit_price": 45.00,
  "unit_price_formatted": "SGD 45.00",
  "line_total": 90.00,
  "line_total_formatted": "SGD 90.00"
}
```

**Implementation Checklist:**
- [ ] Create CartItemResource extending JsonResource
- [ ] Eager load variant.product
- [ ] Define toArray method
- [ ] Include variant (ProductVariantResource)
- [ ] Include product (ProductResource - through variant)
- [ ] Calculate line_total and formatted version
- [ ] Test resource transformation

---

#### 31. `App/Http/Resources/OrderResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/OrderResource.php`

**Purpose:** Transform Order model to API JSON response

**Key Features:**
- Include order items
- Include shipping and billing addresses
- Include payment data
- Include coupon data
- Format order number
- Format currency fields

**Response Structure:**
```json
{
  "id": "uuid",
  "order_number": "AA-20240109-0001",
  "status": "processing",
  "payment_status": "paid",
  "items": [...],
  "shipping_address": {...},
  "billing_address": {...},
  "coupon": {...},
  "subtotal": 100.00,
  "discount_amount": 10.00,
  "gst_amount": 8.10,
  "shipping_amount": 15.00,
  "total": 113.10,
  "tracking_number": "SG123456789",
  "notes": "...",
  "created_at": "2024-01-09T12:00:00Z"
}
```

**Implementation Checklist:**
- [ ] Create OrderResource extending JsonResource
- [ ] Eager load items, shippingAddress, billingAddress, coupon, primaryPayment
- [ ] Define toArray method
- [ ] Include items collection (OrderItemResource)
- [ ] Include addresses (AddressResource)
- [ ] Include coupon (CouponResource)
- [ ] Include payment (PaymentResource)
- [ ] Format order number
- [ ] Format all currency fields
- [ ] Test resource transformation

---

#### 32. `App/Http/Resources/OrderItemResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/OrderItemResource.php`

**Purpose:** Transform OrderItem model to API JSON response (snapshot data)

**Response Structure:**
```json
{
  "id": "uuid",
  "product_name": "Lavender Essential Oil",
  "variant_name": "15ml",
  "sku": "LAV-15-001",
  "quantity": 2,
  "unit_price": 45.00,
  "unit_price_formatted": "SGD 45.00",
  "total": 90.00,
  "total_formatted": "SGD 90.00"
}
```

**Implementation Checklist:**
- [ ] Create OrderItemResource extending JsonResource
- [ ] Define toArray method
- [ ] Include snapshot fields (product_name, variant_name, sku)
- [ ] Include quantity and unit_price
- [ ] Calculate total and formatted version
- [ ] Test resource transformation

---

#### 33. `App/Http/Resources/AddressResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/AddressResource.php`

**Purpose:** Transform Address model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "type": "shipping",
  "first_name": "John",
  "last_name": "Doe",
  "company": "Atelier Arôme Pte Ltd",
  "address_line1": "123 Orchard Road",
  "address_line2": "Unit 01-01",
  "city": "Singapore",
  "postal_code": "238873",
  "country": "Singapore",
  "phone": "+65 1234 5678",
  "is_default": true
}
```

**Implementation Checklist:**
- [ ] Create AddressResource extending JsonResource
- [ ] Define toArray method
- [ ] Include all address fields
- [ ] Format phone number
- [ ] Test resource transformation

---

#### 34. `App/Http/Resources/CouponResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/CouponResource.php`

**Purpose:** Transform Coupon model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "code": "WELCOME10",
  "type": "percentage",
  "value": 10.00,
  "minimum_amount": 50.00,
  "maximum_amount": 200.00,
  "max_uses": 1000,
  "max_uses_per_user": 1,
  "starts_at": "2024-01-01T00:00:00Z",
  "expires_at": "2024-12-31T23:59:59Z",
  "is_active": true
}
```

**Implementation Checklist:**
- [ ] Create CouponResource extending JsonResource
- [ ] Define toArray method
- [ ] Include all coupon fields
- [ ] Format dates as ISO 8601
- [ ] Format currency values
- [ ] Test resource transformation

---

#### 35. `App/Http/Resources/ReviewResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/ReviewResource.php`

**Purpose:** Transform Review model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "product": {...},
  "user": {...},
  "rating": 5,
  "title": "Excellent quality",
  "body": "...",
  "is_verified_purchase": true,
  "is_approved": true,
  "created_at": "2024-01-09T12:00:00Z"
}
```

**Implementation Checklist:**
- [ ] Create ReviewResource extending JsonResource
- [ ] Eager load product, user
- [ ] Define toArray method
- [ ] Include product (ProductResource)
- [ ] Include user (UserResource - limited fields)
- [ ] Include rating, title, body
- [ ] Include verification flags
- [ ] Test resource transformation

---

#### 36. `App/Http/Resources/TestimonialResource.php`
**Path:** `/atelier-arome-api/app/Http/Resources/TestimonialResource.php`

**Purpose:** Transform Testimonial model to API JSON response

**Response Structure:**
```json
{
  "id": "uuid",
  "customer_name": "Sarah Tan",
  "content": "...",
  "is_illuminated": true,
  "created_at": "2024-01-09T12:00:00Z"
}
```

**Implementation Checklist:**
- [ ] Create TestimonialResource extending JsonResource
- [ ] Define toArray method
- [ ] Include all testimonial fields
- [ ] Test resource transformation

---

### Phase 2.2 Completion Checklist

- [ ] All 14 resource classes created
- [ ] All resources extend JsonResource
- [ ] Sensitive fields hidden (password, tokens)
- [ ] Relationships eager loaded in toArray methods
- [ ] Currency fields formatted with SGD prefix
- [ ] Dates formatted as ISO 8601
- [ ] All resources tested with sample data

---

### **Phase 2.3: Base Controller** (2 hours - Day 2, Morning)

**Objective:** Implement base controller with common CRUD methods and error handling

---

## 📁 Phase 2.3: Base Controller — Files to Update

#### 37. Update `Controller.php`
**Path:** `/atelier-arome-api/app/Http/Controllers/Controller.php`

**Purpose:** Provide common CRUD methods, error responses, and pagination

**Key Features:**
- `success()` method for consistent success responses
- `error()` method for consistent error responses
- `respondWithPagination()` for paginated collections
- `validateOrFail()` for validation with custom error messages

**Response Formats:**

Success Response:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {...}
}
```

Error Response:
```json
{
  "success": false,
  "message": "Error description",
  "errors": {...}
}
```

Paginated Response:
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "current_page": 1,
    "per_page": 15,
    "total": 47
  },
  "links": {
    "self": "/api/v1/products?page=1",
    "next": "/api/v1/products?page=2",
    "prev": null,
    "first": "/api/v1/products?page=1",
    "last": "/api/v1/products?page=4"
  }
}
```

**Implementation Checklist:**
- [ ] Add success() method
- [ ] Add error() method
- [ ] Add respondWithPagination() method
- [ ] Add validateOrFail() method
- [ ] Add notFound() method
- [ ] Add forbidden() method
- [ ] Add unauthorized() method
- [ ] Test all response methods

---

### Phase 2.3 Completion Checklist

- [ ] Base Controller updated with common methods
- [ ] Success response format standardized
- [ ] Error response format standardized
- [ ] Pagination response format defined
- [ ] All methods tested

---

### **Phase 2.4: Exception Handler** (1 hour - Day 2, Afternoon)

**Objective:** Customize exception handling for consistent API error responses

---

## 📁 Phase 2.4: Exception Handler — Files to Update

#### 38. Update `Handler.php`
**Path:** `/atelier-arome-api/app/Exceptions/Handler.php`

**Purpose:** Global exception handler for API-specific error responses

**Key Features:**
- Handle ValidationException (422 Unprocessable Entity)
- Handle ModelNotFoundException (404 Not Found)
- Handle AuthenticationException (401 Unauthorized)
- Handle AuthorizationException (403 Forbidden)
- Handle QueryException (500 Internal Server Error)
- Custom exception classes (NotFoundException, BadRequestException, etc.)

**Response Formats:**

Validation Error (422):
```json
{
  "success": false,
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email field is required."],
    "password": ["The password must be at least 8 characters."]
  }
}
```

Not Found Error (404):
```json
{
  "success": false,
  "message": "Resource not found."
}
```

**Implementation Checklist:**
- [ ] Override render() method
- [ ] Handle ValidationException (422)
- [ ] Handle ModelNotFoundException (404)
- [ ] Handle AuthenticationException (401)
- [ ] Handle AuthorizationException (403)
- [ ] Handle QueryException (500)
- [ ] Create custom exception classes if needed
- [ ] Add logging for exceptions
- [ ] Test all exception scenarios

---

#### 39. Create Custom Exception Classes (if needed)

**Files to Create:**
- `app/Exceptions/NotFoundException.php`
- `app/Exceptions/BadRequestException.php`
- `app/Exceptions/UnprocessableEntityException.php`

**Purpose:** Custom exceptions for specific API error scenarios

**Implementation Checklist:**
- [ ] Create NotFoundException (extends Exception)
- [ ] Create BadRequestException (extends Exception)
- [ ] Create UnprocessableEntityException (extends Exception)
- [ ] Add proper HTTP status codes
- [ ] Add custom messages
- [ ] Test exception throwing

---

### Phase 2.4 Completion Checklist

- [ ] Exception handler customized
- [ ] ValidationException handled (422)
- [ ] ModelNotFoundException handled (404)
- [ ] AuthenticationException handled (401)
- [ ] AuthorizationException handled (403)
- [ ] Custom exceptions created if needed
- [ ] All exceptions logged
- [ ] All exception scenarios tested

---

### **Phase 2.5: Middleware Setup** (1 hour - Day 3, Morning)

**Objective:** Implement authentication, rate limiting, and CORS middleware

---

## 📁 Phase 2.5: Middleware — Files to Create

#### 40. `EnsureJsonResponse.php`
**Path:** `/atelier-arome-api/app/Http/Middleware/EnsureJsonResponse.php`

**Purpose:** Force JSON responses for API routes

**Key Features:**
- Accept header validation (application/json)
- Return 406 Not Acceptable if not JSON
- Prevent HTML error pages in API

**Implementation Checklist:**
- [ ] Create EnsureJsonResponse middleware
- [ ] Check Accept header
- [ ] Return 406 if not accepting JSON
- [ ] Register in Kernel.php
- [ ] Test middleware

---

#### 41. `ThrottleApi.php`
**Path:** `/atelier-arome-api/app/Http/Middleware/ThrottleApi.php`

**Purpose:** Rate limiting for API endpoints

**Key Features:**
- 60 requests per minute per IP
- Different limits for authenticated vs guest users
- Custom response format for rate limit exceeded

**Response Format (429 Too Many Requests):
```json
{
  "success": false,
  "message": "Too many requests. Please try again later.",
  "retry_after": 60
}
```

**Implementation Checklist:**
- [ ] Create ThrottleApi middleware extending ThrottleRequests
- [ ] Configure rate limit (60 per minute)
- [ ] Override buildResponse method
- [ ] Add retry_after header
- [ ] Register in Kernel.php
- [ ] Test rate limiting

---

### Phase 2.5 Completion Checklist

- [ ] EnsureJsonResponse middleware created
- [ ] ThrottleApi middleware created
- [ ] Middleware registered in Kernel.php
- [ ] Rate limit tested
- [ ] Accept header validation tested

---

### **Phase 2.6: API Routes** (1 hour - Day 3, Afternoon)

**Objective:** Define versioned RESTful API endpoints

---

## 📁 Phase 2.6: API Routes — Files to Create

#### 42. `api.php`
**Path:** `/atelier-arome-api/routes/api.php`

**Purpose:** Define all API endpoints with proper middleware and versioning

**Key Features:**
- API v1 prefix (`/api/v1/`)
- Route grouping by resource
- Middleware application (auth, throttle, JSON response)
- RESTful naming conventions

**Route Structure:**
```php
Route::middleware(['api', 'throttle:api'])->group(function () {
    Route::prefix('v1')->group(function () {
        // Products (public)
        Route::apiResource('products', ProductController::class)->only(['index', 'show']);
        Route::get('products/search', [ProductController::class, 'search']);
        
        // Categories (public)
        Route::apiResource('categories', CategoryController::class)->only(['index', 'show']);
        
        // Tags (public)
        Route::apiResource('tags', TagController::class)->only(['index']);
        
        // Cart (public - guest + auth)
        Route::middleware('auth:sanctum')->group(function () {
            Route::apiResource('cart', CartController::class);
        });
        
        // Auth routes (public)
        Route::prefix('auth')->group(function () {
            Route::post('register', [AuthController::class, 'register']);
            Route::post('login', [AuthController::class, 'login']);
            Route::post('logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
            Route::get('me', [AuthController::class, 'me'])->middleware('auth:sanctum');
        });
        
        // Protected routes
        Route::middleware('auth:sanctum')->group(function () {
            // User account
            Route::prefix('user')->group(function () {
                Route::apiResource('addresses', AddressController::class);
                Route::apiResource('orders', OrderController::class)->only(['index', 'show']);
                Route::apiResource('wishlists', WishlistController::class);
                Route::apiResource('reviews', ReviewController::class)->only(['index', 'store']);
            });
        });
    });
});
```

**Implementation Checklist:**
- [ ] Create routes/api.php file
- [ ] Add api and throttle middleware groups
- [ ] Add v1 prefix
- [ ] Define product routes (index, show, search)
- [ ] Define category routes (index, show)
- [ ] Define tag routes (index)
- [ ] Define auth routes (register, login, logout, me)
- [ ] Define cart routes (with Sanctum auth)
- [ ] Define user account routes (addresses, orders, wishlists, reviews)
- [ ] Test all routes with `php artisan route:list`
- [ ] Verify middleware application
- [ ] Verify RESTful naming conventions

---

### Phase 2.6 Completion Checklist

- [ ] routes/api.php file created
- [ ] All endpoints defined with proper structure
- [ ] API v1 prefix applied
- [ ] Middleware applied appropriately
- [ ] RESTful conventions followed
- [ ] All routes verified with route:list

---

## 🎯 Phase 2 Complete Validation Checklist

### Phase 2.1: Eloquent Models
- [ ] 13 new models created (Address, Cart, CartItem, Order, OrderItem, Payment, Coupon, CouponUsage, Review, Wishlist, WishlistItem, NewsletterSubscriber, InventoryMovement)
- [ ] 9 existing models updated (User, Product, Category, ProductVariant, ProductImage, Tag, Inventory, Setting, Testimonial)
- [ ] All models use HasUuids trait
- [ ] All relationships implemented (belongsTo, hasMany, belongsToMany, hasOne)
- [ ] All scopes added where appropriate
- [ ] All accessors added where appropriate
- [ ] All helper methods added where appropriate
- [ ] User model updated with HasApiTokens trait
- [ ] All models tested

### Phase 2.2: API Resources
- [ ] 14 resource classes created (User, Product, ProductVariant, ProductImage, Category, Tag, Cart, CartItem, Order, OrderItem, Address, Coupon, Review, Testimonial, ProductCollection)
- [ ] All resources extend JsonResource
- [ ] Sensitive fields hidden
- [ ] Relationships eager loaded in toArray methods
- [ ] Currency fields formatted (SGD prefix)
- [ ] Dates formatted (ISO 8601)
- [ ] All resources tested

### Phase 2.3: Base Controller
- [ ] Base Controller updated with common methods
- [ ] Success response format standardized
- [ ] Error response format standardized
- [ ] Pagination response format defined
- [ ] All methods tested

### Phase 2.4: Exception Handler
- [ ] Exception handler customized
- [ ] ValidationException handled (422)
- [ ] ModelNotFoundException handled (404)
- [ ] AuthenticationException handled (401)
- [ ] AuthorizationException handled (403)
- [ ] Custom exceptions created if needed
- [ ] All exceptions logged
- [ ] All exception scenarios tested

### Phase 2.5: Middleware
- [ ] EnsureJsonResponse middleware created
- [ ] ThrottleApi middleware created
- [ ] Middleware registered in Kernel.php
- [ ] Rate limit tested
- [ ] Accept header validation tested

### Phase 2.6: API Routes
- [ ] routes/api.php file created
- [ ] All endpoints defined with proper structure
- [ ] API v1 prefix applied
- [ ] Middleware applied appropriately
- [ ] RESTful conventions followed
- [ ] All routes verified

### Overall Phase 2 Validation
- [ ] All models (22 total) created and updated
- [ ] All relationships implemented
- [ ] All resources (14 total) created
- [ ] Base controller enhanced
- [ ] Exception handler customized
- [ ] Middleware created and registered
- [ ] API routes defined
- [ ] Code passes Laravel Pint
- [ ] Code passes PHPStan static analysis
- [ ] All features tested with sample data
- [ ] Documentation updated (if needed)

---

## ⏱️ Estimated Timeline

| Sub-Phase | Duration | Day | Time |
|-------------|----------|------|-------|
| **Phase 2.1: Eloquent Models** | 2 hours | Day 1 | Morning (9:00 - 11:00) |
| **Phase 2.2: API Resources** | 3 hours | Day 1 | Afternoon (13:00 - 16:00) |
| **Phase 2.3: Base Controller** | 2 hours | Day 2 | Morning (9:00 - 11:00) |
| **Phase 2.4: Exception Handler** | 1 hour | Day 2 | Afternoon (13:00 - 14:00) |
| **Phase 2.5: Middleware** | 1 hour | Day 3 | Morning (9:00 - 10:00) |
| **Phase 2.6: API Routes** | 1 hour | Day 3 | Afternoon (14:00 - 15:00) |
| **Buffer/Testing** | 6 hours | Day 3 | Afternoon (15:00 - 21:00) |

**Total Estimated Time:** 16 hours over 3 days (well within the 5-day Phase 2 allocation)

---

## 🚨 Risk Assessment & Mitigation Strategies

### Risk 1: Circular Dependencies in Model Relationships

**Description:** Models reference each other, creating potential circular dependency issues.

**Mitigation:**
- Define models in isolation
- Use lazy loading where appropriate
- Test each model independently before integrating
- Document relationship directionality

### Risk 2: Performance Issues with Eager Loading

**Description:** Over-eager loading could cause performance degradation.

**Mitigation:**
- Use selective eager loading (only load needed relationships)
- Implement lazy loading for heavy relationships
- Use pagination for large collections
- Profile query performance with Laravel Telescope

### Risk 3: API Response Size

**Description:** Large responses could slow down frontend.

**Mitigation:**
- Implement pagination (15 items per page default)
- Use API Resource to limit exposed fields
- Consider field selection via query parameters (?fields=id,name,slug)
- Implement HTTP caching headers (ETag, Last-Modified)

### Risk 4: Validation Logic Complexity

**Description:** Complex validation rules could lead to inconsistent error responses.

**Mitigation:**
- Use Laravel FormRequest classes for validation
- Centralize validation rules in Request classes
- Test all validation scenarios
- Document validation error formats

---

## 📝 Notes & Assumptions

1. **Database Schema:** Assumed all 26 migrations are correct and executed (verified via database inspection)
2. **Test Data:** Assumed existing seeders will provide sufficient test data
3. **Laravel Sanctum:** Will be installed via Composer in Phase 5 (Authentication)
4. **API Versioning:** Using v1 prefix to allow future versions (v2, v3)
5. **Rate Limiting:** Defaulting to 60 requests/minute as per Singapore best practices
6. **Currency Formatting:** Using SGD prefix with 2 decimal places (e.g., "SGD 45.00")
7. **Date Formatting:** Using ISO 8601 standard (e.g., "2024-01-09T12:00:00Z")
8. **UUID Strategy:** Using HasUuids trait for all main tables (verified in existing models)
9. **Snapshot Pattern:** Order items store snapshots (verified in database schema)
10. **Soft Deletes:** Applied to critical tables (users, products, orders, addresses, reviews)

---

## ✅ Readiness Checklist

Before beginning Phase 2 implementation, confirm:

- [ ] Phase 1 (Foundation) is 100% complete ✅
- [ ] All 26 database tables are created and migrated ✅
- [ ] All seeders have been executed ✅
- [ ] PostgreSQL 16 is running and healthy ✅
- [ ] Redis 7.x is running and healthy ✅
- [ ] Laravel 12.44.0 is installed and configured ✅
- [ ] Composer dependencies are installed ✅
- [ ] Current codebase state has been validated ✅
- [ ] This implementation plan has been reviewed and approved ⏳

---

**Document Created:** January 9, 2026
**Next Step:** Await user approval of this implementation plan before proceeding with Phase 2 execution
**Current Status:** PLAN MODE - Read-only, awaiting approval

