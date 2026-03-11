import type {
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  NodeTypes,
  EdgeTypes,
  ColorMode,
} from "@xyflow/react"

// ── Graph Edge Data ──

export interface GraphEdgeData extends Record<string, unknown> {
  /** CSS color for the edge stroke. Defaults to var(--border). */
  stroke?: string
  /** strokeDasharray value, e.g. "6 3". Solid if omitted. */
  dash?: string
  /** Stroke width in px. Defaults to 1.5. */
  width?: number
  /** Animate the dash pattern. */
  animated?: boolean
}

// ── Graph Legend ──

export interface GraphLegendItem {
  color: string
  label: string
  dash?: string
  variant?: "swatch" | "line"
}

export interface GraphLegendProps {
  title: string
  items: GraphLegendItem[]
  position?: "bottom-left" | "bottom-right" | "top-left" | "top-right"
  className?: string
}

// ── Graph Canvas ──

export interface GraphCanvasProps<
  N extends Record<string, unknown> = Record<string, unknown>,
  E extends Record<string, unknown> = Record<string, unknown>,
> {
  nodes: Node<N>[]
  edges: Edge<E>[]
  onNodesChange?: OnNodesChange<Node<N>>
  onEdgesChange?: OnEdgesChange<Edge<E>>
  nodeTypes?: NodeTypes
  edgeTypes?: EdgeTypes
  /** Show dot grid background. Defaults to true. */
  background?: boolean | { gap?: number; size?: number; color?: string }
  /** Show zoom/fit controls. Defaults to true. */
  controls?: boolean
  /** Color mode synced with AWAR theme. Auto-detected from useAWARTheme if omitted. */
  colorMode?: ColorMode
  /** Min zoom. Defaults to 0.2. */
  minZoom?: number
  /** Max zoom. Defaults to 2.5. */
  maxZoom?: number
  /** Fit all nodes on mount. Defaults to true. */
  fitView?: boolean
  /** Children rendered as overlays (legend, custom panels). */
  children?: React.ReactNode
  className?: string
}
