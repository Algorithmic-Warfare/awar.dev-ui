import { forwardRef } from 'react'
import type { ActionBarProps, ActionBarItemProps } from './ActionBar.types'
import styles from './ActionBar.module.css'

const ActionBarRoot = forwardRef<HTMLDivElement, ActionBarProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.bar, className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} role="toolbar" {...props} />
  }
)
ActionBarRoot.displayName = 'ActionBar'

const ActionBarItem = forwardRef<HTMLButtonElement, ActionBarItemProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.item, className].filter(Boolean).join(' ')
    return <button ref={ref} className={classes} type="button" {...props} />
  }
)
ActionBarItem.displayName = 'ActionBar.Item'

export const ActionBar = Object.assign(ActionBarRoot, {
  Item: ActionBarItem,
})
