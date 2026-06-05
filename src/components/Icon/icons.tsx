/*
 * Ikoner i Copernicus DS.
 *
 * Settet er Lucide (https://lucide.dev) — samme ikoner som brukes på
 * "Icons"-siden i Figma.
 *
 * To måter å bruke ikoner på:
 *
 *  1) Statisk import (tree-shaket, for ikoner du bruker i kode):
 *       import { ArrowRight } from "../Icon";
 *       <Icon><ArrowRight /></Icon>
 *
 *  2) Dynamisk via navn (hele katalogen, ~1500 ikoner — lastes ved behov):
 *       <Icon name="heart" />
 *     Dette er det "valgfri ikon"-componentene bruker, slik at man kan
 *     velge fritt fra hele Lucide-settet uten å importere hvert ikon.
 */

// Statiske ikoner brukt direkte i koden (defaults i Button/Card).
export {
  ArrowRight,
  Banana,
  Check,
  Compass,
  Dumbbell,
  House,
  Library,
  UserRound,
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  X,
} from "lucide-react";
export type { LucideIcon } from "lucide-react";

// Tilgang til hele Lucide-katalogen via navn.
export { DynamicIcon, iconNames } from "lucide-react/dynamic";
export type { IconName } from "lucide-react/dynamic";

import type { IconName } from "lucide-react/dynamic";

/**
 * Kuratert DS-sett — ikonene fra "Icons"-siden i Figma.
 * NB: Figma-navnene "dumbell" og "chevron-updown" heter "dumbbell" og
 * "chevrons-up-down" i Lucide; vi bruker de offisielle Lucide-navnene her.
 */
export const featuredIconNames = [
  "arrow-right",
  "banana",
  "compass",
  "dumbbell",
  "house",
  "library",
  "user-round",
  "chevron-down",
  "chevron-up",
  "chevrons-up-down",
  "x",
] as const satisfies readonly IconName[];

export type FeaturedIconName = (typeof featuredIconNames)[number];
