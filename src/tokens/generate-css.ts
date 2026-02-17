import { writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { primitives } from './primitives.js'
import { semanticsDark, semanticsLight } from './semantics.js'

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
const darkEntries = flatten(semanticsDark as unknown as TokenObj, '--aw-sys')
const lightEntries = flatten(semanticsLight as unknown as TokenObj, '--aw-sys')

const css = `/* AWAR Design System — Generated Token CSS */
/* Do not edit manually. Run: npm run generate:tokens */

${toBlock(':root', primitiveEntries)}

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
`

const outPath = resolve(__dirname, 'tokens.css')
writeFileSync(outPath, css, 'utf-8')
console.log(`✓ Generated ${outPath} (${primitiveEntries.length} primitives, ${darkEntries.length} dark semantics, ${lightEntries.length} light overrides)`)
