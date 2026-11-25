"use client";

import {useState} from "react";
import styles from "./gallery.module.css";
import {ProjectCard} from "@/components/organisms/project-card/ProjectCard";
import {slugify} from "@/utils/utils";
import {projects} from "@/lib/projects";
import {PROJECT_CATEGORIES, ProjectCategory} from "@/lib/definitions";

const filters = ["All", ...Array.from(PROJECT_CATEGORIES)]as const;

export function GalleryView() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const shown = (active === "All" ? projects : projects.filter((p) => p.category.includes(active)))
  .slice()
  .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));
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
              <ProjectCard key={p.slug ? p.slug : slugify(p.name)} project={p} isSchoolPage = {false} />
          ))}
        </div>
      </div>
  );
}