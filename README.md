# Laxmi Flowers & Indian Imports

A full-stack e-commerce website for an Indian flower shop and imports business, built with Next.js 15, Supabase, and Stripe.

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              CLIENT (Browser)                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │   Pages     │  │ Components  │  │ Cart Context│  │   Theme Provider    │ │
│  │  (App Dir)  │  │    (UI)     │  │  (Client)   │  │     (Client)        │ │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘ │
└─────────┼────────────────┼────────────────┼────────────────────┼────────────┘
          │                │                │                    │
          ▼                ▼                ▼                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                           NEXT.JS 15 SERVER                                  │
│  ┌─────────────────────────────────────────────────────────────────────┐    │
│  │                        Server Components                             │    │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────────┐   │    │
│  │  │   Products   │  │   Checkout   │  │      Server Actions      │   │    │
│  │  │    Pages     │  │    Pages     │  │  (checkout.ts, stripe)   │   │    │
│  │  └──────┬───────┘  └──────┬───────┘  └────────────┬─────────────┘   │    │
│  └─────────┼─────────────────┼───────────────────────┼─────────────────┘    │
│            │                 │                       │                       │
│  ┌─────────▼─────────────────▼───────────────────────▼─────────────────┐    │
│  │                         LIB LAYER                                    │    │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────────┐ │    │
│  │  │db-products │  │ db-orders  │  │   stripe   │  │      sms       │ │    │
│  │  │   .ts      │  │    .ts     │  │    .ts     │  │      .ts       │ │    │
│  │  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘  └───────┬────────┘ │    │
│  └────────┼───────────────┼───────────────┼─────────────────┼──────────┘    │
└───────────┼───────────────┼───────────────┼─────────────────┼────────────────┘
            │               │               │                 │
            ▼               ▼               ▼                 ▼
┌───────────────────┐ ┌───────────────┐ ┌─────────────┐ ┌─────────────┐
│     SUPABASE      │ │   SUPABASE    │ │   STRIPE    │ │   TWILIO    │
│    (Products)     │ │   (Orders)    │ │  (Payments) │ │    (SMS)    │
│  ┌─────────────┐  │ │ ┌───────────┐ │ │             │ │             │
│  │  products   │  │ │ │  orders   │ │ │  Checkout   │ │   Order     │
│  │   table     │  │ │ │   table   │ │ │  Sessions   │ │   Alerts    │
│  └─────────────┘  │ │ └───────────┘ │ │             │ │             │
│  ┌─────────────┐  │ │ ┌───────────┐ │ │             │ │             │
│  │     RLS     │  │ │ │order_items│ │ │             │ │             │
│  │  Policies   │  │ │ │   table   │ │ │             │ │             │
│  └─────────────┘  │ │ └───────────┘ │ │             │ │             │
└───────────────────┘ └───────────────┘ └─────────────┘ └─────────────┘
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Payments**: Stripe Checkout
- **SMS**: Twilio (optional)
- **Deployment**: Vercel

---

## Environment Variables

### Required Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side) | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret API key | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |

### Feature Flags

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_ENABLE_ADD_TO_CART_BUTTON` | Enable/disable shopping cart functionality | `true` (enabled) |
| `ENABLE_SMS` | Enable SMS notifications for orders | `false` (disabled) |

### SMS Configuration (Optional)

| Variable | Description | Required for SMS |
|----------|-------------|------------------|
| `TWILIO_ACCOUNT_SID` | Twilio Account SID | Yes |
| `TWILIO_AUTH_TOKEN` | Twilio Auth Token | Yes |
| `TWILIO_PHONE_NUMBER` | Twilio phone number (format: +1234567890) | Yes |
| `STORE_PHONE_NUMBER` | Store owner phone for order alerts | Yes |

---

## Database Schema

### Products Table

```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  price_in_cents INTEGER NOT NULL DEFAULT 100,
  category TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Orders Table

```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address TEXT,
  total_in_cents INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  stripe_session_id TEXT,
  sms_sent BOOLEAN DEFAULT false,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Order Items Table

```sql
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id),
  product_name TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  price_in_cents INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### Row Level Security (RLS)

All tables have RLS enabled with public read access for products and orders.

---

## Project Structure

### `/app` - Pages and Routes

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout with providers (Theme, Cart) and metadata |
| `app/page.tsx` | Homepage with hero, featured products, and services |
| `app/products/page.tsx` | Main products listing page |
| `app/products/[category]/page.tsx` | Category-specific product pages (garlands, bouquets, etc.) |
| `app/checkout/page.tsx` | Checkout page with customer form and order summary |
| `app/checkout/success/page.tsx` | Order success confirmation page |
| `app/locations/page.tsx` | Store locations (Aubrey, TX and Edison, NJ) |
| `app/our-story/page.tsx` | About the business and history |
| `app/our-team/page.tsx` | Team members page |
| `app/services/page.tsx` | Services offered |
| `app/reviews/page.tsx` | Customer reviews |

### `/app/actions` - Server Actions

| File | Purpose |
|------|---------|
| `app/actions/checkout.ts` | Creates orders in database and Stripe checkout sessions |

### `/components` - React Components

| File | Purpose |
|------|---------|
| `components/navigation.tsx` | Main navigation header with logo, links, and cart icon |
| `components/footer.tsx` | Site footer with contact info, links, and social media |
| `components/product-card.tsx` | Product display card with image, price, and add-to-cart |
| `components/add-to-cart-button.tsx` | Add to cart button (respects feature flag) |
| `components/cart-icon.tsx` | Shopping cart icon with item count badge |
| `components/cart-drawer.tsx` | Slide-out cart drawer with order summary |
| `components/theme-provider.tsx` | Theme context provider (light/dark mode) |
| `components/ui/*` | shadcn/ui component library |

### `/lib` - Utilities and Business Logic

| File | Purpose |
|------|---------|
| `lib/config.ts` | Environment variable configuration and feature flags |
| `lib/types.ts` | Shared TypeScript interfaces (Product, Order, Cart types) |
| `lib/cart-context.tsx` | Shopping cart state management (React Context) |
| `lib/db-products.ts` | Database queries for products (server-only) |
| `lib/db-orders.ts` | Database queries for orders (server-only) |
| `lib/stripe.ts` | Stripe client initialization |
| `lib/sms.ts` | Twilio SMS notification functions |
| `lib/utils.ts` | Utility functions (cn for classnames) |
| `lib/supabase/client.ts` | Supabase browser client |
| `lib/supabase/server.ts` | Supabase server client |

### `/scripts` - Database Migrations

| File | Purpose |
|------|---------|
| `scripts/001_create_products.sql` | Creates products table with RLS |
| `scripts/001_create_products_orders.sql` | Creates orders and order_items tables |

### `/public/images` - Static Assets

| File | Purpose |
|------|---------|
| `logo.jpg` | Business logo (Goddess Lakshmi) |
| `team-*.jpg` | Team member photos |
| `products/*.jpg` | Product images |
| `store-*.jpg` | Store location images |

---

## Features

### Shopping Cart

- **Feature Flag**: `NEXT_PUBLIC_ENABLE_ADD_TO_CART_BUTTON`
- When enabled: Shows "Add to Cart" buttons, cart icon, and checkout flow
- When disabled: Hides all cart functionality (catalog-only mode)
- Cart state persists in localStorage

### Checkout Flow

1. Customer adds products to cart
2. Proceeds to checkout page
3. Fills in contact details (name, email, phone required)
4. Submits order
5. Redirected to Stripe Checkout
6. On success, order saved to database
7. Optional SMS notification sent

### SMS Notifications

When enabled, sends:
- **To Customer**: Order confirmation with order ID and total
- **To Store Owner**: New order alert with customer details

---

## Product Categories

| Category | Slug | Description |
|----------|------|-------------|
| Garlands | `garlands` | Wedding garlands, jasmine malas, marigold garlands |
| Bouquets | `bouquets` | Rose bouquets, mixed flowers, birthday arrangements |
| Fresh Flowers | `fresh-flowers` | Marigolds, jasmine, rose petals, puja flowers |
| Wedding Decorations | `wedding-decorations` | Mandap, stage backdrop, car decoration |
| Gift Items | `gift-items` | Brass diyas, puja thalis, idols |
| Silver Items | `silver-items` | Silver kalash, diyas, puja thalis |
| Brass Items | `brass-items` | Brass kalash, bells, aarti stands |
| Jewellery | `jewellery` | Jhumkas, bangles, temple jewelry |
| Traditional Dresses | `traditional-dresses` | Sarees, lehengas, kurtas |
| Snacks | `snacks` | Festival sweets and fasting foods |
| Rentals | `rentals` | Mandap, brass items, decorative umbrellas |

---

## Store Locations

### Main Store - Aubrey, TX
- **Address**: 2881 FM1385, Aubrey, TX 76227, USA
- **Phone**: 682-439-6439
- **Email**: laxmiflowers.aubrey@gmail.com
- **Hours**: Mon-Sun 10:00 AM - 11:00 PM

### Edison, NJ Store
- **Address**: 1655 Oak Tree Rd, Edison, NJ, USA
- **Phone**: 732-799-9567
- **Email**: laxmiflowers.edison@gmail.com
- **Hours**: Mon-Sun 10:00 AM - 8:30 PM

---

## Development

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/laxmi-flowers.git

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

### Database Setup

1. Create a Supabase project
2. Run the migration scripts in `/scripts` folder
3. Seed products using the provided SQL or Supabase dashboard

### Stripe Setup

1. Create a Stripe account
2. Get API keys from Stripe Dashboard
3. Configure webhook endpoints for production

---

## Common Modifications Guide

This section explains which files to modify for common changes.

### Changing Product Prices

Products are stored in the **Supabase database**. To change prices:

1. **Via Supabase Dashboard**:
   - Go to Supabase Dashboard > Table Editor > `products`
   - Edit the `price_in_cents` column (prices are in cents, so $10.00 = 1000)

2. **Via SQL**:
   ```sql
   -- Update a single product price
   UPDATE products SET price_in_cents = 1500 WHERE name = 'Jasmine Mala';
   
   -- Update all products in a category
   UPDATE products SET price_in_cents = 2000 WHERE category = 'garlands';
   ```

**Files involved**: None (database only) - prices are fetched dynamically from `lib/db-products.ts`

### Adding New Products

1. **Via Supabase Dashboard**: Add rows to the `products` table
2. **Via SQL Migration**: Create a new file in `/scripts/` folder

**Required fields**:
| Field | Type | Description |
|-------|------|-------------|
| `name` | TEXT | Product name |
| `description` | TEXT | Product description |
| `price_in_cents` | INTEGER | Price in cents (e.g., 1000 = $10.00) |
| `category` | TEXT | Must match existing category slug |
| `image_url` | TEXT | Path like `/images/products/product-name.jpg` |
| `is_active` | BOOLEAN | Set to `true` to display |

**Files to update**:
- Add product image to `/public/images/products/`

### Adding a New Product Category

**Files to modify**:

1. **Create new category page**: `app/products/[new-category]/page.tsx`
   - Copy an existing category page (e.g., `garlands/page.tsx`)
   - Update the category slug, title, and description

2. **Update navigation**: `components/navigation.tsx`
   - Add new category to the `productCategories` array (around line 15-30)

3. **Update products page**: `app/products/page.tsx`
   - Add new category to the categories list

4. **Update footer**: `components/footer.tsx`
   - Add new category link if desired

5. **Add products to database**:
   ```sql
   INSERT INTO products (name, description, price_in_cents, category, image_url)
   VALUES ('New Product', 'Description', 1000, 'new-category', '/images/products/new.jpg');
   ```

### Changing Store Contact Information

**Files to modify**:

| Change | File(s) |
|--------|---------|
| Store addresses, phone, email, hours | `app/locations/page.tsx` (lines 8-40) |
| Footer contact info | `components/footer.tsx` (lines 80-115) |
| Navigation phone number | `components/navigation.tsx` (lines 138, 247) |
| Email for careers/contact | `app/our-team/page.tsx` (line 136) |

### Changing Team Members

**File to modify**: `app/our-team/page.tsx`

1. Update the `teamMembers` array (around lines 8-30)
2. Add/replace team photos in `/public/images/` (e.g., `team-name.jpg`)

```typescript
const teamMembers = [
  {
    name: "New Person",
    role: "Job Title",
    bio: "Bio description...",
    image: "/images/team-newperson.jpg",
  },
  // ... more members
]
```

### Changing Business Branding

| Change | File(s) |
|--------|---------|
| Logo image | Replace `/public/images/logo.jpg` |
| Business name | `components/navigation.tsx` (line 48), `components/footer.tsx` (line 43) |
| Tagline | `components/navigation.tsx` (line 49) |
| Colors/Theme | `app/globals.css` (CSS variables) |
| Fonts | `app/layout.tsx` (font imports) |
| Meta title/description | `app/layout.tsx` (metadata object) |

### Enabling/Disabling Shopping Cart

**Environment variable**: `NEXT_PUBLIC_ENABLE_ADD_TO_CART_BUTTON`

| Value | Effect |
|-------|--------|
| Not set or `true` | Cart enabled (Add to Cart buttons visible) |
| `false` | Cart disabled (catalog-only mode) |

**Files that check this flag**:
- `lib/config.ts` - Configuration definition
- `lib/cart-context.tsx` - Cart context provider
- `components/add-to-cart-button.tsx` - Add to Cart button visibility
- `components/cart-icon.tsx` - Cart icon visibility
- `components/cart-drawer.tsx` - Cart drawer visibility

### Modifying Checkout Flow

**Files involved**:

| File | Purpose |
|------|---------|
| `app/checkout/page.tsx` | Checkout form UI, customer details collection |
| `app/actions/checkout.ts` | Server action: creates order in DB, initiates Stripe |
| `lib/db-orders.ts` | Database functions for order creation |
| `app/checkout/success/page.tsx` | Success page after payment |

**To add a new checkout field**:
1. Add form field in `app/checkout/page.tsx`
2. Update validation in `app/actions/checkout.ts`
3. Add column to `orders` table if storing in database

### Configuring SMS Notifications

**Files involved**:
- `lib/config.ts` - SMS configuration
- `lib/sms.ts` - SMS sending functions
- `app/actions/checkout.ts` - Triggers SMS after order

**Environment variables**:
```env
ENABLE_SMS=true
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+1234567890
STORE_PHONE_NUMBER=+1234567890
```

### Adding New Pages

1. Create new folder in `/app/` with `page.tsx`
2. Add link to navigation in `components/navigation.tsx`
3. Add link to footer in `components/footer.tsx` if needed

**Example structure**:
```
app/
  new-page/
    page.tsx      # Main page component
    loading.tsx   # Optional loading state
```

### Modifying Homepage Sections

**File**: `app/page.tsx`

| Section | Approximate Lines |
|---------|-------------------|
| Hero banner | 20-80 |
| Featured products | 85-150 |
| Services overview | 155-250 |
| Testimonials | 255-350 |
| CTA section | 355-400 |

---

## File Reference Quick Lookup

### By Change Type

| I want to change... | Edit this file |
|---------------------|----------------|
| Product prices | Supabase database |
| Add new products | Supabase database + add images |
| Navigation links | `components/navigation.tsx` |
| Footer content | `components/footer.tsx` |
| Homepage content | `app/page.tsx` |
| Store locations | `app/locations/page.tsx` |
| Team members | `app/our-team/page.tsx` |
| Business story | `app/our-story/page.tsx` |
| Services offered | `app/services/page.tsx` |
| Color scheme | `app/globals.css` |
| Logo | `/public/images/logo.jpg` |
| Meta/SEO | `app/layout.tsx` |
| Cart behavior | `lib/cart-context.tsx` |
| Checkout process | `app/checkout/page.tsx`, `app/actions/checkout.ts` |
| SMS messages | `lib/sms.ts` |

### Key Configuration Files

| File | Contains |
|------|----------|
| `lib/config.ts` | All feature flags and environment variable access |
| `lib/types.ts` | TypeScript interfaces for Product, Order, Cart |
| `app/globals.css` | CSS variables, theme colors, global styles |
| `app/layout.tsx` | Root layout, providers, metadata, fonts |
| `tailwind.config.ts` | Tailwind configuration |
| `next.config.mjs` | Next.js configuration |

---

## Testing

### Test Stripe Payments

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **3D Secure**: `4000 0000 0000 3220`
- **Declined**: `4000 0000 0000 9995`

Expiry: Any future date | CVC: Any 3 digits | ZIP: Any 5 digits

### Test SMS

1. Set up Twilio account
2. Configure environment variables
3. Use Twilio test credentials for development

---

## Team

- **Praveen Kamuju** - Founder & Owner
- **Sirisha Kamuju** - Co-Owner, Operations & Head Florist
- **Manju** - Head Florist & Garland Specialist
- **Roopa** - Events & Rentals Specialist

---

## License

Copyright 2024 Laxmi Flowers & Indian Imports. All rights reserved.
