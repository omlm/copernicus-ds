import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, DynamicIcon, type IconName } from "../Icon";
import styles from "./IconButton.module.css";

export type IconButtonVariant = "primary" | "secondary" | "ghost";
export type IconButtonSize = "small" | "medium" | "large";

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  /** Velg ikon fra hele Lucide-settet via navn. F.eks. iconName="heart". */
  iconName?: IconName;
  /** Alternativt: send ikon-elementet direkte. Ignoreres hvis `iconName` er satt. */
  icon?: ReactNode;
  /**
   * Tilgjengelig navn for skjermlesere. Påkrevd — en ikon-knapp har ingen
   * synlig tekst, så uten dette er knappen utilgjengelig.
   */
  "aria-label": string;
}

const variantClass: Record<IconButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
};

const sizeClass: Record<IconButtonSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

export function IconButton({
  variant = "primary",
  size = "large",
  iconName,
  icon,
  className,
  type = "button",
  ...rest
}: IconButtonProps) {
  const classes = [styles.iconButton, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  // Prioritet: valgt navn -> egendefinert element -> standard pil.
  const content: ReactNode = iconName ? <DynamicIcon name={iconName} /> : (icon ?? <ArrowRight />);

  return (
    <button type={type} className={classes} {...rest}>
      <span className={styles.icon}>{content}</span>
    </button>
  );
}
