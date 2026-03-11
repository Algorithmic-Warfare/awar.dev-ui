import { useState } from 'react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { ChevronsUpDown } from 'lucide-react'

export function CollapsiblePage() {
  const [open, setOpen] = useState(false)

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Collapsible</h2>
        <p className="text-muted-foreground mt-1">An interactive section that can be expanded or collapsed.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Collapsible open={open} onOpenChange={setOpen} className="w-[350px] space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">3 items tagged</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm">
                <ChevronsUpDown />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="border border-border px-4 py-2 text-sm">@awar/ui</div>
          <CollapsibleContent className="space-y-2">
            <div className="border border-border px-4 py-2 text-sm">@awar/theme</div>
            <div className="border border-border px-4 py-2 text-sm">@awar/utils</div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  )
}
