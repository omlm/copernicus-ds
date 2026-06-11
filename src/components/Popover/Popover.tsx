import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { X } from "../Icon";
import styles from "./Popover.module.css";

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Overskrift (Figma: "Title"). */
  title?: ReactNode;
  /** Innholdet (Figma: "Body"). */
  children: ReactNode;
  /** Kalles når lukkeknappen klikkes. Uten denne vises ingen lukkeknapp. */
  onClose?: () => void;
}

/**
 * Popover-panel (Figma: "Popover").
 *
 * Et flytende panel for kontekstuell hjelp eller handlinger. Komponenten
 * styler panelet; posisjonering (f.eks. med CSS anchor eller en
 * posisjonerings-lib) og åpne/lukke-tilstand eies av konsumenten.
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(function Popover(
  { title, onClose, className, children, ...rest },
  ref,
) {
  const classes = [styles.popover, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} role="dialog" aria-modal="false" {...rest}>
      {(title != null || onClose != null) && (
        <div className={styles.header}>
          {title != null && <p className={styles.title}>{title}</p>}
          {onClose != null && (
            <button type="button" className={styles.close} onClick={onClose} aria-label="Lukk">
              <X size={24} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
});
