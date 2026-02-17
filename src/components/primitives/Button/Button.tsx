import { forwardRef } from 'react'
import type { ButtonProps } from './Button.types'
import styles from './Button.module.css'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', className, ...props }, ref) => {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      className,
    ].filter(Boolean).join(' ')
    return <button ref={ref} className={classes} {...props} />
  }
)

Button.displayName = 'Button'
