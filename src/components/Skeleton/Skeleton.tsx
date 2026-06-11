import { forwardRef, type CSSProperties, type HTMLAttributes } from "react";
import styles from "./Skeleton.module.css";

export type SkeletonVariant = "text" | "circle" | "rectangle";

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Form (Figma: "Variant=Text|Circle|Rectangle"). */
  variant?: SkeletonVariant;
  /** Bredde, f.eks. 240 eller "100%". */
  width?: CSSProperties["width"];
  /** Høyde. Text og Circle har fornuftige standarder fra tokens. */
  height?: CSSProperties["height"];
}

const variantClass: Record<SkeletonVariant, string> = {
  text: styles.text,
  circle: styles.circle,
  rectangle: styles.rectangle,
};

/**
 * Lasteplassholder (Figma: "Skeleton").
 *
 * En pulserende flate i neutral-weak som holder plassen til innhold som
 * lastes. Skjult for skjermlesere — bruk synlig lastetekst eller `aria-busy`
 * på containeren rundt.
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(function Skeleton(
  { variant = "text", width, height, className, style, ...rest },
  ref,
) {
  const classes = [styles.skeleton, variantClass[variant], className].filter(Boolean).join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{ width, height, ...style }}
      aria-hidden="true"
      {...rest}
    />
  );
});
