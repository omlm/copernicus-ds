import { createContext } from "react";

export interface RadioGroupContextValue {
  /** Delt name for alle radio-knappene i gruppa. */
  name: string;
  /** Valgt verdi (Figma: "Selected"). */
  value: string | undefined;
  /** Deaktiverer alle valg. */
  disabled?: boolean;
  /** Kalles med verdien til valget som ble trykket. */
  onChange: (value: string) => void;
}

/**
 * Lar en `RadioButton` koble seg automatisk til den omsluttende
 * `RadioButtonGroup` (name, valgt verdi, onChange). Er null når en
 * RadioButton brukes frittstående.
 */
export const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);
