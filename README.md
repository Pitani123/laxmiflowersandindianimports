# Laxmi Flowers and Indian Imports

A full-stack e-commerce website for an Indian flower shop and imports store, built with Next.js 15, Supabase, and Stripe.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Payments:** Stripe Checkout
- **Deployment:** Vercel

---

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── actions/                  # Server Actions
│   │   └── stripe.ts             # Stripe checkout session creation
│   ├── admin/                    # Admin dashboard
│   │   ├── login/page.tsx        # Admin login page
│   │   └── page.tsx              # Admin dashboard (product management)
│   ├── checkout/                 # Checkout flow
│   │   ├── page.tsx              # Cart review & Stripe checkout
│   │   └── success/page.tsx      # Order confirmation page
│   ├── products/                 # Product category pages
│   │   ├── page.tsx              # All products overview
│   │   ├── fresh-flowers/        # Fresh flowers category
│   │   ├── garlands/             # Garlands category
│   │   ├── bouquets/             # Bouquets category
│   │   ├── gift-items/           # Gift items category
│   │   ├── silver-items/         # Silver items category
│   │   ├── brass-items/          # Brass items category
│   │   ├── jewellery/            # Jewellery category
│   │   ├── traditional-dresses/  # Traditional dresses category
│   │   ├── snacks/               # Snacks category
│   │   ├── wedding-decorations/  # Wedding decorations category
│   │   └── rentals/              # Rentals category
│   ├── locations/page.tsx        # Store locations
│   ├── our-story/page.tsx        # About us page
│   ├── our-team/page.tsx         # Team page
│   ├── reviews/page.tsx          # Customer reviews
│   ├── services/page.tsx         # Services offered
│   ├── globals.css               # Global styles & design tokens
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Homepage
│
├── components/                   # React components
│   ├── admin/
│   │   └── dashboard.tsx         # Admin product management UI
│   ├── ui/                       # shadcn/ui components
│   ├── add-to-cart-button.tsx    # Add to cart button component
│   ├── cart-drawer.tsx           # Shopping cart drawer
│   ├── footer.tsx                # Site footer
│   ├── navigation.tsx            # Site navigation with cart
│   ├── product-card.tsx          # Product display card
│   └── product-grid.tsx          # Product grid layout
│
├── lib/                          # Utilities and configurations
│   ├── supabase/
│   │   ├── client.ts             # Browser Supabase client
│   │   ├── server.ts             # Server Supabase client
│   │   └── middleware.ts         # Supabase session handling
│   ├── cart-context.tsx          # Shopping cart React Context
│   ├── products.ts               # Product data & fetching utilities
│   ├── stripe.ts                 # Stripe client initialization
│   ├── types.ts                  # TypeScript type definitions
│   └── utils.ts                  # Utility functions (cn, etc.)
│
├── scripts/                      # Database scripts
│   ├── 001_create_products.sql   # Create products table + RLS policies
│   └── 002_seed_products.sql     # Seed initial product data
│
├── public/                       # Static assets
│   └── images/                   # Product and site images
│
├── middleware.ts                 # Next.js middleware (auth refresh)
└── package.json                  # Dependencies
```

---

## Environment Variables

### Required for Full Functionality

| Variable | Description | Source |
|----------|-------------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Supabase Dashboard |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Supabase Dashboard |
| `STRIPE_SECRET_KEY` | Stripe secret key | Stripe Dashboard |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Stripe Dashboard |

### Optional

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` | Auth redirect URL for development | `window.location.origin` |

---

## Feature Guide: What Files to Modify

### 1. Adding a New Product Category

**Files to modify:**
```
app/products/[new-category]/page.tsx  # Create new category page
lib/products.ts                        # Add fallback products for category
components/navigation.tsx              # Add to navigation menu
```

**Steps:**
1. Create a new folder under `app/products/` with your category slug
2. Copy an existing category page (e.g., `fresh-flowers/page.tsx`) as template
3. Update the category name, description, and image
4. Add fallback products in `lib/products.ts` under `FALLBACK_PRODUCTS`
5. Add navigation link in `components/navigation.tsx`

---

### 2. Modifying Products (Database)

**Files involved:**
```
lib/products.ts                        # Fetch functions & fallback data
scripts/002_seed_products.sql          # Database seed data
components/admin/dashboard.tsx         # Admin UI for product management
```

**Options:**
- **Via Admin Dashboard:** Go to `/admin`, login, and use the UI to add/edit/delete products
- **Via Database:** Run SQL scripts or use Supabase Dashboard
- **Fallback Products:** Edit `FALLBACK_PRODUCTS` in `lib/products.ts` (works without database)

---

### 3. Customizing the Shopping Cart

**Files to modify:**
```
lib/cart-context.tsx                   # Cart state management & logic
components/cart-drawer.tsx             # Cart UI/appearance
components/add-to-cart-button.tsx      # Add to cart button behavior
```

**Cart Context provides:**
- `addItem(product)` - Add item to cart
- `removeItem(productId)` - Remove item from cart
- `updateQuantity(productId, quantity)` - Update item quantity
- `clearCart()` - Empty the cart
- `items` - Array of cart items
- `totalItems` - Total item count
- `totalPrice` - Total price in cents

---

### 4. Modifying Checkout Flow

**Files to modify:**
```
app/checkout/page.tsx                  # Checkout page UI
app/checkout/success/page.tsx          # Success page after payment
app/actions/stripe.ts                  # Stripe session creation
```

**To customize:**
- Edit `app/checkout/page.tsx` to change cart review UI
- Edit `app/actions/stripe.ts` to modify Stripe checkout options
- Edit `app/checkout/success/page.tsx` to customize confirmation page

---

### 5. Adding New Pages

**Files to create:**
```
app/[page-name]/page.tsx               # New page component
```

**Files to modify:**
```
components/navigation.tsx              # Add navigation link
components/footer.tsx                  # Add footer link (optional)
```

---

### 6. Changing Site Styling/Theme

**Files to modify:**
```
app/globals.css                        # Design tokens & CSS variables
app/layout.tsx                         # Fonts configuration
```

**Design tokens in `globals.css`:**
```css
--background          # Page background color
--foreground          # Primary text color
--primary             # Brand/accent color
--secondary           # Secondary color
--muted               # Muted backgrounds
--accent              # Accent color
--border              # Border color
--ring                # Focus ring color
```

---

### 7. Modifying Navigation

**Files to modify:**
```
components/navigation.tsx              # Main navigation component
```

**Navigation includes:**
- Desktop menu with dropdowns
- Mobile hamburger menu
- Shopping cart icon with item count
- Phone/contact link

---

### 8. Admin Dashboard Customization

**Files to modify:**
```
app/admin/page.tsx                     # Admin page wrapper
app/admin/login/page.tsx               # Admin login page
components/admin/dashboard.tsx         # Dashboard UI & functionality
```

**Admin features:**
- Login with Supabase Auth
- View all products in table
- Add new products
- Edit existing products
- Delete products
- View statistics (total products, categories, avg price)

---

### 9. Database Schema Changes

**Files to modify:**
```
scripts/                               # Add new SQL migration files
lib/types.ts                           # Update TypeScript types
```

**Naming convention:** `XXX_description.sql` (e.g., `003_add_inventory.sql`)

**Current schema (`products` table):**
```sql
id            UUID PRIMARY KEY
name          TEXT NOT NULL
description   TEXT
price_in_cents INTEGER NOT NULL
image         TEXT
category      TEXT NOT NULL
created_at    TIMESTAMPTZ
updated_at    TIMESTAMPTZ
```

---

## Database Setup

### Run Migrations

Execute the SQL scripts in order:

1. **Create products table:**
   ```sql
   -- Run scripts/001_create_products.sql
   ```

2. **Seed initial products:**
   ```sql
   -- Run scripts/002_seed_products.sql
   ```

### RLS Policies

The products table has Row Level Security enabled:
- **SELECT:** Anyone can view products (public)
- **INSERT/UPDATE/DELETE:** Only authenticated users (admin)

---

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

---

## Deployment

This project is configured for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel Dashboard
3. Deploy

---

## File Quick Reference

| Task | Primary File(s) |
|------|-----------------|
| Add product category | `app/products/[slug]/page.tsx`, `lib/products.ts` |
| Modify cart behavior | `lib/cart-context.tsx` |
| Change cart UI | `components/cart-drawer.tsx` |
| Update checkout | `app/checkout/page.tsx`, `app/actions/stripe.ts` |
| Edit navigation | `components/navigation.tsx` |
| Change colors/theme | `app/globals.css` |
| Modify footer | `components/footer.tsx` |
| Admin functionality | `components/admin/dashboard.tsx` |
| Database schema | `scripts/*.sql`, `lib/types.ts` |
| Product fetching | `lib/products.ts` |
| Authentication | `lib/supabase/*.ts`, `middleware.ts` |
