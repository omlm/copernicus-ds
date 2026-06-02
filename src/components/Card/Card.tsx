import type { HTMLAttributes, ReactNode } from "react";
import { Button } from "../Button";
import { Icon, Banana } from "../Icon";
import styles from "./Card.module.css";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  /** Vis ikonet øverst. */
  showIcon?: boolean;
  /** Ikon-innhold (SVG). Default er Banana. */
  icon?: ReactNode;
  /** Vis CTA-knappen nederst. */
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function Card({
  title,
  description,
  showIcon = true,
  icon = <Banana />,
  showButton = true,
  buttonLabel = "Kom igang",
  onButtonClick,
  className,
  ...rest
}: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");
  return (
    <div className={classes} {...rest}>
      {showIcon && <Icon size="huge">{icon}</Icon>}
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
