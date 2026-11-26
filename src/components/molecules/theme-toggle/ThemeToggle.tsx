"use client";

import {useEffect, useState} from "react";
import styles from "./toggle.module.css";

type Theme = "light" | "dark";

function SunIcon() {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="4" fill="currentColor"/>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
                key={deg}
                x1="12" y1="2" x2="12" y2="4.5"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                transform={`rotate(${deg} 12 12)`}
            />
        ))}
      </svg>
  );
}

function MoonIcon() {
  return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"
            fill="currentColor"
        />
      </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
      <button
          type="button"
          role="switch"
          aria-checked={isDark}
          aria-label="Dark mode"
          onClick={toggle}
          className={styles.toggle}
      >
      <span className={styles.track} data-dark={isDark}>
        <span className={styles.knob}>{isDark ? <MoonIcon/> : <SunIcon/>}</span>
      </span>
      </button>
  );
}