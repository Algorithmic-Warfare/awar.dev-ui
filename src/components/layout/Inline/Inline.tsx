import { forwardRef } from 'react'
import type { InlineProps } from './Inline.types'
import styles from './Inline.module.css'

const gapMap = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
} as const

const alignMap = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  baseline: styles.alignBaseline,
} as const

export const Inline = forwardRef<HTMLElement, InlineProps>(
  ({ gap = 'md', wrap = false, align, as: Component = 'div', className, ...props }, ref) => {
    const classes = [
      styles.inline,
      gap ? gapMap[gap] : '',
      wrap ? styles.wrap : '',
      align ? alignMap[align] : '',
      className,
    ].filter(Boolean).join(' ')
    return <Component ref={ref} className={classes} {...props} />
  }
)

Inline.displayName = 'Inline'
