import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Hjelpere — leser de faktiske verdiene fra CSS-variablene på :root    */
/* slik at siden alltid speiler tokens.css.                             */
/* ------------------------------------------------------------------ */

function readVar(name: string): string {
  if (typeof window === "undefined") return "";
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function useVar(name: string): string {
  const [value, setValue] = useState("");
  useEffect(() => setValue(readVar(name)), [name]);
  return value;
}

const mono: React.CSSProperties = {
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
  fontSize: 12,
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h3
        style={{
          margin: "0 0 16px",
          fontFamily: "var(--typography-family-headers)",
          fontSize: 18,
          color: "var(--color-foreground-primary)",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

/* ---------- Farger ---------- */

function ColorSwatch({ token }: { token: string }) {
  const value = useVar(token);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div
        style={{
          height: 64,
          borderRadius: 10,
          background: `var(${token})`,
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      />
      <code style={mono}>{token}</code>
      <code style={{ ...mono, color: "var(--color-foreground-secondary)" }}>{value || "—"}</code>
    </div>
  );
}

function ColorGrid({ tokens }: { tokens: string[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 16,
      }}
    >
      {tokens.map((t) => (
        <ColorSwatch key={t} token={t} />
      ))}
    </div>
  );
}

/* ---------- Dimensjoner (spacing / size / border) ---------- */

function DimensionRow({ token }: { token: string }) {
  const value = useVar(token);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 0" }}>
      <code style={{ ...mono, width: 200, flexShrink: 0 }}>{token}</code>
      <code style={{ ...mono, width: 56, flexShrink: 0, color: "var(--color-foreground-secondary)" }}>
        {value || "—"}
      </code>
      <div
        style={{
          height: 16,
          width: value || 0,
          maxWidth: 480,
          background: "var(--color-background-action)",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

function DimensionList({ tokens }: { tokens: string[] }) {
  return (
    <div style={{ borderTop: "1px solid var(--color-background-primary)" }}>
      {tokens.map((t) => (
        <DimensionRow key={t} token={t} />
      ))}
    </div>
  );
}

/* ---------- Radius ---------- */

function RadiusSwatch({ token }: { token: string }) {
  const value = useVar(token);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
      <div
        style={{
          width: 96,
          height: 64,
          background: "var(--color-background-primary)",
          border: "1.5px solid var(--color-background-action)",
          borderRadius: `var(${token})`,
        }}
      />
      <code style={mono}>{token}</code>
      <code style={{ ...mono, color: "var(--color-foreground-secondary)" }}>{value || "—"}</code>
    </div>
  );
}

/* ---------- Typografi ---------- */

function TypeSample({ token, sample }: { token: string; sample: string }) {
  const value = useVar(token);
  return (
    <div style={{ padding: "12px 0", borderTop: "1px solid var(--color-background-primary)" }}>
      <div
        style={{
          fontFamily: token.includes("family") ? `var(${token})` : undefined,
          fontWeight: token.includes("weight") ? `var(${token})` : undefined,
          fontSize: 24,
          color: "var(--color-foreground-primary)",
          marginBottom: 6,
        }}
      >
        {sample}
      </div>
      <code style={mono}>{token}</code>{" "}
      <code style={{ ...mono, color: "var(--color-foreground-secondary)" }}>{value || "—"}</code>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Token-lister — speiler tokens.css (hentet fra Figma)                 */
/* ------------------------------------------------------------------ */

const scale = (hue: string, steps: number[]) => steps.map((s) => `--color-${hue}-${s}`);

const fullSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const primitivePink = scale("pink", fullSteps);
const primitiveSand = scale("sand", fullSteps);
const primitiveNeutral = scale("neutral", [50, ...fullSteps]);
const primitiveRed = scale("red", fullSteps);
const primitiveOrange = scale("orange", fullSteps);
const primitiveGreen = scale("green", fullSteps);
const primitiveBlue = scale("blue", fullSteps);
const primitivePurple = scale("purple", [500]);

const semanticForeground = [
  "--color-foreground-primary",
  "--color-foreground-secondary",
  "--color-foreground-action",
  "--color-foreground-on-action",
  "--color-foreground-on-action-disabled",
];

const semanticBackground = [
  "--color-background-canvas",
  "--color-background-primary",
  "--color-background-secondary",
  "--color-background-action",
  "--color-background-action-hover",
  "--color-background-action-active",
  "--color-background-action-disabled",
  "--color-background-accent-weak",
];

const semanticBorder = [
  "--color-border-default",
  "--color-border-action",
  "--color-border-focus-ring",
];

const systemParts = [
  "strong",
  "strong-hover",
  "on-strong",
  "weak",
  "weak-hover",
  "on-weak",
  "strong-border",
  "weak-border",
];
const systemScale = (name: string) => systemParts.map((p) => `--color-system-${name}-${p}`);
const systemDanger = systemScale("danger");
const systemInfo = systemScale("info");
const systemSuccess = systemScale("success");
const systemWarning = systemScale("warning");

const buttonSecondary = [
  "--button-color-secondary-foreground",
  "--button-color-secondary-foreground-disabled",
  "--button-color-secondary-background",
  "--button-color-secondary-background-hover",
  "--button-color-secondary-background-active",
  "--button-color-secondary-background-disabled",
];

const spacing = [
  "--spacing-0",
  "--spacing-4",
  "--spacing-8",
  "--spacing-12",
  "--spacing-14",
  "--spacing-16",
  "--spacing-20",
  "--spacing-24",
  "--spacing-32",
  "--spacing-40",
  "--spacing-48",
  "--spacing-64",
  "--spacing-80",
  "--spacing-96",
  "--spacing-128",
];

const sizes = ["--size-16", "--size-24", "--size-32", "--size-48", "--size-64"];

const borders = [
  "--border-width-1",
  "--border-width-1-5",
  "--border-width-1-75",
  "--border-width-2",
  "--border-width-3",
];

const radii = ["--radius-0", "--radius-4", "--radius-12", "--radius-999"];

const meta = {
  title: "Foundations/Design Tokens",
  parameters: {
    layout: "padded",
    options: { showPanel: false },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Primitiver — fargeskalaene alt annet bygger på. */
export const Primitiver: Story = {
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="color/pink">
        <ColorGrid tokens={primitivePink} />
      </Section>
      <Section title="color/sand">
        <ColorGrid tokens={primitiveSand} />
      </Section>
      <Section title="color/neutral">
        <ColorGrid tokens={primitiveNeutral} />
      </Section>
      <Section title="color/red">
        <ColorGrid tokens={primitiveRed} />
      </Section>
      <Section title="color/orange">
        <ColorGrid tokens={primitiveOrange} />
      </Section>
      <Section title="color/green">
        <ColorGrid tokens={primitiveGreen} />
      </Section>
      <Section title="color/blue">
        <ColorGrid tokens={primitiveBlue} />
      </Section>
      <Section title="color/purple">
        <ColorGrid tokens={primitivePurple} />
      </Section>
    </div>
  ),
};

/** Semantiske farger — peker på primitivene over (modus: light). */
export const SemantiskeFarger: Story = {
  name: "Semantiske farger",
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Foreground">
        <ColorGrid tokens={semanticForeground} />
      </Section>
      <Section title="Background">
        <ColorGrid tokens={semanticBackground} />
      </Section>
      <Section title="Border">
        <ColorGrid tokens={semanticBorder} />
      </Section>
      <Section title="Komponent — button (secondary)">
        <ColorGrid tokens={buttonSecondary} />
      </Section>
    </div>
  ),
};

/** System-farger — danger/info/success/warning (modus: light). */
export const SystemFarger: Story = {
  name: "System-farger",
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Danger (red)">
        <ColorGrid tokens={systemDanger} />
      </Section>
      <Section title="Info (blue)">
        <ColorGrid tokens={systemInfo} />
      </Section>
      <Section title="Success (green)">
        <ColorGrid tokens={systemSuccess} />
      </Section>
      <Section title="Warning (orange)">
        <ColorGrid tokens={systemWarning} />
      </Section>
    </div>
  ),
};

export const SpacingOgStorrelser: Story = {
  name: "Spacing & størrelser",
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Spacing">
        <DimensionList tokens={spacing} />
      </Section>
      <Section title="Størrelser (size)">
        <DimensionList tokens={sizes} />
      </Section>
      <Section title="Border-bredde">
        <DimensionList tokens={borders} />
      </Section>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Radius">
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {radii.map((t) => (
            <RadiusSwatch key={t} token={t} />
          ))}
        </div>
      </Section>
    </div>
  ),
};

export const Typografi: Story = {
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Font-familier">
        <TypeSample token="--typography-family-default" sample="Outfit — brødtekst 0123456789" />
        <TypeSample token="--typography-family-headers" sample="Outfit — overskrifter" />
      </Section>
      <Section title="Font-vekt">
        <TypeSample token="--typography-weight-normal" sample="Normal (350) — Mental Momentum" />
        <TypeSample token="--typography-weight-bold" sample="Bold (550) — Mental Momentum" />
      </Section>
    </div>
  ),
};
