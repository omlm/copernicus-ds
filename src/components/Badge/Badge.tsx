import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeColor = "neutral" | "info" | "success" | "warning" | "danger";
export type BadgeVariant = "strong" | "weak";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Systemfarge (Figma: "Color=Neutral|Info|Success|Warning|Danger"). */
  color?: BadgeColor;
  /** Strong = fylt, Weak = svak bakgrunn med border (Figma: "Style=Strong|Weak"). */
  variant?: BadgeVariant;
  /** Innholdet i merket (Figma: "Label"). */
  children: ReactNode;
}

const colorClass: Record<BadgeColor, string> = {
  neutral: styles.neutral,
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  danger: styles.danger,
};

/**
 * Statusmerke (Figma: "Badge").
 *
 * En liten pille for status og kategorisering. Bruker system-fargene
 * (neutral/info/success/warning/danger) i strong- eller weak-utgave.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { color = "neutral", variant = "strong", className, children, ...rest },
  ref,
) {
  const classes = [
    styles.badge,
    colorClass[color],
    variant === "weak" ? styles.weak : styles.strong,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span ref={ref} className={classes} {...rest}>
      {children}
    </span>
  );
});
