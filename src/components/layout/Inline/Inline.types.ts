import { ElementType, HTMLAttributes, ReactNode } from 'react'

export type GapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface InlineProps extends HTMLAttributes<HTMLElement> {
  gap?: GapSize
  wrap?: boolean
  align?: 'start' | 'center' | 'end' | 'baseline'
  as?: ElementType
  children?: ReactNode
}
