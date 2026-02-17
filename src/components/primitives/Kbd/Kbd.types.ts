import { HTMLAttributes, ReactNode } from 'react'

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  combo?: string
  platform?: 'mac' | 'win' | 'auto'
  children?: ReactNode
}
