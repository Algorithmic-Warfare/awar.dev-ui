import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

export function ScrollAreaPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Scroll Area</h2>
        <p className="text-muted-foreground mt-1">A scrollable area with custom scrollbar styling.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Vertical</h3>
        <ScrollArea className="h-48 w-64 border border-border">
          <div className="p-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i}>
                <div className="text-sm py-1">Item {i + 1}</div>
                {i < 19 && <Separator />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Horizontal</h3>
        <ScrollArea className="w-96 whitespace-nowrap border border-border">
          <div className="flex gap-4 p-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex h-20 w-32 shrink-0 items-center justify-center bg-secondary text-sm text-muted-foreground">
                Card {i + 1}
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  )
}
