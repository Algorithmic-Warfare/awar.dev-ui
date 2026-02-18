import { forwardRef, useMemo } from 'react'
import type {
  FigletTextProps,
  FigletGradientPreset,
  FigletFont,
  FigletDirection,
} from './FigletText.types'
import styles from './FigletText.module.css'

// ── Built-in AWAR figlet art ──

/* eslint-disable no-irregular-whitespace */
const FIGLET_ART: Record<FigletFont, string[]> = {
  'ansi-shadow': [
    " █████╗ ██╗    ██╗ █████╗ ██████╗ ",
    "██╔══██╗██║    ██║██╔══██╗██╔══██╗",
    "███████║██║ █╗ ██║███████║██████╔╝",
    "██╔══██║██║███╗██║██╔══██║██╔══██╗",
    "██║  ██║╚███╔███╔╝██║  ██║██║  ██║",
    "╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝",
  ],
  'bloody': [
    " ▄▄▄       █     █░ ▄▄▄       ██▀███  ",
    "▒████▄    ▓█░ █ ░█░▒████▄    ▓██ ▒ ██▒",
    "▒██  ▀█▄  ▒█░ █ ░█ ▒██  ▀█▄  ▓██ ░▄█ ▒",
    "░██▄▄▄▄██ ░█░ █ ░█ ░██▄▄▄▄██ ▒██▀▀█▄  ",
    " ▓█   ▓██▒░░██▒██▓  ▓█   ▓██▒░██▓ ▒██▒",
    " ▒▒   ▓▒█░░ ▓░▒ ▒   ▒▒   ▓▒█░░ ▒▓ ░▒▓░",
    "  ▒   ▒▒ ░  ▒ ░ ░    ▒   ▒▒ ░  ░▒ ░ ▒░",
    "  ░   ▒     ░   ░    ░   ▒     ░░   ░ ",
    "      ░  ░    ░          ░  ░   ░     ",
  ],
  'calvin-s': [
    "╔═╗╦ ╦╔═╗╦═╗",
    "╠═╣║║║╠═╣╠╦╝",
    "╩ ╩╚╩╝╩ ╩╩╚═",
  ],
}

const FULL_WORDMARK_ART: Partial<Record<FigletFont, string[]>> = {
  'ansi-shadow': [
    " █████╗ ██╗      ██████╗  ██████╗ ██████╗ ██╗████████╗██╗  ██╗███╗   ███╗██╗ ██████╗ ",
    "██╔══██╗██║     ██╔════╝ ██╔═══██╗██╔══██╗██║╚══██╔══╝██║  ██║████╗ ████║██║██╔════╝ ",
    "███████║██║     ██║  ███╗██║   ██║██████╔╝██║   ██║   ███████║██╔████╔██║██║██║      ",
    "██╔══██║██║     ██║   ██║██║   ██║██╔══██╗██║   ██║   ██╔══██║██║╚██╔╝██║██║██║      ",
    "██║  ██║███████╗╚██████╔╝╚██████╔╝██║  ██║██║   ██║   ██║  ██║██║ ╚═╝ ██║██║╚██████╗",
    "╚═╝  ╚═╝╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝ ╚═════╝",
    "",
    "██╗    ██╗ █████╗ ██████╗ ███████╗ █████╗ ██████╗ ███████╗",
    "██║    ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝",
    "██║ █╗ ██║███████║██████╔╝█████╗  ███████║██████╔╝█████╗  ",
    "██║███╗██║██╔══██║██╔══██╗██╔══╝  ██╔══██║██╔══██╗██╔══╝  ",
    "╚███╔███╔╝██║  ██║██║  ██║██║     ██║  ██║██║  ██║███████╗",
    " ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝",
  ],
  'calvin-s': [
    "╔═╗╦  ╔═╗╔═╗╦═╗╦╔╦╗╦ ╦╔╦╗╦╔═╗",
    "╠═╣║  ║ ╦║ ║╠╦╝║ ║ ╠═╣║║║║║  ",
    "╩ ╩╩═╝╚═╝╚═╝╩╚═╩ ╩ ╩ ╩╩ ╩╩╚═╝",
    "",
    "╦ ╦╔═╗╦═╗╔═╗╔═╗╦═╗╔═╗",
    "║║║╠═╣╠╦╝╠╣ ╠═╣╠╦╝║╣ ",
    "╚╩╝╩ ╩╩╚═╚  ╩ ╩╩╚═╚═╝",
  ],
}

// ── Gradient presets (AWAR palette hex values) ──

const GRADIENT_PRESETS: Record<FigletGradientPreset, { from: string; to: string }> = {
  brand: { from: '#773333', to: '#FF9944' },
  fire:  { from: '#B85E10', to: '#FFC06D' },
  blood: { from: '#1A0C0C', to: '#B06666' },
  mono:  { from: '#3A3230', to: '#958A85' },
  ember: { from: '#421D1D', to: '#FFB055' },
  solar: { from: '#FF9944', to: '#773333' },
}

// ── Color interpolation ──

function hexToRgb(hex: string): [number, number, number] {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ]
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b]
    .map(c => Math.round(Math.max(0, Math.min(255, c))).toString(16).padStart(2, '0'))
    .join('')
}

function interpolateColor(from: string, to: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(from)
  const [r2, g2, b2] = hexToRgb(to)
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t)
}

// ── Span-grouping gradient engine ──

interface Segment { text: string; color: string | null }

function applyGradient(
  lines: string[],
  from: string,
  to: string,
  direction: FigletDirection,
): Segment[][] {
  const rows = lines.length
  const maxCols = Math.max(...lines.map(l => l.length))
  const padded = lines.map(l => l.padEnd(maxCols))

  return padded.map((line, row) => {
    const segments: Segment[] = []
    let current: Segment | null = null

    for (let col = 0; col < line.length; col++) {
      const char = line.charAt(col)
      let t: number
      if (direction === 'vertical') t = rows > 1 ? row / (rows - 1) : 0
      else if (direction === 'horizontal') t = maxCols > 1 ? col / (maxCols - 1) : 0
      else { const diag = rows + maxCols - 2; t = diag > 0 ? (row + col) / diag : 0 }

      const color = char === ' ' ? null : interpolateColor(from, to, t)

      if (current && current.color === color) {
        current.text += char
      } else {
        if (current) segments.push(current)
        current = { text: char, color }
      }
    }
    if (current) segments.push(current)
    return segments
  })
}

// ── Component ──

export const FigletText = forwardRef<HTMLPreElement, FigletTextProps>(
  (
    {
      lines: linesProp,
      font = 'ansi-shadow',
      fullWordmark = false,
      gradient = 'brand',
      direction = 'vertical',
      fontSize,
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const artLines: string[] = linesProp
      ?? (fullWordmark
        ? (FULL_WORDMARK_ART[font] ?? FULL_WORDMARK_ART['ansi-shadow']!)
        : FIGLET_ART[font])

    const { from, to } = typeof gradient === 'string'
      ? GRADIENT_PRESETS[gradient]
      : gradient

    const colored = useMemo(
      () => applyGradient(artLines, from, to, direction),
      [artLines, from, to, direction],
    )

    const classes = [styles.figletText, className].filter(Boolean).join(' ')

    return (
      <pre
        ref={ref}
        className={classes}
        style={{ ...style, ...(fontSize != null ? { fontSize } : undefined) }}
        {...props}
      >
        {colored.map((segments, i) => (
          <div key={i} className={styles.line}>
            {segments.map((seg, j) =>
              seg.color
                ? <span key={j} style={{ color: seg.color }}>{seg.text}</span>
                : <span key={j}>{seg.text}</span>
            )}
          </div>
        ))}
      </pre>
    )
  },
)

FigletText.displayName = 'FigletText'
