import { useState, type FormEvent } from "react";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import styles from "./NewsletterSignup.module.css";

export interface NewsletterSignupProps {
  title?: string;
  description?: string;
  onSubmit?: (email: string) => void | Promise<void>;
}

export function NewsletterSignup({
  title = "Hold deg oppdatert",
  description = "Meld deg på nyhetsbrevet vårt og få de siste nyhetene rett i innboksen.",
  onSubmit,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [emailError, setEmailError] = useState<string | undefined>();
  const [consentError, setConsentError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const newEmailError = !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "Skriv inn en gyldig e-postadresse"
      : undefined;
    const newConsentError = !consent;

    setEmailError(newEmailError);
    setConsentError(newConsentError);

    if (newEmailError || newConsentError) return;

    await onSubmit?.(email);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.root}>
        <p>Takk! Du er nå påmeldt nyhetsbrevet.</p>
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <p className={styles.description}>{description}</p>}
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <Input
          label="E-postadresse"
          type="email"
          placeholder="navn@eksempel.no"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />
        <div className={styles.consentRow}>
          <Checkbox checked={consent} onChange={(e) => setConsent(e.target.checked)}>
            Jeg godtar at mine opplysninger brukes til å sende meg nyhetsbrev
          </Checkbox>
          {consentError && (
            <p className={styles.consentError} role="alert">
              Du må godta vilkårene for å melde deg på
            </p>
          )}
        </div>
        <Button type="submit">Meld meg på</Button>
      </form>
    </div>
  );
}
