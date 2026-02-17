import { ReactNode } from 'react'

export interface PopoverProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: ReactNode
}

export interface PopoverTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export interface PopoverContentProps {
  children?: ReactNode
  className?: string
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export interface PopoverCloseProps {
  children: ReactNode
  asChild?: boolean
}
