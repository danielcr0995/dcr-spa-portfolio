# Daniel Correa — Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and CSS Modules. It presents my background in nanoscience research and backend software engineering: work experience, studies, research and software projects, skills, and hobbies.

**Live site:** _add the deployed URL here_

## About

**Daniel Correa** — Erasmus Mundus MSc candidate in Nanoscience and Nanotechnology (KU Leuven · Universitat de Barcelona), with three years of backend engineering experience. Based in Leuven, Belgium.

- Specialization: Nanomedicine and Nanotheranostics
- Master thesis at IQAC-CSIC: NCAM-derived peptide amphiphile nanocarriers for ocular drug delivery
- Bachelor in Physics, Yachay Tech University (Ecuador): thesis on basic molecular electronics with a mechanically controlled break junction

## Features

- **Home** with profile summary, key stats, and selected work
- **Experience** timeline with company, period, and achievements
- **Studies** pages for the bachelor and master programmes, including thesis cards with abstract and PDF download
- **Gallery** of projects, filterable by category, sorted by date
- **Project detail pages** with a hero image, summary, result, full write-up, highlights, step-by-step details, figures with captions, tools, and supervision
- **Skills**, **hobbies**, and **extras** (courses and certifications)
- **Contact** section with email and external links
- Responsive layout, keyboard-accessible navigation, and light/dark theme variables

## Tech stack

- [Next.js](https://nextjs.org/) (App Router, Server and Client Components)
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- CSS Modules, with global design tokens as CSS variables
- [`next/image`](https://nextjs.org/docs/app/api-reference/components/image) for optimized images
- [pnpm](https://pnpm.io/) as the package manager

## Getting started

Requirements: Node.js 20 or later and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm build` | Create a production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm clean` | Remove `.next` and `node_modules` |

## Project structure

```
src/
├── app/                      # Routes (App Router)
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Root layout, navbar and footer
│   ├── studies/              # Bachelor and master studies pages
│   ├── gallery/              # Gallery and [slug] project pages
│   └── ...
├── components/
│   ├── atoms/                # Button and other basic elements
│   ├── molecules/            # Section, ProjectCard, and similar
│   └── organisms/            # Navbar, GalleryView, ProjectDetail, ThesisCard, ...
├── lib/
│   ├── cv.ts                 # Profile, experience, education, skills, hobbies
│   ├── definitions.ts        # Shared types (Project, ProjectCategory, ...)
│   ├── studiesData.ts        # Bachelor programme data
│   └── masterData.ts         # Master programme data
└── utils/                    # Helpers (slugify, getSlug, date formatting)

public/
├── images/                   # Project, place, and hobby images
├── pdf/                      # CV and thesis PDFs
└── cv/                       # Downloadable CV
```

## Editing the content

Most of the content lives in plain TypeScript data files, so you don't need to touch the components to update the site.

- **Profile, experience, education, skills, hobbies:** `src/lib/cv.ts`
- **Projects:** the `projects` arrays in `src/lib/`. Each project has a `slug`, a `name`, a `category` list, and optional `details` (full steps), `highlights` (key points), `paragraphs`, `images`, and `tools`.
- **Thesis pages:** `src/lib/studiesData.ts` and `src/lib/masterData.ts`
- **Images:** place files in `public/images/` and reference them with a path that starts with `/images/`.

### Adding a project

1. Add an entry to the projects array with a unique `slug`, for example `"my-new-project"`.
2. Set `category` to one or more values from `PROJECT_CATEGORIES`.
3. Add an image in `public/images/` and set `image` and `imageAlt`.
4. Optionally add `highlights`, `details`, `paragraphs`, `images`, and `tools`.
5. The project appears in the gallery and gets its own page at `/gallery/<slug>`.

The type checker validates each entry, so run `pnpm tsc --noEmit` after editing.

## Accessibility and performance

- Images use descriptive `alt` text, not file names.
- Navigation and filters are keyboard-accessible, with visible focus states.
- Project pages are statically generated from `generateStaticParams`, so they load quickly.
- Motion effects respect `prefers-reduced-motion`.

## Contact

- Email: daniel.correa.1995@gmail.com
- LinkedIn: [linkedin.com/in/daniel-correa0995](https://linkedin.com/in/daniel-correa0995)
- GitHub: [github.com/danielcr0995](https://github.com/danielcr0995)

## License

All content, including text, images, and project write-ups, is © Daniel Correa. Code is available for reference; contact me before reusing the content.