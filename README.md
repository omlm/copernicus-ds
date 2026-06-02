# Copernicus DS

React-komponentbibliotek bygd rundt Copernicus DS i Figma. Storybook er hovedflaten — komponentene utvikles, dokumenteres og previewes der.

## Stack

- React 19 + TypeScript
- Vite (dev/build)
- Storybook 10 (komponentkatalog, autodocs, a11y)
- CSS Modules + globale design tokens (CSS custom properties)

## Kjør lokalt

```bash
npm install
npm run storybook   # Storybook på http://localhost:6006
npm run dev         # liten sandbox-app på http://localhost:5173
```

## Bygg

```bash
npm run build            # type-check + Vite-bundle av sandbox
npm run build-storybook  # statisk Storybook → storybook-static/
```

## Struktur

```
src/
  components/      # én mappe per komponent (Komponent.tsx, .module.css, .stories.tsx, index.ts)
  tokens/          # design tokens (CSS custom properties — speiler Figma-variabler)
  styles/          # globale styles (reset, font, base)
  main.tsx         # Vite-sandbox (ikke produksjon)
```

## Legge til en ny komponent

1. Lag mappe `src/components/Foo/`
2. `Foo.tsx`, `Foo.module.css`, `Foo.stories.tsx`, `index.ts`
3. Bruk tokens (`var(--cds-*)`) framfor hardkodede verdier
4. Storybook plukker opp `*.stories.tsx` automatisk

## Tokens og Figma

Tokens ligger i [`src/tokens/tokens.css`](src/tokens/tokens.css). Når Copernicus DS-variabler i Figma endrer seg, oppdater verdiene her. På sikt: vurder Style Dictionary / Tokens Studio for auto-sync.
