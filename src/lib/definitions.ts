export interface Profile {
  name: string;
  initials: string;
  role: string;
  location: string;
  availability: string;
  tagline: string;
  email: string;
  cvUrl: string;
  cvFileDownloadName: string;
  stats: { value: string; label: string }[];
  links: { label: string; url: string }[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  pointsUrl?: string[]; // parallel to `points`: pointsUrl[i] is the link for points[i]
  image: string;
  imageAlt: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
  image: string;
  imageAlt: string;
  url: string;
}

export const PROJECT_CATEGORIES = [
  "Research",
  "Master",
  "Bachelor",
  "Thesis",
  // "Work",
  "Software",
  "Web",
  "Business",
  "Entertain",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  course?: string;
  context: string;
  result: string;
  link: string;
  isExternalLink: boolean;
  category: ProjectCategory[];
  tag: string[];
  image: string;
  imageAlt: string;
  images?: ProjectImage[];
  highlights?: string[];
  details?: string[];
  paragraphs?: string[];
  tools?: string[];
  date?: Date;
  github?: string;
  institution?: string;
  degree?: string;
  supervisor?: string[];
  assistantSupervisor?: string;
  coauthors?: string[];
}

export type ProjectSummary = Pick<
    Project,
    "name" | "description" | "result" | "image" | "imageAlt" | "link" | "isExternalLink" | "slug" | "course" | "category" | "date"
>;


export interface SkillGroup {
  group: string;
  items: string[];
}

export interface Hobby {
  icon: string;
  name: string;
  note: string;
  image: string;
  imageAlt: string;
}

export interface StudiesProgramme {
  slug: string;
  programmeType: string;
  title: string;
  schools: string;
  period: string;
  specialization: string;
  intro: string;
  thesisTitle: string;
  thesisLocation: string;
  thesisPdfName: string;
  thesisPdfUrl: string;
  thesisAbstract: string[];
  officialWebsite: string;
}

export interface StudiesPlace {
  name: string;
  city: string;
  note: string;
  image: string;
  imageAlt: string;
}

export interface StudiesCourse {
  year: string;
  items: string[];
}

export interface StudiesProject {
  name: string;
  course: string;
  description: string;
  result: string;
  image: string;
  imageAlt: string;
}