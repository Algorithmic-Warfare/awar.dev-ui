import { forwardRef, createContext, useContext } from 'react'
import type { ListProps, ListItemProps, ListBullet } from './List.types'
import styles from './List.module.css'

const bulletGlyphs: Record<ListBullet, string> = {
  none: '',
  dash: '─',
  arrow: '▸',
  dot: '●',
}

const ListContext = createContext<ListBullet>('dash')

const ListRoot = forwardRef<HTMLUListElement, ListProps>(
  ({ bullet = 'dash', className, children, ...props }, ref) => {
    const classes = [styles.list, className].filter(Boolean).join(' ')
    return (
      <ListContext.Provider value={bullet}>
        <ul ref={ref} className={classes} {...props}>
          {children}
        </ul>
      </ListContext.Provider>
    )
  }
)
ListRoot.displayName = 'List'

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(
  ({ className, children, ...props }, ref) => {
    const bullet = useContext(ListContext)
    const classes = [styles.item, className].filter(Boolean).join(' ')
    const glyph = bulletGlyphs[bullet]

    return (
      <li ref={ref} className={classes} {...props}>
        {glyph && <span className={styles.bullet} aria-hidden="true">{glyph}</span>}
        <span>{children}</span>
      </li>
    )
  }
)
ListItem.displayName = 'List.Item'

export const List = Object.assign(ListRoot, {
  Item: ListItem,
})
