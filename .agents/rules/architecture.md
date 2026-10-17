# Architecture & Component Guidelines (Next.js 16 & React 19)

## 1. Component Paradigm
- **Server Components by Default**: All layout, page, and static visual sections must be React Server Components (RSC). Do not add `'use client'` unless interactive client state or browser APIs are required.
- **Client Boundary Isolation**: Push `'use client'` down to the smallest possible leaf component (e.g., `MobileMenuButton`, `ProductModal`, `FilterTabs`). Never mark an entire page or large composite section as a client component just because one button is interactive.
- **Container / Presentational Pattern**: Separate data or state orchestration from pure presentation. Keep UI components stateless and deterministic whenever feasible.

## 2. Directory Structure
```
app/
  layout.tsx           # Root layout (fonts, metadata, root providers)
  page.tsx             # Main landing page assembling section components
  globals.css          # Tailwind CSS v4 theme and custom utilities
components/
  ui/                  # Atomic primitives (Button, Badge, Container, Modal)
  sections/            # Composite page sections (Hero, Story, Catalog, About, Footer, Navbar)
  features/            # Interactive domain-specific units (e.g., catalog filters, cart drawer)
types/                 # Shared TypeScript interfaces and domain models
data/                  # Static product fixtures, coffee origins, and content constants
```

## 3. TypeScript & Quality Standards
- Strict typing on all components: declare explicit `interface <ComponentName>Props`.
- Disallow `any`. Define domain interfaces in `types/` (e.g., `Product`, `Category`, `Testimonial`).
- Use Next.js `<Image />` for all imagery with explicit `width`, `height`, or `fill` plus responsive `sizes`. Never use raw `<img>`.
- Accessibility first: accessible labels on icon-only buttons, proper heading hierarchy (`h1` -> `h2` -> `h3`), and ARIA attributes for modals and collapsible disclosures.
