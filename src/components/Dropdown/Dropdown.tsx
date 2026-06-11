import {
  useEffect,
  useId,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronDown } from "../Icon";
import styles from "./Dropdown.module.css";

export interface DropdownOption {
  /** Verdien valget representerer. */
  value: string;
  /** Synlig etikett (Figma: "Option label"). */
  label: ReactNode;
}

export interface DropdownProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Valgene i menyen (Figma: "Menu item"). */
  options: DropdownOption[];
  /** Tekst når ingenting er valgt (Figma: "Trigger label"). */
  placeholder?: ReactNode;
  /** Valgt verdi (kontrollert). */
  value?: string;
  /** Kalles når brukeren velger et alternativ. */
  onChange?: (value: string) => void;
}

/**
 * Nedtrekksmeny (Figma: "Dropdown").
 *
 * En knapp som åpner en meny (Figma: "State=Closed|Open"). Lukker ved
 * valg, Escape og klikk utenfor. For native skjemavalg, vurder en
 * `select` i stedet.
 */
export function Dropdown({
  options,
  placeholder = "Choose an option",
  value,
  onChange,
  className,
  ...rest
}: DropdownProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") setOpen(false);
  };

  const select = (next: string) => {
    onChange?.(next);
    setOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={[styles.root, className].filter(Boolean).join(" ")}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={`${baseId}-menu`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={selected == null ? styles.placeholder : undefined}>
          {selected?.label ?? placeholder}
        </span>
        <ChevronDown
          className={[styles.chevron, open && styles.chevronOpen].filter(Boolean).join(" ")}
          size={24}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul id={`${baseId}-menu`} className={styles.menu} role="listbox">
          {options.map((option) => (
            <li key={option.value} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={option.value === value}
                className={[styles.option, option.value === value && styles.optionSelected]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => select(option.value)}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
