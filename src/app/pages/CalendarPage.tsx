import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

export function CalendarPage() {
  const [single, setSingle] = useState<Date | undefined>(new Date())
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(Date.now() + 7 * 86400000),
  })

  return (
    <section className="space-y-10">
      <header>
        <h2 className="text-2xl font-bold">Calendar</h2>
        <p className="text-muted-foreground mt-1">
          Date picker powered by react-day-picker.
        </p>
      </header>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Single Date</h3>
        <div className="border border-border w-fit">
          <Calendar mode="single" selected={single} onSelect={setSingle} />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected: {single?.toLocaleDateString() ?? "none"}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Date Range</h3>
        <div className="border border-border w-fit">
          <Calendar mode="range" selected={range} onSelect={setRange} />
        </div>
        <p className="text-sm text-muted-foreground">
          Range: {range?.from?.toLocaleDateString() ?? "?"} – {range?.to?.toLocaleDateString() ?? "?"}
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-semibold">Date Picker (Popover)</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[220px] justify-start text-left font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {single?.toLocaleDateString() ?? "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={single} onSelect={setSingle} />
          </PopoverContent>
        </Popover>
      </div>
    </section>
  )
}
