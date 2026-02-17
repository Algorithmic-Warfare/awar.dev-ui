import { HTMLAttributes } from 'react'

export type WordmarkSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface WordmarkProps extends HTMLAttributes<HTMLDivElement> {
  size?: WordmarkSize
  subtitle?: boolean
}
