import * as React from "react"
import { cn } from "@/lib/utils"
import "./figlet-text.css"

export type FigletGradientPreset =
  | "brand"
  | "fire"
  | "blood"
  | "mono"
  | "ember"
  | "solar"

export type FigletDirection = "vertical" | "horizontal" | "diagonal"
export type FigletFont = "ansi-shadow" | "bloody" | "calvin-s"

export interface FigletGradientCustom {
  from: string
  to: string
}

export interface FigletTextProps
  extends Omit<React.HTMLAttributes<HTMLPreElement>, "children"> {
  /** Pre-rendered ASCII art lines. Overrides `font` when provided. */
  lines?: string[]
  /** Built-in AWAR figlet font. Used when `lines` is not provided. */
  font?: FigletFont
  /** Show full "ALGORITHMIC WARFARE" wordmark instead of "AWAR". */
  fullWordmark?: boolean
  /** Gradient preset name or custom { from, to } hex pair. */
  gradient?: FigletGradientPreset | FigletGradientCustom
  /** Gradient direction. */
  direction?: FigletDirection
  /** Font size override in pixels. */
  fontSize?: number
}

/* eslint-disable no-irregular-whitespace */
const FIGLET_ART: Record<FigletFont, string[]> = {
  "ansi-shadow": [
    " █████╗ ██╗    ██╗ █████╗ ██████╗ ",
    "██╔══██╗██║    ██║██╔══██╗██╔══██╗",
    "███████║██║ █╗ ██║███████║██████╔╝",
    "██╔══██║██║███╗██║██╔══██║██╔══██╗",
    "██║  ██║╚███╔███╔╝██║  ██║██║  ██║",
    "╚═╝  ╚═╝ ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═╝",
  ],
  bloody: [
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
  "calvin-s": [
    "╔═╗╦ ╦╔═╗╦═╗",
    "╠═╣║║║╠═╣╠╦╝",
    "╩ ╩╚╩╝╩ ╩╩╚═",
  ],
}

const FULL_WORDMARK_ART: Partial<Record<FigletFont, string[]>> = {
  "ansi-shadow": [
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
  "calvin-s": [
    "╔═╗╦  ╔═╗╔═╗╦═╗╦╔╦╗╦ ╦╔╦╗╦╔═╗",
    "╠═╣║  ║ ╦║ ║╠╦╝║ ║ ╠═╣║║║║║  ",
    "╩ ╩╩═╝╚═╝╚═╝╩╚═╩ ╩ ╩ ╩╩ ╩╩╚═╝",
    "",
    "╦ ╦╔═╗╦═╗╔═╗╔═╗╦═╗╔═╗",
    "║║║╠═╣╠╦╝╠╣ ╠═╣╠╦╝║╣ ",
    "╚╩╝╩ ╩╩╚═╚  ╩ ╩╩╚═╚═╝",
  ],
}

const GRADIENT_PRESETS: Record<
  FigletGradientPreset,
  { from: string; to: string }
> = {
  brand: { from: "#773333", to: "#FF9944" },
  fire: { from: "#B85E10", to: "#FFC06D" },
  blood: { from: "#1A0C0C", to: "#B06666" },
  mono: { from: "#3A3230", to: "#958A85" },
  ember: { from: "#421D1D", to: "#FFB055" },
  solar: { from: "#FF9944", to: "#773333" },
}

const GRADIENT_ANGLE: Record<FigletDirection, string> = {
  vertical: "180deg",
  horizontal: "90deg",
  diagonal: "135deg",
}

function FigletText({
  lines: linesProp,
  font = "ansi-shadow",
  fullWordmark = false,
  gradient = "brand",
  direction = "vertical",
  fontSize,
  className,
  style,
  ...props
}: FigletTextProps) {
  const artLines: string[] =
    linesProp ??
    (fullWordmark
      ? (FULL_WORDMARK_ART[font] ?? FULL_WORDMARK_ART["ansi-shadow"]!)
      : FIGLET_ART[font])

  const { from, to } =
    typeof gradient === "string" ? GRADIENT_PRESETS[gradient] : gradient

  const gradientBg = React.useMemo(
    () => `linear-gradient(${GRADIENT_ANGLE[direction]}, ${from}, ${to})`,
    [from, to, direction]
  )

  return (
    <pre
      data-slot="figlet-text"
      className={cn("text-sm", className)}
      style={{
        ...style,
        backgroundImage: gradientBg,
        ...(fontSize != null ? { fontSize } : undefined),
      }}
      {...props}
    >
      {artLines.map((line, i) => (
        <div key={i} data-slot="figlet-line">
          {line}
        </div>
      ))}
    </pre>
  )
}

export { FigletText, FIGLET_ART, FULL_WORDMARK_ART, GRADIENT_PRESETS }
