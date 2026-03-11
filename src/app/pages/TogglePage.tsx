import { Toggle } from '@/components/ui/toggle'
import { Bold, Italic, Underline } from 'lucide-react'

export function TogglePage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Toggle</h2>
        <p className="text-muted-foreground mt-1">A two-state button that can be toggled on or off.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold"><Bold /></Toggle>
          <Toggle aria-label="Toggle italic"><Italic /></Toggle>
          <Toggle aria-label="Toggle underline"><Underline /></Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Outline Variant</h3>
        <div className="flex gap-2">
          <Toggle variant="outline" aria-label="Toggle bold"><Bold /></Toggle>
          <Toggle variant="outline" aria-label="Toggle italic"><Italic /></Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sizes</h3>
        <div className="flex items-center gap-2">
          <Toggle size="sm" aria-label="Small"><Bold /></Toggle>
          <Toggle aria-label="Default"><Bold /></Toggle>
          <Toggle size="lg" aria-label="Large"><Bold /></Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Text</h3>
        <Toggle aria-label="Toggle italic"><Italic /> Italic</Toggle>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <Toggle disabled aria-label="Disabled"><Bold /></Toggle>
      </div>
    </section>
  )
}
