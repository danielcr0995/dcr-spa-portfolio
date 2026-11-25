import Image from "next/image";
import Button from "@/components/atoms/button/Button";
import styles from "./thesisCard.module.css";
import {StudiesProgramme} from "@/lib/definitions";

export type Thesis = {
  programme: StudiesProgramme
  image: { src: string; alt: string };
  viewMoreUrl: string;
};

type ThesisCardProps = {
  thesis: Thesis;
};

export function ThesisCard({ thesis }: Readonly<ThesisCardProps>) {
  const { programme,  image, viewMoreUrl} = thesis;
  const { programmeType, thesisTitle, thesisLocation, thesisAbstract, thesisPdfUrl, thesisPdfName} = programme;

  return (
      <section>
        <div className={`${styles.card} card-lift`}>
          <p className={styles.period}>{programmeType} Thesis</p>
          <h2 className={styles.title}>{thesisTitle}</h2>
          <p className={styles.location}>
            Place: <span className={styles.locationValue}>{thesisLocation}</span>
          </p>
          <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={350}
              className={styles.image}
          />

          {thesisAbstract.map((p, i) => (
              <p key={i} className={styles.abstract}>
                {p}
              </p>
          ))}

          <div className={styles.actions}>
            <Button href={viewMoreUrl} text="View more" variant="primary" isDownloadButton={false} />
            <Button
                href={thesisPdfUrl}
                pdfName={thesisPdfName}
                text="Download PDF"
                variant="secondary"
                isDownloadButton={true}
            />
          </div>
        </div>
      </section>
  );
}