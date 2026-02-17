import { HTMLAttributes, ReactNode } from 'react'

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error' | 'info' | 'brand'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children?: ReactNode
}
