import { createElement, forwardRef, type HTMLAttributes, type ReactNode } from "react";
import styles from "./Heading.module.css";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Semantisk nivå (h1–h6). Utseendet er det samme — nivået er for dokumentstrukturen. */
  level?: HeadingLevel;
  /** Overskriftsteksten. */
  children: ReactNode;
}

/**
 * Overskrift (Figma: "Heading").
 *
 * Én visuell stil (Outfit SemiBold 24) med valgfritt semantisk nivå, slik
 * at dokumenthierarkiet kan holdes riktig uavhengig av utseendet.
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  { level = 2, className, children, ...rest },
  ref,
) {
  const classes = [styles.heading, className].filter(Boolean).join(" ");
  return createElement(`h${level}`, { ref, className: classes, ...rest }, children);
});
