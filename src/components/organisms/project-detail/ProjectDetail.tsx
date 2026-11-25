import Link from "next/link";
import Image from "next/image";
import {Section} from "@/components/molecules/section/Section";
import type {Project} from "@/lib/definitions";
import styles from "./project-detail.module.css";
import {formatMonthYear} from "@/utils/utils";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({project}: Readonly<ProjectDetailProps>) {
  const {
    name,
    course,
    context,
    description,
    result,
    link,
    isExternalLink,
    category,
    tag,
    image,
    imageAlt,
    images = [],
    details = [],
      highlights = [],
    paragraphs = [],
    tools = [],
    date,
    github,
    institution,
    degree,
    supervisor = [],
    assistantSupervisor,
  } = project;

  const cleanResult = result.replace(/^Result:\s*/i, "");
  const hasSupervision = institution || degree || supervisor.length > 0 || assistantSupervisor;

  return (
      <div>
        {/* Hero */}
        <section className={styles.hero}>
          <Image
              src={image}
              alt={imageAlt}
              width={2400}
              height={1028}
              priority
              className={styles.heroImage}
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroCaption}>
            <div className={styles.heroCaptionInner}>
              <p className={styles.tag}>{category.join(" · ")}</p>
              <h1 className={styles.title}>
                <span className="gradientText">{name}</span>
              </h1>
              {course && <p className={styles.course}>{course}</p>}
            </div>
          </div>
        </section>

        <article className={styles.article}>
          {/* Meta line */}
          {(date || institution) && (
              <p className={styles.meta}>
                {[institution, date && formatMonthYear(date)].filter(Boolean).join(" · ")}
              </p>
          )}

          {context && <p className={styles.context}>{context}</p>}
          <p className={styles.description}>{description}</p>

          {cleanResult && (
              <div className={`${styles.resultCard} gradientText`}>
                <p className={styles.resultLabel}>The result</p>
                <p className={styles.resultValue}>{cleanResult}</p>
              </div>
          )}

          {highlights && highlights.length > 0 && (
              <Section title="Highlights">
                <ul className={styles.highlightList}>
                  {highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </Section>
          )}

          {/* Full write-up */}
          {paragraphs.length > 0 && (
              <Section title="The project">
                <div className={styles.paragraphs}>
                  {paragraphs.map((p, i) => (
                      <p key={i} className={styles.paragraph}>
                        {p}
                      </p>
                  ))}
                </div>
              </Section>
          )}



          {details.length > 0 && (
              <details className={styles.allDetails}>
                <summary>All steps ({details.length})</summary>
                <ol className={styles.stepList}>
                  {details.map((d, i) => (
                      <li key={i} className={styles.step}>
                        <span className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</span>
                        <p className={styles.stepText}>{d}</p>
                      </li>
                  ))}
                </ol>
              </details>
          )}

          {/*/!* Steps *!/*/}
          {/*{details.length > 0 && (*/}
          {/*    <Section title="What I did">*/}
          {/*      <ol className={styles.stepList}>*/}
          {/*        {details.map((d, i) => (*/}
          {/*            <li key={i} className={styles.step}>*/}
          {/*        <span className={styles.stepNumber}>*/}
          {/*          {String(i + 1).padStart(2, "0")}*/}
          {/*        </span>*/}
          {/*              <p className={styles.stepText}>{d}</p>*/}
          {/*            </li>*/}
          {/*        ))}*/}
          {/*      </ol>*/}
          {/*    </Section>*/}
          {/*)}*/}

          {/* Figures */}
          {images.length > 0 && (
              <Section title="Figures">
                <div className={styles.figureGrid}>
                  {images.map((img, i) => (
                      <figure key={img.src} className={styles.figure}>
                        <Image
                            // src={i%2==0?"/images/gallery-2.jpg": "/images/gallery-3.jpg"}
                            src={img.src}
                            alt={img.alt}
                            width={1200}
                            height={800}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className={styles.figureImage}
                        />
                        <figcaption className={styles.figureCaption}>{img.caption}</figcaption>
                      </figure>
                  ))}
                </div>
              </Section>
          )}

          {/* Tools */}
          {tools.length > 0 && (
              <Section title="Tools and methods">
                <ul className={styles.chips}>
                  {tools.map((t) => (
                      <li key={t} className={styles.chip}>
                        {t}
                      </li>
                  ))}
                </ul>
              </Section>
          )}

          {/* Supervision */}
          {hasSupervision && (
              <Section title="Supervision">
                <dl className={styles.supervision}>
                  {degree && (
                      <>
                        <dt>Degree</dt>
                        <dd>{degree}</dd>
                      </>
                  )}
                  {institution && (
                      <>
                        <dt>Institution</dt>
                        <dd>{institution}</dd>
                      </>
                  )}
                  {supervisor.length > 0 && (
                      <>
                        <dt>Supervisor{supervisor.length > 1 ? "s" : ""}</dt>
                        <dd>{supervisor.join(", ")}</dd>
                      </>
                  )}
                  {assistantSupervisor && (
                      <>
                        <dt>Assistant supervisor</dt>
                        <dd>{assistantSupervisor}</dd>
                      </>
                  )}
                </dl>
              </Section>
          )}

          {/* Keywords */}
          {tag.length > 0 && (
              <ul className={styles.chips}>
                {tag.map((t) => (
                    <li key={t} className={styles.chipMuted}>
                      {t}
                    </li>
                ))}
              </ul>
          )}

          {/* Links */}
          <nav className={styles.nav}>
            {isExternalLink && link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.backLink}>
                  View project →
                </a>
            )}
            {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                  Source code
                </a>
            )}
            <Link href="/gallery" className={styles.navLink}>
              ← Back to the gallery
            </Link>
          </nav>
        </article>
      </div>
  );
}