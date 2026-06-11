import {
  useEffect,
  useRef,
  type DialogHTMLAttributes,
  type ReactNode,
} from "react";
import { X } from "../Icon";
import styles from "./Dialog.module.css";

export interface DialogProps
  extends Omit<DialogHTMLAttributes<HTMLDialogElement>, "open" | "title"> {
  /** Om dialogen vises (som modal, med backdrop). */
  open: boolean;
  /** Overskrift (Figma: "Title"). */
  title?: ReactNode;
  /** Brødtekst/innhold (Figma: "Body"). */
  children?: ReactNode;
  /** Handlingsknapper nederst til høyre (Figma: "Actions"), f.eks. Button-er. */
  actions?: ReactNode;
  /** Kalles når dialogen lukkes (Escape, backdrop-klikk eller lukkeknappen). */
  onClose?: () => void;
}

/**
 * Dialog (Figma: "Dialog").
 *
 * Et native `dialog`-element vist med `showModal()`, så fokusfelle,
 * Escape og backdrop kommer fra nettleseren. Kontrolleres med `open`
 * og `onClose`.
 */
export function Dialog({ open, title, actions, onClose, className, children, ...rest }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={[styles.dialog, className].filter(Boolean).join(" ")}
      onClose={onClose}
      onClick={(event) => {
        // Klikk på backdrop (utenfor panelet) lukker dialogen.
        if (event.target === dialogRef.current) onClose?.();
      }}
      {...rest}
    >
      <div className={styles.panel}>
        <div className={styles.header}>
          {title != null && <p className={styles.title}>{title}</p>}
          <button type="button" className={styles.close} onClick={onClose} aria-label="Lukk">
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        {children != null && <div className={styles.body}>{children}</div>}
        {actions != null && <div className={styles.actions}>{actions}</div>}
      </div>
    </dialog>
  );
}
