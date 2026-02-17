import { ReactNode } from 'react'

export interface TooltipProps {
  children: ReactNode
  content: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
  delayDuration?: number
}
