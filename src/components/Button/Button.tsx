import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "../Icon";
import styles from "./Button.module.css";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** Vis pil-ikon etter teksten. Sett til en egen node for å bytte ikon. */
  trailingIcon?: boolean | ReactNode;
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
  className,
  type = "button",
  children,
  ...rest
}: ButtonProps) {
  const classes = [styles.button, variantClass[variant], sizeClass[size], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...rest}>
      {children}
      {trailingIcon && (
        <span className={styles.icon}>
          {trailingIcon === true ? <ArrowRight /> : trailingIcon}
        </span>
      )}
    </button>
  );
}
