import { forwardRef, type FieldsetHTMLAttributes, type ReactNode } from "react";
import styles from "./Fieldset.module.css";

export interface FieldsetProps extends FieldsetHTMLAttributes<HTMLFieldSetElement> {
  /** Gruppetittelen (Figma: "Legend"). */
  legend: ReactNode;
  /** Skjemakontrollene i gruppen, f.eks. Checkbox eller RadioButton. */
  children: ReactNode;
}

/**
 * Skjemagruppe (Figma: "Fieldset").
 *
 * Et native `fieldset` med `legend` og token-styrt ramme. Grupperer
 * relaterte kontroller slik at skjermlesere leser gruppetittelen sammen
 * med hver kontroll.
 */
export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function Fieldset(
  { legend, className, children, ...rest },
  ref,
) {
  const classes = [styles.fieldset, className].filter(Boolean).join(" ");

  return (
    <fieldset ref={ref} className={classes} {...rest}>
      <legend className={styles.legend}>{legend}</legend>
      <div className={styles.content}>{children}</div>
    </fieldset>
  );
});
