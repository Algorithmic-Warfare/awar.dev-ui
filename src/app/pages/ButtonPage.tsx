import { Button } from '@/components/ui/button'
import { Mail, Plus, Settings, Trash2 } from 'lucide-react'

export function ButtonPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Button</h2>
        <p className="text-muted-foreground mt-1">Trigger actions and navigate. Supports multiple variants and sizes.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button><Mail /> Send Email</Button>
          <Button variant="secondary"><Plus /> Create</Button>
          <Button variant="outline"><Settings /> Settings</Button>
          <Button variant="destructive"><Trash2 /> Delete</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Icon Only</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="icon-xs"><Plus /></Button>
          <Button size="icon-sm"><Plus /></Button>
          <Button size="icon"><Plus /></Button>
          <Button size="icon-lg"><Plus /></Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </div>
    </section>
  )
}
