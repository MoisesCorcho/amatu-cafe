# UI/UX Design System & Editorial Visual Standards

## 1. Brand Aesthetic & Archetype
Amatu Café is a premium specialty coffee brand from Huila, Colombia ($1.850+ msnm). The visual language embodies **Dark Luxury E-commerce** and **Neo-Editorial Design**, inspired by high-end coffee roasters (e.g., Onyx Coffee Lab, Blue Bottle Craft) and luxury lifestyle publications.

### Anti-Patterns to Avoid ("AI Template Syndrome")
- ❌ **No generic SaaS/crypto pill buttons**: Avoid `rounded-full` on text action buttons.
- ❌ **No toy-like bulbous containers**: Avoid `rounded-3xl` or excessive radiuses on product and story cards.
- ❌ **No glowing neon halos**: Do not use uncontrolled multi-colored blurs or pulsing indicator badges without semantic purpose.
- ❌ **No hardcoded hex codes**: Never use raw hex values in components (e.g., `#932619`); always reference Tailwind v4 tokens.

---

## 2. Border Radius Contract (Geometric Discipline)

| Token / Class | Use Cases | Rules & Constraints |
| :--- | :--- | :--- |
| **`rounded-sm`** (2px - 4px) | **Brand Signature**: Action buttons, inputs, segmented controls, origin/tasting bars, icon controls | Mandatory on all CTAs, navigation controls, and tabular highlights. |
| **`rounded-lg` / `rounded-xl`** (8px - 12px) | Thumbnail selectors, inner image containers, small disclosure elements | Used for nested secondary elements. |
| **`rounded-2xl`** (16px) | Max allowed container radius: Modal dialogs, Bottom-sheets, Product cards | Gives an architectural, disciplined frame. |
| **`rounded-full`** (Circular) | Strictly functional micro-elements | **Only** for circular badges (e.g., cart count `w-5 h-5`), status indicator dots (`w-2 h-2`), or circular image avatars. |

---

## 3. Button Hierarchy & Component Contract (`components/ui/button.tsx`)

All buttons must consume the centralized primitive in `components/ui/button.tsx` or adhere to its strict styling:

- **Primary Action (Conversion / CTA)**:
  - Class: `bg-amatu-cherry hover:bg-amatu-cherry-light text-stone-100 hover:text-white font-semibold rounded-sm transition-colors shadow-lg shadow-amatu-cherry/25 hover:shadow-amatu-cherry/40`
  - Usage: Main purchase triggers, catalog CTA, checkout buttons.
- **Primary Gold (Brand Accent / Highlights)**:
  - Class: `bg-amatu-gold hover:bg-amatu-gold-light text-stone-950 font-semibold rounded-sm transition-colors shadow-lg shadow-amatu-gold/20`
  - Usage: Navbar action button, special edition highlights, key brand actions.
- **Secondary / Outline**:
  - Class: `border border-white/20 hover:border-white text-stone-300 hover:text-white font-semibold rounded-sm transition-colors`
  - Usage: Informational CTAs ("Nuestra Historia", "Ver Detalles").
- **Icon / Utility Controls**:
  - Class: `p-2.5 rounded-sm bg-white/5 border border-white/10 text-stone-200 hover:text-white hover:border-amatu-gold/50 transition-all`
  - Usage: Cart trigger, mobile menu button, modal close button.

---

## 4. Surfaces, Cards & Data Blocks

### Product & Content Cards
- Base surface: `bg-amatu-deep border border-white/10 rounded-2xl overflow-hidden hover:border-amatu-gold/40 transition-all duration-300`
- Image showcase box: `bg-white/[0.02] rounded-xl overflow-hidden`

### Solid Accent Data Bars (Editorial Style)
- Container: `bg-amatu-gold rounded-sm divide-x divide-black/15 shadow-lg shadow-amatu-gold/15`
- Label: `text-[10px] sm:text-xs uppercase tracking-wider text-black/80 font-bold`
- Value: `font-serif text-sm sm:text-base md:text-lg text-black font-bold`

---

## 5. Typography Pairings
- **Headings & Narrative (`font-serif`)**: IBM Plex Serif. Reserved for `h1`, `h2`, `h3`, poetic storytelling excerpts, and currency prices.
- **Interface & Data (`font-sans`)**: IBM Plex Sans. Used for body text, button labels, navigation links, and technical specifications.
- **Technical Metadata**: Always uppercase with wide tracking: `text-[10px] sm:text-xs uppercase tracking-wider font-bold`.
