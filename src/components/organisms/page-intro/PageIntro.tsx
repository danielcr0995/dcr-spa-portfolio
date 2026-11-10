import type { ReactNode } from "react";
import styles from "./page-intro.module.css";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className={`bg-hero ${styles.intro}`}>
      <div className={styles.introInner}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.introTitle}>
          <span className="text-gradient">{title}</span>
        </h1>
        {children ? <p className={styles.introText}>{children}</p> : null}
      </div>
    </section>
  );
}