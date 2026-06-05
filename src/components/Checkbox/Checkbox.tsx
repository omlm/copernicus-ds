import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { Check } from "../Icon";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "children"> {
  /** Etiketten ved siden av avkrysningsboksen (Figma: "Label"). */
  children: ReactNode;
}

/**
 * Avkrysningsboks (Figma: "Checkbox").
 *
 * Et native `input type=checkbox` med token-stylet kvadratisk kontroll og en
 * Lucide-hake. Tilstandene checked/unchecked og fokus følger inputen selv.
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { children, className, disabled, ...rest },
  ref,
) {
  const classes = [styles.checkbox, disabled && styles.disabled, className].filter(Boolean).join(" ");

  return (
    <label className={classes}>
      <input ref={ref} type="checkbox" className={styles.input} disabled={disabled} {...rest} />
      <span className={styles.control} aria-hidden="true">
        <Check className={styles.check} size={16} strokeWidth={2} />
      </span>
      <span className={styles.label}>{children}</span>
    </label>
  );
});
