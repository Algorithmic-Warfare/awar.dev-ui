export { GraphCanvas } from "./graph-canvas"
export { GraphEdge } from "./graph-edge"
export { GraphLegend } from "./graph-legend"

export type {
  GraphCanvasProps,
  GraphEdgeData,
  GraphLegendItem,
  GraphLegendProps,
} from "./types"

// Re-export commonly used React Flow utilities for consumer convenience
export {
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
  type EdgeProps,
  type NodeTypes,
  type EdgeTypes,
} from "@xyflow/react"
