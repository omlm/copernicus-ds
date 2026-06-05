import { forwardRef, useContext, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import { RadioGroupContext } from "../RadioButtonGroup/RadioGroupContext";
import styles from "./RadioButton.module.css";

export interface RadioButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "children"> {
  /** Verdien dette valget representerer (Figma: instansens identitet i gruppa). */
  value: string;
  /** Etiketten ved siden av radio-knappen (Figma: "Label"). */
  children: ReactNode;
}

/**
 * Ett enkelt radio-valg (Figma: "Radio button").
 *
 * Brukes helst inni en `RadioButtonGroup`, som via context styrer name,
 * valgt verdi og onChange. Kan også brukes frittstående med vanlige
 * input-props (checked / defaultChecked / onChange).
 */
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
  { value, children, className, checked, disabled, name, onChange, ...rest },
  ref,
) {
  const group = useContext(RadioGroupContext);

  const isDisabled = disabled ?? group?.disabled;
  const isChecked = group ? group.value === value : checked;
  const resolvedName = group ? group.name : name;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    group?.onChange(value);
    onChange?.(event);
  };

  const classes = [styles.radio, isDisabled && styles.disabled, className].filter(Boolean).join(" ");

  return (
    <label className={classes}>
      <input
        ref={ref}
        type="radio"
        className={styles.input}
        value={value}
        name={resolvedName}
        checked={isChecked}
        disabled={isDisabled}
        onChange={handleChange}
        {...rest}
      />
      <span className={styles.control} aria-hidden="true">
        <span className={styles.indicator} />
      </span>
      <span className={styles.label}>{children}</span>
    </label>
  );
});
