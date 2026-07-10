import { useRef, useState, type HTMLAttributes, type KeyboardEvent } from "react";
import styles from "./RatingButton.module.css";

export interface RatingButtonProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Valgt vurdering, 1 til `max`. 0/undefined = ingen valgt (Figma: "Active=None"). */
  value?: number;
  /** Startverdi (ukontrollert). */
  defaultValue?: number;
  /** Kalles med den nye vurderingen når brukeren velger. */
  onChange?: (value: number) => void;
  /** Høyeste vurdering. Figma-komponenten har 5. */
  max?: number;
  /** Tilgjengelig navn for gruppen. */
  "aria-label"?: string;
}

/**
 * Vurderingsskala (Figma: "Rating button").
 *
 * En rad nummererte pilleknapper der alle til og med valgt verdi fylles
 * med aksjonsfargen (Figma: "Active=None|1..5"). Implementert som
 * `role="radiogroup"` med piltast-navigasjon.
 */
export function RatingButton({
  value,
  defaultValue,
  onChange,
  max = 5,
  className,
  "aria-label": ariaLabel = "Vurdering",
  ...rest
}: RatingButtonProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? 0);
  const selected = value ?? internalValue;
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (next: number) => {
    setInternalValue(next);
    onChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let next = 0;
    if (event.key === "ArrowRight" || event.key === "ArrowUp") next = Math.min(max, selected + 1);
    if (event.key === "ArrowLeft" || event.key === "ArrowDown") next = Math.max(1, selected - 1);
    if (next >= 1) {
      event.preventDefault();
      select(next);
      itemRefs.current[next - 1]?.focus();
    }
  };

  return (
    <div
      className={[styles.group, className].filter(Boolean).join(" ")}
      role="radiogroup"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {Array.from({ length: max }, (_, i) => {
        const rating = i + 1;
        const isSelected = rating === selected;
        return (
          <button
            key={rating}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected || (selected === 0 && rating === 1) ? 0 : -1}
            className={[styles.item, rating <= selected && styles.active].filter(Boolean).join(" ")}
            onClick={() => select(rating)}
          >
            {rating}
          </button>
        );
      })}
    </div>
  );
}
