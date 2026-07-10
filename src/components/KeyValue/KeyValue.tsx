import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./KeyValue.module.css";

export interface KeyValueProps extends HTMLAttributes<HTMLDivElement> {
  /** Nøkkelen/etiketten til venstre (Figma: "Key"). */
  label: ReactNode;
  /** Verdien til høyre (Figma: "Value"). */
  value: ReactNode;
}

/**
 * Nøkkel–verdi-rad (Figma: "KeyValue").
 *
 * En rad med etikett til venstre og verdi til høyre, f.eks. for
 * oppsummeringer og resultatkort. Stables vertikalt av konsumenten.
 */
export const KeyValue = forwardRef<HTMLDivElement, KeyValueProps>(function KeyValue(
  { label, value, className, ...rest },
  ref,
) {
  const classes = [styles.keyValue, className].filter(Boolean).join(" ");
  return (
    <div ref={ref} className={classes} {...rest}>
      <span className={styles.key}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
});
