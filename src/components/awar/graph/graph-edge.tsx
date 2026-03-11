import {
  BaseEdge,
  getBezierPath,
  type Edge,
  type EdgeProps,
} from "@xyflow/react"
import type { GraphEdgeData } from "./types"

type AWAREdge = Edge<GraphEdgeData, "awar">

export function GraphEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  markerEnd,
  style,
}: EdgeProps<AWAREdge>) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  })

  const stroke = data?.stroke ?? "var(--border)"
  const strokeWidth = data?.width ?? 1.5
  const strokeDasharray = data?.dash

  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{
        stroke,
        strokeWidth,
        strokeDasharray,
        ...style,
      }}
    />
  )
}
