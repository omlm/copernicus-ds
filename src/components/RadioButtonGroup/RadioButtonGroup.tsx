import { useCallback, useId, useMemo, useState, type ReactNode } from "react";
import { RadioGroupContext } from "./RadioGroupContext";
import styles from "./RadioButtonGroup.module.css";

export type RadioButtonGroupOrientation = "vertical" | "horizontal";

export interface RadioButtonGroupProps {
  /** Gruppe-etikett (Figma: "Group label"). */
  label?: ReactNode;
  /** Delt name for radio-knappene. Genereres automatisk om utelatt. */
  name?: string;
  /** Valgt verdi (kontrollert — Figma: "Selected"). */
  value?: string;
  /** Startverdi (ukontrollert). */
  defaultValue?: string;
  /** Kalles med den nye valgte verdien. */
  onChange?: (value: string) => void;
  /** Layout. Tilsvarer de to Figma-komponentene (vertikal vs. horisontal). */
  orientation?: RadioButtonGroupOrientation;
  /** Deaktiverer alle valg i gruppa. */
  disabled?: boolean;
  /** `RadioButton`-elementer. */
  children: ReactNode;
}

/**
 * Gruppe av radio-valg (Figma: "Radio button group" / "... (Horizontal)").
 *
 * Bruker en native `fieldset`/`legend` for tilgjengelighet og deler valgt
 * verdi med barna via context, slik at kun ett valg kan være aktivt.
 */
export function RadioButtonGroup({
  label,
  name,
  value,
  defaultValue,
  onChange,
  orientation = "vertical",
  disabled,
  children,
}: RadioButtonGroupProps) {
  const generatedName = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);

  const isControlled = value !== undefined;
  const selected = isControlled ? value : internalValue;

  const handleChange = useCallback(
    (next: string) => {
      if (!isControlled) setInternalValue(next);
      onChange?.(next);
    },
    [isControlled, onChange],
  );

  const context = useMemo(
    () => ({ name: name ?? generatedName, value: selected, disabled, onChange: handleChange }),
    [name, generatedName, selected, disabled, handleChange],
  );

  const classes = [
    styles.group,
    orientation === "horizontal" ? styles.horizontal : styles.vertical,
  ].join(" ");

  return (
    <fieldset className={classes}>
      {label != null && <legend className={styles.legend}>{label}</legend>}
      <div className={styles.options}>
        <RadioGroupContext.Provider value={context}>{children}</RadioGroupContext.Provider>
      </div>
    </fieldset>
  );
}
