# Migrate Startpage to Astro

## Why
The current startpage implementation is a static HTML/CSS site that lacks modern tooling benefits. Migrating to Astro will provide better development experience, maintainability, and a foundation for future enhancements while preserving the existing design and functionality.

## What Changes
- Convert static HTML startpage to Astro component architecture
- Refactor CSS to use modern best practices (CSS custom properties, improved responsive patterns)
- Improve HTML semantic structure and accessibility
- Set up proper font file serving through Astro's public directory
- Maintain existing visual design (Catppuccin Macchiato color scheme, JetBrains Mono font)
- Preserve all existing link categories and navigation structure

## Impact
- **Affected specs**: `ui-layout` (new), `visual-design` (new)
- **Affected code**:
  - `src/pages/index.astro` - new main page component
  - `public/` directory - font and image assets
  - Removal of old HTML/CSS files after migration
