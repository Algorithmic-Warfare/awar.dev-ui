import { forwardRef } from 'react'
import type { LogoLockupProps } from './LogoLockup.types'
import { Logo } from '../Logo'
import { Wordmark } from '../Wordmark'
import styles from './LogoLockup.module.css'

export const LogoLockup = forwardRef<HTMLDivElement, LogoLockupProps>(
  ({ orientation = 'horizontal', size = 'md', variant = 'default', subtitle = false, className, ...props }, ref) => {
    const classes = [
      styles.lockup,
      styles[orientation],
      className,
    ].filter(Boolean).join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        <Logo size={size} variant={variant} />
        <Wordmark size={size} subtitle={subtitle} />
      </div>
    )
  }
)

LogoLockup.displayName = 'LogoLockup'
