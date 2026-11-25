import type {Metadata} from "next";
import Image from "next/image";
import {
  mscProgramme,
  mscPlaces,
  mscCourses,
  mscTechniques,
  mscEvents,
} from "@/lib/studiesData";
import styles from "./master.module.css";
import {profile} from "@/lib/cv";
import {PageIntro} from "@/components/organisms/page-intro/PageIntro";
import {Section} from "@/components/molecules/section/Section";
import Button from "@/components/atoms/button/Button";
import {ThesisCard} from "@/components/organisms/thesis/ThesisCard";
import {ProjectCard} from "@/components/organisms/project-card/ProjectCard";
import {projects} from "@/lib/projects";
import {ProjectSummary} from "@/lib/definitions";

const description =
    "Courses, projects and techniques from the Erasmus Mundus MSc in Nanoscience and Nanotechnology (KU Leuven · Universitat de Barcelona).";

export const metadata: Metadata = {
  title: `Master studies — ${profile.name}`,
  description,
  openGraph: {
    title: `Master studies — ${profile.name}`,
    description,
    type: "website",
    url: "/studies/master",
  },
  twitter: {card: "summary"},
  alternates: {canonical: "/studies/master"},
};

export default function MasterPage() {
  const mscProjects = projects.filter((p) => p.category.includes("Master"));

  const projectSummaries: ProjectSummary[] = mscProjects.map(
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
        <PageIntro eyebrow="Master studies" title={mscProgramme.title}>
          <p className={styles.period}>{mscProgramme.period}</p>
          {mscProgramme.intro}
          <p className={styles.schools}>{mscProgramme.schools}</p>
          <p className={styles.specialization}>
            Specialization:{" "}
            <span className={styles.specializationValue}>
                {mscProgramme.specialization}
              </span>
          </p>
          <div className={styles.logosContainer}>
            <Image
                src="/images/logokuleng-en.png"
                alt="KUL logo"
                width={433}
                height={200}
                priority
                className = {styles.logo}
            />
            <Image
                src="/images/university-of-barcelona-log.png"
                alt="UB logo"
                width={655}
                height={200}
                priority
                className = {styles.logo}
            />
            <Image
                src="/images/logo_erasmus.png"
                alt="erasmus logo"
                width={450}
                height={400}
                priority
                className = {styles.logo}
            />
          </div>

          <Button
              href={mscProgramme.officialWebsite}
              text="Official Website"
              variant="secondary"
              isExternalLink={true}
          />

        </PageIntro>

        <div className={styles.container}>
          <ThesisCard
              thesis={{
                programme: mscProgramme,
                image: {
                  src: "/images/pa_glaucoma_therapy_infographic.png",
                  alt: "Infographic of the peptide amphiphile glaucoma therapy",
                },
                viewMoreUrl: `/gallery/${mscProgramme.slug}`
              }}
          />

          <Section title="The places">
            <div className={styles.grid3}>
              {mscPlaces.map((p) => (
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
            <div className={styles.grid2}>
              {mscCourses.map((c) => (
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
                  <ProjectCard key={p.slug ? p.slug : slugify(p.name)} project={p}  isSchoolPage = {true}/>
              ))}
            </div>
          </Section>

          <Section title="Techniques I learned">
            <div className={styles.chips}>
              {mscTechniques.map((t) => (
                  <span key={t} className={styles.chip}>
                {t}
              </span>
              ))}
            </div>
          </Section>

          <Section title="Events &amp; schools">
            <div className={styles.eventsCard}>
              <ul className={styles.eventsList}>
                {mscEvents.map((e) => (
                    <li key={e}>→ {e}</li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </div>
  );
}