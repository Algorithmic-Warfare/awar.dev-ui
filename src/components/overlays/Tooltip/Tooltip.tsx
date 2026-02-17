import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import type { TooltipProps } from './Tooltip.types'
import styles from './Tooltip.module.css'

export function Tooltip({ children, content, side = 'top', sideOffset = 4, delayDuration = 300 }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            className={styles.content}
            side={side}
            sideOffset={sideOffset}
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
