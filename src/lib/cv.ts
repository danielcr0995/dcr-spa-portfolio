// src/data/cv.ts
// ============= Edit this file to fill the portfolio with your own CV details =============
// Every picture below is a placeholder: replace the file in public/images
// with a real photo of your own work, keeping the same name (or change the path here).

export const profile = {
  name: "Daniel Correa",
  initials: "DC",
  role: "Nanoscience MSc · Backend Software Engineer",
  location: "Leuven, Belgium",
  availability: "Available full-time immediately",
  tagline:
    "Erasmus Mundus MSc candidate in Nanoscience and Nanotechnology (KU Leuven · Universitat de Barcelona) with 3 years of backend engineering — bridging research-grade nanoscience with robust software.",
  email: "daniel.correa.1995@gmail.com",
  cvUrl: "/cv/cv.pdf",
  cvFileDownloadName: "DanielCorreaCV.pdf",
  stats: [
    { value: "3", label: "Years backend engineering" },
    { value: "5,000+", label: "Accounts/day enabled" },
    { value: ">95%", label: "Drug encapsulation efficiency" },
  ],
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/daniel-correa0995" },
    { label: "GitHub", url: "https://github.com/danielcr0995" },
  ],
};

export const experience = [
  {
    title: "Production Systems Engineer",
    company: "Banco Pichincha — Quito, Ecuador",
    period: "May 2022 — Sept 2024",
    summary:
      "Core contributor to a team-led redesign into reactive Spring Boot/WebFlux microservices at one of Latin America's largest banks.",
    points: [
      "Built microservices from scratch; system scaled to 5,000+ account creations/day, plus 1,000+ specialized accounts/day",
      "Java Spring Boot & WebFlux with Clean Architecture and SOLID; integrated Salesforce, PostgreSQL, MongoDB, Redis",
      "85%+ unit test coverage (JUnit, Mockito, SonarCloud); security with Snyk and StackHawk",
      "CI/CD via Azure DevOps and Gitflow; monitoring with Lens, Azure Logs and KQL",
    ],
    image: "/images/banco_pichincha.jpg",
    imageAlt: "Placeholder photo for Banco Pichincha — replace with a real picture of your work.",
  },
  {
    title: "Founder & Full Stack Developer",
    company: "Pura Fruta — Quito, Ecuador",
    period: "Nov 2020 — May 2021",
    summary: "Launched an e-commerce delivery platform during COVID-19.",
    points: [
      "Reached $25K in sales",
      "Built the website with the MERN stack (MongoDB, Express, React, Node.js)",
      "Custom order management system in Python (pandas, NumPy); DigitalOcean server",
    ],
    image: "/images/purafruta_logo.png",
    imageAlt: "Placeholder photo for Pura Fruta — replace with a real picture of your work.",
  },
  {
    title: "Practicing Programmer",
    company: "ATBS - Talov — Ibarra, Ecuador",
    period: "Mar 2021 — Jun 2021",
    summary: "Sign language video data for apps serving the deaf community.",
    points: [
      "Generated 900 sign language videos for the apps Speakliz and Vision",
      "Applied a 10× multiplication pipeline to scale the video dataset",
    ],
    image: "/images/talov.jpeg",
    imageAlt: "Placeholder photo for ATBS - Talov — replace with a real picture of your work.",
  },
  {
    title: "Teaching Assistant — Physics 2",
    company: "Yachay Tech University — Ecuador",
    period: "Apr 2020 — Jun 2020",
    summary: "Supported physics students during the semester.",
    points: [
      "Graded homework and laboratory assignments", 
      "Provided tutoring and student support", "Designed  laboratory practices to be performed in a virtual environment"
    ],
    image: "/images/science_teacher_physics.jpg",
    imageAlt: "Placeholder photo for teaching assistant role — replace with a real picture.",
  },
  {
    title: "FabLab Technician (Volunteer)",
    company: "Yachay Tech University — Ecuador",
    period: "Oct 2016 — Jul 2018",
    summary: "Prototyping and equipment care in the university FabLab.",
    points: [
      "Built prototypes with 3D printers, laser cutters and CNC machines",
      "Maintained equipment and wrote safe operating procedures",
      "Developed an innovative, laser-cut plastic bottle cutter as an alternative to 3D-printed designs. "
    ],
    pointsUrl: ["","","https://www.thingiverse.com/thing:2988529"],
    image: "/images/fablab.jpeg",
    imageAlt: "Placeholder photo for the FabLab — replace with a real picture of your work.",
  },
];

export const education = [
  {
    degree: "Erasmus Mundus MSc in Nanoscience and Nanotechnology",
    school: "KU Leuven (Year 1) · Universitat de Barcelona (Year 2)",
    period: "Sept 2024 — Aug 2026 (expected)",
    detail:
      "Specialization in Nanomedicine and Nanotheranostics. Thesis at IQAC-CSIC: nanosystems based on peptide amphiphiles for drug encapsulation — four peptide amphiphiles synthesized by Fmoc-SPPS, >95% latanoprost encapsulation. Also AFM nanolithography and force spectroscopy, MOF CO₂ sensor data pipeline (R² = 0.996), and molecular dynamics.",
    image: "/images/kuleuven.jpeg",
    imageAlt: "Placeholder photo for the MSc — replace with a campus or thesis picture.",
  },
  {
    degree: "B.S. Physics",
    school: "Yachay Tech University — Urcuquí, Ecuador",
    period: "GPA 3.5 / 4.0",
    detail:
      "Thesis: Basic Molecular Electronics via Mechanically Controlled Break Junction (MCBJ) — measured single-molecule conductance with sub-nm electrode gaps and correlated it with computed transmission spectra.",
    image: "/images/yachaytech.jpg",
    imageAlt: "Placeholder photo for the physics degree — replace with a real picture.",
  },
];

export const projects = [
  {
    name: "Peptide amphiphile nanocarriers",
    description: "MSc thesis at IQAC-CSIC: self-assembling peptides for ocular drug delivery.",
    result: "Result: >95% encapsulation efficiency",
    link: "#",
    tag: "School",
    image: "/images/gallery-1.jpg",
    imageAlt: "Placeholder picture of the thesis project — replace with a lab photo.",
  },
  {
    name: "Reactive account microservices",
    description: "Spring Boot/WebFlux redesign of account creation at Banco Pichincha.",
    result: "Result: 5,000+ accounts/day",
    link: "#",
    tag: "Work",
    image: "/images/gallery-2.jpg",
    imageAlt: "Placeholder picture of the microservices project — replace with a diagram.",
  },
  {
    name: "Pura Fruta e-commerce",
    description: "MERN delivery platform with a Python order management system.",
    result: "Result: $25K in sales",
    link: "#",
    tag: "Personal",
    image: "/images/gallery-3.jpg",
    imageAlt: "Placeholder picture of Pura Fruta — replace with a screenshot.",
  },
  {
    name: "AFM nanomechanics & nanolithography",
    description: "Young's moduli from force curves on Si and PDMS; ~30 nm patterning on gelatin.",
    result: "Result: <1% error vs. literature",
    link: "#",
    tag: "School",
    image: "/images/gallery-1.jpg",
    imageAlt: "Placeholder picture of AFM work — replace with an AFM image.",
  },
];

export const skills = [
  {
    group: "Nanoscience & Lab",
    items: ["SPPS", "Drug encapsulation", "HPLC/UHPLC-MS", "Raman", "AFM", "TEM/HRTEM/SAED", "ESI-MS"],
  },
  {
    group: "Data analysis",
    items: ["Python (pandas, NumPy, SciPy)", "SPC", "Molecular dynamics (AMBER/VMD)", "DFT/VASP", "Mathematica"],
  },
  {
    group: "Software engineering",
    items: ["Java", "Spring Boot", "Spring WebFlux", "JUnit/Mockito", "React", "Node.js", "Bash"],
  },
  {
    group: "Infrastructure & tools",
    items: ["Git", "Azure DevOps", "PostgreSQL", "MongoDB", "Redis", "Docker", "CI/CD", "Agile/Scrum"],
  },
  { group: "Fabrication", items: ["3D printing", "Laser cutting", "CNC machines", "LaTeX"] },
  { group: "Languages", items: ["Spanish — Native", "English — Professional", "Dutch — A2 (learning)"] },
];

export const hobbies = [
  {
    icon: "⚽",
    name: "Football",
    note: "Team player on and off the pitch",
    image: "/images/hobby-1.jpg",
    imageAlt: "Placeholder photo for football — replace with your own picture.",
  },
  {
    icon: "🎲",
    name: "Board games",
    note: "",
    image: "/images/hobby-board-games.jpg",
    imageAlt: "Illustrative placeholder photo of board games.",
  },
  {
    icon: "🏓",
    name: "Table tennis",
    note: "",
    image: "/images/hobby-table-tennis.jpg",
    imageAlt: "Illustrative placeholder photo of table tennis paddles and a ball.",
  },
  {
    icon: "📚",
    name: "Reading",
    note: "",
    image: "/images/hobby-2.jpg",
    imageAlt: "Placeholder photo for reading — replace with your own picture.",
  },
  {
    icon: "✈️",
    name: "Travel",
    note: "16 countries and counting",
    image: "/images/hobby-3.jpg",
    imageAlt: "Placeholder photo for travel — replace with your own picture.",
  },
  // {
  //   icon: "🎵",
  //   name: "Music",
  //   note: "What you play or listen to",
  //   image: "/images/hobby-4.jpg",
  //   imageAlt: "Placeholder photo for music — replace with your own picture.",
  // },
];

export const extras = [
  "Build Reactive MicroServices using Spring WebFlux/SpringBoot — Udemy, 2023",
  "Java Unit Test: Mockito & Powermock — Udemy, 2023",
  "The Complete SSL and TLS Guide — Udemy, 2023",
  "The Complete Web Development Bootcamp — Udemy, 2022",
  "Data Analysis with Python — freeCodeCamp, 2021",
  "Student Excellence Day — imec, Leuven, Oct 2025",
  "Advanced Functional Nanomaterials School — Yachay Tech, 2020",
  "Acton University leadership programme — Michigan, USA, 2018",
];  