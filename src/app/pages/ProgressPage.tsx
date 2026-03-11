import { useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'

export function ProgressPage() {
  const [value, setValue] = useState(42)

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Progress</h2>
        <p className="text-muted-foreground mt-1">Displays task completion status.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Fixed Values</h3>
        <div className="max-w-md space-y-3">
          <div className="space-y-1"><p className="text-sm text-muted-foreground">25%</p><Progress value={25} /></div>
          <div className="space-y-1"><p className="text-sm text-muted-foreground">50%</p><Progress value={50} /></div>
          <div className="space-y-1"><p className="text-sm text-muted-foreground">75%</p><Progress value={75} /></div>
          <div className="space-y-1"><p className="text-sm text-muted-foreground">100%</p><Progress value={100} /></div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Interactive</h3>
        <div className="max-w-md space-y-3">
          <Progress value={value} />
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setValue(Math.max(0, value - 10))}>-10</Button>
            <Button size="sm" variant="outline" onClick={() => setValue(Math.min(100, value + 10))}>+10</Button>
            <span className="text-sm text-muted-foreground self-center">{value}%</span>
          </div>
        </div>
      </div>
    </section>
  )
}
