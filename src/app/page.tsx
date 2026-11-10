import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  profile,
  experience,
  education,
  projects,
  skills,
  hobbies,
  extras,
} from "@/lib/cv";
import styles from "./styles.module.css";
import { Section } from "@/components/molecules/section/Section";
import { SeeMore } from "@/components/molecules/see-more/SeeMore";

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  title: { absolute: title },
  description: profile.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: profile.tagline,
    type: "website",
    url: "/",
  },
  twitter: { card: "summary" },
};

export default function HomePage() {
  return (
    <div>
      <section id="about" className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroInnerMain}>
            <div>
              <p className={styles.badge}>
                <span className={styles.dot} /> {profile.availability}
              </p>
              <h1 className={styles.name}>
                Hi, I&apos;m{" "}
                <span className={styles.gradientText}>{profile.name}</span>
              </h1>
              <p className={styles.role}>
                {profile.role} · {profile.location}
              </p>
              <p className={styles.tagline}>{profile.tagline}</p>

              <div className={styles.actions}>
                <a href="#contact" className={styles.primaryButton}>
                  Get in touch
                </a>
                <a href={profile.cvUrl} download={profile.cvFileDownloadName} className={styles.ghostButton}>
                  Download CV
                </a>
              </div>
            </div>
            <Image
              src="/images/fotoperfil.png"
              alt="Profiles photo"
              width={400}
              height={400}
              className={styles.heroInnerMainImage}
            />
          </div>

          <div className={styles.stats}>
            {profile.stats.map((s) => (
              <div key={s.label}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Experience">
        <ol className={styles.experienceList}>
          {experience.map((e) => (
            <li key={e.company + e.period} className={styles.experienceItem}>
              <Image
                src={e.image}
                alt={e.imageAlt}
                width={1200}
                height={800}
                className={styles.thumb}
              />
              <div className={styles.meta}>
                <p className={styles.period}>{e.period}</p>
                <h3 className={styles.itemTitle}>
                  {e.title}{" "}
                  <span className={styles.company}>@ {e.company}</span>
                </h3>
                <p className={styles.truncate}>{e.summary}</p>
              </div>
            </li>
          ))}
        </ol>
        <SeeMore href="/work" label="See the full work page" />
      </Section>

      <Section title="Studies">
        <div className={styles.grid2}>
          {education.map((e) => (
            <div key={e.degree} className={styles.card}>
              <Image
                src={e.image}
                alt={e.imageAlt}
                width={1200}
                height={800}
                className={styles.cardImageShort}
              />
              <div className={styles.cardBody}>
                <p className={styles.period}>{e.period}</p>
                <h3 className={styles.cardTitle}>{e.degree}</h3>
                <p className={styles.cardText}>{e.school}</p>
              </div>
            </div>
          ))}
        </div>
        <SeeMore href="/studies" label="See the studies page" />
      </Section>

      <Section title="Selected work">
        <div className={styles.grid3}>
          {projects.map((p) => (
            <Link key={p.name} href="/gallery" className={styles.card}>
              <Image
                src={p.image}
                alt={p.imageAlt}
                width={1200}
                height={800}
                className={styles.projectImage}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{p.name}</h3>
                <p className={styles.cardText}>{p.description}</p>
                <p className={styles.cardResult}>{p.result}</p>
              </div>
            </Link>
          ))}
        </div>
        <SeeMore href="/gallery" label="Open the full gallery" />
      </Section>

      <Section title="Skills & Languages">
        <div className={styles.grid3Gap}>
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className={styles.skillTitle}>{g.group}</h3>
              <div className={styles.chips}>
                {g.items.map((i) => (
                  <span key={i} className={styles.chip}>
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Beyond work">
        <div className={styles.grid4}>
          {hobbies.map((h) => (
            <Link key={h.name} href="/hobbies" className={styles.card}>
              <Image
                src={h.image}
                alt={h.imageAlt}
                width={816}
                height={816}
                className={styles.squareImage}
              />
              <div className={styles.hobbyBody}>
                <h3 className={styles.cardTitle}>
                  <span className={styles.icon}>{h.icon}</span>
                  {h.name}
                </h3>
                <p className={styles.cardText}>{h.note}</p>
              </div>
            </Link>
          ))}
        </div>
        <SeeMore href="/hobbies" label="See the hobbies page" />

        <div className={styles.extras}>
          <h3 className={styles.extrasTitle}>Certifications & events</h3>
          <ul className={styles.extrasList}>
            {extras.map((x) => (
              <li key={x}>→ {x}</li>
            ))}
          </ul>
        </div>
      </Section>

      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <h2 className={styles.contactTitle}>
            Let&apos;s work{" "}
            <span className={styles.gradientText}>together</span>
          </h2>
          <p className={styles.contactText}>
            I&apos;m open to new opportunities and collaborations.
          </p>
          <a href={`mailto:${profile.email}`} className={styles.emailButton}>
            {profile.email}
          </a>
          <div className={styles.contactLinks}>
            {profile.links.map((l) => (
              <a key={l.label} href={l.url}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
