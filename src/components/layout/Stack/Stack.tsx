import { forwardRef } from 'react'
import type { StackProps } from './Stack.types'
import styles from './Stack.module.css'

const gapMap = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
} as const

export const Stack = forwardRef<HTMLElement, StackProps>(
  ({ gap = 'md', as: Component = 'div', className, ...props }, ref) => {
    const classes = [styles.stack, gap ? gapMap[gap] : '', className].filter(Boolean).join(' ')
    return <Component ref={ref} className={classes} {...props} />
  }
)

Stack.displayName = 'Stack'
