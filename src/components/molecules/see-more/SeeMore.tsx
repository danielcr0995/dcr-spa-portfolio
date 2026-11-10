import Link from "next/link";
import styles from "./see-more.module.css";

export function SeeMore({
  href,
  label,
}: {
  href: "/work" | "/studies" | "/gallery" | "/hobbies";
  label: string;
}) {
  return (
    <Link href={href} className={styles.seeMore}>
      {label} <span aria-hidden>→</span>
    </Link>
  );
}