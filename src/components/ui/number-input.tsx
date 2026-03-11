import * as React from "react"
import { MinusIcon, PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface NumberInputProps
  extends Omit<React.ComponentProps<"input">, "type" | "onChange" | "value"> {
  value?: number
  defaultValue?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  /** Unit or currency label displayed after the value, e.g. "SUI", "USD", "%", "ETH" */
  unit?: string
  /** Position of the unit label. Defaults to "right". */
  unitPosition?: "left" | "right"
}

function NumberInput({
  className,
  value: controlledValue,
  defaultValue = 0,
  onChange,
  min,
  max,
  step = 1,
  unit,
  unitPosition = "right",
  disabled,
  ...props
}: NumberInputProps) {
  const [internal, setInternal] = React.useState(defaultValue)
  const value = controlledValue ?? internal

  const setValue = React.useCallback(
    (next: number) => {
      const clamped =
        min != null || max != null
          ? Math.min(max ?? Infinity, Math.max(min ?? -Infinity, next))
          : next
      if (controlledValue === undefined) setInternal(clamped)
      onChange?.(clamped)
    },
    [controlledValue, onChange, min, max]
  )

  const decrement = () => setValue(value - step)
  const increment = () => setValue(value + step)

  const atMin = min != null && value <= min
  const atMax = max != null && value >= max

  return (
    <div
      data-slot="number-input"
      className={cn(
        "inline-flex items-center border border-input",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <button
        type="button"
        tabIndex={-1}
        disabled={disabled || atMin}
        onClick={decrement}
        className="flex h-7 w-7 shrink-0 items-center justify-center border-r border-input text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground disabled:opacity-50"
      >
        <MinusIcon className="size-3" />
      </button>
      <div className="flex h-7 flex-1 items-center justify-center gap-1 px-2">
        {unit && unitPosition === "left" && (
          <span className="shrink-0 text-xs text-muted-foreground select-none">
            {unit}
          </span>
        )}
        <input
          type="number"
          inputMode="numeric"
          value={value}
          onChange={(e) => {
            const n = parseFloat(e.target.value)
            if (!isNaN(n)) setValue(n)
          }}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          className="h-7 w-full min-w-[3ch] bg-transparent text-center text-sm outline-none placeholder:text-muted-foreground [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
          {...props}
        />
        {unit && unitPosition === "right" && (
          <span className="shrink-0 text-xs text-muted-foreground select-none">
            {unit}
          </span>
        )}
      </div>
      <button
        type="button"
        tabIndex={-1}
        disabled={disabled || atMax}
        onClick={increment}
        className="flex h-7 w-7 shrink-0 items-center justify-center border-l border-input text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground disabled:opacity-50"
      >
        <PlusIcon className="size-3" />
      </button>
    </div>
  )
}

export { NumberInput }
export type { NumberInputProps }
