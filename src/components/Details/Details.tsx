import { forwardRef, type DetailsHTMLAttributes, type ReactNode } from "react";
import { ChevronDown } from "../Icon";
import styles from "./Details.module.css";

export interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  /** Den alltid synlige overskriften (Figma: "Title"). */
  summary: ReactNode;
  /** Valgfri chip i overskriftsraden, f.eks. `<Chip label="Score: 4" />` (Figma: "show Chip"). */
  chip?: ReactNode;
  /** Innholdet som vises når elementet er åpent (Figma: "Slot"). */
  children: ReactNode;
}

/**
 * Ekspanderbart panel (Figma: "Accordion").
 *
 * Et native `details`/`summary` med token-styrt flate og en chevron som
 * roterer når panelet åpnes (Figma: "is Expanded=No|Yes"). Åpne/lukke-logikk
 * og tastaturstøtte kommer gratis fra nettleseren.
 */
export const Details = forwardRef<HTMLDetailsElement, DetailsProps>(function Details(
  { summary, chip, className, children, ...rest },
  ref,
) {
  const classes = [styles.details, className].filter(Boolean).join(" ");

  return (
    <details ref={ref} className={classes} {...rest}>
      <summary className={styles.summary}>
        <span className={styles.summaryLabel}>{summary}</span>
        {chip != null && <span className={styles.chip}>{chip}</span>}
        <ChevronDown className={styles.chevron} size={24} aria-hidden="true" />
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
});
