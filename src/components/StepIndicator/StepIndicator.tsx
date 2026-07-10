import { forwardRef, type HTMLAttributes } from "react";
import styles from "./StepIndicator.module.css";

export type StepIndicatorSize = "large" | "medium" | "small";

export interface StepIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Antall fullførte steg, 0 til `steps` (Figma: "Active step=None|1..6"). */
  activeStep: number;
  /** Størrelse (Figma: "Size=Large|Medium|Small"). */
  size?: StepIndicatorSize;
  /** Antall steg. Figma-komponenten har 6. */
  steps?: number;
  /** Tilgjengelig navn for stegindikatoren. */
  "aria-label"?: string;
}

const sizeClass: Record<StepIndicatorSize, string> = {
  large: styles.sizeLarge,
  medium: styles.sizeMedium,
  small: styles.sizeSmall,
};

/**
 * Stegindikator (Figma: "Step indicator").
 *
 * Viser progresjon gjennom en fast flyt som en rad rektangulære segmenter
 * der de første `activeStep` er fylt med aksjonsfargen. Tilstandsløs —
 * verdien styres av konsumenten.
 */
export const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps>(function StepIndicator(
  {
    activeStep,
    size = "large",
    steps = 6,
    className,
    "aria-label": ariaLabel = "Steg",
    ...rest
  },
  ref,
) {
  const clamped = Math.max(0, Math.min(steps, Math.round(activeStep)));
  const classes = [styles.indicator, sizeClass[size], className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      role="progressbar"
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={steps}
      aria-valuenow={clamped}
      aria-valuetext={`Steg ${clamped} av ${steps}`}
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
