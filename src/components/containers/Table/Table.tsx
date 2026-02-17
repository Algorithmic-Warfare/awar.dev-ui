import { forwardRef } from 'react'
import type { TableProps, TableHeadProps, TableBodyProps, TableRowProps, TableCellProps } from './Table.types'
import styles from './Table.module.css'

const TableRoot = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.table, className].filter(Boolean).join(' ')
    return <table ref={ref} className={classes} {...props} />
  }
)
TableRoot.displayName = 'Table'

const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.head, className].filter(Boolean).join(' ')
    return <thead ref={ref} className={classes} {...props} />
  }
)
TableHead.displayName = 'Table.Head'

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={className} {...props} />
  }
)
TableBody.displayName = 'Table.Body'

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.row, className].filter(Boolean).join(' ')
    return <tr ref={ref} className={classes} {...props} />
  }
)
TableRow.displayName = 'Table.Row'

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ header = false, className, ...props }, ref) => {
    const classes = [styles.cell, className].filter(Boolean).join(' ')
    const Tag = header ? 'th' : 'td'
    return <Tag ref={ref as any} className={classes} {...props} />
  }
)
TableCell.displayName = 'Table.Cell'

export const Table = Object.assign(TableRoot, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
})
