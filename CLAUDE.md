# AWAR Design System — Contributing Guide

## Project overview

`@awar.dev/ui` is a terminal-inspired React component library built on **shadcn/ui + Tailwind v4**. The AWAR aesthetic is layered on top of shadcn's defaults via CSS variable overrides, global style rules, and per-component class edits.

**Stack:** React 19, Tailwind CSS v4, Radix UI (via `radix-ui` unified package), class-variance-authority, lucide-react, cmdk.

## Key files

| File | Purpose |
|------|---------|
| `src/styles/globals.css` | Theme layer — palette, radius, font, scrollbars, global overrides |
| `src/components/ui/` | shadcn components (customized) |
| `src/components/awar/` | AWAR-specific components (FigletText, Logo, LogoLockup) |
| `src/provider.tsx` | AWARProvider + useAWARTheme (dark/light toggle) |
| `src/index.ts` | Library public API — every export lives here |
| `src/lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `src/App.tsx` | Dev showcase (not shipped in library) |
| `vite.config.lib.ts` | Library build config |
| `tsconfig.lib.json` | Declaration emit config (excludes App.tsx, main.tsx) |

## AWAR aesthetic rules

These are the non-negotiable styling constraints. Every component must follow them.

### 1. Zero border-radius

Every element must have sharp edges. No rounded corners anywhere.

- `globals.css` sets all `--radius-*` tokens to `0px` and enforces `border-radius: 0 !important` globally
- When adding shadcn components via CLI, you still get `rounded-md`, `rounded-lg`, `rounded-full` in the markup — the global override handles this at runtime, but you should still be aware of it
- Never add `rounded-*` classes to new AWAR components
- The `rounded-[Npx]` hardcoded syntax also gets overridden by the global rule

### 2. No shadows

Elevation is communicated through **surface tone shifts**, not shadows.

- `globals.css` enforces `box-shadow: none !important` globally
- When adding new shadcn components via CLI, **remove all `shadow-*` classes** from the component source (`shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`)
- This is code hygiene — the global override already works, but leftover shadow classes are misleading
- For elevation, use progressively lighter surface colors: `background` → `card` → `secondary` → `popover`

### 3. Monospace only

Both `--font-sans` and `--font-mono` are mapped to the same JetBrains Mono stack.

- Never use `font-sans` expecting a proportional font
- For ASCII art (FigletText), use `ui-monospace, monospace` instead of JetBrains Mono — JetBrains Mono has non-uniform widths for box-drawing/block characters (█╔╗═║ etc.)

### 4. Compact density

Default component height is `h-7` (28px) with a 4px-based spacing scale.

| Size | Height | Tailwind |
|------|--------|----------|
| xs | 20px | `h-5` |
| sm | 24px | `h-6` |
| default | 28px | `h-7` |
| lg | 36px | `h-9` |

When adding a new shadcn component via CLI, apply the density pass:
- Replace `h-9` / `h-10` defaults with `h-7`
- Replace `h-8` with `h-6`
- Tighten padding: `p-6` → `p-4`, `gap-6` → `gap-4`, `px-3` → `px-2` where sensible
- Use `text-sm` as the base text size (matches 14px body)

### 5. No hardcoded colors

- Never use `bg-white`, `bg-black`, `text-white`, or hex colors in component classes
- Use semantic tokens: `bg-background`, `bg-foreground`, `bg-primary`, `text-primary-foreground`, etc.
- Exception: overlay backdrops (`bg-black/50`) are acceptable for dialog/sheet overlays

### 6. Dark mode is default

- `:root` contains the dark palette, `.light` class switches to light mode
- The custom variant is `@custom-variant dark (&:is(.dark *))` but dark is the default state (no `.dark` class needed on `<html>`)
- AWARProvider manages the class on `document.documentElement`

## Adding a new shadcn component

```bash
npx shadcn@latest add <component-name>
```

After installing, apply these fixups to the new file in `src/components/ui/`:

1. **Remove all `shadow-*` classes** — search for `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg` and delete them
2. **Apply compact density** — reduce heights to the scale above, tighten padding/gaps
3. **Replace `bg-white`** — change to `bg-background`
4. **Remove hardcoded `rounded-[Npx]`** — the global override handles it, but explicit hardcoded values are confusing
5. **Add a `data-slot` attribute** — shadcn components already have these; verify the new one does too
6. **Export from `src/index.ts`** — add the component and its types to the library entry point
7. **Add to `src/App.tsx`** — include a demo section in the showcase app
8. **Verify in both themes** — check dark and light mode in the dev server

## Adding an AWAR-specific component

Place it in `src/components/awar/`. Follow these conventions:

- Use `cn()` for class merging
- Accept `className` prop and spread `...props`
- Add `data-slot="component-name"` to the root element
- If the component needs CSS that can't be expressed in Tailwind (e.g., `background-clip: text`), create a sibling `.css` file and use `data-slot` selectors instead of CSS Modules
- Export from `src/components/awar/index.ts` and `src/index.ts`

## Palette reference

### Dark mode (default)
| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#0D0B0A` | Root surface (neutral-950) |
| `--card` | `#171312` | Card surface (neutral-900) |
| `--secondary` | `#252020` | Raised surface (neutral-800) |
| `--popover` | `#3A3230` | Overlay surface (neutral-700) |
| `--foreground` | `#F0EBE8` | Primary text (neutral-100) |
| `--muted-foreground` | `#736661` | Secondary text (neutral-500) |
| `--primary` | `#FF9944` | Interactive / amber-500 |
| `--accent` | `#773333` | Brand / maroon-500 |
| `--destructive` | `#CC3333` | Error / red-500 |
| `--border` | `#3A3230` | Borders (neutral-700) |
| `--ring` | `#FF9944` | Focus rings (amber-500) |

### Light mode
| Token | Hex | Role |
|-------|-----|------|
| `--background` | `#FAF7F5` | Root surface (neutral-50) |
| `--card` | `#FFFFFF` | Card surface |
| `--secondary` | `#F0EBE8` | Raised surface (neutral-100) |
| `--popover` | `#DBD4D0` | Overlay surface (neutral-200) |
| `--foreground` | `#171312` | Primary text (neutral-900) |
| `--primary` | `#B85E10` | Interactive / amber-700 |
| `--accent` | `#773333` | Brand / maroon-500 |
| `--border` | `#DBD4D0` | Borders (neutral-200) |

## Surface elevation order

No shadows. Depth is expressed purely through background tone:

```
background → card → secondary → popover
(darkest)                      (lightest)
```

In dark mode this goes lighter as you "raise." In light mode the popover/secondary are subtly tinted neutrals against the white card.

## Build & dev commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server (showcase app) |
| `npm run build:lib` | Clean + Vite library build + tsc declarations |
| `npm run typecheck` | TypeScript check (`tsc -b`) |
| `npm run build` | App build (not library) |

## CSS gotchas

- **`background-clip: text` does not work as a React inline style** — React strips it. Put it in a CSS file and target via `data-slot` attribute.
- **`rounded-full` in Tailwind v4 maps to `9999px`**, not to `var(--radius-full)`. The global `border-radius: 0 !important` catches this, but it's why we needed the override in the first place.
- **The `background` CSS shorthand resets `background-clip`** to `border-box`. Use `backgroundImage` (not `background`) in inline styles when combining with `background-clip: text`.
- **JetBrains Mono box-drawing characters** (█╔╗═ etc.) are ~8.625px wide while ASCII/space is ~8.4px at 14px. The CSS `ch` unit (~8.39px) matches neither. Use `ui-monospace, monospace` for ASCII art.
