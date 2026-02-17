import { SVGAttributes } from 'react'

export type LogoSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type LogoVariant = 'default' | 'brand' | 'accent' | 'mono' | 'inverse'

export interface LogoProps extends Omit<SVGAttributes<SVGSVGElement>, 'children'> {
  size?: LogoSize
  variant?: LogoVariant
}
