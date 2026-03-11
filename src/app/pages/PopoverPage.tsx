import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function PopoverPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Popover</h2>
        <p className="text-muted-foreground mt-1">A floating panel anchored to a trigger element.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p className="text-sm">This is popover content.</p>
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Form Content</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Dimensions</Button>
          </PopoverTrigger>
          <PopoverContent className="w-72">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium text-sm">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the element.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </section>
  )
}
