import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Paragraph.module.css";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Brødteksten. */
  children: ReactNode;
}

/**
 * Brødtekst (Figma: "Paragraph").
 *
 * Standard avsnittsstil — Outfit Light 16/20 i foreground-primary.
 */
export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(function Paragraph(
  { className, children, ...rest },
  ref,
) {
  const classes = [styles.paragraph, className].filter(Boolean).join(" ");
  return (
    <p ref={ref} className={classes} {...rest}>
      {children}
    </p>
  );
});
