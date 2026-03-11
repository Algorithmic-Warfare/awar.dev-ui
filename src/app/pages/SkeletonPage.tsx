import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Skeleton</h2>
        <p className="text-muted-foreground mt-1">A placeholder for content that is loading.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Basic Shapes</h3>
        <div className="space-y-3">
          <Skeleton className="h-4 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Card Skeleton</h3>
        <div className="space-y-3 max-w-sm">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Profile Skeleton</h3>
        <div className="flex items-center gap-4">
          <Skeleton className="size-12" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">List Skeleton</h3>
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton className="size-8" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-3 w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
