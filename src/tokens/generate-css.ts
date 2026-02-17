import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { primitives } from './primitives.js'
import { semanticsShared, semanticsDark, semanticsLight } from './semantics.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

type TokenObj = Record<string, unknown>

function flatten(obj: TokenObj, prefix: string): [string, string][] {
  const entries: [string, string][] = []
  for (const [key, value] of Object.entries(obj)) {
    const propName = key === 'DEFAULT' ? prefix : `${prefix}-${key}`
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      entries.push(...flatten(value as TokenObj, propName))
    } else {
      entries.push([propName, String(value)])
    }
  }
  return entries
}

function toBlock(selector: string, entries: [string, string][]): string {
  const props = entries.map(([k, v]) => `  ${k}: ${v};`).join('\n')
  return `${selector} {\n${props}\n}`
}

const primitiveEntries = flatten(primitives as unknown as TokenObj, '--aw-ref')
const sharedEntries = flatten(semanticsShared as unknown as TokenObj, '--aw-sys')
const darkEntries = flatten(semanticsDark as unknown as TokenObj, '--aw-sys')
const lightEntries = flatten(semanticsLight as unknown as TokenObj, '--aw-sys')

const rootEntries = [...primitiveEntries, ...sharedEntries]

const css = `/* AWAR Design System — Generated Token CSS */
/* Do not edit manually. Run: npm run generate:tokens */

${toBlock(':root', rootEntries)}

${toBlock('[data-mode="dark"]', darkEntries)}

${toBlock('[data-mode="light"]', lightEntries)}

/* ── Global Reset ── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  border-radius: 0;
}

body {
  font-family: var(--aw-ref-font-mono);
  font-size: var(--aw-ref-font-size-md);
  line-height: var(--aw-ref-line-height-md);
  background-color: var(--aw-sys-color-bg-root);
  color: var(--aw-sys-color-text-primary);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ── Selection ── */
::selection {
  background-color: var(--aw-sys-color-selection-bg);
}

/* ── Scrollbar ── */
* {
  &::-webkit-scrollbar {
    background: var(--aw-sys-color-bg-surface);
    width: 1ch;
    height: 1ch;
  }

  &::-webkit-scrollbar-track {
    background: var(--aw-sys-color-bg-surface);
    border-inline-start: 1px solid var(--aw-sys-color-border-default);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--aw-sys-color-interactive);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--aw-sys-color-interactive-hover);
  }

  &::-webkit-scrollbar-corner {
    background: var(--aw-sys-color-bg-surface);
  }
}

@supports not selector(::-webkit-scrollbar) {
  * {
    scrollbar-width: thin;
    scrollbar-color: var(--aw-sys-color-interactive) var(--aw-sys-color-bg-surface);
  }
}
`

const outPath = resolve(__dirname, 'tokens.css')
writeFileSync(outPath, css, 'utf-8')
console.log(`✓ Generated ${outPath} (${primitiveEntries.length} primitives, ${sharedEntries.length} shared, ${darkEntries.length} dark, ${lightEntries.length} light)`)
