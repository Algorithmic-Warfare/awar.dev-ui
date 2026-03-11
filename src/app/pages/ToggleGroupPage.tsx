import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from 'lucide-react'

export function ToggleGroupPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Toggle Group</h2>
        <p className="text-muted-foreground mt-1">A group of toggle buttons for selecting one or multiple values.</p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Single Selection</h3>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRight /></ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Multiple Selection</h3>
        <ToggleGroup type="multiple" defaultValue={["bold"]}>
          <ToggleGroupItem value="bold" aria-label="Bold"><Bold /></ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic"><Italic /></ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline"><Underline /></ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Outline Variant</h3>
        <ToggleGroup type="single" variant="outline" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRight /></ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sizes</h3>
        <div className="space-y-3">
          <ToggleGroup type="single" size="sm" defaultValue="left">
            <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
          </ToggleGroup>
          <ToggleGroup type="single" size="lg" defaultValue="left">
            <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  )
}
