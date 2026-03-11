import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

export function ResizablePage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Resizable</h2>
        <p className="text-muted-foreground mt-1">Resizable panel groups with drag handles.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Horizontal</h3>
        <ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md border border-border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Panel A</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Panel B</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Vertical</h3>
        <ResizablePanelGroup orientation="vertical" className="min-h-[200px] max-w-md border border-border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Top</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-full items-center justify-center p-4">
              <span className="text-sm text-muted-foreground">Bottom</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </section>
  )
}
