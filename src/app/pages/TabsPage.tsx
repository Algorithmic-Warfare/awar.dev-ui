import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function TabsPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Tabs</h2>
        <p className="text-muted-foreground mt-1">Organize content into switchable panels.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="logs">Logs</TabsTrigger>
            <TabsTrigger value="config">Config</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 border border-border">
            <p className="text-sm">System overview panel content.</p>
          </TabsContent>
          <TabsContent value="logs" className="p-4 border border-border">
            <p className="text-sm text-muted-foreground">[2026-03-10] System initialized</p>
          </TabsContent>
          <TabsContent value="config" className="p-4 border border-border">
            <p className="text-sm text-muted-foreground">Configuration settings here.</p>
          </TabsContent>
        </Tabs>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Line Variant</h3>
        <Tabs defaultValue="tab1">
          <TabsList variant="line">
            <TabsTrigger value="tab1">Tab One</TabsTrigger>
            <TabsTrigger value="tab2">Tab Two</TabsTrigger>
            <TabsTrigger value="tab3">Tab Three</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="p-4">
            <p className="text-sm">Content for tab one.</p>
          </TabsContent>
          <TabsContent value="tab2" className="p-4">
            <p className="text-sm">Content for tab two.</p>
          </TabsContent>
          <TabsContent value="tab3" className="p-4">
            <p className="text-sm">Content for tab three.</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
