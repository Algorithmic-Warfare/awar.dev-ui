## [2.1.1] - 2026-03-11

### 🚀 Features

- Add passive AWAR UI marketplace skill

### 📚 Documentation

- Rewrite README with v2 component list and screenshots
## [2.1.0] - 2026-03-11

### 🚀 Features

- Scaffold shadcn/ui + Tailwind v4 with AWAR theme layer
- Add 25 shadcn/ui components
- Add spacing and density showcase to dev app
- Add AWAR branding components (FigletText, Logo, LogoLockup)
- Add AWARProvider, useAWARTheme, and library entry point
- Add 12 shadcn/ui components for DAO protocol UI
- Add sidebar-navigated component explorer with 38 demo pages
- Add graph canvas React Flow wrapper with AWAR theming
- Add chart, calendar, form, and input-otp components
- Add number input with stepper buttons and unit label
- Add sortable table headers and style native input controls

### 🐛 Bug Fixes

- Resolve pre-existing TypeScript errors in showcase
- Replace next-themes with useAWARTheme in sonner component

### 🚜 Refactor

- Remove all v1 components, tokens, and showcase

### 📚 Documentation

- Update spec to reflect npm publishing
- Add contribution guidelines and code of conduct
- Add CLAUDE.md with AWAR aesthetic rules and contribution guide

### 🎨 Styling

- Enforce zero border-radius and strip shadows globally
- Apply compact density pass to all components
- Strip shadow classes and fix slider thumb color
- Replace circular radio indicator with square span

### ⚙️ Miscellaneous Tasks

- Add npm publish config and package metadata
- Add GitHub templates and CI workflow
- Add MIT license
- Add typecheck script, pre-push hook, and publish guard
- Add automated npm publish workflow on version tags
- *(release)* 2.1.0
## [1.0.0] - 2026-02-19

### 🚀 Features

- Add design system tokens, hooks, and components
- Add global scrollbar styling
- Add AWARProvider and useAWARTheme hook
- Add token gallery showcase with hash-based routing
- Add filled variant to Card and remove section dividers
- Export CardVariant type
- Add sidebar treeview and per-component pages to showcase
- Add filled backgrounds to Badge variants
- Switch primary font to JetBrains Mono
- Add recursive TreeView component with CSS connectors
- Add FigletText branding component with gradient ASCII art
- Add Frame container with layout-tied border variants

### 🐛 Bug Fixes

- Resolve broken token references and raw primitives in components
- Eliminate double scrollbar in showcase layout
- Use CSS gradient and system monospace for FigletText alignment

### 🚜 Refactor

- Replace raw HTML with library components in showcase
- Replace tree connectors with indentation-only hierarchy

### 📚 Documentation

- Add system spec and showcase app
- Update spec for provider model and scrollbar styling
- Add README and organize screenshots
- Update system spec with recent design decisions
- Add TreeView and CJK accents to README
- Add Frame and FigletText to system spec

### ⚙️ Miscellaneous Tasks

- Initial project setup
- Add vite app entry point
- Add png to gitignore and move spec to docs/
- Add favicon
- Add library build configuration
- Gitignore tsc build artifacts
- Clean up unused test config and debug artifacts
- Add local release workflow with changelog generation
- *(release)* 1.0.0
