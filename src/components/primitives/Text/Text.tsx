import { forwardRef } from 'react'
import type { TextProps, TextRole } from './Text.types'
import styles from './Text.module.css'

const defaultElement: Record<TextRole, string> = {
  display: 'h1',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  label: 'span',
  caption: 'span',
}

const colorMap: Record<string, string | undefined> = {
  primary: styles.colorPrimary,
  secondary: styles.colorSecondary,
  muted: styles.colorMuted,
  inverse: styles.colorInverse,
  brand: styles.colorBrand,
  accent: styles.colorAccent,
  error: styles.colorError,
  success: styles.colorSuccess,
  warning: styles.colorWarning,
  info: styles.colorInfo,
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ role = 'body', color = 'primary', as, className, ...props }, ref) => {
    const Component = (as || defaultElement[role]) as any
    const classes = [
      styles.text,
      styles[role],
      colorMap[color],
      className,
    ].filter(Boolean).join(' ')
    return <Component ref={ref} className={classes} {...props} />
  }
)

Text.displayName = 'Text'
