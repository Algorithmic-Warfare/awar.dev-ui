# Contributing to @awar.dev/ui

## Getting Started

```bash
git clone https://github.com/Algorithmic-Warfare/awar.dev-ui.git
cd awar.dev-ui
npm install
npm run dev
```

The showcase app runs at `http://localhost:5173` and hot-reloads as you edit.

## Adding a Component

Every component follows a four-file structure:

```
src/components/<category>/<Name>/
  <Name>.tsx          # Component implementation (forwardRef)
  <Name>.types.ts     # Props and type exports
  <Name>.module.css   # CSS Modules with semantic tokens
  index.ts            # Barrel export
```

### Wiring

1. **Export** from `src/index.ts` — both the component and its types.
2. **Registry** — add an entry to `src/showcase/registry.ts` with slug, name, category, description, props, and usage.
3. **Showcase page** — create `src/showcase/pages/<Name>Page.tsx` demonstrating all variants, accents, and composition patterns.
4. **Page routing** — add the page to `src/showcase/pages/index.ts`.

### Conventions

- **Semantic tokens only.** Use `--aw-sys-*` and `--aw-ref-*` variables, never raw color or spacing values.
- **CSS Modules with camelCase.** Vite is configured with `localsConvention: 'camelCase'`.
- **forwardRef.** All components forward refs and spread remaining props onto the root element.
- **Variant/accent pattern.** Follow the existing prop naming: `variant` for structural differences, `accent` for color mappings, `size` for dimensions.
- **No runtime dependencies.** Components use only React and Radix UI (peer deps). No utility libraries.

## Commit Style

This project uses [conventional commits](https://www.conventionalcommits.org/):

```
feat: add Tabs component with vertical and horizontal variants
fix: correct Badge padding in compact size
refactor: extract shared border logic from Card and Frame
docs: add Tabs to system spec
chore: update Radix dependencies
```

Types that appear in the changelog: `feat`, `fix`, `refactor`, `perf`.
Types that are hidden: `docs`, `chore`, `style`, `test`.

## Typecheck and Build

```bash
# Typecheck library (excludes showcase)
npx tsc --project tsconfig.lib.json --noEmit

# Build library
npm run build:lib

# Build showcase
npx vite build
```

CI runs all three on every PR.

## Pull Requests

- Fill out the PR template checklist.
- Include a screenshot of your showcase page.
- CI uploads a `showcase-preview` artifact — the maintainer will download it to review your component visually.
