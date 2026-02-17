import { ElementType, HTMLAttributes, ReactNode } from 'react'

export type GapSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface StackProps extends HTMLAttributes<HTMLElement> {
  gap?: GapSize
  as?: ElementType
  children?: ReactNode
}
