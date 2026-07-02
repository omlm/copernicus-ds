# Component documentation — example

Filled-in reference based on `src/components/Button/Button.tsx`. Use this as the model
for documenting the rest of the library.

---

## `Button`

> Primary call-to-action control. Use for actions the user takes (submit, continue,
> dismiss). For navigation that changes the URL, use `Link` instead.

### Variant properties — pick one (enum prop / Figma Variant)

| Property | Values | Default | Notes |
|----------|--------|---------|-------|
| `variant` | `primary` \| `secondary` \| `tertiary` | `primary` | One primary action per view. Figma: `Variant`. |
| `size` | `small` \| `medium` \| `large` | `large` | Figma: `Size`. |
| `tone` | `neutral` \| `danger` | `neutral` | `danger` recolors the button red for destructive actions (e.g. "Delete"), independent of `variant`. Figma: `Tone` (90 variants total: 3 Variant × 3 Size × 5 State × 2 Tone). |

### Boolean properties — on/off (boolean prop / Figma Boolean)

| Property | Meaning | Default |
|----------|---------|---------|
| `disabled` | non-interactive (inherited from native button) | `false` |
| `leadingIcon` | show leading icon — `true` renders the default arrow. Figma: `Show Left Icon`. | `false` |
| `trailingIcon` | show trailing icon — `true` renders the default arrow. Figma: `Show Right Icon`. | `false` |

Leading and trailing icons are independent booleans and can both be `true` at once
(see the `BothIcons` story) — the Figma component set mirrors this with two Boolean
properties instead of a single "Icon position" variant, so both icons can be toggled
on simultaneously in Figma too.

### Text properties — content (string prop / Figma Text)

| Property | Role | Required |
|----------|------|----------|
| `children` | button label | yes | Figma: `Label`. |

### Instance-swap / slots (ReactNode / Figma Instance swap)

| Slot | Role |
|------|------|
| `leadingIcon` (ReactNode) / `leadingIconName` | pass a custom element or pick any Lucide icon by name for the leading position. Figma: `Left Icon`. |
| `trailingIcon` (ReactNode) / `trailingIconName` | pass a custom element or pick any Lucide icon by name for the trailing position — overrides the default arrow. Figma: `Right Icon`. |

Icon-only buttons are **not** a mode of `Button` — use the separate `IconButton`
component instead (Figma: the "Icon=Only" variant was removed from the Button
component set for this reason).

### Interaction states — visual, NOT props

`default` · `hover` · `focus` · `active` · `disabled`

Driven by CSS pseudo-classes plus the native `disabled` attribute. There is no `hover`
or `focus` prop.

### Accessibility

- Role / semantics: native `<button type="button">`; pass `type="submit"` inside forms.
- `aria-*` labels: provide `aria-label` if the button is icon-only (no visible text).
- Keyboard: focusable by default; `Enter` / `Space` activate.
- Trailing icon is decorative (`aria-hidden`); never the only carrier of meaning.

### Token binding checklist

- [x] No hardcoded spacing / color — bound via `Button.module.css` tokens
- [x] Figma property names map 1:1 to code props (`Variant`→`variant`, `Size`→`size`,
      `Tone`→`tone`, `Show Left Icon`→`leadingIcon`, `Show Right Icon`→`trailingIcon`,
      `Label`→`children`)
- [x] Figma variant set covers all 3 variants × 3 sizes × 5 states × 2 tones
      (90 variants, down from 180 after collapsing the `Icon` variant into two
      Booleans, then re-expanded for `Tone`)
