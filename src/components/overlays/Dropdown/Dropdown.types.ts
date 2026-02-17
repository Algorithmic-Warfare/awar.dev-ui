import { ReactNode } from 'react'

export interface DropdownProps {
  children?: ReactNode
}

export interface DropdownTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export interface DropdownContentProps {
  children?: ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  sideOffset?: number
}

export interface DropdownItemProps {
  children?: ReactNode
  className?: string
  onSelect?: () => void
  disabled?: boolean
}

export interface DropdownSeparatorProps {
  className?: string
}
