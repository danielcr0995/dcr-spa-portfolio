import Image from "next/image";
import Button from "@/components/atoms/button/Button";
import styles from "./card.module.css";
import { ProjectSummary} from "@/lib/definitions";

type ProjectCardProps = {
  project: ProjectSummary,
  isSchoolPage: boolean,
};

export function ProjectCard({project, isSchoolPage=false}: Readonly<ProjectCardProps>) {
  const {name, description, result, image, imageAlt, link, isExternalLink, slug, course, category} = project;

  return (
      <article className={styles.card}>
        <Image
            src={image}
            alt={imageAlt}
            width={1200}
            height={800}
            className={styles.image}
        />
        <div className={styles.body}>
          <p className={styles.tag}>{category.join(" · ")}</p>
          {isSchoolPage?( <p className={styles.result}>{course}</p>) : null}
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.description}>{description}</p>
          {isSchoolPage?(<p className={styles.result}>{result}</p>) : null}
          {link ? (
              <div className={styles.actions}>
                <Button
                    href={isExternalLink ? link : `/gallery/${slug}`}
                    text="View project →"
                    variant="tertiary"
                    isExternalLink={isExternalLink}
                />
              </div>
          ) : null}
        </div>
      </article>
  );
}