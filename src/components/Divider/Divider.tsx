import { forwardRef, type HTMLAttributes } from "react";
import styles from "./Divider.module.css";

export type DividerOrientation = "horizontal" | "vertical";

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  /** Retning (Figma: "Orientation=Horizontal|Vertical"). */
  orientation?: DividerOrientation;
}

/**
 * Skillelinje (Figma: "Divider").
 *
 * En `hr` med token-styrt farge og tykkelse. Vertikal variant brukes i
 * horisontale rader og fyller foreldrehøyden.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(function Divider(
  { orientation = "horizontal", className, ...rest },
  ref,
) {
  const classes = [
    styles.divider,
    orientation === "vertical" ? styles.vertical : styles.horizontal,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <hr ref={ref} className={classes} aria-orientation={orientation} {...rest} />;
});
