import type { Metadata } from "next";
import Image from "next/image";
import styles from "./styles.module.css";
import { experience, profile } from "@/lib/cv";
import { PageIntro } from "@/components/organisms/page-intro/PageIntro";

export const metadata: Metadata = {
  title: `Work — ${profile.name}`,
  description:
    "Where I worked, what I built and the results I brought — with pictures.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: `Work — ${profile.name}`,
    description:
      "Where I worked, what I built and the results I brought — with pictures.",
    type: "website",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <div>
      <PageIntro eyebrow="Experience" title="Work">
        Each role with the pictures that show what I actually did.
      </PageIntro>

      <div className={styles.list}>
        {experience.map((e, i) => (
          <article key={e.company + e.period} className={styles.card}>
            <Image
              src={e.image}
              alt={e.imageAlt}
              width={1200}
              height={800}
              className={`${styles.image} ${i % 2 === 1 ? styles.imageReverse : ""}`}
            />
            <div className={styles.body}>
              <p className={styles.period}>{e.period}</p>
              <h2 className={styles.title}>{e.title}</h2>
              <p className={styles.company}>{e.company}</p>
              <p className={styles.summary}>{e.summary}</p>
              <ul className={styles.points}>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}