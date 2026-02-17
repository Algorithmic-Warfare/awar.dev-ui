import { useState, useEffect, useCallback } from 'react'

type Mode = 'dark' | 'light'

function getInitialMode(): Mode {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('aw-mode') as Mode | null
  if (stored === 'dark' || stored === 'light') return stored
  const attr = document.documentElement.getAttribute('data-mode')
  if (attr === 'dark' || attr === 'light') return attr
  return 'dark'
}

export function useTheme() {
  const [mode, setModeState] = useState<Mode>(getInitialMode)

  const setMode = useCallback((m: Mode) => {
    setModeState(m)
    document.documentElement.setAttribute('data-mode', m)
    localStorage.setItem('aw-mode', m)
  }, [])

  const toggle = useCallback(() => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }, [mode, setMode])

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode)
  }, [mode])

  return { mode, toggle, setMode } as const
}
