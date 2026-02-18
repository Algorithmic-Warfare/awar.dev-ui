import { HTMLAttributes } from 'react'

export type FigletGradientPreset = 'brand' | 'fire' | 'blood' | 'mono' | 'ember' | 'solar'
export type FigletDirection = 'vertical' | 'horizontal' | 'diagonal'
export type FigletFont = 'ansi-shadow' | 'bloody' | 'calvin-s'

export interface FigletGradientCustom {
  from: string
  to: string
}

export interface FigletTextProps extends Omit<HTMLAttributes<HTMLPreElement>, 'children'> {
  /** Pre-rendered ASCII art lines. Overrides `font` when provided. */
  lines?: string[]
  /** Built-in AWAR figlet font. Used when `lines` is not provided. */
  font?: FigletFont
  /** Show full "ALGORITHMIC WARFARE" wordmark instead of "AWAR". Only applies to built-in fonts. */
  fullWordmark?: boolean
  /** Gradient preset name or custom { from, to } hex pair. */
  gradient?: FigletGradientPreset | FigletGradientCustom
  /** Gradient direction. */
  direction?: FigletDirection
  /** Font size override in pixels. */
  fontSize?: number
}
