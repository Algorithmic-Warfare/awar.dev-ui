import { Badge } from '@/components/ui/badge'

export function BadgePage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Badge</h2>
        <p className="text-muted-foreground mt-1">Displays a small status indicator or label.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>
    </section>
  )
}
