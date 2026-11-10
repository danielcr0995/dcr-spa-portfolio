import { PageIntro } from '@/components/organisms/page-intro/PageIntro';
import { education } from '@/lib/cv';
import Image from 'next/image';
import styles from './studies.module.css'

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
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}