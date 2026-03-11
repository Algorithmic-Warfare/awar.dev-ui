import { Separator } from '@/components/ui/separator'

export function SeparatorPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Separator</h2>
        <p className="text-muted-foreground mt-1">Visually divides content into sections.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Horizontal</h3>
        <div className="space-y-2">
          <p className="text-sm">Content above</p>
          <Separator />
          <p className="text-sm">Content below</p>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Vertical</h3>
        <div className="flex items-center gap-4 h-6">
          <span className="text-sm">Home</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Dashboard</span>
          <Separator orientation="vertical" />
          <span className="text-sm">Settings</span>
        </div>
      </div>
    </section>
  )
}
