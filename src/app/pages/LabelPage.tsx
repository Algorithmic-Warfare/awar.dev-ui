import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export function LabelPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Label</h2>
        <p className="text-muted-foreground mt-1">Accessible label for form controls.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Label>Username</Label>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Input</h3>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter username..." />
        </div>
      </div>
    </section>
  )
}
