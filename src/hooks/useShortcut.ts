import { useEffect, useRef } from 'react'

interface ShortcutOptions {
  global?: boolean
  enabled?: boolean
  preventDefault?: boolean
}

interface ParsedCombo {
  ctrl: boolean
  alt: boolean
  shift: boolean
  meta: boolean
  key: string
}

function parseCombo(combo: string): ParsedCombo {
  const parts = combo.toLowerCase().split('+')
  return {
    ctrl: parts.includes('ctrl'),
    alt: parts.includes('alt'),
    shift: parts.includes('shift'),
    meta: parts.includes('meta') || parts.includes('cmd'),
    key: parts.filter(p => !['ctrl', 'alt', 'shift', 'meta', 'cmd'].includes(p))[0] || '',
  }
}

function matchesCombo(e: KeyboardEvent, parsed: ParsedCombo): boolean {
  return (
    e.ctrlKey === parsed.ctrl &&
    e.altKey === parsed.alt &&
    e.shiftKey === parsed.shift &&
    e.metaKey === parsed.meta &&
    e.key.toLowerCase() === parsed.key
  )
}

type Handler = {
  combo: string
  parsed: ParsedCombo
  callback: (e: KeyboardEvent) => void
  global: boolean
  preventDefault: boolean
  element: HTMLElement | null
}

const handlers: Set<Handler> = new Set()
const globalCombos = new Map<string, string>()
let listenerAttached = false

function handleKeyDown(e: KeyboardEvent) {
  const active = document.activeElement as HTMLElement | null
  const matchedScoped: { handler: Handler; depth: number }[] = []
  const matchedGlobal: Handler[] = []

  for (const h of handlers) {
    if (!matchesCombo(e, h.parsed)) continue
    if (h.global) {
      matchedGlobal.push(h)
    } else if (h.element && active) {
      if (h.element.contains(active)) {
        let depth = 0
        let node: HTMLElement | null = active
        while (node && node !== h.element) {
          depth++
          node = node.parentElement
        }
        matchedScoped.push({ handler: h, depth })
      }
    }
  }

  if (matchedScoped.length > 0) {
    matchedScoped.sort((a, b) => a.depth - b.depth)
    const winner = matchedScoped[0]!
    if (winner.handler.preventDefault) e.preventDefault()
    winner.handler.callback(e)
    return
  }

  if (matchedGlobal.length > 0) {
    const winner = matchedGlobal[0]!
    if (winner.preventDefault) e.preventDefault()
    winner.callback(e)
  }
}

function ensureListener() {
  if (!listenerAttached) {
    document.addEventListener('keydown', handleKeyDown)
    listenerAttached = true
  }
}

export function useShortcut(
  combo: string,
  callback: (e: KeyboardEvent) => void,
  options: ShortcutOptions = {}
) {
  const { global: isGlobal = false, enabled = true, preventDefault = true } = options
  const ref = useRef<HTMLElement | null>(null)
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!enabled) return

    // Find the component root element - walk up from the hook caller
    // For scoped shortcuts, we need a parent element reference
    let element: HTMLElement | null = null
    if (!isGlobal) {
      // Use a temporary element to find the nearest parent
      // The ref should be set by the calling component
      // Fallback: use document.body for scoped (effectively global)
      element = ref.current || document.body
    }

    const parsed = parseCombo(combo)
    const handler: Handler = {
      combo,
      parsed,
      callback: (e: KeyboardEvent) => callbackRef.current(e),
      global: isGlobal,
      preventDefault,
      element,
    }

    // Dev-mode collision warning
    if (isGlobal && process.env.NODE_ENV !== 'production') {
      if (globalCombos.has(combo)) {
        console.warn(
          `[useShortcut] Duplicate global shortcut "${combo}" registered`
        )
      }
      globalCombos.set(combo, combo)
    }

    ensureListener()
    handlers.add(handler)

    return () => {
      handlers.delete(handler)
      if (isGlobal) {
        globalCombos.delete(combo)
      }
    }
  }, [combo, isGlobal, enabled, preventDefault])

  return ref
}
