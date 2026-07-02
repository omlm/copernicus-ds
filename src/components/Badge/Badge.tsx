import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Badge.module.css";

export type BadgeTone = "neutral" | "info" | "success" | "warning" | "danger";
export type BadgeEmphasis = "strong" | "weak";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Systemfarge (Figma: "Tone=Neutral|Info|Success|Warning|Danger"). */
  tone?: BadgeTone;
  /** Strong = fylt, Weak = svak bakgrunn med border (Figma: "Emphasis=Strong|Weak"). */
  emphasis?: BadgeEmphasis;
  /** Innholdet i merket (Figma: "Label"). */
  children: ReactNode;
}

const toneClass: Record<BadgeTone, string> = {
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
  { tone = "neutral", emphasis = "strong", className, children, ...rest },
  ref,
) {
  const classes = [
    styles.badge,
    toneClass[tone],
    emphasis === "weak" ? styles.weak : styles.strong,
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
