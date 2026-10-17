---
name: prototype-migration
description: Workflow for translating raw HTML and Tailwind prototype code into modular, accessible Next.js 16 Server and Client components.
---

# Prototype to Next.js 16 Migration Workflow

Follow this systematic process when migrating sections from `AmatuCafe/Bocetos/PrototipoWeb` into `amatu-cafe`:

## Step 1: Data Separation
1. Never hardcode extensive static lists or product catalogs directly inside component JSX.
2. Extract product catalogs, navigation links, and testimonial data into dedicated TypeScript constants in `data/` (e.g., `data/products.ts`, `data/navigation.ts`).
3. Define strict TypeScript interfaces in `types/` for all extracted data structures.

## Step 2: Atomic UI Primitives First
1. Identify repeated buttons, badges, section titles, and cards in the prototype.
2. Build reusable primitives in `components/ui/` with explicit props (e.g., `variant`, `size`, `className` overrides using `clsx` or `tailwind-merge` if present).

## Step 3: Section Assembly (Server vs. Client Partitioning)
1. Keep the main section wrapper (`components/sections/<SectionName>.tsx`) as a React Server Component.
2. If the section contains interactivity (e.g., product tabs, modal open/close, mobile hamburger menu, interactive carousel pause):
   - Encapsulate only the interactive state in an isolated Client Component inside `components/features/` or `components/sections/` with `'use client'`.
   - Pass serializable server data or children down to the client component.

## Step 4: Asset & Image Migration
1. Copy image assets from `AmatuCafe/Bocetos/PrototipoWeb/assets/` to `public/images/`.
2. Replace `<img>` elements with `next/image` (`<Image />`).
3. Always supply explicit `alt` descriptions, dimensions (`width`/`height`), or `fill` with appropriate `sizes` and `priority` for above-the-fold images (Hero).

## Step 5: Verification
1. Run `pnpm lint` to check for syntax and accessibility violations.
2. Test responsive behavior across mobile (`< 768px`) and desktop (`>= 1024px`).
