import { ElementType, HTMLAttributes, ReactNode } from 'react'

export type GapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface GridProps extends HTMLAttributes<HTMLElement> {
  columns?: number | string
  gap?: GapSize
  as?: ElementType
  children?: ReactNode
}
