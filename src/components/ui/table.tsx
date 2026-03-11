import * as React from "react"
import { ArrowUpIcon, ArrowDownIcon, ArrowUpDownIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// ── Sort types ──

type SortDirection = "asc" | "desc" | null

interface SortState {
  column: string | null
  direction: SortDirection
}

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("bg-secondary [&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-8 px-2 text-left align-middle font-medium whitespace-nowrap text-muted-foreground text-xs uppercase tracking-wider [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableSortHead({
  className,
  children,
  column,
  sort,
  onSort,
  ...props
}: React.ComponentProps<"th"> & {
  column: string
  sort: SortState
  onSort: (column: string) => void
}) {
  const active = sort.column === column
  const Icon = active
    ? sort.direction === "asc"
      ? ArrowUpIcon
      : ArrowDownIcon
    : ArrowUpDownIcon

  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-8 px-2 text-left align-middle font-medium whitespace-nowrap text-muted-foreground text-xs uppercase tracking-wider [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    >
      <button
        type="button"
        onClick={() => onSort(column)}
        className={cn(
          "inline-flex items-center gap-1 transition-colors hover:text-foreground",
          active && "text-foreground"
        )}
      >
        {children}
        <Icon className="h-3 w-3" />
      </button>
    </th>
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

/** Cycle sort: null → asc → desc → null */
function toggleSort(current: SortState, column: string): SortState {
  if (current.column !== column) return { column, direction: "asc" }
  if (current.direction === "asc") return { column, direction: "desc" }
  return { column: null, direction: null }
}

/**
 * Sort rows by column value. Auto-detects numbers, percentages, and strings.
 */
function sortRows<T extends Record<string, unknown>>(
  rows: T[],
  sort: SortState,
): T[] {
  if (!sort.column || !sort.direction) return rows
  const key = sort.column
  const dir = sort.direction === "asc" ? 1 : -1

  return [...rows].sort((a, b) => {
    const av = a[key]
    const bv = b[key]

    // Parse numeric-like values (including "99.7%")
    const an = parseFloat(String(av).replace(/[%,$]/g, ""))
    const bn = parseFloat(String(bv).replace(/[%,$]/g, ""))

    if (!isNaN(an) && !isNaN(bn)) return (an - bn) * dir

    return String(av).localeCompare(String(bv)) * dir
  })
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableSortHead,
  TableRow,
  TableCell,
  TableCaption,
  toggleSort,
  sortRows,
  type SortDirection,
  type SortState,
}
