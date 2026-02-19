import { forwardRef } from 'react'
import type { FrameProps } from './Frame.types'
import styles from './Frame.module.css'

const ACCENT_CLASS: Record<string, string | undefined> = {
  brand: styles.accentBrand,
  interactive: styles.accentInteractive,
  error: styles.accentError,
  success: styles.accentSuccess,
  warning: styles.accentWarning,
  info: styles.accentInfo,
}

export const Frame = forwardRef<HTMLDivElement, FrameProps>(
  ({ variant = 'grid', accent = 'default', title, label, className, children, ...props }, ref) => {
    const classes = [
      styles.frame,
      styles[variant],
      accent !== 'default' ? ACCENT_CLASS[accent] : undefined,
      className,
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {title && <span className={styles.title}>{title}</span>}
        {label && <span className={styles.label}>{label}</span>}
        {children}
      </div>
    )
  },
)

Frame.displayName = 'Frame'
