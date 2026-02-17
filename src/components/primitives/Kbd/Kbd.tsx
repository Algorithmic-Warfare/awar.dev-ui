import { forwardRef } from 'react'
import type { KbdProps } from './Kbd.types'
import styles from './Kbd.module.css'

function detectPlatform(): 'mac' | 'win' {
  if (typeof navigator === 'undefined') return 'win'
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'mac' : 'win'
}

const macGlyphs: Record<string, string> = {
  ctrl: '⌃',
  alt: '⌥',
  shift: '⇧',
  meta: '⌘',
  cmd: '⌘',
}

const winGlyphs: Record<string, string> = {
  ctrl: 'Ctrl',
  alt: 'Alt',
  shift: 'Shift',
  meta: 'Win',
  cmd: 'Win',
}

function formatCombo(combo: string, platform: 'mac' | 'win'): string {
  const glyphs = platform === 'mac' ? macGlyphs : winGlyphs
  return combo
    .split('+')
    .map(part => {
      const lower = part.trim().toLowerCase()
      if (glyphs[lower]) return glyphs[lower]
      return part.trim().toUpperCase()
    })
    .join(platform === 'mac' ? '' : '+')
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ combo, platform: platformProp = 'auto', children, className, ...props }, ref) => {
    const platform = platformProp === 'auto' ? detectPlatform() : platformProp
    const classes = [styles.kbd, className].filter(Boolean).join(' ')
    const content = children || (combo ? formatCombo(combo, platform) : null)

    return (
      <kbd ref={ref} className={classes} {...props}>
        {content}
      </kbd>
    )
  }
)

Kbd.displayName = 'Kbd'
