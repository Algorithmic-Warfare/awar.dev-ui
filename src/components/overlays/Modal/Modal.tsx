import * as Dialog from '@radix-ui/react-dialog'
import type { ModalProps, ModalTriggerProps, ModalContentProps, ModalCloseProps } from './Modal.types'
import styles from './Modal.module.css'

function ModalRoot({ children, ...props }: ModalProps) {
  return <Dialog.Root {...props}>{children}</Dialog.Root>
}
ModalRoot.displayName = 'Modal'

function ModalTrigger({ children, asChild = true, ...props }: ModalTriggerProps) {
  return <Dialog.Trigger asChild={asChild} {...props}>{children}</Dialog.Trigger>
}
ModalTrigger.displayName = 'Modal.Trigger'

function ModalContent({ children, className, title, description, ...props }: ModalContentProps) {
  const classes = [styles.content, className].filter(Boolean).join(' ')

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content className={classes} {...props}>
        {title && (
          <div className={styles.header}>
            <Dialog.Title className={styles.title}>{title}</Dialog.Title>
            <Dialog.Close asChild>
              <button className={styles.close} aria-label="Close">
                &times;
              </button>
            </Dialog.Close>
          </div>
        )}
        {description && (
          <Dialog.Description className={styles.description}>
            {description}
          </Dialog.Description>
        )}
        <div className={styles.body}>{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
ModalContent.displayName = 'Modal.Content'

function ModalClose({ children, asChild = true, ...props }: ModalCloseProps) {
  return <Dialog.Close asChild={asChild} {...props}>{children}</Dialog.Close>
}
ModalClose.displayName = 'Modal.Close'

export const Modal = Object.assign(ModalRoot, {
  Trigger: ModalTrigger,
  Content: ModalContent,
  Close: ModalClose,
})
