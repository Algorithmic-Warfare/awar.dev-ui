import { HTMLAttributes } from 'react'

export type DividerVariant = 'thin' | 'thick'

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  variant?: DividerVariant
}
