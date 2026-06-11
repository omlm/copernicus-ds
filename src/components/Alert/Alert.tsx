import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Alert.module.css";

export type AlertSeverity = "info" | "success" | "warning" | "danger";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Alvorlighetsgrad (Figma: "Severity=Info|Success|Warning|Danger"). */
  severity?: AlertSeverity;
  /** Overskrift (Figma: "Title"). */
  title?: ReactNode;
  /** Brødtekst (Figma: "Description"). */
  children?: ReactNode;
}

const severityClass: Record<AlertSeverity, string> = {
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
  { severity = "info", title, className, children, ...rest },
  ref,
) {
  const classes = [styles.alert, severityClass[severity], className].filter(Boolean).join(" ");
  const role = severity === "warning" || severity === "danger" ? "alert" : "status";

  return (
    <div ref={ref} className={classes} role={role} {...rest}>
      {title != null && <p className={styles.title}>{title}</p>}
      {children != null && <div className={styles.description}>{children}</div>}
    </div>
  );
});
