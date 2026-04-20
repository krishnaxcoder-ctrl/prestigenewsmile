# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Prestige Smile** — production website for a professional teeth whitening clinic in Geneva / Ambilly. It is a marketing site, e-commerce shop, booking flow, customer account area, and admin blog CMS rolled into a single Next.js App Router project. Built on top of the **Untitled UI React** starter kit.

Stack:
- **Next.js 16** (App Router, Turbopack)
- **React 19** + **TypeScript 5.9** (strict)
- **Tailwind CSS v4.1** with semantic color tokens
- **React Aria Components** for accessible primitives
- **Supabase** (`@supabase/supabase-js`) for auth, database, and storage
- **nodemailer** + Zoho SMTP for transactional email (contact form, order confirmations)
- **motion** for animations, **qr-code-styling** for QR rendering

## Development Commands

```bash
npm run dev    # Next dev server with Turbopack (http://localhost:3000)
npm run build  # Production build
npm run start  # Production server
```

There are no `lint` or `test` scripts. Type-check via `npx tsc --noEmit`. Code style is enforced through Prettier with `@trivago/prettier-plugin-sort-imports` and `prettier-plugin-tailwindcss`.

## Required Environment

- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase client (see `src/lib/supabase.ts`)
- `ZOHO_EMAIL`, `ZOHO_PASSWORD` — Zoho SMTP for `src/app/api/contact` and `src/app/api/send-order-email`

## Architecture

### App Router Layout

```
src/app/
├── layout.tsx           # Root: fonts (Jost / Playfair / Tangerine), JSON-LD schemas, GA, providers
├── page.tsx             # Home
├── home-screen.tsx      # Composed home sections
├── components/          # Marketing/page-level sections (header, footer, hero-carousel, …)
├── shop/, product/, cart/, checkout/    # E-commerce flow
├── booking/, services/, gift-cards/     # Clinic flow
├── account/             # Logged-in user area: orders, addresses, wishlist, settings
├── admin/               # Admin-only blog CMS (gated via profiles.is_admin)
├── articles/            # Public blog reader
├── api/contact/         # POST → sends contact email via Zoho SMTP
├── api/send-order-email # POST → order confirmation email
├── login/, register/    # Supabase Auth
├── about/, contact/, faq/, reviews/, shipping/, refunds/, privacy/, terms/, cookies/, legal-notice/, disclaimer/
├── sitemap.ts, robots.ts
```

`src/app/layout.tsx` injects extensive structured data (LocalBusiness/HealthAndBeautyBusiness, WebSite, Organization, SiteNavigationElement) and a Google Tag Manager snippet. Preserve these when editing the layout — they drive SEO and the Google sitelinks/knowledge panel for the clinic.

### Data Layer (`src/lib/supabase.ts`)

Single file that owns: the Supabase client, all TypeScript domain types, and all CRUD helpers. When adding data access, extend this file rather than calling `supabase.from(...)` ad-hoc in components.

Domain entities and tables: `profiles`, `products`, `cart_items`, `orders`, `order_items`, `customers`, `wishlist`, `addresses`, `blog_posts`. Generated types live in `src/lib/database.types.ts`.

Key conventions to respect:
- **Cart sessions**: anonymous carts are keyed by a `session_id` from `getSessionId()` (localStorage). RLS enforces the format `session_<...>` and string length > 20 — `addToCart` and `saveCustomer` validate this client-side before insert/update. Quantity is clamped to 1–99.
- **Wishlist / addresses**: keyed by Supabase auth `user_id`. `addToWishlist` swallows the `23505` duplicate-key error by design.
- **Default address**: `addAddress`, `updateAddress`, and `setDefaultAddress` unset other defaults for the user before applying — keep this invariant.
- **Orders**: `createOrder` generates `ORD-<timestamp>-<rand>` order numbers and writes order + items in two steps (no transaction).
- **Admin gating**: `checkIsAdmin(userId)` reads `profiles.is_admin`. Admin routes (`src/app/admin/**`) must guard with this.
- **Blog**: `BlogPost.content` is `BlogContentBlock[]` (paragraph / heading / list / callout) stored as JSON. `getPublishedBlogPostBySlug` filters on `status = 'published'`.

### Component Structure

```
src/components/
├── base/           # Core UI: button, input, select, checkbox, avatar, badges, toast, …
├── application/    # Composed: date-picker, modals, pagination, table, tabs, app-navigation, …
├── foundations/    # Design tokens: featured-icon, payment icons, social icons
├── marketing/      # Marketing-specific blocks
└── shared-assets/  # Static SVGs, illustrations
```

Page-level marketing sections live in `src/app/components/` (header, footer, hero, etc.), not in `src/components/marketing/`. Reusable primitives belong under `src/components/`.

### Providers

`src/providers/router-provider.tsx` wires React Aria's RouterProvider to Next's router so `<Link>`-style React Aria components navigate correctly. `src/providers/theme.tsx` is currently a passthrough placeholder.

### Path Alias

`@/*` → `./src/*` (see `tsconfig.json`).

## Critical Conventions

### React Aria Imports — MUST be `Aria*`-prefixed

```typescript
// Correct
import { Button as AriaButton, TextField as AriaTextField } from "react-aria-components";

// Incorrect
import { Button, TextField } from "react-aria-components";
```

### File Naming

All files use **kebab-case**: `date-picker.tsx`, `user-profile.tsx`, `api-client.ts`.

### Color System — semantic tokens only

```typescript
// Correct
text-primary, text-secondary, bg-primary, border-secondary, fg-brand-primary

// Incorrect
text-gray-900, text-gray-600, bg-blue-700
```

Categories:
- **Text**: `text-primary`, `text-secondary`, `text-tertiary`, `text-disabled`, `text-brand-secondary`
- **Background**: `bg-primary`, `bg-secondary`, `bg-brand-solid`, `bg-error-primary`
- **Border**: `border-primary`, `border-secondary`, `border-brand`, `border-error`
- **Foreground (icons)**: `fg-primary`, `fg-secondary`, `fg-brand-primary`, `fg-error-secondary`

Brand palette is defined in `src/styles/theme.css` via `--color-brand-*` (25–950 scale).

### Component Patterns

**Compound components** with dot notation:
```typescript
<Select items={users}>
  {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
</Select>
```

**Style organization** with `sortCx` (enables Tailwind IntelliSense across nested style maps):
```typescript
export const styles = sortCx({
    common: { root: "base-classes", icon: "icon-classes" },
    sizes:  { sm: { root: "..." }, md: { root: "..." } },
    colors: { primary: { root: "..." }, secondary: { root: "..." } },
});
```

**Standard prop shape**:
- Size: `"sm" | "md" | "lg" | "xl"`
- State: `isDisabled`, `isLoading`, `isInvalid`, `isRequired`
- Icons: `iconLeading`, `iconTrailing` (accept `FC` or `ReactNode`)

### Utilities

- `cx()` from `@/utils/cx` — extended `tailwind-merge`
- `sortCx()` — style-map ordering for IntelliSense
- `isReactComponent()` from `@/utils/is-react-component` — distinguish component reference vs. element

## Icon Usage

```typescript
import { Home01, Settings01 } from "@untitledui/icons";

// As component reference (preferred)
<Button iconLeading={ChevronDown}>Options</Button>

// As element (must include data-icon)
<Button iconLeading={<ChevronDown data-icon className="size-4" />}>Options</Button>

// Standalone
<Home01 className="size-5 text-fg-secondary" />
```

Sizes: `size-4` (16px), `size-5` (20px), `size-6` (24px).

## CSS Transitions

```typescript
className="transition duration-100 ease-linear"
```

## Most Used Components

### Button
```typescript
import { Button } from "@/components/base/buttons/button";

<Button size="md" color="primary" iconLeading={Check}>Save</Button>
<Button color="primary-destructive" isLoading>Delete</Button>
<Button href="/settings" color="link-color">Settings</Button>
```
Colors: `primary`, `secondary`, `tertiary`, `link-gray`, `link-color`, `primary-destructive`, `secondary-destructive`, `tertiary-destructive`, `link-destructive`.

### Input
```typescript
import { Input } from "@/components/base/input/input";
<Input label="Email" icon={Mail01} hint="Helper text" isRequired isInvalid />
```

### Select
```typescript
import { Select } from "@/components/base/select/select";

<Select label="User" items={users}>
  {(item) => <Select.Item id={item.id} supportingText={item.email}>{item.name}</Select.Item>}
</Select>
```

### FeaturedIcon
```typescript
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
<FeaturedIcon icon={CheckCircle} color="success" theme="light" size="lg" />
```
Themes: `light`, `gradient`, `dark`, `outline`, `modern` (gray only), `modern-neue` (gray only).

## Shipping Configuration

E-commerce shipping (France & International):
- Fast shipping with tracking, 2–4 business days
- Flat rate **€3.90**, free over **€20**
- Currency: **EUR (€)** for products (the clinic's *services* are quoted in **CHF** in the JSON-LD `OfferCatalog` — keep the two separate)
- Shipping info surfaces on: product pages, cart, checkout, order confirmation, FAQ, shipping policy page
