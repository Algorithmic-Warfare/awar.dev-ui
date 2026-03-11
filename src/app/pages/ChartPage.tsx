import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"

// ── Demo data ──

const priceData = [
  { date: "Jan", price: 1.24, volume: 4200 },
  { date: "Feb", price: 1.31, volume: 3800 },
  { date: "Mar", price: 1.18, volume: 5100 },
  { date: "Apr", price: 1.42, volume: 6300 },
  { date: "May", price: 1.55, volume: 5800 },
  { date: "Jun", price: 1.38, volume: 4900 },
  { date: "Jul", price: 1.67, volume: 7200 },
  { date: "Aug", price: 1.72, volume: 6100 },
]

const tvlData = [
  { date: "Jan", protocol: 12.4, lending: 8.2 },
  { date: "Feb", protocol: 14.1, lending: 9.1 },
  { date: "Mar", protocol: 13.8, lending: 10.3 },
  { date: "Apr", protocol: 16.2, lending: 11.7 },
  { date: "May", protocol: 18.5, lending: 12.4 },
  { date: "Jun", protocol: 17.9, lending: 13.8 },
  { date: "Jul", protocol: 21.3, lending: 14.2 },
  { date: "Aug", protocol: 23.1, lending: 15.6 },
]

const volumeData = [
  { date: "Mon", buy: 2400, sell: 1800 },
  { date: "Tue", buy: 3100, sell: 2200 },
  { date: "Wed", buy: 1800, sell: 2900 },
  { date: "Thu", buy: 4200, sell: 1600 },
  { date: "Fri", buy: 3600, sell: 2400 },
  { date: "Sat", buy: 2100, sell: 1900 },
  { date: "Sun", buy: 2800, sell: 2100 },
]

// ── Chart configs ──

const priceConfig: ChartConfig = {
  price: { label: "Price (USD)", color: "var(--primary)" },
}

const tvlConfig: ChartConfig = {
  protocol: { label: "Protocol TVL", color: "var(--primary)" },
  lending: { label: "Lending TVL", color: "var(--accent)" },
}

const volumeConfig: ChartConfig = {
  buy: { label: "Buy", color: "var(--primary)" },
  sell: { label: "Sell", color: "var(--destructive)" },
}

// ── Page ──

export function ChartPage() {
  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Chart</h2>
        <p className="text-muted-foreground mt-1">
          Recharts-powered charts with AWAR theme integration via ChartContainer.
        </p>
      </header>

      {/* Area chart — token price */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Area — Token Price</h3>
        <div className="border border-border p-4">
          <ChartContainer config={priceConfig} className="h-[240px] w-full">
            <AreaChart data={priceData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="price"
                stroke="var(--color-price)"
                fill="var(--color-price)"
                fillOpacity={0.15}
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </div>

      {/* Line chart — TVL comparison */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Line — TVL Comparison</h3>
        <div className="border border-border p-4">
          <ChartContainer config={tvlConfig} className="h-[240px] w-full">
            <LineChart data={tvlData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}M`} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                type="monotone"
                dataKey="protocol"
                stroke="var(--color-protocol)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="lending"
                stroke="var(--color-lending)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>

      {/* Bar chart — volume */}
      <div className="space-y-4">
        <h3 className="text-base font-semibold">Bar — Trading Volume</h3>
        <div className="border border-border p-4">
          <ChartContainer config={volumeConfig} className="h-[240px] w-full">
            <BarChart data={volumeData}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="buy" fill="var(--color-buy)" />
              <Bar dataKey="sell" fill="var(--color-sell)" />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </section>
  )
}
