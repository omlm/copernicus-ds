import { forwardRef, type ReactNode, type TableHTMLAttributes } from "react";
import styles from "./Table.module.css";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /** Vanlige `thead`/`tbody`-elementer — stylingen treffer `th`/`td` inni. */
  children: ReactNode;
}

/**
 * Tabell (Figma: "Table").
 *
 * En token-stylet `table` med neutral-weak headerrad og hårlinjer mellom
 * radene. Bruk native `thead`/`tbody`/`tr`/`th`/`td` som barn.
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, children, ...rest },
  ref,
) {
  const classes = [styles.table, className].filter(Boolean).join(" ");

  return (
    <div className={styles.wrapper}>
      <table ref={ref} className={classes} {...rest}>
        {children}
      </table>
    </div>
  );
});
