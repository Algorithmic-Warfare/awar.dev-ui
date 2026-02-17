import { createContext } from 'react'

export type Mode = 'dark' | 'light'

export interface ThemeContextValue {
  mode: Mode
  toggle: () => void
  setMode: (mode: Mode) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
