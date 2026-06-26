# CLAUDE.md

Veiledning for Claude Code (og andre bidragsytere) når dere jobber i dette repoet.
For prosjektoversikt, stack og oppstart, se [README.md](README.md). Denne fila fanger
konvensjonene som *ikke* er åpenbare fra koden alene.

## Hva dette er

Copernicus DS er et React 19 + TypeScript komponentbibliotek som speiler Copernicus DS
i Figma. **Storybook er hovedflaten** — komponenter utvikles, dokumenteres og previewes
der. Det er ingen publisert npm-pakke; `npm run dev` er kun en sandbox.

## Kjøre lokalt

```bash
npm run storybook          # Storybook på http://localhost:6006
npm run story-ui           # Story UI (AI-story-generator) på http://localhost:4001
npm run storybook-with-ui  # begge samtidig
npm run lint               # ESLint
npm run build              # tsc -b + Vite (type-sjekk er en del av build)
```

I Claude Code: bruk `preview_start` (configs i `.claude/launch.json`: `storybook`, `story-ui`)
framfor å kjøre serverne via Bash.

## Token-binding — den viktigste regelen

**Ingen hardkodede verdier i komponenter.** Farge, avstand, radius, border og typografi
skal alltid komme fra design tokens via `var(...)`. FigmaLint flagger hardkodede verdier,
og det er prinsipp #4 i [Designprinsipper](src/foundations/Designprinsipper.mdx)
(«Tokens er sannheten»).

Tokens bor i [`src/tokens/tokens.css`](src/tokens/tokens.css) og deles i to nivåer:

- **Globale/primitive:** `--color-*` (f.eks. `--color-background-action`, `--color-blue-500`),
  `--spacing-*`, `--radius-*`, `--size-*`, `--typography-*`, `--border-width-*`, `--duration-*`
- **Komponent-scopede:** `--button-*`, `--card-*`, `--spinner-*`, `--switch-*` —
  legges til når en komponent trenger egne tokens (synket fra Figma-variabler)

> Det finnes **ingen** `--cds-`-prefiks, selv om README har nevnt det. Bruk de faktiske
> navnene over.

Når Figma-variabler endres, oppdateres verdiene i `tokens.css`. Ingen auto-sync ennå.

## Komponentstruktur

Én mappe per komponent under `src/components/`, alltid disse fire filene:

```
src/components/Foo/
  Foo.tsx          # komponent + eksporterte typer
  Foo.module.css   # CSS Modules, kun var(...) for verdier
  Foo.stories.tsx  # Storybook (plukkes opp automatisk)
  index.ts         # re-eksport
```

Etter ny komponent: legg til eksporten i [`src/components/index.ts`](src/components/index.ts)
(både `export { Foo }` og `export type { FooProps }`). Når en komponent slettes,
fjern også den linja.

### Konvensjoner fra eksisterende kode (se [Button.tsx](src/components/Button/Button.tsx))

- Props-interface utvider native HTML-attributter (`extends ButtonHTMLAttributes<...>`),
  og rest-props spres på root-elementet.
- Enum-varianter (`variant`, `size`) mappes til CSS-klasser via `Record<...>`-objekter.
- Klasser settes sammen med `[a, b, className].filter(Boolean).join(" ")` slik at
  forbruker kan sende inn egen `className`.
- Ikoner kommer fra `lucide-react` via `../Icon`-wrapperen, ikke importert direkte.
- JSDoc-kommentarer på props er på norsk (matcher resten av prosjektet).

## Tilgjengelighet

A11y er en forutsetning, ikke et sluttsjekkpunkt (prinsipp #3). Storybook kjører
`@storybook/addon-a11y` — hver komponent skal være ren der. Pass på role/aria-labels,
kontrast, store nok klikkflater og `prefers-reduced-motion` for animasjoner.

## Figma ↔ kode

Figma MCP er koblet til. Komponenter speiler Figma-komponenter, og props organiseres
etter Figma-egenskaper (Variant / Boolean / Text / Instance-swap) for Code Connect —
se malen i [docs/COMPONENT_TEMPLATE.md](docs/COMPONENT_TEMPLATE.md) og eksemplet
[docs/Button.md](docs/Button.md).

## Språk

Prosjektdokumentasjon, JSDoc og Storybook-tekst er på **norsk**. Hold deg til det.
