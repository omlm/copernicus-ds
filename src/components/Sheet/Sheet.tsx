import { forwardRef, useId, type HTMLAttributes, type ReactNode } from "react";
import { IconButton } from "../IconButton";
import styles from "./Sheet.module.css";

export interface SheetProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Overskrift (Figma: "Sheet title"). */
  title?: ReactNode;
  /** Kalles når tilbakeknappen klikkes. Uten denne vises ingen tilbakeknapp (Figma: "Back icon"). */
  onBack?: () => void;
  /** Kalles når lukkeknappen klikkes. Uten denne vises ingen lukkeknapp (Figma: "Close icon"). */
  onClose?: () => void;
  /** Tilgjengelig navn på tilbakeknappen. */
  backLabel?: string;
  /** Tilgjengelig navn på lukkeknappen. */
  closeLabel?: string;
  /** Innholdet (Figma: "Slot"). */
  children: ReactNode;
}

/**
 * Bunnpanel (Figma: "Sheet").
 *
 * Et innglidende panel med dra-håndtak, valgfri tilbake- og lukkeknapp og
 * tittel. Komponenten styler panelet; posisjonering, animasjon og
 * åpne/lukke-tilstand eies av konsumenten.
 */
export const Sheet = forwardRef<HTMLDivElement, SheetProps>(function Sheet(
  {
    title,
    onBack,
    onClose,
    backLabel = "Tilbake",
    closeLabel = "Lukk",
    className,
    children,
    ...rest
  },
  ref,
) {
  const titleId = useId();
  const classes = [styles.sheet, className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      role="dialog"
      aria-modal="false"
      aria-labelledby={title != null ? titleId : undefined}
      {...rest}
    >
      <div className={styles.header}>
        {onBack != null ? (
          <IconButton variant="ghost" size="medium" iconName="arrow-left" aria-label={backLabel} onClick={onBack} />
        ) : (
          <span className={styles.headerSpacer} aria-hidden="true" />
        )}
        <span className={styles.handle} aria-hidden="true" />
        {onClose != null ? (
          <IconButton variant="ghost" size="medium" iconName="x" aria-label={closeLabel} onClick={onClose} />
        ) : (
          <span className={styles.headerSpacer} aria-hidden="true" />
        )}
      </div>
      <div className={styles.content}>
        {title != null && (
          <h2 id={titleId} className={styles.title}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
});
