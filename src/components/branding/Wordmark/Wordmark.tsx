import { forwardRef } from 'react'
import type { WordmarkProps } from './Wordmark.types'
import styles from './Wordmark.module.css'

const sizeMap = { xs: 'xs', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': 'xxl' } as const

export const Wordmark = forwardRef<HTMLDivElement, WordmarkProps>(
  ({ size = 'md', subtitle = false, className, ...props }, ref) => {
    const classes = [
      styles.wordmark,
      styles[sizeMap[size]],
      className,
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        <span className={styles.title}>AWAR</span>
        {subtitle && (
          <span className={styles.subtitle}>ALGORITHMIC WARFARE</span>
        )}
      </div>
    )
  }
)

Wordmark.displayName = 'Wordmark'
