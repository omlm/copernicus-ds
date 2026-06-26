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
| `variant` | `primary` \| `secondary` | `primary` | One primary action per view. |
| `size` | `small` \| `medium` \| `large` | `large` | |

### Boolean properties — on/off (boolean prop / Figma Boolean)

| Property | Meaning | Default |
|----------|---------|---------|
| `disabled` | non-interactive (inherited from native button) | `false` |
| `trailingIcon` | show trailing icon — `true` renders the default arrow | `false` |

### Text properties — content (string prop / Figma Text)

| Property | Role | Required |
|----------|------|----------|
| `children` | button label | yes |

### Instance-swap / slots (ReactNode / Figma Instance swap)

| Slot | Role |
|------|------|
| `trailingIcon` (ReactNode) | pass a custom element instead of the default arrow |
| `trailingIconName` | pick any Lucide icon by name — overrides the arrow |

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
- [x] Figma property names match code prop names (`variant`, `size`, `trailingIcon`)
- [ ] Confirm Figma variant set covers all 6 size×variant combos + states
