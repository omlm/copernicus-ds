/*
 * Innebygde ikoner. Tegnet som stroke-baserte SVG-er med currentColor,
 * slik at de arver tekstfargen fra konteksten.
 *
 * Placeholder-grafikk som matcher ikon-navnene i Copernicus DS (Figma).
 * Bytt ut path-ene med de ekte vektorene fra Figma ved behov.
 */
import type { SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement>;

function base(props: IconSvgProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowRight(props: IconSvgProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14m0 0-6-6m6 6-6 6" />
    </svg>
  );
}

export function Compass(props: IconSvgProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z" />
    </svg>
  );
}

export function Banana(props: IconSvgProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 6c0 6 4 11 11 12 1.5.1 2.5-.4 3-1.5-5 .3-9-3-10-8-.3-1.5-.5-2.5-1.5-3-.8-.4-1.5.3-1.5 0.5Z" />
    </svg>
  );
}
