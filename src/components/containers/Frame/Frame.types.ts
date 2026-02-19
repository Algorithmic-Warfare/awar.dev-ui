import { HTMLAttributes, ReactNode } from 'react'

export type FrameVariant = 'grid' | 'stack' | 'inline'

export type FrameAccent =
  | 'default'
  | 'brand'
  | 'interactive'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'

export interface FrameProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  variant?: FrameVariant
  accent?: FrameAccent
  title?: string
  label?: string
}
