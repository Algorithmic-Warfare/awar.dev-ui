import { forwardRef, useId } from 'react'
import type { InputProps } from './Input.types'
import styles from './Input.module.css'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, prefix, className, disabled, id: idProp, ...props }, ref) => {
    const autoId = useId()
    const id = idProp || autoId
    const errorId = `${id}-error`

    const wrapperClasses = [
      styles.wrapper,
      error ? styles.error : '',
      disabled ? styles.disabled : '',
      className,
    ].filter(Boolean).join(' ')

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputRow}>
          {prefix && <span className={styles.prefix}>{prefix}</span>}
          <input
            ref={ref}
            id={id}
            className={styles.input}
            disabled={disabled}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
        </div>
        {error && (
          <span id={errorId} className={styles.errorMessage} role="alert">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
