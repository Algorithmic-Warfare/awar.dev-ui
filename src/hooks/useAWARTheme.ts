import { useContext } from 'react'
import { ThemeContext } from '../providers/AWARProvider/ThemeContext'
import type { ThemeContextValue } from '../providers/AWARProvider/ThemeContext'

export function useAWARTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error(
      'useAWARTheme must be used within an <AWARProvider>. ' +
      'Wrap your app in <AWARProvider> to provide theme context.'
    )
  }
  return context
}
