import { useState } from 'react'

function App() {
  const [mode, setMode] = useState<'dark' | 'light'>('dark')

  const toggle = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    document.documentElement.classList.toggle('light', next === 'light')
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-wide uppercase">
            AWAR Design System
          </h1>
          <p className="text-muted-foreground text-sm">
            v2.0 — shadcn/ui + Tailwind v4
          </p>
        </header>

        <div className="border border-border p-4 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Theme
          </h2>
          <button
            onClick={toggle}
            className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            {mode === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </div>

        <div className="border border-border p-4 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Palette
          </h2>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-primary" title="primary (amber)" />
            <div className="w-12 h-12 bg-accent" title="accent (maroon)" />
            <div className="w-12 h-12 bg-secondary" title="secondary" />
            <div className="w-12 h-12 bg-muted" title="muted" />
            <div className="w-12 h-12 bg-destructive" title="destructive" />
          </div>
        </div>

        <div className="border border-border p-4 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Surfaces (tone-based elevation)
          </h2>
          <div className="flex gap-4">
            <div className="bg-background border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Root</p>
            </div>
            <div className="bg-card border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Card</p>
            </div>
            <div className="bg-secondary border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Raised</p>
            </div>
            <div className="bg-popover border border-border p-4 flex-1">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Overlay</p>
            </div>
          </div>
        </div>

        <div className="border border-border p-4 space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Typography
          </h2>
          <p className="text-foreground">Primary text — F0EBE8 on 0D0B0A</p>
          <p className="text-muted-foreground">Muted text — secondary information</p>
          <p className="text-primary">Amber interactive text</p>
          <p className="text-accent">Maroon brand accent</p>
          <p className="text-destructive">Error / destructive</p>
        </div>

        <footer className="text-xs text-muted-foreground uppercase tracking-wider pt-4 border-t border-border">
          AWAR — Algorithmic Warfare
        </footer>
      </div>
    </div>
  )
}

export default App
