# Component documentation template

Copy this file for each component. Fill every section; delete rows that don't apply
(but keep the section headers so the structure stays scannable).

Variation axes are grouped by **Figma property type** so that the doc, the Figma
component, and the code props stay 1:1. Name Figma properties exactly like the code
props (`trailingIcon`, `disabled`, `severity`) — Code Connect and Figma↔code sync
depend on it.

---

## `<ComponentName>`

> One-sentence purpose. When to use it, when to reach for something else.

### Variant properties — pick one (enum prop / Figma Variant)

| Property | Values | Default | Notes |
|----------|--------|---------|-------|
| `variant` | `…` \| `…` | `…` | |
| `size` | `small` \| `medium` \| `large` | `…` | |
| `severity` / `color` | `info` \| `success` \| `warning` \| `danger` \| `neutral` | `…` | |

### Boolean properties — on/off (boolean prop / Figma Boolean)

| Property | Meaning | Default |
|----------|---------|---------|
| `disabled` | non-interactive | `false` |
| `…` | | |

### Text properties — content (string prop / Figma Text)

| Property | Role | Required |
|----------|------|----------|
| `label` / `title` | primary label | |
| `description` | supporting text | |
| `placeholder` | empty hint | |
| `error` | validation message (swaps for `description`) | |

### Instance-swap / slots (ReactNode / Figma Instance swap)

| Slot | Role |
|------|------|
| `leadingIcon` / `trailingIcon` | swap icon |
| `children` | body content |

### Interaction states — visual, NOT props

These come from CSS pseudo-classes (`:hover`, `:focus-visible`, `:active`) or the
`disabled`/`error` props — do not invent a `hover` prop. Show each as a Figma variant.

`default` · `hover` · `focus` · `active` · `disabled` · `error`

### Accessibility

- Role / semantics:
- `aria-*` labels (required for icon-only controls):
- Keyboard interaction:
- Reduced-motion / contrast notes:

### Token binding checklist

- [ ] No hardcoded spacing / padding / gap / radius / color — all bound to tokens
- [ ] Figma property names match code prop names
- [ ] States covered in Figma variant set
