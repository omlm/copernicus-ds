import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Alert.module.css";

export type AlertTone = "info" | "success" | "warning" | "danger";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Alvorlighetsgrad (Figma: "Tone=Info|Success|Warning|Danger"). */
  tone?: AlertTone;
  /** Overskrift (Figma: "Title"). */
  title?: ReactNode;
  /** Brødtekst (Figma: "Description"). */
  children?: ReactNode;
}

const toneClass: Record<AlertTone, string> = {
  info: styles.info,
  success: styles.success,
  warning: styles.warning,
  danger: styles.danger,
};

/**
 * Varselboks (Figma: "Alert").
 *
 * En innrammet melding i system-fargenes weak-utgave. Warning og danger
 * annonseres med `role="alert"`, info og success med `role="status"`.
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { tone = "info", title, className, children, ...rest },
  ref,
) {
  const classes = [styles.alert, toneClass[tone], className].filter(Boolean).join(" ");
  const role = tone === "warning" || tone === "danger" ? "alert" : "status";

  return (
    <div ref={ref} className={classes} role={role} {...rest}>
      {title != null && <p className={styles.title}>{title}</p>}
      {children != null && <div className={styles.description}>{children}</div>}
    </div>
  );
});
