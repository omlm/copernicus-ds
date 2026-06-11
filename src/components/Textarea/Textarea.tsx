import { forwardRef, useId, type ReactNode, type TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Etikett over feltet (Figma: "Label"). */
  label?: ReactNode;
  /** Hjelpetekst under feltet (Figma: "Textarea description"). */
  description?: ReactNode;
  /**
   * Feilmelding. Når satt går feltet i error-tilstand (rød border) og
   * meldingen vises i stedet for `description` (Figma: "State=Error").
   */
  error?: ReactNode;
}

/**
 * Flerlinjet tekstfelt (Figma: "Textarea").
 *
 * Et native `textarea` med etikett og hjelpetekst — samme mønster og
 * tilstander som Input (Default/Filled/Focus/Error/Disabled).
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, description, error, id, className, disabled, rows = 4, ...rest },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const messageId = `${textareaId}-message`;

  const hasError = error != null && error !== false;
  const message = hasError ? error : description;

  return (
    <div className={[styles.root, className].filter(Boolean).join(" ")}>
      {label != null && (
        <label className={styles.label} htmlFor={textareaId}>
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        className={styles.field}
        disabled={disabled}
        rows={rows}
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
