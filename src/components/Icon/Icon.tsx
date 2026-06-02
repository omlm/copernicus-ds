import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Icon.module.css";

export type IconSize = "small" | "medium" | "large" | "huge";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: IconSize;
  /** Ikon-innholdet, typisk en SVG. Se icons.tsx for innebygde alternativer. */
  children: ReactNode;
}

const sizeClass: Record<IconSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
  huge: styles.sizeHuge,
};

export function Icon({ size = "medium", className, children, ...rest }: IconProps) {
  const classes = [styles.icon, sizeClass[size], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
