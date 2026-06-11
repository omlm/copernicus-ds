import { forwardRef, type HTMLAttributes } from "react";
import { ArrowRight } from "../Icon";
import styles from "./Pagination.module.css";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /** Gjeldende side (1-basert). */
  page: number;
  /** Totalt antall sider. */
  count: number;
  /** Kalles med ny side når brukeren navigerer. */
  onPageChange?: (page: number) => void;
}

/** Sidene som skal vises: 1-basert vindu rundt gjeldende side + endene. */
function getVisiblePages(page: number, count: number): (number | "ellipsis")[] {
  if (count <= 7) {
    return Array.from({ length: count }, (_, i) => i + 1);
  }
  const pages = new Set<number>([1, count, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= count).sort((a, b) => a - b);
  const result: (number | "ellipsis")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) result.push("ellipsis");
    result.push(p);
    prev = p;
  }
  return result;
}

/**
 * Paginering (Figma: "Pagination").
 *
 * En `nav` med forrige/neste-piler og sideknapper. Gjeldende side er
 * markert med aksjonsfargen og `aria-current="page"`. Lange serier
 * forkortes med ellipse (Figma: "Ellipsis").
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(function Pagination(
  { page, count, onPageChange, className, ...rest },
  ref,
) {
  const classes = [styles.pagination, className].filter(Boolean).join(" ");
  const visible = getVisiblePages(page, count);

  return (
    <nav ref={ref} className={classes} aria-label="Paginering" {...rest}>
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onPageChange?.(page - 1)}
        disabled={page <= 1}
        aria-label="Forrige side"
      >
        <ArrowRight className={styles.arrowPrev} size={24} aria-hidden="true" />
      </button>
      {visible.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`e-${index}`} className={styles.ellipsis} aria-hidden="true">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={[styles.item, item === page && styles.current].filter(Boolean).join(" ")}
            onClick={() => onPageChange?.(item)}
            aria-current={item === page ? "page" : undefined}
            aria-label={`Side ${item}`}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        className={styles.arrow}
        onClick={() => onPageChange?.(page + 1)}
        disabled={page >= count}
        aria-label="Neste side"
      >
        <ArrowRight size={24} aria-hidden="true" />
      </button>
    </nav>
  );
});
