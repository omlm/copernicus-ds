import {
  useId,
  useRef,
  useState,
  type HTMLAttributes,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import styles from "./Tabs.module.css";

export interface TabItem {
  /** Unik nøkkel for fanen. */
  id: string;
  /** Fanens etikett (Figma: "Label"). */
  label: ReactNode;
  /** Innholdet i panelet under fanen. */
  content: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Fanene, i rekkefølge. */
  items: TabItem[];
  /** Aktiv fane ved første rendring (ukontrollert). Standard: første. */
  defaultActiveId?: string;
  /** Aktiv fane (kontrollert). Brukes sammen med `onChange`. */
  activeId?: string;
  /** Kalles når brukeren bytter fane. */
  onChange?: (id: string) => void;
}

/**
 * Faner (Figma: "Tabs").
 *
 * `role="tablist"` med piltast-navigasjon. Aktiv fane markeres med
 * aksjonsfargen og understrek (Figma: "State=Active"). Kan brukes
 * kontrollert (`activeId` + `onChange`) eller ukontrollert.
 */
export function Tabs({
  items,
  defaultActiveId,
  activeId,
  onChange,
  className,
  ...rest
}: TabsProps) {
  const baseId = useId();
  const [internalActive, setInternalActive] = useState(defaultActiveId ?? items[0]?.id);
  const active = activeId ?? internalActive;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (id: string) => {
    setInternalActive(id);
    onChange?.(id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = items.findIndex((item) => item.id === active);
    let nextIndex = -1;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % items.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + items.length) % items.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = items.length - 1;
    if (nextIndex >= 0) {
      event.preventDefault();
      select(items[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const activeItem = items.find((item) => item.id === active);

  return (
    <div className={[styles.tabs, className].filter(Boolean).join(" ")} {...rest}>
      <div className={styles.tablist} role="tablist" onKeyDown={handleKeyDown}>
        {items.map((item, index) => {
          const isActive = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${item.id}`}
              className={[styles.tab, isActive && styles.active].filter(Boolean).join(" ")}
              aria-selected={isActive}
              aria-controls={`${baseId}-panel-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      {activeItem != null && (
        <div
          role="tabpanel"
          id={`${baseId}-panel-${activeItem.id}`}
          aria-labelledby={`${baseId}-tab-${activeItem.id}`}
          className={styles.panel}
        >
          {activeItem.content}
        </div>
      )}
    </div>
  );
}
