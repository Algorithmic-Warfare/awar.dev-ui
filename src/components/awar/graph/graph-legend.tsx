import { Panel } from "@xyflow/react"
import { cn } from "@/lib/utils"
import type { GraphLegendProps } from "./types"

const POSITION_MAP = {
  "bottom-left": "bottom-left",
  "bottom-right": "bottom-right",
  "top-left": "top-left",
  "top-right": "top-right",
} as const

export function GraphLegend({
  title,
  items,
  position = "bottom-right",
  className,
}: GraphLegendProps) {
  return (
    <Panel
      position={POSITION_MAP[position]}
      data-slot="graph-legend"
      className={cn(
        "border border-border bg-card p-3 text-xs",
        className
      )}
    >
      <p className="mb-2 font-medium uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <div className="flex flex-col gap-1.5">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            {item.variant === "line" ? (
              <svg width="20" height="10" className="shrink-0">
                <line
                  x1="0"
                  y1="5"
                  x2="20"
                  y2="5"
                  stroke={item.color}
                  strokeWidth="2"
                  strokeDasharray={item.dash}
                />
              </svg>
            ) : (
              <span
                className="block h-2.5 w-2.5 shrink-0"
                style={{ backgroundColor: item.color }}
              />
            )}
            <span className="text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </Panel>
  )
}
