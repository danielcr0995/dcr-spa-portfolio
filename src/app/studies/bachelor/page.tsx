import { PageIntro } from '@/components/organisms/page-intro/PageIntro';
import Image from 'next/image';
import styles from './bachelor.module.css'
import Button from "@/components/atoms/button/Button";
import {
  bscCourses,
  bscEvents,
  bscPlaces,
  bscProgramme,
  bscTechniques,
} from "@/lib/studiesData";
import {Section} from "@/components/molecules/section/Section";
import type {Metadata} from "next";
import {ThesisCard} from "@/components/organisms/thesis/ThesisCard";
import {profile} from "@/lib/cv";
import {slugify} from "@/utils/utils";
import {ProjectCard} from "@/components/organisms/project-card/ProjectCard";
import {projects} from "@/lib/projects";
import {ProjectSummary} from "@/lib/definitions";


const description =
    "Courses, projects and techniques from the Bsc in Physics from Yachay Tech University";

export const metadata: Metadata = {
  title: `Bachelor studies — ${profile.name}`,
  description,
  openGraph: {
    title: `Bachelor studies — ${profile.name}`,
    description,
    type: "website",
    url: "/studies/bachelor",
  },
  twitter: {card: "summary"},
  alternates: {canonical: "/studies/bachelor"},
};

export default function BachelorPage() {
  const bscProjects = projects.filter((p) => p.category.includes("Bachelor"));

  const projectSummaries: ProjectSummary[] = bscProjects.map(
      ({name, description, result, image, imageAlt, link, isExternalLink, slug, course, category, date}) => ({
        name,
        description,
        result,
        image,
        imageAlt,
        link,
        isExternalLink,
        slug,
        course,
        category,
        date
      }),
  )
  .slice()
  .sort((a, b) => (b.date?.getTime() ?? 0) - (a.date?.getTime() ?? 0));

  return (
      <div>
        <PageIntro eyebrow="Bachelor studies" title={bscProgramme.title}>
          <p className={styles.period}>{bscProgramme.period}</p>
          {bscProgramme.intro}
          <p className={styles.schools}>{bscProgramme.schools}</p>
          <p className={styles.specialization}>
            Specialization:{" "}
            <span className={styles.specializationValue}>
                {bscProgramme.specialization}
              </span>
          </p>
          <div className={styles.logosContainer}>
            <Image
                src="/images/yachay_tech_logo.png"
                alt="KUL logo"
                width={433}
                height={200}
                priority
                className = {styles.logo}
            />
            <Image
                src="/images/yachay_tech_physics_school_logo.png"
                alt="UB logo"
                width={655}
                height={200}
                priority
                className = {styles.logo}
            />
          </div>
          <Button
              href={bscProgramme.officialWebsite}
              text="Official Website"
              variant="secondary"
              isExternalLink={true}
          />

        </PageIntro>

        <div className={styles.container}>
          <ThesisCard
              thesis={{
                programme: bscProgramme,
                image: {
                  src: "/images/thesis_bachelor_benzene_perpendicular.png",
                  alt: "Bachelor thesis figure: benzene molecule in a perpendicular configuration",
                },
                viewMoreUrl: `/gallery/${bscProgramme.slug}`,

              }}
          />

          <Section title="The places">
            <div className={styles.grid3}>
              {bscPlaces.map((p) => (
                  <figure key={p.name} className={`${styles.figureCard}`}>
                    <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={300}
                        height={200}
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className={styles.image}
                    />
                    <figcaption className={styles.figureCaption}>
                      <h3 className={styles.cardTitle}>{p.name}</h3>
                      <p className={styles.city}>{p.city}</p>
                      <p className={styles.note}>{p.note}</p>
                    </figcaption>
                  </figure>
              ))}
            </div>
          </Section>

          <Section title="Courses">
            <div className={styles.grid3}>
              {bscCourses.map((c) => (
                  <div key={c.year} className={`${styles.courseCard}`}>
                    <h3 className={styles.courseYear}>{c.year}</h3>
                    <ul className={styles.list}>
                      {c.items.map((i) => (
                          <li key={i}>→ {i}</li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>
          </Section>


          <Section title="Projects">
            <div className={styles.grid3}>
              {projectSummaries.map((p) => (
                  <ProjectCard key={p.slug ? p.slug : slugify(p.name)} project={p} isSchoolPage={true}/>
              ))}
            </div>
          </Section>

          <Section title="Techniques I learned">
            <div className={styles.chips}>
              {bscTechniques.map((t) => (
                  <span key={t} className={styles.chip}>
                {t}
              </span>
              ))}
            </div>
          </Section>

          <Section title="Events &amp; schools">
            <div className={styles.eventsCard}>
              <ul className={styles.eventsList}>
                {bscEvents.map((e) => (
                    <li key={e}>→ {e}</li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </div>
  );
}