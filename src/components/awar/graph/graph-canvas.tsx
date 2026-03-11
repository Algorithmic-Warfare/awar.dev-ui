import { useMemo } from "react"
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  type EdgeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import "./graph-canvas.css"

import { cn } from "@/lib/utils"
import { useAWARTheme } from "@/provider"
import { GraphEdge } from "./graph-edge"
import type { GraphCanvasProps } from "./types"

// Cast needed because React Flow's EdgeTypes expects generic edge data,
// but our custom edge component narrows to GraphEdgeData
const DEFAULT_EDGE_TYPES: EdgeTypes = {
  awar: GraphEdge as unknown as EdgeTypes[string],
}

export function GraphCanvas<
  N extends Record<string, unknown> = Record<string, unknown>,
  E extends Record<string, unknown> = Record<string, unknown>,
>({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  nodeTypes,
  edgeTypes: userEdgeTypes,
  background = true,
  controls = true,
  colorMode: colorModeProp,
  minZoom = 0.2,
  maxZoom = 2.5,
  fitView = true,
  children,
  className,
}: GraphCanvasProps<N, E>) {
  const { theme } = useAWARTheme()
  const colorMode = colorModeProp ?? theme

  const edgeTypes = useMemo(
    () => ({ ...DEFAULT_EDGE_TYPES, ...userEdgeTypes }),
    [userEdgeTypes]
  )

  const bgConfig =
    typeof background === "object"
      ? background
      : background
        ? {}
        : null

  return (
    <div
      data-slot="graph-canvas"
      className={cn("h-full w-full", className)}
    >
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          colorMode={colorMode}
          minZoom={minZoom}
          maxZoom={maxZoom}
          fitView={fitView}
          proOptions={{ hideAttribution: true }}
        >
          {bgConfig !== null && (
            <Background
              variant={BackgroundVariant.Dots}
              gap={bgConfig.gap ?? 20}
              size={bgConfig.size ?? 1}
              color={bgConfig.color}
            />
          )}
          {controls && <Controls />}
          {children}
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  )
}
