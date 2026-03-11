import { AspectRatio } from '@/components/ui/aspect-ratio'

export function AspectRatioPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Aspect Ratio</h2>
        <p className="text-muted-foreground mt-1">Displays content within a desired ratio.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">16:9</h3>
        <div className="max-w-md">
          <AspectRatio ratio={16 / 9}>
            <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground text-sm">16:9</div>
          </AspectRatio>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">4:3</h3>
        <div className="max-w-md">
          <AspectRatio ratio={4 / 3}>
            <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground text-sm">4:3</div>
          </AspectRatio>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">1:1</h3>
        <div className="max-w-xs">
          <AspectRatio ratio={1}>
            <div className="flex h-full w-full items-center justify-center bg-secondary text-muted-foreground text-sm">1:1</div>
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
