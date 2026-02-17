import type { ReactNode } from 'react'
import type { Mode } from './ThemeContext'

export interface AWARProviderProps {
  defaultMode?: Mode
  children: ReactNode
}
