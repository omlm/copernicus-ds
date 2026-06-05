import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.css";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Etikett over feltet (Figma: "Label"). */
  label?: ReactNode;
  /** Hjelpetekst under feltet (Figma: "Input description"). */
  description?: ReactNode;
  /**
   * Feilmelding. Når satt går feltet i error-tilstand (rød border) og
   * meldingen vises i stedet for `description` (Figma: "State=Error").
   */
  error?: ReactNode;
}

/**
 * Tekstfelt (Figma: "Input").
 *
 * Et native `input` med etikett og hjelpetekst. Tilstandene Default/Filled/
 * Focus/Disabled følger inputen selv; Error styres av `error`-propen.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, description, error, id, className, disabled, ...rest },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const messageId = `${inputId}-message`;

  const hasError = error != null && error !== false;
  const message = hasError ? error : description;

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {label != null && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={inputId}
        className={styles.field}
        disabled={disabled}
        aria-invalid={hasError || undefined}
        aria-describedby={message != null ? messageId : undefined}
        {...rest}
      />
      {message != null && (
        <p id={messageId} className={hasError ? styles.errorText : styles.description}>
          {message}
        </p>
      )}
    </div>
  );
});
