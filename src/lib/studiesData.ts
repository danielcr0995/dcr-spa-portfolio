import {StudiesCourse, StudiesPlace, StudiesProgramme, StudiesProject} from "@/lib/definitions";

export const mscProgramme: StudiesProgramme = {
  slug: "peptide-amphiphile-nanocarriers",
  programmeType: "Master",
  title: "Erasmus Mundus MSc in Nanoscience and Nanotechnology",
  officialWebsite: "https://www.emm-nano.org/",
  schools: "KU Leuven (Year 1) · Universitat de Barcelona (Year 2)",
  period: "Sept 2024 — Sept 2026",
  specialization: "Nanomedicine and Nanotheranostics",
  intro:
      "A two-year joint master across two universities: a broad nanoscience foundation in Leuven, then a nanomedicine  and characterization specialization in Barcelona, ending with a research thesis at IQAC-CSIC.",
  thesisTitle: "Peptide amphiphile nanocarriers for ocular drug delivery",
  thesisLocation: "IQAC-CSIC, Barcelona",
  thesisPdfUrl: "/pdf/thesisMaster.pdf",
  thesisPdfName: "nanosystems_based_on_peptide_amphiphiles_daniel_correa.pdf",
  thesisAbstract: [
      "Glaucoma is one of the leading causes of irreversible blindness worldwide. The development of more effective ocular drug delivery systems could improve therapeutic outcomes and patient compliance. This work investigates the potential neural cell adhesion molecule (NCAM) derived peptide amphiphiles (PAs) as nanostructured carriers for glaucoma treatment.",
    "Four PAs with NCAM as the backbone were synthesized using Fmoc-based solid phase peptide synthesis (SPPS). The synthesized compounds were characterized by ultra-high-pressure liquid chromatography (UHPLC), electrospray ionization mass spectrometry (ESI-MS) and high-performance liquid chromatography (HPLC) to confirm their successful synthesis and purity. Circular dichroism (CD) and fluorescence spectroscopy were employed to investigate the secondary structure and self-assembly behaviour of the PAs. Finally, the encapsulation efficiency of latanoprost was assessed. The results confirmed the successful synthesis of all PAs. CD analysis revealed the predominance of β-sheet secondary structures. Fluorescence studies showed that increasing the number of hydrophobic alkyl groups affected the critical aggregation concentration, particularly when increasing from one to two alkyl groups. Encapsulation efficiency studies exceeded 95% efficiency for three of the studied formulations. These results demonstrate that NCAM-derived PAs are promising candidates for the development of nanostructured ocular drug delivery systems. Their self-assembly properties and high drug-loading capabilities provide a basis for further studies focused on drug release, biocompatibility, and therapeutic efficacy in glaucoma treatment."]

};

export const mscPlaces: StudiesPlace[] = [
  {
    name: "KU Leuven",
    city: "Leuven, Belgium",
    note: "Year 1 — the nanoscience foundation year.",
    image: "/images/msc-leuven.jpg",
    imageAlt:
        "Illustrative placeholder photo of the KU Leuven university halls — replace with your own photo.",
  },
  {
    name: "Universitat de Barcelona",
    city: "Barcelona, Spain",
    note: "Year 2 — specialization in Nanomedicine and Nanotheranostics.",
    image: "/images/msc-barcelona.jpg",
    imageAlt:
        "Illustrative placeholder photo of the University of Barcelona — replace with your own photo.",
  },
  {
    name: "IQAC-CSIC",
    city: "Barcelona, Spain",
    note: "Master thesis — peptide amphiphile nanocarriers for drug delivery.",
    image: "/images/msc-iqac.jpg",
    imageAlt:
        "Illustrative placeholder photo of the IQAC-CSIC research institute — replace with your own photo.",
  },
];

export const mscCourses: StudiesCourse[] = [
  {
    year: "Year 1 — KU Leuven",
    items: [
      "Technology of Integrated Systems",
      "Structure, Synthesis and Cellular Function of Macromolecules",
      "Materials Physics and Technology for Nanoelectronics",
      "Nanostructured Bio-Macromolecules",
      "MEMS and Microsystems",
      "Semiconductor Devices",
      "Chemistry at Nanometre Scale",
      "Electronic Components, Circuits and Sensors",
      "P&O Nanoscience, Nanotechnology and Nanoengineering",
      "Basics of Pharmaceutical Technology",
      "Advanced Drug Delivery Systems",
      "Dutch Language and Cultures",
      "Historical and Social Aspects of Physics"
    ],
  },
  {
    year: "Year 2 — Universitat de Barcelona",
    items: [
      "Modelling and Simulation",
      "Characterization and Manipulation at the Nanoscale",
      "Micro- and Nanosensors",
      "Nanosystems for Medical Diagnosis",
      "Pharmaceutical Nanotechnology",
      "Bioavailability, Efficacy and Toxicity. In Vitro in Vivo Evaluation",
      "Nanoscopic Systems for Drug Delivery",
      "Synthesis and Processing of Nanomaterials",
      "Colloidal Systems and Supramolecular Devices",
      "Lectures on Nanoscience and Nanotechnology",
      "Master's Thesis Nanopharmacotherapy",
    ],
  },
];



export const mscTechniques: string[] = [
  "Fmoc-SPPS peptide synthesis",
  "HPLC / UHPLC-MS",
  "ESI-MS",
  "Raman spectroscopy",
  "AFM (force spectroscopy & lithography)",
  "TEM / HRTEM / SAED",
  "Molecular dynamics (AMBER/VMD)",
  "Python data analysis (pandas, NumPy, SciPy)",
];

export const mscEvents: string[] = [
  "Student Excellence Day — imec, Leuven, Oct 2025",
  "Erasmus Mundus joint programme — KU Leuven & Universitat de Barcelona",
];

export const bscProgramme: StudiesProgramme = {
  slug: "molecular-electronics-break-junction-measurements",
  programmeType: "Bachelor",
  title: "Bsc Physics",
  officialWebsite: "https://yachaytech.edu.ec/carrera-de-fisica/",
  schools: "Yachay Tech University",
  period: "Apr 2016 — Feb 2021",
  specialization: "Material Science",
  intro:
      "Physics covers core disciplines from both theoretical and experimental perspectives. Theory relies heavily on computational tools in Astrophysics, Cosmology, Relativity, Complex Systems, and Computational Nanoscience and Materials Science. Experimentally, it spans Acoustics and materials characterization techniques.",
  thesisTitle: "Basic Molecular electronics through Break Junction\n" +
      "measurements",
  thesisLocation: "Molecular electronics lab, Yachay Tech University ",
  thesisPdfUrl: "/pdf/thesisBachelor.pdf",
  thesisPdfName: "basic_molecular_electronics_through_break_junction_measurements.pdf",
  thesisAbstract: ["Molecular electronics (ME) is an emerging technology that studies the electronic and thermal transport properties of individual molecules for the development of new devices with a very reduced size. Every metallic material and molecule has its own conductance value, so it is important to understand the conductance of a specific molecule. In this work we performed the molecular quantum conductance measurements of a benzene molecule, using a Mechanically Controlled Break Junction (MCBJ). To perform the conductance quantization of a benzene molecule it is needed to first perform the calibration of the equipment, make the conductance measurements of clean gold junction and then place a drop of a benzene solution in the junction. Then around ∼2000 traces are collected to build the conductance histogram to observe the quantum characteristic conductance peak of a benzene molecule. By analyzing the histograms obtained from this experiment it is observed that the benzene molecule has the characteristic of shifting the gold peak to the right and has its first conductance peak located at −0.30 Log(G0). From this results it can be concluded that the MCBJ equipment has the enough resolution to detect the presence of a benzene molecule and measure its conductance."]
};

export const bscPlaces: StudiesPlace[] = [
  {
    name: "Yachay Tech University",
    city: "Urcuqui, Ecuador",
    note: "",
    image: "/images/yachaytech.jpg",
    imageAlt:
        "Illustrative placeholder photo of the Yachay Tech university.",
  },
];

export const bscCourses: StudiesCourse[] = [
  {
    year: "Core course",
    items: [
      "Biology I",
      "Chemistry I",
      "Linear Algebra",
      "Calculus I",
      "Biology II",
      "Calculus II",
      "Physics I",
      "Chemistry II",
      "Geology I",
      "Algorithms",
      "Differential Equations",
      "Physics II",
      "Geology II",
      "Numerical Methods",
    ],
  },
  {
    year: "Specialization Courses",
    items: [
      "Oscillations, Electricity and Magnetism",
      "Modern Physics",
      "Classical Mechanics",
      "Mathematical Physics I",
      "Statistical Physics",
      "Quantum Mechanics II",
      "Electrodynamics II",
      "Computational Physics",
      "Solid State Physics II",
      "Introduction to Nuclear and Particle Physics",
      "Spectroscopy I",
      "Electronic Microscopy",
      "Introduction to Astrophysics and Cosmology",
      "Spectroscopy II",
      "Special Topics of Science and Technology of Materials",
      "Physics of Semiconductors",
      "Density Functional Theory",
      "Quantum Optics",
      "Dynamical Systems",
    ],
  },
  {
    year: "Transferable Skills Courses",
    items: [
      "History and Philosophy of Science",
      "Introduction to Engineering",
      "Innovation and Entrepreneurship",
      "Ethics and Social Responsibility",
      "Globalization and Entrepreneurship Laboratory",
      "Science Communication",
    ],
  },
];

export const bscProjects: StudiesProject[] = [];

export const bscTechniques: string[] = [];

export const bscEvents: string[] = [];