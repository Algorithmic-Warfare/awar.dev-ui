import { forwardRef } from 'react'
import type { BadgeProps } from './Badge.types'
import styles from './Badge.module.css'

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, ...props }, ref) => {
    const classes = [styles.badge, styles[variant], className].filter(Boolean).join(' ')
    return <span ref={ref} className={classes} {...props} />
  }
)

Badge.displayName = 'Badge'
