import {
  forwardRef,
  useId,
  type FormEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { Button } from "../Button";
import styles from "./Search.module.css";

export interface SearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onSubmit"> {
  /** Valgfri etikett over feltet. Uten etikett brukes `aria-label`. */
  label?: ReactNode;
  /** Teksten på søkeknappen (Figma: "Search button"). */
  buttonLabel?: ReactNode;
  /** Kalles med søketeksten når skjemaet sendes inn. */
  onSearch?: (value: string) => void;
}

/**
 * Søkefelt (Figma: "Search").
 *
 * Et `form` med `input type=search` og en primærknapp. Innsending (Enter
 * eller klikk) kaller `onSearch` med feltets verdi.
 */
export const Search = forwardRef<HTMLInputElement, SearchProps>(function Search(
  { label, buttonLabel = "Search", onSearch, id, className, ...rest },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements.namedItem(inputId) as HTMLInputElement | null;
    onSearch?.(input?.value ?? "");
  };

  return (
    <form
      className={[styles.root, className].filter(Boolean).join(" ")}
      role="search"
      onSubmit={handleSubmit}
    >
      {label != null && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={styles.row}>
        <input
          ref={ref}
          id={inputId}
          name={inputId}
          type="search"
          className={styles.field}
          aria-label={label == null ? "Søk" : undefined}
          {...rest}
        />
        <Button type="submit" size="large">
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
});
