import { forwardRef, type HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

export type SpinnerSize = "x-small" | "small" | "medium" | "large" | "x-large";

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  /** Størrelsen (Figma: "Size"). */
  size?: SpinnerSize;
  /** Tilgjengelig etikett som leses opp av skjermlesere. */
  label?: string;
}

/**
 * Lasteindikator (Figma: "Spinner").
 *
 * En 270°-bue over et subtilt spor som roterer kontinuerlig. Hastigheten
 * styres av `--spinner-animation-duration` (1 s per omdreining som standard,
 * som i Figma-prototypen). Geometrien matcher Figma-komponenten:
 * ringtykkelsen er 20 % av radius i alle størrelser.
 */
export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(function Spinner(
  { size = "medium", label = "Loading…", className, ...rest },
  ref,
) {
  const classes = [styles.spinner, styles[size], className].filter(Boolean).join(" ");

  return (
    <span ref={ref} role="status" aria-label={label} className={classes} {...rest}>
      {/* r=18 og strokeWidth=4 i en 40-boks gir samme donut som Figma (indre radius 0,8). */}
      <svg className={styles.svg} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle className={styles.track} cx="20" cy="20" r="18" fill="none" strokeWidth="4" />
        <circle
          className={styles.indicator}
          cx="20"
          cy="20"
          r="18"
          fill="none"
          strokeWidth="4"
          strokeDasharray="84.823 28.274"
          transform="rotate(-90 20 20)"
        />
      </svg>
    </span>
  );
});
