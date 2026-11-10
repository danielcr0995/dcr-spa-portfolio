"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import { projects } from "@/lib/cv";

const filters = ["All", ...Array.from(new Set(projects.map((p) => p.tag)))];

export function GalleryView() {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.tag === active);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {shown.map((p) => (
          <article key={p.name} className={styles.card}>
            <Image
              src={p.image}
              alt={p.imageAlt}
              width={1200}
              height={800}
              className={styles.image}
            />
            <div className={styles.body}>
              <p className={styles.tag}>{p.tag}</p>
              <h2 className={styles.name}>{p.name}</h2>
              <p className={styles.description}>{p.description}</p>
              <p className={styles.result}>{p.result}</p>
              <a href={p.link} className={styles.link}>
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}