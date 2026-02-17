import { forwardRef } from 'react'
import type { CardProps, CardHeaderProps, CardBodyProps, CardFooterProps } from './Card.types'
import styles from './Card.module.css'

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const classes = [styles.card, styles[variant], className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...props} />
  }
)
CardRoot.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.header, className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...props} />
  }
)
CardHeader.displayName = 'Card.Header'

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.body, className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...props} />
  }
)
CardBody.displayName = 'Card.Body'

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    const classes = [styles.footer, className].filter(Boolean).join(' ')
    return <div ref={ref} className={classes} {...props} />
  }
)
CardFooter.displayName = 'Card.Footer'

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
})
