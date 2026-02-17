import { useState, useCallback, useEffect, useMemo } from 'react'
import '../../tokens/tokens.css'
import { ThemeContext } from './ThemeContext'
import type { Mode } from './ThemeContext'
import type { AWARProviderProps } from './AWARProvider.types'

function getInitialMode(defaultMode?: Mode): Mode {
  if (typeof window === 'undefined') return defaultMode ?? 'dark'
  const stored = localStorage.getItem('aw-mode') as Mode | null
  if (stored === 'dark' || stored === 'light') return stored
  const attr = document.documentElement.getAttribute('data-mode')
  if (attr === 'dark' || attr === 'light') return attr
  return defaultMode ?? 'dark'
}

function AWARProvider({ defaultMode, children }: AWARProviderProps) {
  const [mode, setModeState] = useState<Mode>(() => getInitialMode(defaultMode))

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    document.documentElement.setAttribute('data-mode', m)
    localStorage.setItem('aw-mode', m)
  }, [])

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      document.documentElement.setAttribute('data-mode', next)
      localStorage.setItem('aw-mode', next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
  }, [mode])

  const value = useMemo(() => ({ mode, toggle, setMode }), [mode, toggle, setMode])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

AWARProvider.displayName = 'AWARProvider'

export { AWARProvider }
