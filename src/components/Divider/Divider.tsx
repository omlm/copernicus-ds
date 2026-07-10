import { forwardRef, type HTMLAttributes } from "react";
import styles from "./Divider.module.css";

export type DividerOrientation = "horizontal" | "vertical";
export type DividerType = "strong" | "subdued";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Retning (Figma: "Orientation=Horizontal|Vertical"). */
  orientation?: DividerOrientation;
  /** Visuell tyngde (Figma: "Type=Strong|Subdued"). */
  type?: DividerType;
}

/**
 * Skillelinje (Figma: "Divider").
 *
 * En `hr` med token-styrt farge og tykkelse. Strong bruker border-default,
 * subdued bruker border-subdued. Vertikal variant brukes i horisontale rader
 * og fyller foreldrehøyden.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { orientation = "horizontal", type = "strong", className, ...rest },
  ref,
) {
  const classes = [
    styles.divider,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    type === "subdued" ? styles.subdued : styles.strong,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr ref={ref} className={classes} aria-orientation={orientation} {...rest} />;
});
