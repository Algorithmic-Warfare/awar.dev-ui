import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function CheckboxPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Checkbox</h2>
        <p className="text-muted-foreground mt-1">A control that allows selecting multiple options.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <div className="flex items-center gap-2">
          <Checkbox id="check1" />
          <Label htmlFor="check1">Accept terms and conditions</Label>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Labels</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="opt-a" defaultChecked />
            <Label htmlFor="opt-a">Email notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="opt-b" />
            <Label htmlFor="opt-b">SMS notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="opt-c" defaultChecked />
            <Label htmlFor="opt-c">Push notifications</Label>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <div className="flex items-center gap-2">
          <Checkbox id="check-disabled" disabled />
          <Label htmlFor="check-disabled" className="opacity-50">Disabled option</Label>
        </div>
      </div>
    </section>
  )
}
