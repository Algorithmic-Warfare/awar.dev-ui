import { HTMLAttributes, ReactNode } from 'react'

export interface ActionBarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface ActionBarItemProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  disabled?: boolean
}
