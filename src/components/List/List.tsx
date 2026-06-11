import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./List.module.css";

export type ListType = "bullet" | "number";

export interface ListProps extends HTMLAttributes<HTMLUListElement | HTMLOListElement> {
  /** Punktliste eller nummerert liste (Figma: "Type=Bullet|Number"). */
  type?: ListType;
  /** Listepunktene — bruk `<li>` (eller `List.Item` om du vil). */
  children: ReactNode;
}

/**
 * Liste (Figma: "List").
 *
 * En token-stylet `ul`/`ol`. Send inn vanlige `li`-elementer som barn.
 */
export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(function List(
  { type = "bullet", className, children, ...rest },
  ref,
) {
  const classes = [styles.list, className].filter(Boolean).join(" ");
  const Tag = type === "number" ? "ol" : "ul";

  return (
    <Tag ref={ref as never} className={classes} {...rest}>
      {children}
    </Tag>
  );
});
