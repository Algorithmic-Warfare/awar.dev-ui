import * as PopoverPrimitive from '@radix-ui/react-popover'
import type { PopoverProps, PopoverTriggerProps, PopoverContentProps, PopoverCloseProps } from './Popover.types'
import styles from './Popover.module.css'

function PopoverRoot({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
}
PopoverRoot.displayName = 'Popover'

function PopoverTrigger({ children, asChild = true, ...props }: PopoverTriggerProps) {
  return <PopoverPrimitive.Trigger asChild={asChild} {...props}>{children}</PopoverPrimitive.Trigger>
}
PopoverTrigger.displayName = 'Popover.Trigger'

function PopoverContent({ children, className, align = 'center', side = 'bottom', sideOffset = 4, ...props }: PopoverContentProps) {
  const classes = [styles.content, className].filter(Boolean).join(' ')

  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        className={classes}
        align={align}
        side={side}
        sideOffset={sideOffset}
        {...props}
      >
        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
}
PopoverContent.displayName = 'Popover.Content'

function PopoverClose({ children, asChild = true, ...props }: PopoverCloseProps) {
  return <PopoverPrimitive.Close asChild={asChild} {...props}>{children}</PopoverPrimitive.Close>
}
PopoverClose.displayName = 'Popover.Close'

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
  Close: PopoverClose,
})
