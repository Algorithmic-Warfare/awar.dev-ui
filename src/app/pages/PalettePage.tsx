export function PalettePage() {
  const colors = [
    { name: 'background', label: 'Background' },
    { name: 'foreground', label: 'Foreground' },
    { name: 'card', label: 'Card' },
    { name: 'secondary', label: 'Secondary' },
    { name: 'popover', label: 'Popover' },
    { name: 'primary', label: 'Primary' },
    { name: 'accent', label: 'Accent' },
    { name: 'destructive', label: 'Destructive' },
    { name: 'muted', label: 'Muted' },
    { name: 'border', label: 'Border' },
    { name: 'ring', label: 'Ring' },
  ]

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Palette</h2>
        <p className="text-muted-foreground mt-1">
          Semantic color tokens and surface elevation system.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Color Tokens</h3>
        <div className="grid grid-cols-4 gap-3">
          {colors.map((c) => (
            <div key={c.name} className="space-y-1.5">
              <div
                className="h-12 border border-border"
                style={{ backgroundColor: `var(--${c.name})` }}
              />
              <p className="text-xs text-muted-foreground">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Surface Elevation</h3>
        <p className="text-sm text-muted-foreground">
          No shadows. Depth is expressed through progressive background tone shifts.
        </p>
        <div className="flex gap-4">
          {[
            { bg: 'bg-background', label: 'Root' },
            { bg: 'bg-card', label: 'Card' },
            { bg: 'bg-secondary', label: 'Raised' },
            { bg: 'bg-popover', label: 'Overlay' },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} border border-border p-4 flex-1`}>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Foreground Tokens</h3>
        <div className="space-y-2">
          <p className="text-foreground text-sm">text-foreground — Primary text</p>
          <p className="text-muted-foreground text-sm">text-muted-foreground — Secondary text</p>
          <p className="text-primary text-sm">text-primary — Interactive / accent</p>
          <p className="text-destructive text-sm">text-destructive — Error</p>
        </div>
      </div>
    </section>
  )
}
