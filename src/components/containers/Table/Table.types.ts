import { HTMLAttributes, TdHTMLAttributes, ReactNode } from 'react'

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children?: ReactNode
}

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: ReactNode
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode
  header?: boolean
}
