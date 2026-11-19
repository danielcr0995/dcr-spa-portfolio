import { PageIntro } from '@/components/organisms/page-intro/PageIntro';
import {education, profile} from '@/lib/cv';
import Image from 'next/image';
import styles from './studies.module.css'
import Button from "@/components/atoms/button/Button";
import {Metadata} from "next";


const description =
    "What I studied, where, and the work I am proud of from those years.";

export const metadata: Metadata = {
  title: `Studies — ${profile.name}`,
  description,
  openGraph: {
    title: `Studies — ${profile.name}`,
    description,
    type: "website",
    url: "/studies",
  },
  twitter: { card: "summary" },
  alternates: { canonical: "/studies" },
};

export default function StudiesPage() {
  return (
    <div>
      <PageIntro eyebrow="Education" title="Studies">
        What I studied, where, and the work I am proud of from those years.
      </PageIntro>

      <div className={styles.list}>
        {education.map((e, i) => (
          <article key={e.degree} className={styles.card}>
            <Image
              src={e.image}
              alt={e.imageAlt}
              width={1200}
              height={800}
              className={`${styles.image} ${i % 2 === 1 ? styles.imageReverse : ""}`}
            />
            <div className={styles.body}>
              <p className={styles.period}>{e.period}</p>
              <h2 className={styles.title}>{e.degree}</h2>
              <p className={styles.school}>{e.school}</p>
              <p className={styles.detail}>{e.detail}</p>
              <Button href={e.url} text="View more" variant="primary" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}