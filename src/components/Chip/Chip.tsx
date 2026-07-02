import type { HTMLAttributes, MouseEvent, ReactNode } from "react";
import { X } from "../Icon";
import styles from "./Chip.module.css";

export type ChipTone = "neutral" | "info" | "success" | "danger" | "warning";
export type ChipEmphasis = "strong" | "weak";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  /** Fargefamilie (Figma: "Tone"). */
  tone?: ChipTone;
  /** Visuell tyngde (Figma: "Emphasis"). strong = fylt, weak = lys m/ border. */
  emphasis?: ChipEmphasis;
  /** Viser et X-ikon (Lucide) for å lukke chip-en (Figma: "Dismissable"). */
  dismissable?: boolean;
  /**
   * Kalles når X-ikonet trykkes. Når satt blir X-en en interaktiv knapp;
   * hvis ikke er X-en kun dekorativ (matcher Figma-boolean-en).
   */
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Tilgjengelig etikett på lukk-knappen. */
  dismissLabel?: string;
  children: ReactNode;
}

const toneClass: Record<ChipTone, string> = {
  neutral: styles.neutral,
  info: styles.info,
  success: styles.success,
  danger: styles.danger,
  warning: styles.warning,
};

const emphasisClass: Record<ChipEmphasis, string> = {
  strong: styles.strong,
  weak: styles.weak,
};

export function Chip({
  tone = "neutral",
  emphasis = "strong",
  dismissable = false,
  onDismiss,
  dismissLabel = "Fjern",
  className,
  children,
  ...rest
}: ChipProps) {
  const classes = [styles.chip, toneClass[tone], emphasisClass[emphasis], className]
    .filter(Boolean)
    .join(" ");

  // X-en arver chip-fargen via currentColor (per variant), som i Figma.
  const dismissIcon = <X size={16} strokeWidth={1.5} aria-hidden="true" />;

  return (
    <span className={classes} {...rest}>
      {children}
      {dismissable &&
        (onDismiss ? (
          <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label={dismissLabel}>
            {dismissIcon}
          </button>
        ) : (
          <span className={styles.dismissIcon} aria-hidden="true">
            {dismissIcon}
          </span>
        ))}
    </span>
  );
}
