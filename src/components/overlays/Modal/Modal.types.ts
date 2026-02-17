import { ReactNode } from 'react'

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children?: ReactNode
}

export interface ModalTriggerProps {
  children: ReactNode
  asChild?: boolean
}

export interface ModalContentProps {
  children?: ReactNode
  className?: string
  title?: string
  description?: string
}

export interface ModalCloseProps {
  children: ReactNode
  asChild?: boolean
}
