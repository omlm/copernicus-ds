import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Switch.module.css";

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  /** Etiketten ved siden av bryteren (Figma: "Label"). */
  children: ReactNode;
}

/**
 * Bryter (Figma: "Toggle", "is Selected=Yes|No").
 *
 * Et native `input type=checkbox` med `role="switch"`, stylet som en pille
 * med glidende knott. Tilstandene på/av og fokus følger inputen selv —
 * samme mønster som Checkbox.
 */
export const Switch = forwardRef<HTMLInputElement, SwitchProps>(function Switch(
  { children, className, disabled, ...rest },
  ref,
) {
  const classes = [styles.switch, disabled && styles.disabled, className].filter(Boolean).join(" ");

  return (
    <label className={classes}>
      <input
        ref={ref}
        type="checkbox"
        role="switch"
        className={styles.input}
        disabled={disabled}
        {...rest}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb} />
      </span>
      <span className={styles.label}>{children}</span>
    </label>
  );
});
