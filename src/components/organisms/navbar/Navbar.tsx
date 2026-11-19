"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./navbar.module.css";
import {profile} from "@/lib/cv";

interface LinkProps {
  id: number;
  title: string;
  url: string;
  children?: LinkProps[]
}

const links: LinkProps[] = [
  {id: 1, title: "Work", url: "/work"},
  {
    id: 2, title: "Studies", url: "/studies", children: [
      {id: 22, title: "Master", url: "/studies/master"},
      {id: 21, title: "Bachelor", url: "/studies/bachelor"},
    ]
  },
  {id: 3, title: "Gallery", url: "/gallery"},
  {id: 4, title: "Hobbies", url: "/hobbies"},
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();


  // Shrink / blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logo}>
            {profile.initials}
            <span className={styles.accent}>.</span>
          </Link>
          <nav className={styles.nav}>
            {links.map((n) => {
              const active = pathname === n.url || pathname.startsWith(`${n.url}/`);
              const linkClass = `${styles.navLink} ${active ? styles.navLinkActive : ""}`
              if (!n.children) {
                return (
                    <Link
                        key={n.id}
                        href={n.url}
                        className={linkClass}
                    >
                      {n.title}
                    </Link>
                );
              }

              return (
                  <div key={n.id} className={styles.dropdown}>
                    <Link href={n.url} className={linkClass} aria-haspopup="true">
                      {n.title}
                    </Link>
                    <ul className={styles.menu}>
                      <li><Link href={n.url}>All studies</Link></li>
                      {n.children.map((c) => (
                          <li key={c.id}><Link href={c.url}>{c.title}</Link></li>
                      ))}
                    </ul>

                  </div>)

            })}
          </nav>
          <a href={`mailto:${profile.email}`} className={styles.contact}>
            Contact
          </a>
        </div>
      </header>
  );
}


