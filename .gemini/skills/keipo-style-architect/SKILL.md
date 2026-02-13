---
name: keipo-style-architect
description: Expert in creating Apple-style minimal yet high-fidelity web pages with 3D effects, ambient glow, and mobile-first responsive layouts. Use when developing or refactoring the KEIPO Housewares website or similar luxury trade portfolios.
---

# Keipo Style Architect

This skill ensures that all web development tasks adhere to the specific aesthetic and functional standards established for the KEIPO Housewares project.

## Design Philosophy: "Modern Precision"

- **Minimalist Core**: Start with Apple-style white space and clean typography.
- **3D Depth**: Use multi-layered `text-shadow` for "Raised 3D" logos and titles. Use `perspective` and `translateZ` for interactive 3D cards.
- **Atmospheric Lighting**: Add `radial-gradient` glow backgrounds behind key elements to create a premium, high-tech aura.
- **Glance Appeal**: Every section should be readable at a glance with high-contrast headers and subtle sub-text.

## Technical Standards

### 1. Responsive & Mobile-First
- Always use `clamp()` for font sizes (e.g., `font-size: clamp(32px, 8vw, 64px)`).
- Hide complex menu lists on screens smaller than `768px` (md) and replace them with a `menu-button-3d`.
- Use a slide-in Drawer for navigation and language selection on mobile.
- Ensure all grid layouts switch to 1-column stacks on mobile with at least `32px` gap to prevent overlapping.

### 2. 3D & Glow Implementation
- **Logo/Title**: Apply 3-5 layers of `text-shadow` with decreasing lightness.
- **Hover States**: Always include subtle 3D tilts (`rotateX`, `rotateY`) and lift-up animations.
- **Ambient Glow**: Use low-opacity primary colors (e.g., `#0066cc05`) with high blur filters for background depth.

### 3. Keipo Contextual Logic
- **Age Calculation**: Always calculate company age as `new Date().getFullYear() - 1988`.
- **Multilingual Support**: Integrate with `src/translations/index.ts` for all text. Support 7 languages: EN, KO, TR, DE, CN, JP, IN.
- **Logistics Focus**: Emphasize real trade data, shipments, and partner verification metrics.

## Workflows

### Creating a New Section
1. Define the purpose (e.g., "Sustainability").
2. Apply the `section-padding` and `max-container` classes for consistency.
3. Use `SectionReveal` for scroll animations.
4. Implement content using the 3D Glow or Apple Card patterns.
5. Verify mobile responsiveness before finalizing.

### Adding New Language
1. Update `Language` type in `src/translations/index.ts`.
2. Add full translation set including `nav`, `history`, and `categories` keys.
3. Update the `languages` array in `page.tsx` to include the new button.
