---
title: Button
description: Primary call-to-action control
status: stable
version: 1.0.0
category: components
tags: [button, variants, configurable]
figma: https://www.figma.com/design/lCkSw1KEHW8ydpHNejKx2u/Copernicus-DS?node-id=3276-1120
source: src/components/Button/Button.tsx
package: copernicus-ds
canonical: reconciled
lastUpdated: 2026-06-26
---

# Button

**[Open in Figma](https://www.figma.com/design/lCkSw1KEHW8ydpHNejKx2u/Copernicus-DS?node-id=3276-1120)** | **[View Source](../src/components/Button/Button.tsx)** | **[Storybook](../src/components/Button/Button.stories.tsx)**

> Generert med `figma_generate_component_doc` (figma-console MCP) og reconciled mot React-kilden.
> De tre per-variant-tabellene fra verktøyet (Variant Matrix / Icon Mapping / Color Tokens, 90 rader hver)
> er kondensert til de faktiske distinkte verdiene — farge bestemmes av `Type × State`, ikke av størrelse
> eller ikon-flagg. Parity-seksjonen er korrigert manuelt (verktøyet sammenlignet Figma-egenskapsnavn mot
> kode-verdier og ga falske avvik).

## Overview

Primær handlingskontroll. Brukes for handlinger brukeren utfører (send inn, fortsett, avvis).
For navigasjon som endrer URL, bruk `Link` i stedet. Komponenten har **90 varianter** i Figma,
bygget fra 5 egenskaper.

## Component Anatomy

```
Button (COMPONENT) — horizontal auto-layout, gap: 8px [fixed-height]
├── Label (TEXT)
└── Icon (INSTANCE) — vises når has Leading/Trailing Icon = Yes
    └── Icon / Bolt (INSTANCE)
        └── Vector (VECTOR)
```

## Variants

### Egenskaper (Figma)

| Property | Values | Default | Notes |
|----------|--------|---------|-------|
| **Type** | Primary, Secondary | Primary | Endrer visuell behandling |
| **Size** | Large, Medium, Small | Large | Large=48px, Medium=32px, Small=24px |
| **State** | Default, Hover, Active, Focus, Disabled | Default | Interaksjonstilstand (ikke en prop i kode) |
| **has Trailing Icon** | No, Yes | No | Ikon etter etiketten |
| **has Leading Icon** | No, Yes | No | Ikon før etiketten |
| **Label** | string | "Label" | Tekstinnhold |

2 (Type) × 3 (Size) × 5 (State) × 3 (icon-kombinasjoner: ingen / trailing / leading) = 90 varianter.

### Fargematrise — bestemt av Type × State

Bakgrunns- og tekstfarge avhenger **kun** av `Type` og `State` (identisk på tvers av størrelse og ikon-flagg).

| Type | State | Background | Text/Icon |
|------|-------|-----------|-----------|
| Primary | Default / Focus | `#FF1A6E` | `#FFFFFF` |
| Primary | Hover | `#BB0045` | `#FFFFFF` |
| Primary | Active | `#990038` | `#FFFFFF` |
| Primary | Disabled | `#FFB4D0` | `#FF81AF` |
| Secondary | Default / Focus | `#FFFFFF03` (transparent) | `#000000` |
| Secondary | Hover | `#CBCBD0` | `#000000` |
| Secondary | Active | `#AFB0B7` | `#000000` |
| Secondary | Disabled | `#E4E5E7` | `#AFB0B7` |

> Focus deler bakgrunn med Default; tilstanden vises via en focus-ring (se kode: `outline` på `:focus-visible`).

## Token Specification

### Spacing / geometri (Figma-variabler)

| Property | Figma Variable | Value |
|----------|---------------|-------|
| Padding left/right (Large) | `button/padding/large` | 20px |
| Padding left/right (Medium) | `button/padding/medium` | 16px |
| Padding left/right (Small) | `button/padding/small` | 12px |
| Padding på ikon-side (Large) | `button/padding/large-alt` | 16px — kun i kode, se note |
| Padding på ikon-side (Medium) | `button/padding/medium-alt` | 12px — kun i kode, se note |
| Padding på ikon-side (Small) | `button/padding/small-alt` | 8px — kun i kode, se note |
| Gap (label ↔ ikon) | `button/gap` → `spacing/4` (`VariableID:3264:2`) | 4px |
| Border radius | — | 999px |
| Border width | — | 1px |

> Gap er bundet til den komponent-scopede variabelen `button/gap` (alias til `spacing/4` = 4px) på alle 90 varianter, speilet i kode som `--button-gap: var(--spacing-4)`.

> **Ikon-side padding — bevisst Figma ↔ kode-forskjell:** Når et ikon vises, bytter koden
> padding på siden som vender mot ikonet fra `--button-padding-{size}` til
> `--button-padding-{size}-alt` (4px strammere) via `hasLeadingIcon`/`hasTrailingIcon`-klassene
> i `Button.module.css`. Figma viser ikke dette — ikonene styres av Boolean-egenskaper, og
> padding kan ikke reagere på en Boolean, så alle varianter beholder basis-padding på begge
> sider. Koden er fasit; 4px-differansen mot canvas på knapper med ikon er forventet.

## Typography

| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Label | Outfit | SemiBold (600) | 16px | 16px | 0.32px |

> Size=Small bruker 14px etikett (`--spacing-14`) i kode — se `Button.module.css`.

## Implementation

### Source Files

| File | Role | Variants |
|------|------|----------|
| `src/components/Button/Button.tsx` | Komponent + eksporterte typer | 2 |
| `src/components/Button/Button.module.css` | CSS Modules (token-bundet via `var()`) | — |
| `src/components/Button/Button.stories.tsx` | Storybook stories + argTypes | — |
| `src/components/Icon/index.ts` | Ikon-wrapper (lucide-react): `ArrowRight`, `DynamicIcon`, `IconName` | — |

### Import

```tsx
import { Button, type ButtonProps } from "src/components";
```

### Variant Definition

```tsx
const variantClass: Record<ButtonVariant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const sizeClass: Record<ButtonSize, string> = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
};
```

### Component API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary"` | `"primary"` | Visuell stil. Bruk kun én primary-handling per visning. |
| `size` | `"small" \| "medium" \| "large"` | `"large"` | Knappestørrelse (large=48px, medium=32px, small=24px). |
| `trailingIcon` | `boolean \| ReactNode` | `false` | Vis trailing-ikon. `true` = standard pil (`ArrowRight`), eller send et eget element. |
| `trailingIconName` | `IconName` | — | Velg trailing-ikon fra hele Lucide-settet via navn (overstyrer pilen). |
| `leadingIcon` | `boolean \| ReactNode` | `false` | Vis leading-ikon (før etiketten). `true` = standard pil, eller send et eget element. |
| `leadingIconName` | `IconName` | — | Velg leading-ikon fra hele Lucide-settet via navn. |
| `disabled` | `boolean` | `false` | Ikke-interaktiv (arvet fra native button). |
| `children` | `ReactNode` | — | Knappe-etikett (påkrevd). |
| `...rest` | `ButtonHTMLAttributes<HTMLButtonElement>` | — | Alle native button-attributter (`onClick`, `type`, `name`, `aria-*`, osv.) spres på root-elementet. |

### Usage Examples

```tsx
// Primary (default)
<Button>Label</Button>

// Secondary
<Button variant="secondary">Label</Button>

// Med trailing-pil
<Button trailingIcon>Neste</Button>

// Bytt ut ikonet (Lucide)
<Button trailingIconName="heart">Lik</Button>

// Størrelser
<Button size="large">Large</Button>
<Button size="medium">Medium</Button>
<Button size="small">Small</Button>

// Disabled
<Button disabled>Label</Button>
```

## Accessibility

- Bruker native `<button>` — får tastaturfokus og aktivering (Enter/Space) gratis.
- Synlig fokusindikator via `:focus-visible` (`outline: 2px solid var(--color-foreground-action)`).
- `disabled` setter `cursor: not-allowed` og fjerner interaksjon.
- Ingen a11y-annotasjoner funnet i Figma — vurder å legge til kontrast-/aria-notater i Dev Mode.

## Design Annotations

Ingen design-annotasjoner (animasjon, easing, interaksjon) funnet på noden i Figma Dev Mode.

## Design–Code Parity

| Aspekt | Figma | Kode | Status |
|--------|-------|------|--------|
| Type → `variant` | Primary, Secondary | `primary`, `secondary` | ✅ Samsvarer |
| Size → `size` | Large, Medium, Small | `large`, `medium`, `small` | ✅ Samsvarer |
| State | Default/Hover/Active/Focus/Disabled | CSS-pseudoklasser (`:hover`, `:active`, `:focus-visible`, `:disabled`) | ✅ Dekket (ikke prop) |
| has Trailing Icon → `trailingIcon` | No/Yes | `boolean \| ReactNode` | ✅ Samsvarer |
| has Leading Icon → `leadingIcon` | No/Yes | `boolean \| ReactNode` | ✅ Samsvarer |
| Gap | `button/gap` → `spacing/4` = 4px | `--button-gap` → `--spacing-4` = 4px | ✅ Samsvarer (4px begge, navngitt variabel) |
| Padding | `button/padding/{size}` på begge sider (20/16/12) | `--button-padding-{size}`, men `-alt` (16/12/8) på ikon-siden når ikon vises | ⚠️ Bevisst avvik — Boolean kan ikke styre padding i Figma; koden er fasit |
