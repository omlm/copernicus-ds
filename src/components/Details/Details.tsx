import { forwardRef, type DetailsHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "../Icon";
import styles from "./Details.module.css";

export interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Den alltid synlige overskriften (Figma: "Summary label"). */
  summary: ReactNode;
  /** Innholdet som vises når elementet er åpent (Figma: "Content"). */
  children: ReactNode;
}

/**
 * Ekspanderbart panel (Figma: "Details").
 *
 * Et native `details`/`summary` med token-styrt ramme og en chevron som
 * roterer når panelet åpnes (Figma: "State=Closed|Open"). Åpne/lukke-logikk
 * og tastaturstøtte kommer gratis fra nettleseren.
 */
export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(function Details(
  { summary, className, children, ...rest },
  ref,
) {
  const classes = [styles.details, className].filter(Boolean).join(" ");

  return (
    <details ref={ref} className={classes} {...rest}>
      <summary className={styles.summary}>
        <span className={styles.summaryLabel}>{summary}</span>
        <ChevronDown className={styles.chevron} size={24} aria-hidden="true" />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
});
