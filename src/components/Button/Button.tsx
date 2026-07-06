import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, DynamicIcon, type IconName } from "../Icon";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonTone = "neutral" | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Destruktiv handling — farger knappen rødt uavhengig av variant. */
  tone?: ButtonTone;
  /** Vis trailing-ikon. true = standard pil, eller send et eget element. */
  trailingIcon?: boolean | ReactNode;
  /** Velg trailing-ikon fra hele Lucide-settet via navn (overstyrer pilen). */
  trailingIconName?: IconName;
  /** Vis leading-ikon (før etiketten). true = standard pil, eller send et eget element. */
  leadingIcon?: boolean | ReactNode;
  /** Velg leading-ikon fra hele Lucide-settet via navn. */
  leadingIconName?: IconName;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
};

const sizeClass: Record<ButtonSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

export function Button({
  variant = "primary",
  size = "large",
  tone = "neutral",
  trailingIcon = false,
  trailingIconName,
  leadingIcon = false,
  leadingIconName,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  let trailing: ReactNode = null;
  if (trailingIconName) {
    trailing = <DynamicIcon name={trailingIconName} />;
  } else if (trailingIcon === true) {
    trailing = <ArrowRight />;
  } else if (trailingIcon) {
    trailing = trailingIcon;
  }

  let leading: ReactNode = null;
  if (leadingIconName) {
    leading = <DynamicIcon name={leadingIconName} />;
  } else if (leadingIcon === true) {
    leading = <ArrowRight />;
  } else if (leadingIcon) {
    leading = leadingIcon;
  }

  const classes = [
    styles.button,
    variantClass[variant],
    sizeClass[size],
    tone === "danger" && styles.danger,
    leading && styles.hasLeadingIcon,
    trailing && styles.hasTrailingIcon,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {leading && <span className={styles.icon}>{leading}</span>}
      {children}
      {trailing && <span className={styles.icon}>{trailing}</span>}
    </button>
  );
}
