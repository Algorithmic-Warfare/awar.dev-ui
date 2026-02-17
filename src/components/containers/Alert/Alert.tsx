import { forwardRef } from 'react'
import type { AlertProps } from './Alert.types'
import styles from './Alert.module.css'

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', className, role = 'alert', ...props }, ref) => {
    const classes = [
      styles.alert,
      styles[variant],
      className,
    ].filter(Boolean).join(' ')

    return <div ref={ref} className={classes} role={role} {...props} />
  }
)

Alert.displayName = 'Alert'
