import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import type { DropdownProps, DropdownTriggerProps, DropdownContentProps, DropdownItemProps, DropdownSeparatorProps } from './Dropdown.types'
import styles from './Dropdown.module.css'

function DropdownRoot({ children, ...props }: DropdownProps) {
  return <DropdownMenu.Root {...props}>{children}</DropdownMenu.Root>
}
DropdownRoot.displayName = 'Dropdown'

function DropdownTrigger({ children, asChild = true, ...props }: DropdownTriggerProps) {
  return <DropdownMenu.Trigger asChild={asChild} {...props}>{children}</DropdownMenu.Trigger>
}
DropdownTrigger.displayName = 'Dropdown.Trigger'

function DropdownContent({ children, className, align = 'start', sideOffset = 4, ...props }: DropdownContentProps) {
  const classes = [styles.content, className].filter(Boolean).join(' ')

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content className={classes} align={align} sideOffset={sideOffset} {...props}>
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  )
}
DropdownContent.displayName = 'Dropdown.Content'

function DropdownItem({ children, className, ...props }: DropdownItemProps) {
  const classes = [styles.item, className].filter(Boolean).join(' ')
  return <DropdownMenu.Item className={classes} {...props}>{children}</DropdownMenu.Item>
}
DropdownItem.displayName = 'Dropdown.Item'

function DropdownSeparator({ className, ...props }: DropdownSeparatorProps) {
  const classes = [styles.separator, className].filter(Boolean).join(' ')
  return <DropdownMenu.Separator className={classes} {...props} />
}
DropdownSeparator.displayName = 'Dropdown.Separator'

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Separator: DropdownSeparator,
})
