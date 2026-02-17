import { HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'error' | 'warning' | 'success' | 'info'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  children?: ReactNode
}
