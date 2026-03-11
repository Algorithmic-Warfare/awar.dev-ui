import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

export function RadioGroupPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Radio Group</h2>
        <p className="text-muted-foreground mt-1">A set of mutually exclusive options.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-1" id="r1" />
            <Label htmlFor="r1">Option One</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-2" id="r2" />
            <Label htmlFor="r2">Option Two</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option-3" id="r3" />
            <Label htmlFor="r3">Option Three</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Horizontal</h3>
        <RadioGroup defaultValue="a" className="flex gap-4">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="a" id="rh1" />
            <Label htmlFor="rh1">Alpha</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="b" id="rh2" />
            <Label htmlFor="rh2">Bravo</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="c" id="rh3" />
            <Label htmlFor="rh3">Charlie</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <RadioGroup defaultValue="x" disabled>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="x" id="rd1" />
            <Label htmlFor="rd1" className="opacity-50">Disabled selected</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="y" id="rd2" />
            <Label htmlFor="rd2" className="opacity-50">Disabled unselected</Label>
          </div>
        </RadioGroup>
      </div>
    </section>
  )
}
