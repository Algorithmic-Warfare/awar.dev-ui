import { useState } from "react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableSortHead,
  TableCell,
  toggleSort,
  sortRows,
} from "@/components/ui/table"
import type { SortState } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const DATA = [
  { callsign: "ALPHA-1", status: "Online", sector: "North", uptime: "99.7%" },
  { callsign: "BRAVO-2", status: "Offline", sector: "East", uptime: "43.2%" },
  { callsign: "CHARLIE-3", status: "Standby", sector: "West", uptime: "87.1%" },
  { callsign: "DELTA-4", status: "Maintenance", sector: "South", uptime: "0.0%" },
  { callsign: "ECHO-5", status: "Online", sector: "North", uptime: "95.4%" },
  { callsign: "FOXTROT-6", status: "Online", sector: "East", uptime: "78.3%" },
]

const STATUS_VARIANT: Record<string, "default" | "destructive" | "secondary" | "outline"> = {
  Online: "default",
  Offline: "destructive",
  Standby: "secondary",
  Maintenance: "outline",
}

export function TablePage() {
  const [sort, setSort] = useState<SortState>({ column: null, direction: null })
  const sorted = sortRows(DATA, sort)

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Table</h2>
        <p className="text-muted-foreground mt-1">
          A responsive table with sortable columns. Click headers to cycle
          sort direction.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Sortable</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableSortHead column="callsign" sort={sort} onSort={(c) => setSort(toggleSort(sort, c))}>
                Callsign
              </TableSortHead>
              <TableHead>Status</TableHead>
              <TableSortHead column="sector" sort={sort} onSort={(c) => setSort(toggleSort(sort, c))}>
                Sector
              </TableSortHead>
              <TableSortHead
                column="uptime"
                sort={sort}
                onSort={(c) => setSort(toggleSort(sort, c))}
                className="text-right"
              >
                Uptime
              </TableSortHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sorted.map((row) => (
              <TableRow key={row.callsign}>
                <TableCell className="font-medium">{row.callsign}</TableCell>
                <TableCell>
                  <Badge variant={STATUS_VARIANT[row.status]}>{row.status}</Badge>
                </TableCell>
                <TableCell>{row.sector}</TableCell>
                <TableCell className="text-right">{row.uptime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
