import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight, DynamicIcon, type IconName } from "../Icon";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Vis trailing-ikon. true = standard pil, eller send et eget element. */
  trailingIcon?: boolean | ReactNode;
  /** Velg trailing-ikon fra hele Lucide-settet via navn (overstyrer pilen). */
  trailingIconName?: IconName;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const sizeClass: Record<ButtonSize, string> = {
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};

export function Button({
  variant = "primary",
  size = "large",
  trailingIcon = false,
  trailingIconName,
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  // Prioritet: valgt navn -> egendefinert element -> standard pil.
  let trailing: ReactNode = null;
  if (trailingIconName) {
    trailing = <DynamicIcon name={trailingIconName} />;
  } else if (trailingIcon === true) {
    trailing = <ArrowRight />;
  } else if (trailingIcon) {
    trailing = trailingIcon;
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {trailing && <span className={styles.icon}>{trailing}</span>}
    </button>
  );
}
