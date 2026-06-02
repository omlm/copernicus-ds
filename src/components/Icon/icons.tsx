/*
 * Ikoner i Copernicus DS.
 *
 * Settet er Lucide (https://lucide.dev) — samme ikoner som brukes på
 * "Icons"-siden i Figma. Vi re-eksporterer dem her slik at resten av
 * design-systemet refererer ikoner ett sted.
 *
 * Registry-en under speiler Figma-navnene (inkl. Figmas skrivefeil
 * "dumbell") og mapper dem til riktig Lucide-komponent.
 */
import {
  ArrowRight,
  Banana,
  Compass,
  Dumbbell,
  House,
  Library,
  UserRound,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export {
  ArrowRight,
  Banana,
  Compass,
  Dumbbell,
  House,
  Library,
  UserRound,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
};

export type { LucideIcon };

/** Navn (slik de heter i Figma) -> Lucide-komponent. */
export const icons = {
  "arrow-right": ArrowRight,
  banana: Banana,
  compass: Compass,
  dumbell: Dumbbell, // Figma-navn (skrivefeil) -> Lucide "Dumbbell"
  house: House,
  library: Library,
  "user-round": UserRound,
  "chevron-down": ChevronDown,
  "chevron-up": ChevronUp,
  "chevron-updown": ChevronsUpDown,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;

/** Alle ikon-navn i settet, i samme rekkefølge som registry-en. */
export const iconNames = Object.keys(icons) as IconName[];
