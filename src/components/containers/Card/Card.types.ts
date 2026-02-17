import { HTMLAttributes, ReactNode } from 'react'

export type CardVariant = 'default' | 'filled'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  variant?: CardVariant
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}
