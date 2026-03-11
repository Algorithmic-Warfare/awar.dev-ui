import { useState } from 'react'
import { Slider } from '@/components/ui/slider'

export function SliderPage() {
  const [value, setValue] = useState([50])
  const [range, setRange] = useState([25, 75])

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Slider</h2>
        <p className="text-muted-foreground mt-1">An input for selecting a numeric value within a range.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <div className="max-w-sm space-y-2">
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
          <p className="text-sm text-muted-foreground">Value: {value[0]}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Range</h3>
        <div className="max-w-sm space-y-2">
          <Slider value={range} onValueChange={setRange} max={100} step={1} />
          <p className="text-sm text-muted-foreground">Range: {range[0]} — {range[1]}</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Stepped (step=25)</h3>
        <div className="max-w-sm">
          <Slider defaultValue={[50]} max={100} step={25} />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Disabled</h3>
        <div className="max-w-sm">
          <Slider defaultValue={[40]} max={100} disabled />
        </div>
      </div>
    </section>
  )
}
