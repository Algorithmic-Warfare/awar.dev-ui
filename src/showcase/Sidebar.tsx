import { useState } from 'react'
import { categories, getComponentsByCategory } from './registry'

/*
  Target alignment (monospace):

  [-] BRANDING
   ├── Logo
   ├── Wordmark
   └── LogoLockup
  [+] LAYOUT
  [-] PRIMITIVES
   ├── Text
   └── Kbd

  The ├/└ of items sits at the same column as +/- inside [+]/[-].
  Column 0: [
  Column 1: +/-  and  ├/└
  Column 2: ]    and  ─
*/

export default function Sidebar({ activeSlug }: { activeSlug?: string }) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const toggle = (slug: string) => {
    setCollapsed(prev => ({ ...prev, [slug]: !prev[slug] }))
  }

  return (
    <nav style={{
      width: 220,
      minWidth: 220,
      borderRight: '1px solid var(--aw-sys-color-border-default)',
      overflowY: 'auto',
      fontFamily: 'var(--aw-sys-type-font-mono)',
      fontSize: 12,
      padding: '8px 0 8px 12px',
      whiteSpace: 'pre',
    }}>
      {categories.map(cat => {
        const isCollapsed = collapsed[cat.slug] ?? false
        const components = getComponentsByCategory(cat.slug)

        return (
          <div key={cat.slug}>
            {/* Category: [-] NAME */}
            <button
              onClick={() => toggle(cat.slug)}
              style={{
                display: 'block',
                width: '100%',
                padding: '4px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
                textAlign: 'left',
                color: 'var(--aw-sys-color-text-secondary)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                whiteSpace: 'pre',
              }}
            >
              {isCollapsed ? '[+]' : '[-]'} {cat.name}
            </button>

            {/* Items:  ├── Name  /  └── Name */}
            {!isCollapsed && components.map((comp, i) => {
              const isActive = comp.slug === activeSlug
              const isLast = i === components.length - 1
              // " ├── " or " └── " — leading space aligns ├/└ under +/- of parent
              const prefix = isLast ? ' └── ' : ' ├── '

              return (
                <div key={comp.slug} style={{ padding: '1px 0' }}>
                  <span style={{
                    color: 'var(--aw-sys-color-text-muted)',
                    userSelect: 'none',
                  }}>
                    {prefix}
                  </span>
                  <a
                    href={`#/components/${comp.slug}`}
                    style={{
                      color: isActive
                        ? 'var(--aw-sys-color-text-accent)'
                        : 'var(--aw-sys-color-text-primary)',
                      textDecoration: 'none',
                      backgroundColor: isActive
                        ? 'var(--aw-sys-color-surface-raised)'
                        : 'transparent',
                      borderBottom: isActive
                        ? '1px solid var(--aw-sys-color-text-accent)'
                        : '1px solid transparent',
                      transition: 'color 0.1s, background-color 0.1s',
                    }}
                  >
                    {comp.name}
                  </a>
                </div>
              )
            })}
          </div>
        )
      })}
    </nav>
  )
}
