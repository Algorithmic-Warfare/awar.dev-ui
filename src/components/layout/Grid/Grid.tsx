import { forwardRef } from 'react'
import type { GridProps } from './Grid.types'
import styles from './Grid.module.css'

const gapMap = {
  xs: styles.gapXs,
  sm: styles.gapSm,
  md: styles.gapMd,
  lg: styles.gapLg,
  xl: styles.gapXl,
} as const

export const Grid = forwardRef<HTMLElement, GridProps>(
  ({ columns = 1, gap = 'md', as: Component = 'div', className, style, ...props }, ref) => {
    const classes = [styles.grid, gap ? gapMap[gap] : '', className].filter(Boolean).join(' ')
    const gridStyle = {
      ...style,
      gridTemplateColumns: typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns,
    }
    return <Component ref={ref} className={classes} style={gridStyle} {...props} />
  }
)

Grid.displayName = 'Grid'
