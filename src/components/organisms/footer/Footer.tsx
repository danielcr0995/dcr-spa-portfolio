import { profile } from "@/lib/cv";
import styles from "./footer.module.css";
import CurrentDate from "@/components/atoms/Date";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span>
          © 2026 {profile.name}
        </span>
        <div className={styles.footerLinks}>
          {profile.links.map((l) => (
            <a key={l.label} href={l.url} className={styles.footerLink}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}