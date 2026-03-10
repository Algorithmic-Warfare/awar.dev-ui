import * as React from "react"
import { cn } from "@/lib/utils"
import { Logo, type LogoProps } from "./logo"

export interface LogoLockupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Logo size in pixels. */
  logoSize?: number
  /** Props forwarded to the Logo SVG. */
  logoProps?: Omit<LogoProps, "size">
  /** Text displayed next to the logo. Defaults to "AWAR". */
  text?: string
  /** Subtitle displayed below the text. */
  subtitle?: string
}

function LogoLockup({
  logoSize = 28,
  logoProps,
  text = "AWAR",
  subtitle,
  className,
  ...props
}: LogoLockupProps) {
  return (
    <div
      data-slot="logo-lockup"
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <Logo size={logoSize} className="text-primary" {...logoProps} />
      <div className="flex flex-col">
        <span className="text-sm font-semibold tracking-widest text-foreground">
          {text}
        </span>
        {subtitle && (
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        )}
      </div>
    </div>
  )
}

export { LogoLockup }
