import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InputPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Input</h2>
        <p className="text-muted-foreground mt-1">A text input field for forms.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <div className="max-w-sm">
          <Input placeholder="Enter text..." />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Label</h3>
        <div className="max-w-sm space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="user@example.com" />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Types</h3>
        <div className="max-w-sm space-y-3">
          <Input type="text" placeholder="Text" />
          <Input type="password" placeholder="Password" />
          <Input type="number" placeholder="Number" />
          <Input type="search" placeholder="Search..." />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">States</h3>
        <div className="max-w-sm space-y-3">
          <Input disabled placeholder="Disabled" />
          <Input readOnly value="Read only value" />
        </div>
      </div>
    </section>
  )
}
