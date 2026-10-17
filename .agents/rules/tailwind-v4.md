# Tailwind CSS v4 & Styling Guidelines

## 1. Tailwind v4 Architecture
- **No `tailwind.config.js`**: Tailwind CSS v4 is configured directly in CSS files using the `@theme` directive, not JavaScript config files.
- **Theme Definition**: All design tokens (custom colors, fonts, keyframes, box shadows) must be centralized in `app/globals.css` under `@theme`.

## 2. Amatu Café Design Tokens
The project uses the following established design system tokens:

### Brand Colors (`amatu-*`)
- `amatu-charcoal`: `#141210` (Primary dark background)
- `amatu-deep`: `#1C1917` (Secondary dark background / section contrast)
- `amatu-gold`: `#D49B4B` (Primary brand accent)
- `amatu-gold-light`: `#E5A853` (Hover & highlighted states)
- `amatu-gold-dark`: `#A06E28` (Pressed / subdued gold)
- `amatu-linen`: `#F6F2EB` (Warm light background for high-contrast sections)
- `amatu-linen-dark`: `#EBE3D5` (Borders and subtle warm accents)
- `amatu-cherry`: `#8E2829` (Coffee fruit / berry highlights)
- `amatu-bean`: `#2A1A12` (Earthy deep tone)

### Typography
- **Serif (`font-serif`)**: IBM Plex Serif (Headings, titles, prices)
- **Sans (`font-sans`)**: IBM Plex Sans (Body text, UI labels, navigations, CTAs)

### Animations & Utilities
- Floating animation: `animate-float`
- Drop shadow: `product-shadow`
- Marquee track for FICCA carousel: `marquee-track`, `marquee-container`
