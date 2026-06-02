import type { HTMLAttributes, ReactNode } from "react";
import styles from "./PageTitle.module.css";

export interface PageTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
}

export function PageTitle({ className, children, ...rest }: PageTitleProps) {
  const classes = [styles.pageTitle, className].filter(Boolean).join(" ");
  return (
    <h1 className={classes} {...rest}>
      {children}
    </h1>
  );
}
