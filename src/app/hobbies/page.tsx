import type { Metadata } from "next";
import Image from "next/image";
import styles from "./hobbies.module.css";
import { hobbies, profile } from "@/lib/cv";
import { PageIntro } from "@/components/organisms/page-intro/PageIntro";

const description = "What I do outside work — the things that make me who I am.";

export const metadata: Metadata = {
  title: "Hobbies",
  description,
  alternates: { canonical: "/hobbies" },
  openGraph: {
    title: `Hobbies — ${profile.name}`,
    description,
    type: "website",
    url: "/hobbies",
  },
};

export default function HobbiesPage() {
  return (
    <div>
      <PageIntro eyebrow="Beyond work" title="Hobbies">
        The things I do when the laptop is closed.
      </PageIntro>

      <div className={styles.grid}>
        {hobbies.map((h) => (
          <article key={h.name} className={styles.card}>
            <Image
              src={h.image}
              alt={h.imageAlt}
              width={816}
              height={816}
              className={styles.image}
            />
            <div className={styles.body}>
              <h2 className={styles.title}>
                <span className={styles.icon}>{h.icon}</span>
                {h.name}
              </h2>
              <p className={styles.note}>{h.note}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}