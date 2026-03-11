import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

export function TablePage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Table</h2>
        <p className="text-muted-foreground mt-1">A responsive table for displaying tabular data.</p>
      </header>
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Default</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Callsign</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Sector</TableHead>
              <TableHead className="text-right">Uptime</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ALPHA-1</TableCell>
              <TableCell><Badge>Online</Badge></TableCell>
              <TableCell>North</TableCell>
              <TableCell className="text-right">99.7%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">BRAVO-2</TableCell>
              <TableCell><Badge variant="destructive">Offline</Badge></TableCell>
              <TableCell>East</TableCell>
              <TableCell className="text-right">43.2%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CHARLIE-3</TableCell>
              <TableCell><Badge variant="secondary">Standby</Badge></TableCell>
              <TableCell>West</TableCell>
              <TableCell className="text-right">87.1%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">DELTA-4</TableCell>
              <TableCell><Badge variant="outline">Maintenance</Badge></TableCell>
              <TableCell>South</TableCell>
              <TableCell className="text-right">0.0%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
