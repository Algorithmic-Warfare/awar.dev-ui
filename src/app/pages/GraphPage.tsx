import {
  GraphCanvas,
  GraphLegend,
  Handle,
  Position,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeProps,
  type GraphEdgeData,
} from "@/components/awar/graph"
import { cn } from "@/lib/utils"

// ── Custom node component ──

type OrgNodeData = { label: string; role: string }
type OrgNode = Node<OrgNodeData>

function OrgNodeComponent({ data, selected }: NodeProps<OrgNode>) {
  return (
    <div
      className={cn(
        "border border-border bg-card px-3 py-2 w-[160px] transition-colors",
        selected && "border-primary"
      )}
    >
      <Handle type="target" position={Position.Top} />
      <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {data.role}
      </p>
      <p className="text-sm font-bold">{data.label}</p>
      <Handle type="source" position={Position.Bottom} />
    </div>
  )
}

const nodeTypes = { org: OrgNodeComponent }

// ── Demo data ──

const initialNodes: OrgNode[] = [
  {
    id: "dao",
    type: "org",
    position: { x: 250, y: 0 },
    data: { label: "DAO Council", role: "governance" },
  },
  {
    id: "treasury",
    type: "org",
    position: { x: 80, y: 120 },
    data: { label: "Treasury", role: "finance" },
  },
  {
    id: "engineering",
    type: "org",
    position: { x: 250, y: 120 },
    data: { label: "Engineering", role: "development" },
  },
  {
    id: "community",
    type: "org",
    position: { x: 420, y: 120 },
    data: { label: "Community", role: "outreach" },
  },
  {
    id: "audit",
    type: "org",
    position: { x: 150, y: 240 },
    data: { label: "Audit Team", role: "security" },
  },
  {
    id: "protocol",
    type: "org",
    position: { x: 350, y: 240 },
    data: { label: "Protocol", role: "core" },
  },
]

const initialEdges: Edge<GraphEdgeData>[] = [
  {
    id: "e-dao-treasury",
    source: "dao",
    target: "treasury",
    type: "awar",
    data: { stroke: "var(--primary)" },
  },
  {
    id: "e-dao-engineering",
    source: "dao",
    target: "engineering",
    type: "awar",
    data: { stroke: "var(--primary)" },
  },
  {
    id: "e-dao-community",
    source: "dao",
    target: "community",
    type: "awar",
    data: { stroke: "var(--primary)" },
  },
  {
    id: "e-engineering-audit",
    source: "engineering",
    target: "audit",
    type: "awar",
    data: { stroke: "var(--accent)", dash: "6 3" },
  },
  {
    id: "e-engineering-protocol",
    source: "engineering",
    target: "protocol",
    type: "awar",
    data: { stroke: "var(--primary)" },
  },
  {
    id: "e-treasury-audit",
    source: "treasury",
    target: "audit",
    type: "awar",
    data: { stroke: "var(--muted-foreground)", dash: "4 4" },
  },
]

// ── Page component ──

export function GraphPage() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, , onEdgesChange] = useEdgesState(initialEdges)

  return (
    <section className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Graph Canvas</h2>
        <p className="text-muted-foreground mt-1">
          AWAR-themed wrapper around React Flow for hierarchy and relationship
          visualization.
        </p>
      </header>

      <div className="border border-border h-[480px]">
        <GraphCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          minZoom={0.3}
          maxZoom={2}
        >
          <GraphLegend
            title="RELATIONSHIPS"
            position="bottom-right"
            items={[
              {
                color: "var(--primary)",
                label: "Reports to",
                variant: "line",
              },
              {
                color: "var(--accent)",
                label: "Advisory",
                variant: "line",
                dash: "6 3",
              },
              {
                color: "var(--muted-foreground)",
                label: "Oversight",
                variant: "line",
                dash: "4 4",
              },
            ]}
          />
        </GraphCanvas>
      </div>

      <div className="text-sm text-muted-foreground space-y-1">
        <p>Pan: click + drag on background</p>
        <p>Zoom: scroll wheel or controls</p>
        <p>Select: click a node (border highlights)</p>
      </div>
    </section>
  )
}
