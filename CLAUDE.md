# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Untitled UI React** component library built with:

- **Next.js 16** with Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4.1** for styling
- **React Aria Components** as the foundation for accessibility and behavior

## Development Commands
 
```bash
npm run dev    # Start Next.js dev server with Turbopack (http://localhost:3000)
npm run build  # Build for production
npm run start  # Start production server
```

## Critical Conventions

### React Aria Import Naming

All imports from `react-aria-components` MUST be prefixed with `Aria*`:

```typescript
// Correct
import { Button as AriaButton, TextField as AriaTextField } from "react-aria-components";

// Incorrect
import { Button, TextField } from "react-aria-components";
```

### File Naming

All files use **kebab-case**: `date-picker.tsx`, `user-profile.tsx`, `api-client.ts`

### Color System

MUST use semantic color classes instead of raw Tailwind colors:

```typescript
// Correct
text-primary, text-secondary, bg-primary, border-secondary, fg-brand-primary

// Incorrect
text-gray-900, text-gray-600, bg-blue-700
```

Key semantic colors:
- **Text**: `text-primary`, `text-secondary`, `text-tertiary`, `text-disabled`, `text-brand-secondary`
- **Background**: `bg-primary`, `bg-secondary`, `bg-brand-solid`, `bg-error-primary`
- **Border**: `border-primary`, `border-secondary`, `border-brand`, `border-error`
- **Foreground** (icons): `fg-primary`, `fg-secondary`, `fg-brand-primary`, `fg-error-secondary`

Brand colors can be customized in `src/styles/theme.css` via `--color-brand-*` variables (25-950 scale).

## Architecture

### Component Structure

```
src/components/
├── base/           # Core UI: Button, Input, Select, Checkbox, Avatar, Badge, etc.
├── application/    # Complex: DatePicker, Modal, Pagination, Table, Tabs
├── foundations/    # Design tokens: FeaturedIcon, payment icons, social icons
└── marketing/      # Marketing-specific components
```

### Component Patterns

**Compound Components** - Complex components use dot notation:
```typescript
<Select items={users}>
  {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
</Select>

<Select.ComboBox items={users}>...</Select.ComboBox>
```

**Style Organization** with `sortCx`:
```typescript
export const styles = sortCx({
    common: { root: "base-classes", icon: "icon-classes" },
    sizes: { sm: { root: "..." }, md: { root: "..." } },
    colors: { primary: { root: "..." }, secondary: { root: "..." } },
});
```

**Common Props Pattern**:
- Size: `"sm" | "md" | "lg" | "xl"`
- State: `isDisabled`, `isLoading`, `isInvalid`, `isRequired`
- Icons: `iconLeading`, `iconTrailing` (accept `FC` or `ReactNode`)

### Key Utilities

- `cx()` from `@/utils/cx` - Tailwind class merging (extended tailwind-merge)
- `sortCx()` - Style object organization for Tailwind IntelliSense
- `isReactComponent()` from `@/utils/is-react-component` - Component type checking

### Path Alias

`@/*` maps to `./src/*`

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

Icon sizes: `size-4` (16px), `size-5` (20px), `size-6` (24px)

## CSS Transitions

For hover states and small interactions:
```typescript
className="transition duration-100 ease-linear"
```

## Most Used Components

### Button
```typescript
import { Button } from "@/components/base/buttons/button";

<Button size="md" color="primary" iconLeading={Check}>Save</Button>
<Button color="primary-destructive" isLoading>Delete</Button>
<Button href="/settings" color="link-color">Settings</Button>  // Link behavior
```

Colors: `primary`, `secondary`, `tertiary`, `link-gray`, `link-color`, `primary-destructive`, `secondary-destructive`, `tertiary-destructive`, `link-destructive`

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

Themes: `light`, `gradient`, `dark`, `outline`, `modern` (gray only), `modern-neue` (gray only)

## Shipping Configuration

**Shipping Details (France & International):**
- Fast shipping with tracking
- Estimated delivery time: 2 to 4 business days
- Shipping fee: €3.90
- Free shipping on orders over €20

**Coverage:** France and International delivery available

**Currency:** EUR (€)

**Implementation Notes:**
- Free shipping threshold: €20
- Shipping cost: €3.90
- Same shipping terms for France and international orders
- All prices displayed in EUR format
- Shipping info shown on: Product pages, Cart, Checkout, Order confirmation, FAQ, Shipping policy page
