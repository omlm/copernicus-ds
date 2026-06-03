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
          color: "var(--foreground-primary)",
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
      <code style={{ ...mono, color: "var(--foreground-secondary)" }}>{value || "—"}</code>
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
      <code style={{ ...mono, width: 56, flexShrink: 0, color: "var(--foreground-secondary)" }}>
        {value || "—"}
      </code>
      <div
        style={{
          height: 16,
          width: value || 0,
          maxWidth: 480,
          background: "var(--background-action)",
          borderRadius: 4,
        }}
      />
    </div>
  );
}

function DimensionList({ tokens }: { tokens: string[] }) {
  return (
    <div style={{ borderTop: "1px solid var(--background-primary)" }}>
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
          background: "var(--background-primary)",
          border: "1.5px solid var(--background-action)",
          borderRadius: `var(${token})`,
        }}
      />
      <code style={mono}>{token}</code>
      <code style={{ ...mono, color: "var(--foreground-secondary)" }}>{value || "—"}</code>
    </div>
  );
}

/* ---------- Typografi ---------- */

function TypeSample({ token, sample }: { token: string; sample: string }) {
  const value = useVar(token);
  return (
    <div style={{ padding: "12px 0", borderTop: "1px solid var(--background-primary)" }}>
      <div
        style={{
          fontFamily: token.includes("family") ? `var(${token})` : undefined,
          fontWeight: token.includes("weight") ? `var(${token})` : undefined,
          fontSize: 24,
          color: "var(--foreground-primary)",
          marginBottom: 6,
        }}
      >
        {sample}
      </div>
      <code style={mono}>{token}</code>{" "}
      <code style={{ ...mono, color: "var(--foreground-secondary)" }}>{value || "—"}</code>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Token-lister — speiler grupperingen i tokens.css                     */
/* ------------------------------------------------------------------ */

const foregroundColors = [
  "--foreground-primary",
  "--foreground-secondary",
  "--foreground-action",
  "--foreground-on-action",
  "--foreground-on-primary",
  "--foreground-on-action-disabled",
];

const backgroundColors = [
  "--background-canvas",
  "--background-primary",
  "--background-secondary",
  "--background-action",
  "--background-action-hover",
  "--background-action-active",
  "--background-action-disabled",
  "--background-accent-weak",
];

const componentColors = [
  "--button-color-secondary-foreground",
  "--button-color-secondary-background",
  "--button-color-secondary-background-hover",
  "--button-color-secondary-background-active",
  "--button-color-secondary-foreground-disabled",
  "--button-color-secondary-background-disabled",
  "--component-rating-foreground",
  "--component-rating-foreground-active",
  "--component-rating-background",
  "--component-rating-background-active",
];

/* Primitiver — råverdiene som de semantiske tokenene peker på. */
const primitivePink = [
  "--color-pink-200",
  "--color-pink-300",
  "--color-pink-500",
  "--color-pink-700",
  "--color-pink-900",
];

const primitiveRose = ["--color-rose-100", "--color-rose-200"];

const primitiveNeutral = [
  "--color-neutral-0",
  "--color-neutral-200",
  "--color-neutral-300",
  "--color-neutral-400",
  "--color-neutral-500",
  "--color-neutral-700",
  "--color-neutral-900",
  "--color-neutral-1000",
];

const primitiveOther = ["--color-green-500", "--color-purple-500"];

const spacing = [
  "--spacing-0",
  "--spacing-16",
  "--spacing-20",
  "--spacing-24",
  "--spacing-32",
  "--spacing-40",
  "--spacing-64",
];

const sizes = ["--size-16", "--size-24", "--size-32", "--size-64"];

const borders = [
  "--border-width-1",
  "--border-width-1-5",
  "--border-width-1-75",
  "--border-width-3",
];

const radii = ["--semantic-radius-button", "--radius-999"];

const meta = {
  title: "Foundations/Design Tokens",
  parameters: {
    layout: "padded",
    options: { showPanel: false },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

/** Primitiver — fargeskalaene som alt annet bygger på. */
export const Primitiver: Story = {
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Pink (brand)">
        <ColorGrid tokens={primitivePink} />
      </Section>
      <Section title="Rose (varme nøytraler)">
        <ColorGrid tokens={primitiveRose} />
      </Section>
      <Section title="Neutral (gråtoner)">
        <ColorGrid tokens={primitiveNeutral} />
      </Section>
      <Section title="Green & purple">
        <ColorGrid tokens={primitiveOther} />
      </Section>
    </div>
  ),
};

/** Semantiske farger — peker på primitivene over. */
export const SemantiskeFarger: Story = {
  name: "Semantiske farger",
  render: () => (
    <div style={{ maxWidth: 920 }}>
      <Section title="Foreground">
        <ColorGrid tokens={foregroundColors} />
      </Section>
      <Section title="Background">
        <ColorGrid tokens={backgroundColors} />
      </Section>
      <Section title="Komponent">
        <ColorGrid tokens={componentColors} />
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
        <TypeSample token="--typography-weight-bold" sample="Bold (550) — Mental Momentum" />
      </Section>
    </div>
  ),
};
