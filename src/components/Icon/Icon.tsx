import type { HTMLAttributes, ReactNode } from "react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import styles from "./Icon.module.css";

export type IconSize = "small" | "medium" | "large" | "huge";

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: IconSize;
  /**
   * Lucide-ikon valgt via navn (hele katalogen). F.eks. name="heart".
   * Brukes når man vil velge fritt fra Lucide-settet.
   */
  name?: IconName;
  /**
   * Alternativt: send ikon-innholdet direkte som element, f.eks.
   * <Icon><ArrowRight /></Icon>. Ignoreres hvis `name` er satt.
   */
  children?: ReactNode;
}

const sizeClass: Record<IconSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
  huge: styles.sizeHuge,
};

export function Icon({ size = "medium", name, className, children, ...rest }: IconProps) {
  const classes = [styles.icon, sizeClass[size], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {name ? <DynamicIcon name={name} /> : children}
    </span>
  );
}
