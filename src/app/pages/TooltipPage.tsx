import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'

export function TooltipPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Tooltip</h2>
        <p className="text-muted-foreground mt-1">A popup that displays information on hover.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sides</h3>
        <TooltipProvider>
          <div className="flex gap-3">
            {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger asChild>
                  <Button variant="outline" className="capitalize">{side}</Button>
                </TooltipTrigger>
                <TooltipContent side={side}>
                  <p>Tooltip on {side}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}
