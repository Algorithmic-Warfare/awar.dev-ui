import { HTMLAttributes, ReactNode } from 'react'

export type ListBullet = 'none' | 'dash' | 'arrow' | 'dot'

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  bullet?: ListBullet
  children?: ReactNode
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {
  children?: ReactNode
}
