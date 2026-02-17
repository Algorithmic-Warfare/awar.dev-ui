import { HTMLAttributes, ElementType, ReactNode } from 'react'

export type TextRole = 'display' | 'heading' | 'subheading' | 'body' | 'label' | 'caption'
export type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse' | 'brand' | 'accent' | 'error' | 'success' | 'warning' | 'info'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  role?: TextRole
  color?: TextColor
  as?: ElementType
  children?: ReactNode
}
