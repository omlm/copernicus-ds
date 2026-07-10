import type { HTMLAttributes } from "react";
import { Button } from "../Button";
import { Icon, type IconName } from "../Icon";
import styles from "./Card.module.css";

export type CardVariation = "default" | "secondary" | "tertiary";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  /** Bakgrunnsvariant (Figma: "Variation"). */
  variation?: CardVariation;
  /** Vis ikonet øverst. */
  showIcon?: boolean;
  /** Lucide-ikon (velg fritt fra hele settet). Default er "banana". */
  iconName?: IconName;
  /** Vis CTA-knappen nederst. */
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const variationClass: Record<CardVariation, string | undefined> = {
  default: undefined,
  secondary: styles.variationSecondary,
  tertiary: styles.variationTertiary,
};

export function Card({
  title,
  description,
  variation = "default",
  showIcon = true,
  iconName = "banana",
  showButton = true,
  buttonLabel = "Kom igang",
  onButtonClick,
  className,
  ...rest
}: CardProps) {
  const classes = [styles.card, variationClass[variation], className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={classes} {...rest}>
      {showIcon && <Icon size="huge" name={iconName} />}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {showButton && (
        <Button variant="primary" size="large" trailingIcon onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
