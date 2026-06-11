import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { Icon, type IconName } from "../Icon";
import styles from "./ListCard.module.css";

export type ListCardType = "list" | "feature";

export interface ListCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Overskriften (Figma: tittelteksten, Outfit SemiBold 20). */
  title: ReactNode;
  /** Beskrivelsen under (Figma: "Description"). */
  description?: ReactNode;
  /**
   * Figma: "Type=List card|Feature". Variantene er foreløpig visuelt like
   * i Figma; propen finnes for API-paritet.
   */
  type?: ListCardType;
  /** Ledende ikon (Lucide-navn). Figma-eksempelet bruker "cloud-sun". */
  iconName?: IconName;
  /** Etterfølgende ikon til høyre. Figma-eksempelet bruker "pencil". */
  trailingIconName?: IconName;
}

/**
 * Listekort (Figma: "Card", Type=List card|Feature).
 *
 * Et horisontalt kort med ledende ikon, tittel + beskrivelse og et
 * etterfølgende ikon. Bruker card/*-tokens (bakgrunn, radius). Det
 * vertikale hero-kortet (Figma: "MM Card") er den egne `Card`-komponenten.
 */
export const ListCard = forwardRef<HTMLDivElement, ListCardProps>(function ListCard(
  {
    title,
    description,
    type = "list",
    iconName = "cloud-sun",
    trailingIconName = "pencil",
    className,
    ...rest
  },
  ref,
) {
  void type; // variantene er like i Figma i dag
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} {...rest}>
      <Icon size="large" name={iconName} className={styles.leadingIcon} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        {description != null && <p className={styles.description}>{description}</p>}
      </div>
      {trailingIconName != null && (
        <Icon size="medium" name={trailingIconName} className={styles.trailingIcon} />
      )}
    </div>
  );
});
