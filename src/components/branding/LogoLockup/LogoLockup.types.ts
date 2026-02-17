import { HTMLAttributes } from 'react'
import type { LogoSize, LogoVariant } from '../Logo/Logo.types'

export type LogoLockupOrientation = 'horizontal' | 'stacked'

export interface LogoLockupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: LogoLockupOrientation
  size?: LogoSize
  variant?: LogoVariant
  subtitle?: boolean
}
