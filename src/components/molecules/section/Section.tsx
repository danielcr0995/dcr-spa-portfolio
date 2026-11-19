import type { ReactNode } from "react";
import styles from "./section.module.css";
import clsx from "clsx";

export function Section({
                          id,
                          title,
                          children,
                          className
                        }: {
  id?: string,
  title: string,
  children: ReactNode,
  className?: any
}) {
  return (
    <section id={id} className={clsx(styles.section, className)}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.gradientText}>/</span> {title}
      </h2>
      {children}
    </section>
  );
}