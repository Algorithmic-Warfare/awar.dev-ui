import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export function CardPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Card</h2>
        <p className="text-muted-foreground mt-1">A container for grouping related content.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Simple</h3>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>A brief description of the card content.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">This is the main content area of the card.</p>
          </CardContent>
        </Card>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">With Footer</h3>
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>All subsystems operational</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">CPU: 42% | Memory: 68% | Disk: 23%</p>
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">Last updated: 2 minutes ago</CardFooter>
        </Card>
      </div>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Stat Cards</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { title: 'Total Users', value: '2,847' },
            { title: 'Active Sessions', value: '142' },
            { title: 'Uptime', value: '99.7%' },
          ].map((stat) => (
            <Card key={stat.title}>
              <CardHeader>
                <CardDescription>{stat.title}</CardDescription>
                <CardTitle className="text-2xl">{stat.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
