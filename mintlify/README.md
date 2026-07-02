# Mintlify-dokumentasjon

Kilden til den publiserte dokumentasjonssiden ([mmsport.mintlify.app](https://mmsport.mintlify.app)).
Flyttet hit fra det tidligere separate repoet `omlm/docs` slik at kode og dokumentasjon
bor samme sted.

## Viktig: Mintlify må peke på denne undermappen

Fordi `docs.json` ligger i `mintlify/` og ikke i repo-roten, må Mintlify-prosjektet
konfigureres til å bruke `mintlify` som innholdskatalog (Dashboard → Settings → Git,
feltet for directory/subdirectory). Alle interne stier i `docs.json` og `.mdx`-filene
(`components/…`, `/images/…`, `/logo/…`) er relative til denne mappen og fungerer som før
så lenge katalogen er satt riktig.

## Struktur

```
mintlify/
  docs.json          # Navigasjon, tema, branding
  index.mdx          # Forside
  quickstart.mdx
  foundations/       # Designprinsipper, Design Tokens, Verktøykjede
  components/        # Én .mdx per komponent (31 stk)
  images/ logo/      # Logo og favicon
  .mintignore
```

## Kjøre lokalt

```bash
cd mintlify
npx mint dev        # lokal forhåndsvisning
```

## Forhold til `docs/` og Storybook

- `mintlify/` — publisert, dyp referansedokumentasjon per komponent.
- [`../docs/`](../docs) — interne markdown-referanser + `COMPONENT_TEMPLATE.md`.
- Storybook (`npm run storybook`) — den interaktive hovedflaten for utvikling.
