import {
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import styles from "./ToggleGroup.module.css";

export interface ToggleGroupOption {
  /** Verdien valget representerer. */
  value: string;
  /** Synlig etikett (Figma: "Label"). */
  label: ReactNode;
}

export interface ToggleGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Valgene, i rekkefølge. */
  options: ToggleGroupOption[];
  /** Valgt verdi ved første rendring (ukontrollert). Standard: første. */
  defaultValue?: string;
  /** Valgt verdi (kontrollert). Brukes sammen med `onChange`. */
  value?: string;
  /** Kalles når brukeren velger et annet alternativ. */
  onChange?: (value: string) => void;
  /** Tilgjengelig navn for gruppen. */
  "aria-label"?: string;
}

/**
 * Segmentert valggruppe (Figma: "Toggle group").
 *
 * En pilleformet gruppe der nøyaktig ett valg er aktivt (Figma:
 * "is Selected=Yes"). Implementert som `role="radiogroup"` med
 * piltast-navigasjon.
 */
export function ToggleGroup({
  options,
  defaultValue,
  value,
  onChange,
  className,
  ...rest
}: ToggleGroupProps) {
  const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value);
  const selected = value ?? internalValue;
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (next: string) => {
    setInternalValue(next);
    onChange?.(next);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = options.findIndex((option) => option.value === selected);
    let nextIndex = -1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      nextIndex = (currentIndex + 1) % options.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      nextIndex = (currentIndex - 1 + options.length) % options.length;
    if (nextIndex >= 0) {
      event.preventDefault();
      select(options[nextIndex].value);
      itemRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div
      className={[styles.group, className].filter(Boolean).join(" ")}
      role="radiogroup"
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {options.map((option, index) => {
        const isSelected = option.value === selected;
        return (
          <button
            key={option.value}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            className={[styles.item, isSelected && styles.selected].filter(Boolean).join(" ")}
            onClick={() => select(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
