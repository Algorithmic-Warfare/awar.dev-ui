import { forwardRef } from 'react'
import type { DividerProps } from './Divider.types'
import styles from './Divider.module.css'

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ variant = 'thin', className, ...props }, ref) => {
    const classes = [styles.divider, styles[variant], className].filter(Boolean).join(' ')
    return <hr ref={ref} className={classes} {...props} />
  }
)

Divider.displayName = 'Divider'
