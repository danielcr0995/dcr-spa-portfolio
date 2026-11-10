import type { ReactNode } from "react";
import styles from "./section.module.css";

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.gradientText}>/</span> {title}
      </h2>
      {children}
    </section>
  );
}