import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export function SheetPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Sheet</h2>
        <p className="text-muted-foreground mt-1">A panel that slides in from the edge of the screen.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sides</h3>
        <div className="flex flex-wrap gap-3">
          {(['left', 'right', 'top', 'bottom'] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline" className="capitalize">{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet — {side}</SheetTitle>
                  <SheetDescription>This sheet slides in from the {side}.</SheetDescription>
                </SheetHeader>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </div>
    </section>
  )
}
