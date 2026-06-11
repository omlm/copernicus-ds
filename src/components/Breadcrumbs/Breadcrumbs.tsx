import { Fragment, forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  /** Synlig tekst (Figma: "Link"/"Current"). */
  label: ReactNode;
  /** Mål for lenken. Siste element trenger ikke href (er gjeldende side). */
  href?: string;
}

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Stien, i rekkefølge. Siste element vises som gjeldende side. */
  items: BreadcrumbItem[];
}

/**
 * Brødsmulesti (Figma: "Breadcrumbs").
 *
 * En `nav` med lenker i aksjonsfargen, "/" som skille (Figma: "Separator")
 * og siste element markert som gjeldende side med `aria-current="page"`.
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(function Breadcrumbs(
  { items, className, ...rest },
  ref,
) {
  const classes = [styles.breadcrumbs, className].filter(Boolean).join(" ");

  return (
    <nav ref={ref} className={classes} aria-label="Brødsmulesti" {...rest}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <Fragment key={index}>
              <li className={styles.item}>
                {isCurrent || item.href == null ? (
                  <span className={styles.current} aria-current={isCurrent ? "page" : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                )}
              </li>
              {!isCurrent && (
                <li className={styles.separator} aria-hidden="true">
                  /
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
});
