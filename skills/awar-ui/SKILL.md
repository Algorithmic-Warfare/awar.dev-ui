---
name: awar-ui
description: "Passive AWAR design system awareness — enforces terminal-inspired aesthetics (zero border-radius, no shadows, monospace, compact density) when writing, reviewing, or styling React components with @awar.dev/ui or shadcn/ui"
user-invocable: false
---

# AWAR Design System — Passive Style Guide

You are working with `@awar.dev/ui`, a terminal-inspired React component library built on **shadcn/ui + Tailwind CSS v4**. Every component and style decision must follow the AWAR aesthetic. This skill provides the rules, component inventory, and usage patterns.

## Non-Negotiable Aesthetic Rules

### 1. Zero Border-Radius
Every element has sharp edges. No rounded corners anywhere.
- `globals.css` enforces `border-radius: 0 !important` globally
- Never add `rounded-*` classes to AWAR components
- shadcn components may ship with `rounded-md`/`rounded-lg` — the global override handles it at runtime

### 2. No Shadows
Elevation is communicated through **surface tone shifts**, not shadows.
- `globals.css` enforces `box-shadow: none !important` globally
- When adding shadcn components, **remove all `shadow-*` classes** from source (code hygiene)
- Depth uses progressively lighter backgrounds: `background` → `card` → `secondary` → `popover`

### 3. Monospace Only
Both `--font-sans` and `--font-mono` map to the same JetBrains Mono stack.
- Never use `font-sans` expecting proportional text
- For ASCII art / box-drawing characters, use `ui-monospace, monospace` — JetBrains Mono has non-uniform widths for Unicode block characters

### 4. Compact Density
Default height is `h-7` (28px) with a 4px-based spacing scale.

| Size | Height | Tailwind |
|------|--------|----------|
| xs | 20px | `h-5` |
| sm | 24px | `h-6` |
| **default** | **28px** | **`h-7`** |
| lg | 36px | `h-9` |

### 5. Semantic Color Tokens Only
- Never use `bg-white`, `bg-black`, `text-white`, or raw hex in component classes
- Use: `bg-background`, `bg-foreground`, `bg-primary`, `text-primary-foreground`, etc.
- Exception: overlay backdrops (`bg-black/50`) for dialog/sheet overlays

### 6. Dark Mode is Default
- `:root` contains the dark palette (no `.dark` class needed)
- `.light` class on `<html>` activates light mode
- Custom variant: `@custom-variant dark (&:is(.dark *))`
- `AWARProvider` manages the theme class on `document.documentElement`

## Surface Elevation Order

No shadows. Depth = background tone:

```
background → card → secondary → popover
(darkest)                      (lightest)
```

Dark mode goes lighter as surfaces "raise." Light mode uses subtly tinted neutrals against white card.

## Palette Reference

| Token | Dark | Light | Role |
|-------|------|-------|------|
| `--background` | `#0D0B0A` | `#FAF7F5` | Root surface |
| `--card` | `#171312` | `#FFFFFF` | Card surface |
| `--secondary` | `#252020` | `#F0EBE8` | Raised surface |
| `--popover` | `#3A3230` | `#DBD4D0` | Overlay surface |
| `--foreground` | `#F0EBE8` | `#171312` | Primary text |
| `--muted-foreground` | `#736661` | — | Secondary text |
| `--primary` | `#FF9944` | `#B85E10` | Interactive / amber |
| `--accent` | `#773333` | `#773333` | Brand / maroon |
| `--destructive` | `#CC3333` | `#CC3333` | Error / red |
| `--border` | `#3A3230` | `#DBD4D0` | Borders |
| `--ring` | `#FF9944` | — | Focus rings |

## Adding a New shadcn Component — Fixup Checklist

After `npx shadcn@latest add <component>`, apply these fixups:

1. **Remove all `shadow-*` classes** — delete `shadow-xs`, `shadow-sm`, `shadow-md`, `shadow-lg`
2. **Apply compact density** — `h-9`/`h-10` → `h-7`, `h-8` → `h-6`, tighten `p-6` → `p-4`, `gap-6` → `gap-4`
3. **Replace `bg-white`** → `bg-background`
4. **Remove hardcoded `rounded-[Npx]`** — the global override handles it, but explicit values confuse readers
5. **Verify `data-slot` attribute** — shadcn v2 components should have these
6. **Export from `src/index.ts`** — add the component and its types
7. **Add to showcase** — create a demo page in `src/app/pages/`
8. **Verify both themes** — check dark and light mode

## Adding an AWAR-Specific Component

Place in `src/components/awar/`. Conventions:
- Use `cn()` for class merging
- Accept `className` prop, spread `...props`
- Add `data-slot="component-name"` to root element
- If CSS can't be expressed in Tailwind (e.g., `background-clip: text`), use a sibling `.css` file with `data-slot` selectors
- Export from barrel `src/components/awar/index.ts` and `src/index.ts`

## Component Inventory

For the full component reference with props and usage examples, see [components.md](components.md).

**Quick reference by category:**

### Inputs
`Button` · `Input` · `NumberInput` · `Textarea` · `Select` · `Checkbox` · `RadioGroup` · `Switch` · `Slider` · `Toggle` · `ToggleGroup` · `Calendar` · `InputOTP` · `Form`

### Display
`Card` · `Table` (with `TableSortHead`) · `Badge` · `Avatar` · `Separator` · `Skeleton` · `AspectRatio`

### Feedback
`Alert` · `Progress` · `Sonner` (toasts)

### Overlays
`Dialog` · `AlertDialog` · `DropdownMenu` · `HoverCard` · `Popover` · `Sheet` · `Tooltip`

### Navigation
`Breadcrumb` · `NavigationMenu` · `Tabs`

### Layout
`Accordion` · `Collapsible` · `Resizable` · `ScrollArea` · `Command` · `Sidebar`

### Visualization
`GraphCanvas` · `GraphEdge` · `GraphLegend` · `ChartContainer`

### Branding
`FigletText` · `Logo` · `LogoLockup`

## Quick Start Pattern

```tsx
import { AWARProvider, Button, Input } from '@awar.dev/ui'
import '@awar.dev/ui/styles'

function App() {
  return (
    <AWARProvider defaultTheme="dark">
      <Button>Execute</Button>
      <Input placeholder="Enter command..." />
    </AWARProvider>
  )
}
```

## CSS Gotchas

- **`background-clip: text`** does not work as a React inline style — put it in a `.css` file
- **`background` shorthand** resets `background-clip` to `border-box` — use `backgroundImage` instead
- **`rounded-full`** in Tailwind v4 maps to `9999px`, not `var(--radius-full)` — global override catches it
- **JetBrains Mono box-drawing chars** (█╔╗═) are ~8.625px wide vs ASCII ~8.4px at 14px — use `ui-monospace, monospace` for ASCII art

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Radix UI · Recharts · React Flow (@xyflow/react)
