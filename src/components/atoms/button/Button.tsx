import Link from "next/link";
import styles from "./button.module.css";
import clsx from "clsx";


type ButtonProps = {
  href: string;
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
  isDownloadButton?: boolean;
  pdfName?: string;
  isExternalLink?: boolean;
};


export default function Button({
                                 href,
                                 text,
                                 variant = "primary",
                                 className,
                                 isDownloadButton = false,
                                 isExternalLink = false,
                                 pdfName
                               }: ButtonProps) {
  if (isDownloadButton) {
    return (
        <a href={href} download={pdfName}
           className={clsx(styles.button, styles[variant], className)}>
          {text}
        </a>
    )
  }

  if (isExternalLink) {
    return (
        <a href={href} className={clsx(styles.button, styles[variant], className)} target="_blank">
          {text}
        </a>
    )
  }
  return (
      <Link href={href} className={clsx(styles.button, styles[variant], className)}>
        {text}
      </Link>
  )
}

