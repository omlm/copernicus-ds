import { forwardRef, type HTMLAttributes } from "react";
import styles from "./Progress.module.css";

export type ProgressSize = "medium" | "small";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Antall fullførte steg, 0 til `steps` (Figma: "Active=None|1..7"). */
  value: number;
  /** Størrelse (Figma: "Size=Medium|Small"). */
  size?: ProgressSize;
  /** Antall segmenter. Figma-komponenten har 7. */
  steps?: number;
  /** Tilgjengelig navn for fremdriftsindikatoren. */
  "aria-label"?: string;
}

const sizeClass: Record<ProgressSize, string> = {
  medium: styles.sizeMedium,
  small: styles.sizeSmall,
};

/**
 * Fremdriftsindikator (Figma: "Progress").
 *
 * En rad med like brede segmenter der de første `value` er fylt med
 * aksjonsfargen. Tilstandsløs — verdien styres av konsumenten.
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(function Progress(
  { value, size = "medium", steps = 7, className, "aria-label": ariaLabel = "Fremdrift", ...rest },
  ref,
) {
  const clamped = Math.max(0, Math.min(steps, Math.round(value)));
  const classes = [styles.progress, sizeClass[size], className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={steps}
      aria-valuenow={clamped}
      {...rest}
    >
      {Array.from({ length: steps }, (_, i) => (
        <span
          key={i}
          className={[styles.step, i < clamped && styles.stepActive].filter(Boolean).join(" ")}
        />
      ))}
    </div>
  );
});
