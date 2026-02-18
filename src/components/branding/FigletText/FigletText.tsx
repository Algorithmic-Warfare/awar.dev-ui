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

// ── CSS gradient direction mapping ──

const GRADIENT_ANGLE: Record<FigletDirection, string> = {
  vertical: '180deg',
  horizontal: '90deg',
  diagonal: '135deg',
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

    const gradientBg = useMemo(
      () => `linear-gradient(${GRADIENT_ANGLE[direction]}, ${from}, ${to})`,
      [from, to, direction],
    )

    const classes = [styles.figletText, className].filter(Boolean).join(' ')

    return (
      <pre
        ref={ref}
        className={classes}
        style={{
          ...style,
          backgroundImage: gradientBg,
          ...(fontSize != null ? { fontSize } : undefined),
        }}
        {...props}
      >
        {artLines.map((line, i) => (
          <div key={i} className={styles.line}>{line}</div>
        ))}
      </pre>
    )
  },
)

FigletText.displayName = 'FigletText'
