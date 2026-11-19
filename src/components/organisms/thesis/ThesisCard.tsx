import Image from "next/image";
import Button from "@/components/atoms/button/Button";
import styles from "./thesisCard.module.css";

export type Thesis = {
  title: string;
  location: string;
  abstract: string[];
  image: { src: string; alt: string };
  viewMoreUrl: string;
  pdf: { url: string; name: string };
};

type ThesisCardProps = {
  thesis: Thesis;
};

export function ThesisCard({ thesis }: Readonly<ThesisCardProps>) {
  const { title, location, abstract = [], image, viewMoreUrl, pdf } = thesis;

  return (
      <section>
        <div className={`${styles.card} card-lift`}>
          <p className={styles.period}>Master Thesis</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.location}>
            Place: <span className={styles.locationValue}>{location}</span>
          </p>

          <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={350}
              className={styles.image}
          />

          {abstract.map((p, i) => (
              <p key={i} className={styles.abstract}>
                {p}
              </p>
          ))}

          <div className={styles.actions}>
            <Button href={viewMoreUrl} text="View more" variant="primary" isDownloadButton={false} />
            <Button
                href={pdf.url}
                pdfName={pdf.name}
                text="Download PDF"
                variant="secondary"
                isDownloadButton={true}
            />
          </div>
        </div>
      </section>
  );
}