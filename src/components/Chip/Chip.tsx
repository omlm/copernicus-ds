import type { HTMLAttributes, ReactNode } from "react";
import styles from "./Chip.module.css";

export type ChipVariant = "neutral" | "accent" | "info" | "success" | "danger";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
  children: ReactNode;
}

const variantClass: Record<ChipVariant, string> = {
  neutral: styles.neutral,
  accent: styles.accent,
  info: styles.info,
  success: styles.success,
  danger: styles.danger,
};

export function Chip({ variant = "neutral", className, children, ...rest }: ChipProps) {
  const classes = [styles.chip, variantClass[variant], className].filter(Boolean).join(" ");
  return (
    <span className={classes} {...rest}>
      {children}
    </span>
  );
}
