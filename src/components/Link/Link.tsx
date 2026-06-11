import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";
import styles from "./Link.module.css";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Lenketeksten (Figma: "Label"). */
  children: ReactNode;
}

/**
 * Lenke (Figma: "Link").
 *
 * En `a` i aksjonsfargen med understrek. Understreken fjernes på hover
 * (Figma: "State=Hover"), og fokus får samme ring som skjemafeltene
 * (Figma: "State=Focus").
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { className, children, ...rest },
  ref,
) {
  const classes = [styles.link, className].filter(Boolean).join(" ");

  return (
    <a ref={ref} className={classes} {...rest}>
      {children}
    </a>
  );
});
