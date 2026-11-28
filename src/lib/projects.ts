import {Project} from "@/lib/definitions";


export const projects: Project[] = [
  // {
  //   slug: "peptide-amphiphile-nanocarriers",
  //   name: "Peptide amphiphile nanocarriers for ocular drug delivery",
  //   course: "Master thesis — IQAC-CSIC, Barcelona",
  //   context: "Nanoscience lab course — MSc",
  //   description: "MSc thesis at IQAC-CSIC: self-assembling peptides for ocular drug delivery.",
  //   result: "Result: >95% encapsulation efficiency",
  //   isExternalLink: false,
  //   link: "#",
  //   category: ["Research", "Master"],
  //   tag: ["School", "Master", "Thesis"],
  //   image: "/images/cover_peptide_amphiphile_nanocarriers.png",
  //   imageAlt: "Scientific illustration of peptide amphiphile nanocarriers for ocular drug delivery, with a micelle structure and eye cross-section",
  //   highlights: [
  //     "Synthesized four peptide amphiphiles by Fmoc solid-phase peptide synthesis",
  //     "Confirmed their structure by HPLC/UHPLC-MS, ESI-MS and Raman spectroscopy",
  //     "Self-assembled them into nanosystems that carried latanoprost",
  //     "Reached >95% drug encapsulation efficiency for ocular delivery",
  //   ],
  //   details: [
  //     "Designed and synthesized four peptide amphiphiles by Fmoc solid-phase peptide synthesis (SPPS)",
  //     "Self-assembled the amphiphiles into nanosystems and characterized them by HPLC/UHPLC-MS, ESI-MS and Raman spectroscopy",
  //     "Tested the nanosystems as carriers for latanoprost, achieving >95% drug encapsulation efficiency",
  //     "Aimed at ocular drug delivery as part of the Nanomedicine and Nanotheranostics specialization",
  //   ],
  // },
  {
    slug: "reactive-account-microservices",
    name: "Reactive account microservices",
    context: "Work experience at Banco Pichincha, Quito, Ecuador",
    description: "Spring Boot/WebFlux redesign of account creation at Banco Pichincha.",
    result: "Result: 5,000+ accounts/day",
    isExternalLink: false,
    link: "#",
    category: ["Software"],
    tag: ["Work"],
    image: "/images/gallery-2.jpg",
    imageAlt: "Placeholder picture of the microservices project — replace with a diagram.",
    date: new Date(2024, 8, 15)
  },
  {
    slug: "pura-fruta-e-commerce",
    name: "Pura Fruta e-commerce",
    context: "Founder project, Quito, Ecuador",
    description: "MERN delivery platform with a Python order management system.",
    result: "Result: $25K in sales",
    isExternalLink: true,
    link: "#",
    category: ["Business", "Web"],
    tag: ["Personal"],
    image: "/images/gallery-3.jpg",
    imageAlt: "Placeholder picture of Pura Fruta — replace with a screenshot.",
    date: new Date(2022, 5, 15)
  },
  // {
  //   slug: "afm-nanomechanics-nanolithography",
  //   name: "AFM nanomechanics & nanolithography",
  //   course: "Nanoscience lab course",
  //   context: "Nanoscience lab course",
  //   description:
  //       "Extracted Young's moduli from force curves on silicon and PDMS, and patterned gelatin surfaces at ~30 nm resolution by AFM nanolithography.",
  //   result: "<1% error vs. literature values",
  //   isExternalLink: false,
  //   link: "#",
  //   category: ["Research", "Master"],
  //   tag: ["School", "Master"],
  //   image: "/images/cover_afm_nanomechanics_nanolithography.png",
  //   imageAlt: "Scientific illustration of an atomic force microscope tip characterizing silicon and PDMS surfaces and patterning gelatin at the nanoscale.",
  // },
  // {
  //   slug: "mof-co2-sensor-data-pipeline",
  //   name: "MOF-based CO₂ sensor data pipeline",
  //   course: "Sensors project",
  //   context: "Sensors project",
  //   description:
  //       "Built a Python pipeline to process and fit sensor response data from a metal-organic framework CO₂ sensor.",
  //   result: "Fit quality R² = 0.996",
  //   isExternalLink: false,
  //   link: "#",
  //   category: ["Research", "Master"],
  //   tag: ["School", "Master"],
  //   image: "/images/cover_mof_co2_sensor_data_pipeline.png",
  //   imageAlt: "Scientific visualization of a MOF-based CO₂ sensor in a controlled gas chamber, connected to a computer displaying sensor response curves and fitted data.",
  // },
  // {
  //   slug: "molecular-dynamics-of-nanosystems",
  //   name: "Molecular dynamics of nanosystems",
  //   course: "Molecular modelling",
  //   context: "Molecular modelling",
  //   description:
  //       "Ran and analysed molecular dynamics simulations (AMBER/VMD) to study the behaviour of self-assembling nanosystems.",
  //   result: "Simulation analysis in AMBER/VMD",
  //   isExternalLink: false,
  //   link: "#",
  //   category: ["Research", "Master"],
  //   tag: ["School", "Master"],
  //   image: "/images/cover_molecular_dynamics_nanosystems.png",
  //   imageAlt: "Scientific 3D visualization of a self-assembling peptide amphiphile nanosystem in a molecular dynamics simulation environment.",
  // },
  // {
  //   slug: "basic-molecular-electronics-mcbj",
  //   name: "Basic molecular electronics through break junction measurements",
  //   course: "Bachelor thesis — Yachay Tech University",
  //   context: "Molecular electronics lab, Yachay Tech University",
  //   description:
  //       "Measured the single-molecule conductance of benzene with a Mechanically Controlled Break Junction (MCBJ).",
  //   result: "Result: first conductance peak at −0.30 Log(G₀)",
  //   isExternalLink: false,
  //   link: "#",
  //   category: ["Research", "Bachelor"],
  //   tag: ["School", "Bachelor", "Thesis"],
  //   image: "/images/thesis_bachelor_benzene_perpendicular.png",
  //   imageAlt: "Benzene molecule in a perpendicular configuration between gold electrodes",
  //   highlights: [
  //     "Calibrated the MCBJ equipment and measured a clean gold junction",
  //     "Collected around 2,000 conductance traces with benzene in the junction",
  //     "Identified the shift of the gold conductance peak caused by benzene",
  //     "Showed the MCBJ setup resolves a single benzene molecule",
  //   ],
  //   details: [
  //     "Calibrated the MCBJ equipment and measured the conductance of a clean gold junction",
  //     "Placed a drop of benzene solution in the junction and collected around 2000 conductance traces",
  //     "Built conductance histograms and identified the shift of the gold peak caused by benzene",
  //     "Concluded that the MCBJ setup has enough resolution to detect and measure a benzene molecule",
  //   ],
  // },
  {
    slug: "haku-travel",
    name: "Haku travel",
    context: "",
    description: "MERN-based e-commerce platform for tourism in the Galápagos Islands.",
    result: "",
    link: "https://galapagostravelworld.com/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/galapagos_tours_react",
    category: ["Business", "Web"],
    tag: ["Business"],
    image: "/images/projects/hakutravel.png",
    imageAlt: "Screenshot of the Haku Travel website",
    date: new Date(2022, 4, 30)
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    context: "",
    description: "",
    result: "",
    link: "https://dashboarddcr.netlify.app/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/dashboard",
    category: ["Business", "Web"],
    tag: ["Business"],
    image: "/images/projects/dashboard.png",
    imageAlt: "Screenshot of the Dashboard project",
    date: new Date(2022, 0, 22)
  },
  {
    slug: "guardando",
    name: "Guardando",
    context: "",
    description: "",
    result: "",
    link: "https://guardando.netlify.app/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/guardando",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/guardando.png",
    imageAlt: "Screenshot of the Guardando project",
    date: new Date(2022, 4, 4)
  },
  {
    slug: "todo-list-with-react",
    name: "Todo List with React",
    context: "",
    description: "",
    result: "",
    link: "https://todolistreactdcr.netlify.app/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/todolist_react",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/todolist_react.png",
    imageAlt: "Screenshot of the React to-do list",
    date: new Date(2022, 4, 4)
  },
  {
    slug: "landing-page",
    name: "Landing page",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/landing_page/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/landing_page",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/landingpage.png",
    imageAlt: "Screenshot of the landing page project",
    date: new Date(2021, 10, 28)
  },
  {
    slug: "blog",
    name: "Blog",
    context: "",
    description: "",
    result: "",
    link: "https://blogwebsitedcr.herokuapp.com/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/blog_website",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/journal.png",
    imageAlt: "Screenshot of the blog project",
    date: new Date(2022, 0, 2)
  },
  {
    slug: "todo-list",
    name: "Todo List",
    context: "",
    description: "",
    result: "",
    link: "https://todolistdcr.herokuapp.com/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/todolist_v1",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/todolist.png",
    imageAlt: "Screenshot of the to-do list project",
    date: new Date(2022, 0, 1)
  },
  {
    slug: "etch-a-sketch",
    name: "Etch a Sketch",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/etch-a-sketch/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/etch-a-sketch",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/etchsketch.png",
    imageAlt: "Screenshot of the Etch a Sketch game",
    date: new Date(2021, 6, 21)
  },
  {
    slug: "simon",
    name: "Simon",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/simon_game/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/simon_game",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/simon.png",
    imageAlt: "Screenshot of the Simon game",
    date: new Date(2021, 11, 23)
  },
  {
    slug: "rock-paper-scissors",
    name: "Rock Paper Scissors",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/rock-paper-scissors/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/rock-paper-scissors",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/rps.png",
    imageAlt: "Screenshot of the Rock Paper Scissors game",
    date: new Date(2021, 6, 17)
  },
  {
    slug: "drumkit",
    name: "Drumkit",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/drum_kit/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/drum_kit",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/drumkit.png",
    imageAlt: "Screenshot of the drum kit project",
    date: new Date(2021, 11, 21)
  },
  {
    slug: "dice-game",
    name: "Dice Game",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/dice_game/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/dice_game",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/dicegame.png",
    imageAlt: "Screenshot of the dice game",
    date: new Date(2021, 11, 21)
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    context: "",
    description: "",
    result: "",
    link: "https://stormy-bayou-15954.herokuapp.com/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/newsletter_signup",
    category: ["Entertain","Web"],
    tag: ["Entertain"],
    image: "/images/projects/newsletter.png",
    imageAlt: "Screenshot of the newsletter signup page",
    date: new Date(2021, 11, 28)
  },
  {
    slug: "tindog",
    name: "Tindog",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/tindog-recreation/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/tindog-recreation",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/tindog.png",
    imageAlt: "Screenshot of the Tindog clone",
    date: new Date(2021, 11, 17)
  },
  {
    slug: "google-homepage-clone",
    name: "Google Homepage Clone",
    context: "",
    description: "",
    result: "",
    link: "https://danielcr0995.github.io/google-homepage/",
    isExternalLink: true,
    github: "https://github.com/danielcr0995/google-homepage",
    category: ["Web"],
    tag: ["Web"],
    image: "/images/projects/google_homepage.png",
    imageAlt: "Screenshot of the Google homepage clone",
    date: new Date(2021, 6, 21)

  },
  {
    name: "Characterization of Gas Sensor Using IF142 Metal-Organic Framework",
    description:
        "Electrical characterization of IF142, a metal-organic framework (MOF), for CO₂ gas sensing applications. The project investigated the influence of relative humidity on electrical resistance and evaluated the material's CO₂ sensing response under different humidity conditions.",
    course: "Nanosensors",
    result:
        "The results demonstrated that IF142 can detect CO₂ under low-humidity conditions, while no clear sensing response was observed at higher humidity. The study also established a linear relationship between relative humidity and electrical resistance.",
    link: "/projects/gas-sensor-characterization",
    isExternalLink: false,
    tag: [
      "Nanotechnology",
      "Gas Sensors",
      "Materials Science"
    ],
    image: "/images/projects/master/cover_gas_sensor_if142.png",
    // image: "/images/projects/gas-sensor/figure-2.png",
    imageAlt:
        "3D scientific visualization of an IF142 metal-organic framework on an interdigitated electrode sensor, with CO₂ molecules and gas-response plots.",
    images: [
      {
        src: "/images/projects/master/nanosensors_gas_sensor_IV_RH_thin_grid.png",
        alt: "Current-voltage curves measured at different relative humidity levels.",
        caption:
            "I-V curves of the gas sensor at varying relative humidity percentages using MOF IF142."
      },
      {
        src: "/images/projects/master/nanosensors_gas_sensor_resistance_RH.png",
        alt: "Experimental resistance measurements and linear fitting as a function of relative humidity.",
        caption:
            "Change in the resistance as the relative humidity increases."
      },
      {
        src: "/images/projects/master/nanosensors_gas_sensor_IV_before_after.png",
        alt: "Current-voltage curves before and after CO₂ gas pulse exposure.",
        caption:
            "I-V curves at relative humidity of approximately 2.56% before and after doing the CO₂ gas pulse."
      },
      {
        src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh2.56_temp23.png",
        alt: "Resistance, CO₂ concentration, relative humidity and temperature measurements over time during gas pulse experiments.",
        caption:
            "CO₂ pulse experiment under low relative humidity conditions."
      },
      {
        src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
        alt: "Resistance, CO₂ concentration, relative humidity and temperature measurements over time under higher humidity conditions.",
        caption:
            "CO₂ pulse experiment under higher relative humidity conditions."
      }
    ],
    category: ["Research", "Master"],
    slug: "gas-sensor-characterization",
    highlights: [
      "Measured the electrical response of IF142 across 2.56–91.54% relative humidity",
      "Detected CO₂ pulses from 200 to 1200 ppm under dry conditions",
      "Found no clear sensing response at higher humidity",
      "Established a linear relationship between humidity and resistance",
    ],
    details: [
      "Characterization of IF142 metal-organic framework (MOF).",
      "Current-voltage measurements at relative humidity levels ranging from 2.56% to 91.54%.",
      "Electrical measurements at a constant room temperature of approximately 22.68°C.",
      "CO₂ pulse experiments with concentrations ranging from 200 ppm to 1200 ppm.",
      "Comparison of gas sensing responses at average relative humidity levels of 2.45% and 22.34%.",
      "Analysis of electrical resistance changes following CO₂ exposure.",
      "Experimental data processing and analysis using Python."
    ],
    paragraphs: [
      "This project focused on the electrical characterization of IF142, a metal-organic framework (MOF), for CO₂ gas sensing applications. The main objective was to investigate the electrical properties of the material and evaluate its ability to detect CO₂ under different environmental conditions, particularly examining the influence of relative humidity on sensor performance.",

      "The experimental setup consisted of an interdigitated electrode device onto which a small amount of IF142 was deposited. The device was placed inside a controlled gas chamber connected to a gas flow controller, allowing different gas concentrations to be introduced. A commercial sensor was used to monitor relative humidity and temperature throughout the experiments. The measurement system was also connected to software that controlled the gas flow and collected the measurement data.",

      "The first stage involved electrical characterization through current-voltage (I-V) measurements at different relative humidity levels, ranging from 2.56% to 91.54%, while maintaining a constant room temperature of 22.68°C. The measurements revealed a linear I-V relationship, indicating metallic behavior. Furthermore, the material's resistance increased linearly with relative humidity, following the relationship R(RH) = 0.009 × RH + 0.182.",

      "The second stage investigated the CO₂ sensing capabilities of IF142 under dry conditions, with an average relative humidity of approximately 2.45% and a temperature of approximately 22.74°C. CO₂ pulses with randomly varied concentrations ranging from 200 ppm to 1200 ppm were introduced into the chamber during an approximately 14-hour measurement. The results showed detectable resistance peaks following gas exposure. However, the peak magnitude did not change with higher CO₂ concentrations. No visually detectable peak was observed below 200 ppm CO₂. A gradual increase in baseline resistance was also observed throughout the experiment.",

      "The electrical characteristics measured before and after the first pulse experiment showed a substantial increase in resistance, from 3.04 × 10⁵ Ω to 1.13 × 10⁶ Ω. This demonstrated that the resistance increased almost by an order of magnitude after the experiment.",

      "A third experiment evaluated the sensor under higher humidity conditions, with an average relative humidity of approximately 22.34%. Under these conditions, the CO₂ pulses no longer produced a detectable effect on the resistance measurements. The report suggests that water molecules entering the MOF may affect the interaction of CO₂ molecules with the material. A continuous increase in baseline resistance was also observed.",

      "Overall, the results demonstrated the potential of IF142 as a CO₂ sensing material under low-humidity conditions, while highlighting the influence of relative humidity on its sensing performance. The study concluded that this material could be useful for CO₂ detection in dry environments. Further research was identified as necessary to determine the maximum humidity level at which CO₂ detection remains possible and to investigate whether this behavior occurs with other gases."
    ],
    context:
        "Academic research project completed as part of the Master's course Nanosensors. The study involved experimental characterization of a metal-organic framework for gas sensing applications.",
    tools: [
      "Python",
      "Interdigitated electrode device",
      "Gas chamber",
      "Gas flow controller",
      "Commercial humidity and temperature sensor",
      "Measurement and gas flow control software"
    ],
    date: new Date(2025, 11, 15)
  },
  {
    name: "Molecular Dynamics of Chignolin Using AMBER",
    description:
        "Molecular dynamics simulation of the chignolin peptide in aqueous solution using AMBER. The project investigated the evolution of its molecular conformations over a 20 ns simulation through RMSD analysis and structural clustering.",
    course: "Modelling and Simulation",
    result:
        "The simulation identified six structural clusters. Cluster 1 was the most frequently observed configuration, accounting for 39.6% of the trajectories. The analysis showed the transition of chignolin from more extended conformations toward more compact and folded structures.",
    link: "/projects/molecular-dynamics-chignolin",
    isExternalLink: false,
    tag: [
      "Computational Modelling",
      "Molecular Dynamics",
      "Computational Biophysics"
    ],
    image: "/images/projects/master/cover_molecular_dynamics_chignolin.png",
    // image: "/images/projects/chignolin/figure-3.png",
    imageAlt:
        "Scientific illustration of chignolin folding in aqueous solution, showing its peptide structure and progression from extended to compact conformations.",
    images: [
      {
        src: "/images/projects/master/modelling_chignolin_chignolin_flat.png",
        alt: "Graphical representation of the chignolin peptide using VMD.",
        caption:
            "Chignolin molecule representation using VMD."
      },
      {
        src: "/images/projects/master/modelling_chignolin_chignolin_atoms.png",
        alt: "Graphical representation of the chignolin peptide using VMD showing all atoms.",
        caption:
            "Chignolin molecule representation using VMD showing all atoms."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster_all_white_image2.png",
        alt: "Visualization of the six structural clusters obtained from the molecular dynamics trajectories.",
        caption:
            "Chignolin molecule evolution of all the clusters together."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster0_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 1: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster1_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 2: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster2_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 3: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster3_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 4: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster4_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 5: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_cluster5_white_image2.png",
        alt: "Combined visualization of all six structural clusters of chignolin.",
        caption:
            "Cluster 6: Evolution of chignolin conformations."
      },
      {
        src: "/images/projects/master/modelling_chignolin_chignolin_rmsd.png",
        alt: "RMSD of chignolin as a function of time over the 20 ns molecular dynamics simulation.",
        caption:
            "Time evolution of the RMSD of chignolin over a 20 ns molecular dynamics simulation."
      },
      {
        src: "/images/projects/master/modelling_chignolin_chignolin_rmsd_cluster.png",
        alt: "RMSD values over simulation time, with points colored according to the six structural clusters.",
        caption:
            "RMSD of chignolin as a function of simulation time, with RMSD frames colored according to structural clusters 1–6."
      }
      //TODO gif image showing how chignolin molecule folds
    ],
    category: ["Research", "Master"],
    slug: "molecular-dynamics-chignolin",
    highlights: [
      "Ran a 20 ns AMBER simulation of the chignolin peptide in water",
      "Clustered trajectories into six structural states using RMSD analysis",
      "Showed the peptide moving from extended to folded conformations",
      "Cluster 1 was the dominant state, at 39.6% of trajectories",
    ],
    details: [
      "Molecular dynamics simulation of a 10-amino-acid chignolin peptide in aqueous solution.",
      "System preparation and topology generation using AMBER LEaP.",
      "Energy minimization using a molecular mechanics force field.",
      "20 ns molecular dynamics simulation.",
      "Analysis of molecular trajectories using clustering and root mean square deviation (RMSD).",
      "Identification and visualization of six structural clusters.",
      "Analysis of conformational evolution and folding behavior."
    ],
    paragraphs: [
      "This project involved performing a molecular dynamics (MD) simulation of chignolin, a peptide composed of 10 amino acids, immersed in an aqueous solution. Chignolin can fold in water to form a stable β-hairpin. The main objective was to study the evolution of its molecular conformations over time and investigate its folding behavior using the AMBER software package.",

      "The simulation was performed using the chignolin peptide sequence NGLY-TYR-ASP-PRO-MET-THR-PRO-THR-TRP-CGLY. The initial system was prepared using LEaP, a program included in the AMBER software package, to generate the molecular topology and coordinate files required for the simulation. The system then underwent energy minimization using a molecular mechanics force field to identify low-energy conformations before performing the molecular dynamics calculations.",

      "Following energy minimization, the molecular dynamics simulation was performed to study the evolution of the chignolin molecule. The simulation generated two trajectory files, each containing snapshots of the system's evolution over 10 ns, resulting in a total simulation time of 20 ns. The resulting molecular structures were visualized using VMD.",

      "The analysis involved two main approaches: structural clustering and root mean square deviation (RMSD). Clustering was used to group similar molecular conformations into six different clusters, while RMSD analysis measured the structural deviation of the molecule relative to its initial conformation throughout the simulation.",

      "The clustering analysis identified six distinct structural configurations. Cluster 1 was the most frequently observed configuration, accounting for 39.6% of the trajectories, with an average RMSD of 4.990 Å. The remaining clusters accounted for 17.8%, 15.0%, 9.5%, 9.2%, and 8.9% of the trajectories, respectively.",

      "The RMSD analysis showed that the structural deviation increased steadily until approximately 10 ns, after which the molecule stabilized within an RMSD range of approximately 4 Å to 6 Å. The trajectory analysis also revealed a conformational transition: the molecule initially exhibited more extended structures, gradually moving toward more folded configurations associated with different structural clusters, eventually reaching a relatively stable folded conformation represented by Cluster 1.",

      "Overall, the simulation demonstrated the evolution of chignolin from extended conformations toward more compact and folded structures in aqueous solution. The combination of molecular dynamics, RMSD analysis, and structural clustering provided information about the conformational changes and stability of the peptide throughout the simulation."
    ],
    context:
        "Academic project completed as part of the Master's course Modelling and Simulation. The work focused on computational simulation and structural analysis of a peptide molecule in aqueous solution.",
    tools: [
      "AMBER",
      "LEaP",
      "VMD",
      "cpptraj",
      "Molecular mechanics force field",
      "RMSD analysis",
      "Structural clustering"
    ],
    date: new Date(2026, 0, 13)
  },
  // {
  //   name: "AFM Image Acquisition and Parameter Optimization",
  //   description:
  //       "Characterization of a silicon oxide sample using Atomic Force Microscopy (AFM). The project investigated how acquisition parameters, including setpoint force, scan time, resolution, and feedback gains, influence nanoscale image quality and surface topography.",
  //   course: "Characterization and Manipulation at the Nanoscale",
  //   result:
  //       "Identified an optimized combination of AFM acquisition parameters: 0.5 seconds per line, 128 points per line, a setpoint force of 20–30 nN, and proportional and integral gains of 1000. These settings provided a balance between image quality and scanning efficiency.",
  //   link: "/projects/afm-image-acquisition",
  //   isExternalLink: false,
  //   tag: [
  //     "Atomic Force Microscopy",
  //     "Surface Characterization",
  //     "Experimental Analysis"
  //   ],
  //   image: "/images/gallery-3.jpg",
  //   // image: "/images/projects/afm-acquisition/figure-1.png",
  //   imageAlt:
  //       "AFM topography image of a silicon oxide sample showing nanoscale surface features.",
  //   images: [
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Processed large-area AFM image of the silicon oxide sample.",
  //       caption:
  //           "Processed AFM image of the silicon oxide sample acquired over a 20 × 20 µm area."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Surface height profile extracted from the processed AFM image.",
  //       caption:
  //           "Surface height profile obtained from the initial AFM scan."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "High-resolution AFM image of a selected region of the silicon oxide sample.",
  //       caption:
  //           "Zoomed AFM image showing the selected nanoscale region."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "AFM images comparing different acquisition parameters.",
  //       caption:
  //           "Figures 5–18. Comparison of surface images and profiles obtained using different AFM acquisition settings."
  //     }
  //   ],
  //   category: ["Research", "Master"],
  //   slug: "afm-image-acquisition",
  //   details: [
  //     "Preparation and alignment of the AFM laser and cantilever.",
  //     "Imaging of a silicon oxide sample in contact mode.",
  //     "Large-area scanning over a 20 × 20 µm region.",
  //     "High-resolution imaging of selected surface regions.",
  //     "Investigation of setpoint force, scan time, and points per line.",
  //     "Evaluation of proportional and integral feedback gains.",
  //     "Image processing using WSxM, including line removal and Flatten Plus.",
  //     "Comparison of surface profiles to evaluate image quality and artifacts."
  //   ],
  //   paragraphs: [
  //     "This project investigated the use of Atomic Force Microscopy (AFM) to characterize a silicon oxide sample at the nanoscale. The main objective was to understand the configuration and operation of the AFM system and evaluate how different acquisition parameters influence the quality and reliability of surface measurements.",
  //
  //     "The experimental procedure involved preparing the sample, aligning the laser onto the cantilever, adjusting the tip–sample distance, and selecting contact mode for imaging. Initial large-area scans were performed over a 20 × 20 µm region to obtain an overview of the surface topography. The acquired images were subsequently processed using WSxM software to remove scan lines, correct surface tilt, and improve image quality.",
  //
  //     "A systematic parameter variation study was conducted to evaluate the influence of scan time, points per line, setpoint force, proportional gain, and integral gain. Different combinations of these parameters were tested, and the resulting topography images and surface profiles were compared to identify their effects on image quality.",
  //
  //     "The results demonstrated that the setpoint force strongly influenced the interaction between the AFM tip and the sample. Insufficient force, such as the tested 3 nN condition, did not produce a usable image, whereas higher forces improved image definition but could introduce noise and potentially damage the sample or probe.",
  //
  //     "The feedback gain analysis showed that the proportional and integral gains influenced the stability of the scanning process. In particular, inappropriate gain settings introduced oscillations, noise, or blurred images. Scan time and spatial resolution also affected the measurements, with the number of points per line influencing the image resolution and scanning efficiency.",
  //
  //     "The optimized experimental configuration used a scan time of 0.5 seconds per line, 128 points per line, a setpoint force of 20–30 nN, and proportional and integral gains of 1000. This combination provided the best balance between image quality, measurement stability, and scanning efficiency within the tested conditions."
  //   ],
  //   context:
  //       "Experimental laboratory project involving nanoscale surface characterization and AFM acquisition parameter optimization.",
  //   tools: [
  //     "Atomic Force Microscopy (AFM)",
  //     "WSxM 5.0",
  //     "Contact Mode",
  //     "Surface Topography Analysis",
  //     "Image Processing",
  //     "Feedback Control Optimization",
  //     "Surface Profile Analysis"
  //   ],
  //   date: new Date(2025, 10, 28),
  //   coauthors: ["Sara Mansour", "Héctor Aznar Gómez"]
  //
  // },
  // {
  //   name: "Nanoscale Characterization and AFM Image Processing",
  //   description:
  //       "Nanoscale characterization of biological and nanostructured samples using Atomic Force Microscopy (AFM). The project involved processing topographical images and extracting quantitative information about lipid layers, contact probes, cells, DNA, and nanoparticles.",
  //   course: "Characterization and Manipulation at the Nanoscale",
  //   result:
  //       "Characterized multiple nanoscale structures, measuring lipid vesicle heights of approximately 4.6 nm, cell heights of approximately 1.4 µm, DNA structures of approximately 2.75 nm, and identifying 1,300 nanoparticles through image analysis.",
  //   link: "/projects/afm-image-processing",
  //   isExternalLink: false,
  //   tag: [
  //     "Atomic Force Microscopy",
  //     "Image Processing",
  //     "Nanotechnology",
  //     "Biophysical Characterization"
  //   ],
  //   image: "/images/gallery-1.jpg",
  //   // image: "/images/projects/afm-processing/figure-5.png",
  //   imageAlt:
  //       "AFM topography and three-dimensional visualization of a nanoparticle sample.",
  //   images: [
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Processed AFM topography image of a lipid layer with surface profile and height histogram.",
  //       caption:
  //           "AFM characterization of a lipid layer, including surface profile and height distribution."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "AFM topography and profile of contact probes.",
  //       caption:
  //           "Topographical characterization and height analysis of contact probes."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "AFM image of a cell showing its surface topography, height profile and substrate anchorage.",
  //       caption:
  //           "Cell characterization, including height profile, substrate roughness, and cell anchorage."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "AFM topography image and height profile of a DNA sample.",
  //       caption:
  //           "AFM characterization of DNA structures and their measured height."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "AFM topography image and three-dimensional representation of nanoparticles.",
  //       caption:
  //           "Nanoparticle visualization and quantitative particle identification."
  //     },
  //     {
  //       src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Force versus indentation graph showing nanoparticle rupture.",
  //       caption:
  //           "Force–indentation curve used to identify the nanoparticle rupture force."
  //     }
  //   ],
  //   category: ["Research", "Master"],
  //   slug: "afm-image-processing",
  //   details: [
  //     "Processing of AFM topography images using WSxM 5.0.",
  //     "Surface flattening and background correction using Flatten Plus.",
  //     "Analysis of lipid vesicles and height distributions.",
  //     "Measurement of contact probe heights and projected area.",
  //     "Cell morphology and substrate roughness characterization.",
  //     "DNA topography and height profile analysis.",
  //     "Nanoparticle identification and counting using the flooding tool.",
  //     "Force–indentation analysis to determine nanoparticle rupture force."
  //   ],
  //   paragraphs: [
  //     "This project focused on the processing and quantitative characterization of different nanoscale structures using Atomic Force Microscopy (AFM). The objective was to investigate the morphology and physical properties of several samples by processing topographical images and extracting information from surface profiles, histograms, and three-dimensional representations.",
  //
  //     "All AFM images were processed using WSxM 5.0. The Flatten Plus function was used to correct background variations and improve surface visualization through parabola subtraction and substrate area correction. Different image analysis tools were applied depending on the sample and the structural features being investigated.",
  //
  //     "The first sample consisted of a lipid layer containing vesicular structures. Surface profiles and histogram analysis revealed vesicle heights of approximately 4.6 nm. A second sample containing contact probes was analyzed using topographical profiles, showing heights between 160 and 170 nm. The flooding tool was also used to calculate a projected probe area of 11.72 µm².",
  //
  //     "Cell morphology was investigated through AFM topography and height profiles. The analyzed cell presented a maximum height of approximately 1.4 µm. Additional image processing allowed the identification of substrate roughness and the visualization of the cell's anchorage to the underlying surface.",
  //
  //     "DNA structures were also characterized through their topographical profiles. The measured height was approximately 2.75 nm, slightly higher than the expected DNA height of approximately 2 nm. This difference was attributed as a possible consequence of molecular folding or structural configuration.",
  //
  //     "Finally, nanoparticle analysis was performed using the flooding tool, which identified approximately 1,300 particles by applying a minimum height threshold of 6 nm and a minimum projected area of 0.00038 µm². A separate force–indentation analysis was also conducted to investigate nanoparticle mechanical failure, identifying a rupture force of approximately 4.30 nN.",
  //
  //     "Overall, this project demonstrated how AFM image processing and quantitative analysis can be applied to characterize a wide range of biological and nanostructured materials, connecting surface morphology with dimensional and mechanical information."
  //   ],
  //   context:
  //       "Individual academic project completed as part of nanoscale characterization laboratory work.",
  //   tools: [
  //     "Atomic Force Microscopy (AFM)",
  //     "WSxM 5.0",
  //     "Flatten Plus",
  //     "Surface Profile Analysis",
  //     "Histogram Analysis",
  //     "Flooding Tool",
  //     "3D Topography Visualization",
  //     "Force–Indentation Analysis"
  //   ],
  //   date: new Date(2025, 11, 10)
  // },
  {
    name: "AFM Force Spectroscopy and Mechanical Characterization",
    description:
        "Mechanical characterization of silicon and polydimethylsiloxane (PDMS) using Atomic Force Microscopy force spectroscopy. The project involved acquiring and processing force–distance curves to compare material stiffness, deformation, and adhesive behavior.",
    course: "Characterization and Manipulation at the Nanoscale",
    result:
        "Identified distinct mechanical responses between rigid silicon and compliant PDMS. Force–distance analysis revealed sharp contact transitions in silicon and gradual elastic deformation and adhesive pull-off behavior in PDMS. Surface roughness distributions were also compared.",
    link: "/projects/afm-force-spectroscopy",
    isExternalLink: false,
    tag: [
      "Atomic Force Microscopy",
      "Force Spectroscopy",
      "Mechanical Characterization",
      "Materials Science"
    ],
    image: "/images/projects/master/cover_afm_force_spectroscopy_silicon_pdms.png",
    // image: "/images/projects/afm-force-spectroscopy/figure-4.png",
    imageAlt:
        "AFM cantilever probing silicon and soft PDMS, illustrating their contrasting mechanical responses and force spectroscopy measurements.",
    images: [
      {
        src: "/images/projects/master/characterization_force_spec_silicon_scale_processed.png",
        alt: "Processed AFM topography images of silicon region.",
        caption:
            "Surface topography of the silicon region."
      },
      {
        src: "/images/projects/master/characterization_force_spec_pdms_scale_processed.png",
        alt: "Processed AFM topography images of PDMS region.",
        caption:
            "Surface topography of the PDMS region."
      },
      {
        src: "/images/projects/master/characterization_force_spec_force_curve_si_1.jpg",
        alt: "Processed AFM force curves collected on the silicon region.",
        caption:
            "Force–distance curve obtained from  measurements on silicon."
      },
      {
        src: "/images/projects/master/characterization_force_spec_force_curve_pdms_1.jpg",
        alt: "Processed AFM force curves collected on the PDMS region.",
        caption:
            "Force–distance curve obtained from measurements on PDMS."
      },
      {
        src: "/images/projects/master/characterization_force_spec_force_curve_si_pdms_forward_3.jpg",
        alt: "Comparison of forward force curves for silicon and PDMS.",
        caption:
            "Comparison of the mechanical responses of silicon and PDMS during approach."
      },
      {
        src: "/images/projects/master/characterization_force_spec_force_curve_si_pdms_backward_3.jpg",
        alt: "Comparison of  backward force curves for silicon and PDMS.",
        caption:
            "Comparison of the mechanical responses of silicon and PDMS during retraction."
      },
      {
        src: "/images/projects/master/characterization_force_spec_roughness_analysis_silicon.jpg",
        alt: "Surface roughness histograms comparing on silicon.",
        caption:
            "Roughness distributions of the silicon and PDMS surfaces."
      },
      {
        src: "/images/projects/master/characterization_force_spec_roughness_analysis_pdms.jpg",
        alt: "Surface roughness histograms on PDMS.",
        caption:
            "Roughness distributions of the silicon and PDMS surfaces."
      }
    ],
    category: ["Research", "Master"],
    slug: "afm-force-spectroscopy",
    highlights: [
      "Acquired force–distance curves on silicon and PDMS in spectroscopy mode",
      "Converted cantilever deflection to force using the spring constant and sensitivity factor",
      "Distinguished rigid silicon from compliant PDMS by contact transition and slope",
      "Observed adhesive pull-off in PDMS and compared surface roughness",
    ],
    details: [
      "AFM topographical imaging of silicon and PDMS regions.",
      "Acquisition of force curves using spectroscopy mode.",
      "Collection of three force curves per material.",
      "Calibration of cantilever deflection using the spring constant.",
      "Determination of the AFM sensitivity calibration factor.",
      "Conversion of cantilever deflection signals into force units.",
      "Analysis of forward and backward force–distance curves.",
      "Comparison of stiffness, indentation, and adhesive interactions.",
      "Surface roughness analysis using WSxM."
    ],
    paragraphs: [
      "This project investigated the mechanical properties of silicon and polydimethylsiloxane (PDMS) using Atomic Force Microscopy force spectroscopy. The main objective was to acquire and analyze force–distance curves to distinguish the mechanical responses of a rigid material and a soft polymer, comparing their stiffness, deformation, and adhesive behavior.",

      "The experimental sample consisted of a silicon substrate partially coated with PDMS. Initial topographical images were acquired in contact mode using a 5 × 5 µm scan area and a resolution of 128 × 128 pixels. Force curves were subsequently collected in spectroscopy mode, with 512 data points, a measurement time of 1 second, and a Z-range from -1000 to 1500 nm. Three measurements were performed in each material region.",

      "The force curves were processed using WSxM software. The approach and retraction curves were combined, and the cantilever deflection signal was converted from voltage into force using the probe spring constant of 0.3 N/m. The system sensitivity was calibrated using the silicon region as a reference, obtaining a calibration factor of -834.94 nm/V. A zero-force correction was also applied to ensure accurate force measurements at large tip–sample separations.",

      "The resulting force curves revealed significant differences between the two materials. Silicon exhibited a sharp contact transition and a steep, approximately linear slope during approach, indicating high stiffness and negligible deformation under the applied force. Its mechanical response was consistent with the behavior expected from a rigid material.",

      "In contrast, PDMS showed a gradual contact transition and a shallower, nonlinear slope, indicating substantial elastic deformation. During retraction, the force curves exhibited negative force values associated with adhesive interactions and pull-off behavior, highlighting the compliant and adhesive nature of the polymer.",

      "The analysis also compared the surface roughness distributions of the two materials. Most silicon surface features were between approximately 2 and 6 nm, whereas the majority of PDMS features were between approximately 12.5 and 17.5 nm, with a broader distribution extending from 5 to 35 nm.",

      "Overall, the experiment demonstrated how AFM force spectroscopy can be used to distinguish materials based on their mechanical properties. The comparison between silicon and PDMS highlighted the differences between rigid and compliant materials through force–distance curves, indentation behavior, and adhesive interactions."
    ],
    context:
        "Experimental laboratory project involving AFM force spectroscopy and mechanical characterization of a silicon substrate partially coated with PDMS.",
    tools: [
      "Atomic Force Microscopy (AFM)",
      "WSxM Software",
      "Force Spectroscopy",
      "Force–Distance Curve Analysis",
      "Cantilever Calibration",
      "Spring Constant Calibration",
      "Indentation Analysis",
      "Surface Roughness Analysis"
    ],
    date: new Date(2025, 11, 10),
    coauthors: ["Sara Mansour", "Héctor Aznar Gómez"]

  },
  {
    name: "Nanoscale Pattern Fabrication Using AFM Nanomanipulation",
    description:
        "Fabrication of nanoscale patterns on a gelatin-coated mica substrate using Atomic Force Microscopy nanomanipulation. The project involved locally removing material with an AFM tip to create controlled holes and a Mickey Mouse-shaped pattern.",
    course: "Characterization and Manipulation at the Nanoscale",
    result:
        "Successfully demonstrated nanoscale surface modification by creating holes in a gelatin layer approximately 30 nm thick and fabricating a custom Mickey Mouse-shaped pattern using AFM-based mechanical manipulation.",
    link: "/projects/afm-nanomanipulation",
    isExternalLink: false,
    tag: [
      "Atomic Force Microscopy",
      "Nanomanipulation",
      "Nanofabrication",
      "Surface Modification"
    ],
    image: "/images/projects/master/cover_afm_nanomanipulation.png",
    // image: "/images/projects/afm-nanomanipulation/figure-3.png",
    imageAlt:
        "Scientific illustration of AFM nanomanipulation creating a Mickey Mouse-shaped pattern and nanoscale holes in a gelatin-coated substrate.",
    images: [
      {
        src: "/images/projects/master/characterization_nanomanipulation_gelatin_zoom_out_hole10.png",
        alt: "AFM topography of a gelatin surface after creating a nanoscale hole, with its corresponding height profile.",
        caption:
            "AFM-based gelatin removal of the created hole."
      },
      {
        src: "/images/projects/master/characterization_nanomanipulation_gelatin_zoom_out_hole10_profile.jpg",
        alt: "AFM topography of a gelatin surface after creating height profile.",
        caption:
            "AFM-based gelatin profile of the created hole."
      },
      {
        src: "/images/projects/master/characterization_nanomanipulation_mickey_mouse.png",
        alt: "Mickey Mouse-shaped pattern fabricated on a gelatin substrate using AFM nanomanipulation.",
        caption:
            "Custom nanoscale Mickey Mouse pattern created through mechanical manipulation."
      }
    ],
    category: ["Research", "Master"],
    slug: "afm-nanomanipulation",
    highlights: [
      "Removed gelatin locally with the AFM tip to create nanoscale holes",
      "Measured a gelatin thickness of about 30 nm from surface profiles",
      "Fabricated a custom Mickey Mouse-shaped pattern by mechanical manipulation",
      "Identified pattern asymmetry and material displacement as limitations",
    ],
    details: [
      "Preparation and imaging of a gelatin-coated mica substrate.",
      "AFM operation in contact mode using a silicon probe.",
      "Initial surface characterization over a 5 × 5 µm area.",
      "Local material removal using a reduced 1 × 1 µm scan area.",
      "Optimization of setpoint force to achieve gelatin perforation.",
      "Creation and analysis of multiple nanoscale holes.",
      "Fabrication of a custom Mickey Mouse-shaped pattern.",
      "Measurement of gelatin thickness using surface profiles.",
      "Evaluation of pattern asymmetry and material displacement."
    ],
    paragraphs: [
      "This project explored the use of Atomic Force Microscopy (AFM) as a tool for nanoscale manipulation and surface pattern fabrication. The objective was to locally modify a gelatin layer deposited on a mica substrate by using the AFM tip to remove material and create defined nanoscale features.",

      "The gelatin-coated sample was initially characterized by scanning a 5 × 5 µm region in contact mode. After obtaining the initial surface image, the scan area was reduced to 1 × 1 µm to perform local material removal. The applied setpoint force was progressively increased to enable the AFM tip to mechanically perforate the soft gelatin layer.",

      "An initial force of 1000 nN was insufficient to create a hole. The setpoint was therefore increased to 1.18 µN, while the number of points was reduced to 128 to facilitate faster scanning. A cross-sectional profile of the resulting hole revealed a gelatin thickness of approximately 30 nm.",

      "The procedure was repeated to create additional holes adjacent to the first one. Their topographical profiles revealed differences in depth and shape, which were attributed to variations in gelatin mechanical properties, material displacement, and the possible accumulation of removed material around the edges of previously created holes.",

      "The final manipulation involved designing and fabricating a custom Mickey Mouse-shaped pattern on the gelatin substrate. The pattern was produced by positioning the AFM tip over selected regions and applying mechanical force to locally remove material. Imaging parameters were adjusted after fabrication to characterize the resulting features, using a setpoint of 20 nN, 256 points, and a scan rate of 0.5 seconds per line for high-resolution imaging.",

      "The resulting pattern reproduced the intended Mickey Mouse design, although some asymmetry and positional differences were observed. The ears were positioned toward the left side rather than directly above the head, illustrating the challenges associated with precise nanoscale pattern fabrication.",

      "Overall, the experiment demonstrated the potential of AFM-based nanomanipulation for controlled surface modification and nanoscale patterning. It also highlighted how mechanical properties, applied force, scanning parameters, and material redistribution influence the accuracy and reproducibility of fabricated structures."
    ],
    context:
        "Experimental laboratory project involving mechanical nanomanipulation and nanoscale pattern fabrication on a gelatin-coated mica substrate.",
    tools: [
      "Atomic Force Microscopy (AFM)",
      "NaioAFM",
      "WSxM Software",
      "Contact Mode",
      "Mechanical Nanomanipulation",
      "Nanoscale Patterning",
      "Surface Profile Analysis",
      "Topographical Image Processing"
    ],
    date: new Date(2025, 11, 17),
    coauthors: ["Sara Mansour", "Héctor Aznar Gómez"]
  },
  {
    name: "Electro-Optical Characterization of Nematic Liquid Crystals",
    description:
        "Fabrication and electro-optical characterization of a homeotropic nematic liquid crystal cell using polarized optical microscopy. The project investigated the Fredericks transition under an applied AC electric field and determined the threshold voltage and bend elastic constant through optical intensity and phase analysis.",
    course: "Colloids and Supramolecular Devices",
    result:
        "Successfully fabricated and characterized a homeotropic liquid crystal cell based on MLC7029. The Fredericks transition was identified near 6 V, and the bend elastic constant was estimated from the voltage-dependent optical phase response.",
    link: "/projects/liquid-crystal-characterization",
    isExternalLink: false,
    tag: [
      "Liquid Crystals",
      "Optical Characterization",
      "Electro-Optics",
      "Experimental Physics",
      "Data Analysis"
    ],
    image: "/images/projects/master/cover_liquid_crystal_fredericks_transition.png",
    // image: "/images/projects/liquid-crystal/figure-1.png",
    imageAlt: "Scientific illustration of a homeotropic nematic liquid crystal cell undergoing voltage-induced Fredericks transition, with optical response and polarized microscopy insets.",
    images: [
      {
        src: "/images/projects/master/colloids_homeothropic_lc_lc.jpeg",
        alt: "Polarized optical microscopy images of MLC7029 in its homeotropic state.",
        caption:
            "Optical response of the liquid crystal cell without an electric field and during field-induced director reorientation."
      },
      {
        src: "/images/projects/master/colloids_homeothropic_lc_lc_ac_applied.jpeg",
        alt: "Polarized optical microscopy images of MLC7029  under an applied electric field.",
        caption:
            "Optical response of the liquid crystal cell during field-induced director reorientation."
      },
      {
        src: "/images/projects/master/colloids_homeothropic_lc_intensity_vs_voltage.png",
        alt: "Transmitted optical intensity as a function of applied voltage.",
        caption:
            "Measured transmitted intensity versus applied voltage, showing the onset of the Fredericks transition."
      },
      {
        src: "/images/projects/master/colloids_homeothropic_lc_phi2_full.png",
        alt: "Squared optical phase as a function of voltage and linear regression near the Fredericks threshold.",
        caption:
            "Squared optical phase as a function of voltage used to determine the threshold voltage."
      },
      {
        src: "/images/projects/master/colloids_homeothropic_lc_phi2_linear_fit.png",
        alt: "Squared optical phase as a function of voltage and linear regression near the Fredericks threshold.",
        caption:
            "Linearized optical phase analysis used to determine the threshold voltage."
      }
    ],
    category: ["Research", "Master"],
    slug: "liquid-crystal-characterization",
    highlights: [
      "Built a homeotropic MLC7029 cell with an Aquapel-treated ITO surface",
      "Measured the optical response under a 1 kHz AC field with polarized microscopy",
      "Identified the Fredericks transition near 6 V",
      "Estimated the bend elastic constant from the optical phase response",
    ],
    details: [
      "Preparation of ITO-coated glass substrates.",
      "Surface functionalization using an Aquapel-based fluorinated self-assembled monolayer.",
      "Fabrication of a homeotropic liquid crystal cell using polymer spacers.",
      "Capillary filling with MLC7029 nematic liquid crystal.",
      "Optical characterization using polarized optical microscopy with crossed polarizers.",
      "Application of a 1 kHz AC electric field.",
      "Acquisition of optical images under monochromatic red illumination.",
      "Extraction of mean transmitted intensity from a fixed region of interest.",
      "Normalization and conversion of intensity measurements into optical phase retardation.",
      "Linear regression of squared phase versus voltage to determine the Fredericks threshold.",
      "Calculation of the bend elastic constant using dielectric anisotropy."
    ],
    paragraphs: [
      "This project focused on the fabrication and electro-optical characterization of a homeotropic nematic liquid crystal cell. The main objective was to investigate the Fredericks transition, a voltage-induced reorientation of liquid crystal molecules resulting from the competition between dielectric and elastic forces.",

      "The cell was fabricated using two indium tin oxide (ITO)-coated glass substrates. An Aquapel-based fluorinated self-assembled monolayer was applied to the surfaces to promote homeotropic molecular alignment, while polymer spacers defined the cell gap. The cell was subsequently filled by capillary action with MLC7029 nematic liquid crystal, characterized by a negative dielectric anisotropy of -3.6 at 1 kHz.",

      "For optical characterization, the sample was positioned between crossed polarizers and observed using a polarized optical microscope equipped with a 10× objective. Monochromatic red illumination was used to obtain a well-defined relationship between optical phase retardation and transmitted intensity. A 1 kHz AC voltage was applied across the ITO electrodes to induce molecular reorientation while minimizing ionic migration and electrode charging.",

      "A voltage sweep was performed from 20 V down to 0 V in increments of 0.02 V. Optical images were acquired throughout the experiment, and the mean transmitted intensity was extracted from a fixed region of interest. The intensity measurements were normalized and converted into voltage-dependent optical phase retardation using the relationship between transmitted intensity and phase shift for crossed polarizers.",

      "The experimental results showed that the transmitted intensity remained approximately constant below 6 V, indicating that the liquid crystal maintained its initial homeotropic alignment. Above this voltage, a sharp increase in intensity followed by oscillations was observed, corresponding to the onset and subsequent evolution of the Fredericks transition.",

      "To determine the threshold voltage, the squared optical phase was plotted against the applied voltage. The near-threshold region between 6.00 and 6.54 V was selected for linear regression, producing an excellent coefficient of determination (R² = 0.99). The intercept and slope of the regression were used to estimate the critical voltage for molecular reorientation.",

      "Finally, the bend elastic constant K33 was calculated using the Fredericks threshold relationship and the dielectric anisotropy of MLC7029. The results demonstrated how electro-optical measurements can be used to characterize liquid crystal alignment, field-induced molecular reorientation, and elastic properties."
    ],
    context:
        "Experimental project involving liquid crystal cell fabrication, polarized optical microscopy, electro-optical measurements, and quantitative analysis of the Fredericks transition.",
    tools: [
      "Polarized Optical Microscopy",
      "ITO-Coated Glass Substrates",
      "MLC7029 Nematic Liquid Crystal",
      "Aquapel Surface Functionalization",
      "1 kHz AC Electric Field",
      "Monochromatic Optical Illumination",
      "Optical Intensity Analysis",
      "Phase Retardation Analysis",
      "Linear Regression",
      "Elastic Constant Calculation"
    ],
    date: new Date(2026, 1, 2),
    coauthors: ["Jorge López"]
  },
  {
    name: "Colloidal Lithography and Micro/Nanopattern Fabrication",
    description:
        "Fabrication and characterization of micropatterned silicon surfaces using colloidal lithography and self-assembled polystyrene beads. The project combined gold plasma sputtering, bead removal, SEM and AFM characterization, and MATLAB-based image processing to evaluate particle dimensions, pattern uniformity, and surface morphology for potential biosensing applications.",
    course: "Micro and Nanoengineering",
    result:
        "Successfully fabricated polystyrene bead patterns and their corresponding negative hole structures on silicon substrates. MATLAB analysis identified 747 beads with a mean diameter of 2.67 µm and 2,139 holes with a mean diameter of 1.85 µm. AFM characterization estimated a gold layer thickness of approximately 31 nm and confirmed hole dimensions consistent with SEM measurements.",
    link: "/projects/colloidal-lithography",
    isExternalLink: false,
    tag: [
      "Colloidal Lithography",
      "Micro/Nanofabrication",
      "Scanning Electron Microscopy",
      "Atomic Force Microscopy",
      "MATLAB",
      "Biosensor Surfaces"
    ],
    image: "/images/projects/master/cover_colloidal_lithography_silicon.png",
    imageAlt:
        "Bright scientific illustration of colloidal lithography on silicon, showing self-assembled polystyrene beads, patterned holes, and resulting micro-pillars.",
    images: [
      {
        src: "/images/projects/master/bionanoeng_beads.png",
        alt: "Schematic representation of colloidal lithography and bead self-assembly at the water-air interface.",
        caption:
            "Schematic representation of the colloidal lithography fabrication process."
      },
      {
        src: "/images/projects/master/bionanoeng_G3_02.tif",
        alt: "SEM images of the first silicon sample containing self-assembled polystyrene beads, processed using MATLAB.",
        caption:
            "SEM characterization and MATLAB-based particle detection of the first sample."
      },
      {
        src: "/images/projects/master/bionanoeng_G3_03.tif",
        alt: "SEM images of the first silicon sample containing self-assembled polystyrene beads, processed using MATLAB.",
        caption:
            "SEM characterization and MATLAB-based particle detection of the first sample."
      },
      {
        src: "/images/projects/master/bionanoeng_Figure_11.png",
        alt: "SEM images of the first silicon sample containing self-assembled polystyrene beads, processed using MATLAB.",
        caption:
            "Figure 6.5. SEM characterization and MATLAB-based particle detection of the first sample."
      },
      {
        src: "/images/projects/master/bionanoeng_Hist.png",
        alt: "Histogram showing the measured diameter distribution of polystyrene beads.",
        caption:
            "Statistical distribution of bead diameters obtained through MATLAB image analysis."
      },
      {
        src: "/images/projects/master/bionanoeng_G3_06.png",
        alt: "SEM images of the second sample showing the negative micropattern of holes after bead removal.",
        caption:
            "SEM images of the negative pattern created after bead removal."
      },
      {
        src: "/images/projects/master/bionanoeng_G3_09.tif",
        alt: "SEM images of the second sample showing the negative micropattern of holes after bead removal.",
        caption:
            "SEM images of the negative pattern created after bead removal."
      },
      {
        src: "/images/projects/master/bionanoeng_25um_25um_normal.jpg",
        alt: "AFM topography image of the silicon substrate after removal of the polystyrene beads.",
        caption:
            "AFM characterization of the patterned surface over a 25 × 25 µm area."
      },
      {
        src: "/images/projects/master/bionanoeng_25um_25um_image_profile2.jpg",
        alt: "AFM cross-sectional profile showing the dimensions of holes left after bead removal.",
        caption:
            "Cross-sectional AFM profile used to measure the hole diameter and deposited gold layer."
      },
      {
        src: "/images/projects/master/bionanoeng_25_25um_profile_2.jpg",
        alt: "AFM topography image of the silicon substrate after removal of the polystyrene beads.",
        caption:
            "Profile analysis of the holes left by the beads."
      },
      {
        src: "/images/projects/master/bionanoeng_25um_25um_histogram.jpg",
        alt: "AFM surface roughness histogram of the gold-coated silicon substrate.",
        caption:
            "Surface roughness analysis used to estimate the gold layer thickness."
      },
      {
        src: "/images/projects/master/bionanoeng_25um_25um_image3D.jpg",
        alt: "Three-dimensional AFM visualization of the patterned silicon surface showing holes and gold deposition roughness.",
        caption:
            "Three-dimensional AFM visualization of the fabricated micropattern."
      }
    ],
    category: ["Research", "Master"],
    slug: "colloidal-lithography",
    highlights: [
      "Self-assembled 3 µm polystyrene beads at a water–air interface",
      "Transferred the pattern to silicon using gold sputtering and bead removal",
      "Measured 747 beads (2.67 µm mean) and 2,139 holes (1.85 µm mean) with MATLAB",
      "Confirmed hole dimensions and a gold layer of about 31 nm by AFM",
    ],
    details: [
      "Preparation and sonication of 3 µm polystyrene bead dispersions.",
      "Self-assembly of polystyrene microbeads at a water-air interface.",
      "Colloidal lithography and pattern transfer onto silicon substrates.",
      "Optimization of the deposition setup and substrate positioning.",
      "Gold thin-film deposition using plasma sputtering.",
      "Bead removal through ultrasonic treatment to generate negative patterns.",
      "SEM characterization using secondary electron imaging.",
      "Development of MATLAB scripts for automatic particle detection and dimensional analysis.",
      "Image enhancement, filtering, circular detection, and particle segmentation.",
      "Statistical analysis of bead and hole size distributions.",
      "AFM characterization of surface morphology and roughness.",
      "Cross-sectional profile analysis and three-dimensional surface visualization.",
      "Comparison of SEM and AFM measurements to validate hole dimensions."
    ],
    paragraphs: [
      "This project focused on the fabrication and characterization of micropatterned silicon surfaces using colloidal lithography. The objective was to produce self-organized microstructured surfaces with potential applications in biosensing, where patterned surfaces can contribute to the development of functional sensing interfaces.",
      "The fabrication process began with the preparation of a polystyrene bead dispersion containing particles with a nominal diameter of 3 µm. The beads were sonicated for 30 seconds and subsequently deposited at a water-air interface. Surface tension and Marangoni effects promoted the self-organization of the particles into a compact layer. A silicon substrate was carefully introduced beneath the floating beads to transfer the pattern onto its surface.",
      "Two silicon samples were fabricated. Following bead deposition, a thin gold layer was deposited using plasma sputtering to provide electrical conductivity for subsequent SEM characterization. One sample retained the original bead pattern, while the second was sonicated after gold deposition to remove the beads and produce a negative pattern of holes.",
      "The samples were characterized using Scanning Electron Microscopy at the facilities of the University of Barcelona at Hospital Clínic. Secondary electron imaging was selected to investigate surface morphology and identify the dimensions and distribution of the polystyrene beads and the resulting holes.",
      "To quantify the particle dimensions, a MATLAB image-processing script was developed. The workflow included image conversion to grayscale, adaptive contrast enhancement, Gaussian filtering, circular particle detection, pixel-to-micrometer calibration, and automatic diameter measurement. Statistical analysis and histograms were subsequently generated to evaluate particle size distributions.",
      "For the first sample, MATLAB detected 747 particles with a mean diameter of 2.67 µm and a standard deviation of 0.07 µm. Although the nominal bead diameter was 3 µm, the measured distribution was relatively narrow, indicating consistent particle dimensions. Some regions showed homogeneous monolayer coverage, while other areas presented localized double layers.",
      "The second sample was analyzed to characterize the negative pattern generated after bead removal. The MATLAB processing algorithm identified 2,139 holes with a mean diameter of 1.85 µm and a standard deviation of 0.30 µm. Compared with the first sample, this surface showed less uniformity and some remaining attached beads, suggesting that the sonication procedure could be further optimized. The blurred morphology of certain pores also presented additional challenges for automated edge detection.",
      "Atomic Force Microscopy was subsequently used to characterize the topography of the patterned surface in contact mode. Measurements were performed using a NaioAFM, initially scanning a 50 × 50 µm region and then reducing the scan area to 25 × 25 µm for higher-resolution analysis. Surface roughness, cross-sectional profiles, and three-dimensional topographical images were examined using WSxM software.",
      "The AFM analysis indicated an RMS surface roughness of approximately 5.50 nm and an estimated gold layer thickness of around 31 nm. Cross-sectional profile measurements provided an average hole diameter of approximately 1.92 µm, in agreement with the SEM-derived value of 1.85 µm.",
      "The project also investigated the influence of deposition techniques on the resulting surface morphology. A comparison between plasma sputtering and thermal evaporation demonstrated how their different deposition mechanisms affect sidewall coverage and the dimensions of the resulting holes. The observed smaller-than-nominal hole dimensions and gradual thickness transitions were consistent with the non-directional deposition characteristics of sputtering.",
      "Overall, the project demonstrated the integration of colloidal lithography, thin-film deposition, electron and atomic force microscopy, and automated image analysis for the fabrication and characterization of micro- and nanopatterned surfaces. The complementary use of SEM and AFM provided both morphological and quantitative information about the fabricated structures."
    ],
    context:
        "Collaborative micro and nanoengineering laboratory project involving colloidal self-assembly, thin-film deposition, micro/nanofabrication, microscopy, and computational image analysis.",
    tools: [
      "Colloidal Lithography",
      "Polystyrene Microbeads",
      "Silicon Substrates",
      "Gold Plasma Sputtering",
      "Scanning Electron Microscopy (SEM)",
      "Atomic Force Microscopy (AFM)",
      "NaioAFM",
      "WSxM Software",
      "MATLAB",
      "Image Processing",
      "Circular Particle Detection",
      "Statistical Analysis",
      "Surface Roughness Analysis",
      "3D Topography Visualization"
    ],
    date: new Date(2026, 4, 14),
    coauthors:["Pablo Fernández Silva"]
  },
  {
    name: "Photoconductive Characterization of a ZnO Nanowire Photodetector",
    description:
        "Data analysis of photoconduction experiments performed on a metal-oxide nanowire-based photodetector. The project investigated the relationship between applied voltage, photon flux, and generated photocurrent under ultraviolet illumination at 340 nm and 385 nm, evaluating the wavelength-dependent photoconductive response and sensor sensitivity.",
    course: "Nanosensors",
    result:
        "Identified a significantly stronger photoconductive response at 340 nm compared with 385 nm. At an applied voltage of 1 V, the calculated sensitivities were 2.13 × 10²⁴ µAW⁻¹m⁻² and 1.82 × 10²² µAW⁻¹m⁻², respectively, demonstrating an approximately two-orders-of-magnitude difference.",
    link: "/projects/znO-photoconduction",
    isExternalLink: false,
    tag: [
      "Nanosensors",
      "ZnO Nanowires",
      "Photoconductivity",
      "UV Photodetection",
      "Data Analysis",
      "Sensor Sensitivity"
    ],
    image: "/images/projects/master/cover_zno_nanowire_photodetector.png",
    // image: "/images/projects/photoconduction/figure-3.png",
    imageAlt:
        "Bright scientific illustration of a ZnO nanowire photodetector connected to gold electrodes under ultraviolet illumination, with a conceptual crystal-lattice inset.",
    images: [
      {
        src: "/images/projects/master/nanosensors_photogenerated_current_photgenerated_current_vs_voltage.png",
        alt: "Current-voltage characteristics of a ZnO nanowire photodetector under illumination at 340 nm and 385 nm at different photon fluxes.",
        caption:
            "Current-voltage characteristics under different ultraviolet illumination conditions."
      },
      {
        src: "/images/projects/master/nanosensors_photogenerated_current_photgenerated_current_vs_voltage_dark_current_substracted.png",
        alt: "Photogenerated current as a function of applied voltage for the two illumination wavelengths.",
        caption:
            "Photogenerated current after subtraction of the dark current contribution."
      },
      {
        src: "/images/projects/master/nanosensors_photogenerated_current_phtocflux.png",
        alt: "Photogenerated current as a function of photon flux at a fixed applied voltage of 1 V.",
        caption:
            "Relationship between photon flux and photogenerated current at 1 V."
      }
    ],
    category: ["Research", "Master"],
    slug: "zno-photoconduction",
    highlights: [
      "Analyzed the photocurrent of a ZnO nanowire under 340 nm and 385 nm UV light",
      "Subtracted dark current to isolate the photogenerated signal",
      "Found sensitivity about two orders of magnitude higher at 340 nm",
      "Explained the difference by the ZnO band gap of about 3.37 eV",
    ],
    details: [
      "Analysis of photoconductive measurements from a metal-oxide nanowire device.",
      "Evaluation of current-voltage characteristics between -5 V and 5 V.",
      "Analysis of measurements at 340 nm and 385 nm ultraviolet wavelengths.",
      "Comparison of five different photon flux conditions.",
      "Subtraction of dark current to obtain photogenerated current.",
      "Analysis of photocurrent as a function of applied voltage.",
      "Evaluation of the relationship between photocurrent and photon flux.",
      "Linear fitting and comparison of photoconductive responses.",
      "Calculation of sensor sensitivity at an applied voltage of 1 V.",
      "Interpretation of wavelength-dependent photoconduction based on ZnO band gap energy."
    ],
    paragraphs: [
      "This project focused on the data analysis of photoconduction experiments performed using a photoconductive light sensor based on a single metal-oxide nanowire. The objective was to investigate how the generated photocurrent depends on the applied voltage, photon flux, and wavelength of the incident ultraviolet radiation.",
      "The experiments measured current-voltage characteristics by applying voltages ranging from -5 V to 5 V in increments of 0.2 V. The nanowire was illuminated using monochromatic ultraviolet sources at wavelengths of 340 nm and 385 nm, under five decreasing photon flux conditions, ranging from Φ1 = 2.01 × 10⁻⁸ to Φ5 = 1.01 × 10⁻⁹ ph·m⁻²·s⁻¹. Measurements were also obtained in dark conditions to establish the baseline current.",
      "The initial analysis compared the current-voltage characteristics under the different illumination conditions. At 340 nm, the measured current increased with photon flux, indicating an effective photoconductive response. In contrast, the curves obtained at 385 nm were almost overlapping, suggesting that most of the measured current originated from the dark current contribution.",
      "To isolate the photogenerated contribution, the dark current was subtracted from the measured current for each illumination condition. The resulting photocurrent-voltage curves were analyzed and compared. The photocurrent exhibited noisy behavior, although the theoretical relationship between photocurrent and applied voltage is linear for the photoconductor considered.",
      "The relationship between photon flux and photocurrent was subsequently investigated at a fixed applied voltage of 1 V. The results showed an approximately linear relationship, although some noise was observed in the measurements. Linear fitting was used to evaluate the response of the nanowire to different illumination intensities.",
      "The sensor sensitivity was calculated from the slope of the photocurrent versus photon flux relationship, taking into account the wavelength-dependent photon energy. The calculated sensitivities were 2.13 × 10²⁴ µAW⁻¹m⁻² at 340 nm and 1.82 × 10²² µAW⁻¹m⁻² at 385 nm. The sensitivity at 340 nm was therefore approximately two orders of magnitude higher.",
      "Finally, the difference in photoconductive response was interpreted in relation to the electronic band structure of ZnO. Photons at 340 nm have an energy of approximately 3.65 eV, exceeding the ZnO band gap of approximately 3.37 eV. In comparison, photons at 385 nm have an energy of approximately 3.22 eV, below the band gap, explaining the significantly weaker photogeneration observed at this wavelength."
    ],
    context:
        "Nanosensors project involving the analysis and interpretation of experimental photoconduction data from a ZnO nanowire photodetector.",
    tools: [
      "ZnO Nanowire Photodetector",
      "Ultraviolet Illumination",
      "Current-Voltage Analysis",
      "Photocurrent Analysis",
      "Photon Flux Analysis",
      "Dark Current Subtraction",
      "Linear Fitting",
      "Sensor Sensitivity Calculation",
      "Semiconductor Band Gap Analysis"
    ],
    date: new Date(2025, 10, 13),
    coauthors:["Pablo Fernández Silva"]
  },
  {
    name: "Experimental Characterization and Calibration of Environmental Sensors Using Arduino",
    description:
        "Experimental characterization of light, temperature, and humidity sensors using an Arduino UNO R3 platform. The project combined static calibration and dynamic response measurements to evaluate sensor linearity, sensitivity, accuracy, response time, and recovery behavior.",
    course: "Nanosensors",
    result:
        "Characterized the static and dynamic performance of three sensing modalities. The CdS light sensor demonstrated a linear operating region between approximately 20 and 40 cm, with R² ≈ 0.985. The DHT20 temperature sensor achieved residual inaccuracy within ±0.05 °C after offset correction, while the humidity sensor maintained measurements within its expected accuracy range after a +0.3% RH correction.",
    link: "/projects/arduino-environmental-sensors",
    isExternalLink: false,
    tag: [
      "Nanosensors",
      "Arduino",
      "Sensor Characterization",
      "Calibration",
      "Data Acquisition",
      "Environmental Monitoring"
    ],
    image: "/images/projects/master/cover_arduino_environmental_sensors.png",
    // image: "/images/projects/arduino-sensors/figure-3.png",
    imageAlt:
        "Arduino UNO R3 connected to light, temperature, and humidity sensors, with calibration and response plots on a bright laboratory background.",
    images: [
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensorexperimental_setup.jpg",
        alt: "Experimental setup showing the CdS photoresistor connected to an Arduino UNO and positioned at controlled distances from an LED light source.",
        caption:
            "Experimental setup for static and dynamic light sensor characterization."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensorlight_calibration_linear.png",
        alt: "Calibration curve of the CdS light sensor in its approximately 20–40 cm linear operating region.",
        caption:
            "Linear calibration region used to determine the sensitivity of the CdS photoresistor."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensorlight_dynamic_on.png",
        alt: "Dynamic response of the CdS photoresistor during a dark-to-light transition.",
        caption:
            "Light sensor response and rise time during illumination."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensorlight_dynamic_off.png",
        alt: "Dynamic response of the CdS photoresistor during a light-to-dark transition.",
        caption:
            "Light sensor recovery response after illumination is removed."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensortemperature_calibration.png",
        alt: "DHT20 temperature calibration curve comparing corrected sensor measurements with reference thermometer measurements.",
        caption:
            "Static calibration of the DHT20 temperature sensor."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensortemperature_dynamic.png",
        alt: "Temperature sensor response during controlled heating and cooling.",
        caption:
            "Dynamic temperature response illustrating thermal inertia."
      },
      {
        src: "/images/projects/master/nanosensors_characterization_light_temp_hum_sensorhumidity_dynamic.png",
        alt: "Dynamic response of the DHT20 humidity sensor during increasing and decreasing relative humidity.",
        caption:
            "Humidity sensor response during moisture changes."
      }
    ],
    category: ["Research", "Master"],
    slug: "arduino-environmental-sensors",
    highlights: [
      "Calibrated a CdS light sensor with the inverse-square law over 20–40 cm",
      "Measured the light sensor's rise (~0.6 s) and recovery (~0.8–1.0 s) times",
      "Reduced DHT20 temperature error to ±0.05 °C with offset correction",
      "Characterized the humidity response, which is limited by moisture diffusion",
    ],
    details: [
      "Integration of a CdS photoresistor and DHT20 environmental sensor with an Arduino UNO R3.",
      "Configuration of analog and digital sensor acquisition.",
      "Static calibration of the light sensor using a constant LED source at different distances.",
      "Application of the inverse-square law to evaluate relative light intensity.",
      "Identification of the linear operating region and calculation of light sensor sensitivity.",
      "Dynamic light sensor characterization using Light-ON and Light-OFF experiments.",
      "Measurement of rise and recovery times using the 10–90% and 90–10% criteria.",
      "Temperature calibration using an independent reference thermometer.",
      "Linear regression and offset correction of temperature measurements.",
      "Dynamic temperature characterization through heating and cooling experiments.",
      "Verification of steady-state humidity measurements.",
      "Dynamic humidity characterization under increasing and decreasing moisture conditions.",
      "Analysis of photoconductivity, thermal inertia, and moisture diffusion.",
      "Data acquisition and processing using CSV output and numerical analysis."
    ],
    paragraphs: [
      "This project focused on the experimental characterization of light, temperature, and humidity sensors connected to an Arduino UNO R3 platform. The objective was to evaluate their performance through static calibration and dynamic response measurements, investigating parameters such as linearity, sensitivity, accuracy, response time, and recovery time.",

      "The experimental setup included a Grove light sensor based on a cadmium sulfide (CdS) photoresistor and a DHT20 environmental sensor for temperature and relative humidity measurements. The Arduino UNO R3 was used for data acquisition and communication with a host computer, allowing the collected measurements to be processed and analyzed.",

      "The CdS light sensor was characterized using a constant LED desk lamp positioned at different distances from the photoresistor. Assuming the source behaved approximately as a point source, the inverse-square relationship was used to estimate relative light intensity. The measured analog-to-digital converter (ADC) values were plotted against 1/d² to obtain the calibration curve and identify the linear operating region.",

      "The light sensor exhibited three operating regimes: a noise-dominated region at low illumination levels, an approximately linear region at intermediate distances, and a saturation-dominated region at high illumination levels. The linear region was identified between approximately 20 and 40 cm. Linear regression in this region produced a coefficient of determination of R² ≈ 0.985.",

      "Dynamic characterization was performed by measuring the response of the photoresistor during sudden Light-ON and Light-OFF transitions. Measurements were acquired every 50 milliseconds. The sensor exhibited a rise time of approximately 0.6 seconds when exposed to light and a slower recovery time of approximately 0.8–1.0 seconds when illumination was removed. This asymmetric behavior was associated with carrier trapping and release mechanisms in the photoconductive material.",

      "The temperature sensor integrated into the DHT20 module was calibrated by comparing its measurements with those of an independent reference thermometer over a temperature range of approximately 18.2–27.8 °C. The raw measurements demonstrated excellent linearity, with R² = 0.9999. A constant software offset correction reduced the residual temperature inaccuracy to within ±0.05 °C.",

      "Dynamic temperature characterization was performed through controlled heating and cooling experiments, with measurements acquired at two-second intervals. The temperature increased from approximately 20.0 °C to 26.1 °C during heating, with an estimated time constant of 20 seconds. During cooling, the temperature decreased from approximately 26.7 °C to 20.8 °C, with an estimated time constant of 25 seconds. The difference between heating and cooling responses was associated with thermal inertia and heat loss through natural convection.",

      "The relative humidity sensor integrated into the DHT20 module was evaluated under steady-state and dynamic conditions. A comprehensive static calibration was not performed because the manufacturer's specified accuracy was considered sufficient for the laboratory exercise. A constant correction of +0.3% RH was applied to compensate for the observed bias, keeping the measurements within the expected accuracy range.",

      "The dynamic humidity response was investigated during increasing and decreasing humidity conditions. The relative humidity increased from approximately 45% RH to 59% RH, with an estimated rise time of 30 seconds. During decreasing humidity, the sensor required approximately 32 seconds to return to its original level. The relatively slow response was associated with moisture diffusion and adsorption processes within the sensing layer.",

      "Finally, the results were interpreted in relation to the physical transduction mechanisms of each sensor. Photoconductivity and carrier trapping governed the response of the CdS photoresistor, thermal inertia influenced the temperature sensor dynamics, and moisture diffusion controlled the response of the capacitive humidity sensor. The project demonstrated the importance of evaluating both static accuracy and dynamic behavior when selecting sensors for environmental monitoring applications."
    ],
    context:
        "Nanosensors final project involving experimental characterization, calibration, dynamic response analysis, and comparison of three environmental sensing devices using an Arduino-based data acquisition platform.",
    tools: [
      "Arduino UNO R3",
      "Grove CdS Photoresistor",
      "DHT20 Temperature and Humidity Sensor",
      "LED Light Source",
      "Reference Thermometer",
      "Analog-to-Digital Conversion",
      "I2C Communication",
      "Static Calibration",
      "Dynamic Response Analysis",
      "Inverse-Square Law",
      "Linear Regression",
      "Sensitivity Analysis",
      "Rise and Recovery Time Analysis",
      "CSV Data Acquisition"
    ],
    date: new Date(2026, 0, 12),
    coauthors:["Simone Carrieri", "Samuel Dynako"]
  },
  {
    name: "Temperature Calibration and Characterization of Ni-HHTP-Based Resistive Nanosensors",
    description:
        "Experimental investigation of temperature-dependent electrical resistance using a Pt-100 resistance temperature detector and a Ni-HHTP-based resistive sensor. The project involved micro-heater calibration, temperature-dependent resistance measurements, and analysis of the different electrical conduction behaviors of metallic and nanostructured sensing materials.",
    course: "Nanosensors",
    result:
        "Calibrated a Pt-100 resistance temperature detector using a micro-heater and characterized the temperature-dependent resistance of a Ni-HHTP-based sensor between 45 °C and 85 °C. The Ni-HHTP resistance decreased from 20 MΩ to 2.4 MΩ as temperature increased, demonstrating a negative temperature coefficient of resistance.",
    link: "/projects/ni-hhtp-temperature-sensor",
    isExternalLink: false,
    tag: [
      "Nanosensors",
      "Temperature Sensors",
      "Ni-HHTP",
      "Pt-100",
      "Micro-Heater",
      "Sensor Calibration",
      "Resistive Characterization"
    ],
    image: "/images/projects/master/cover_ni_hhtp_temperature_sensor.png",
    // image: "/images/projects/ni-hhtp-temperature/figure-2.png",
    imageAlt:
        "Bright scientific illustration of a Ni-HHTP resistive nanosensor on gold interdigitated electrodes, with a molecular framework inset and temperature-dependent resistance plots.",
    images: [
      {
        src: "/images/projects/master/nanosensors_temperature_sensor_calibration_fit.png",
        alt: "Pt-100 resistance measurements as a function of micro-heater voltage with fitted calibration model.",
        caption:
            "Pt-100 resistance calibration using controlled micro-heater voltage steps."
      },
      {
        src: "/images/projects/master/nanosensors_temperature_sensor_calibration_resistance_temperature.png",
        alt: "Experimental resistance versus temperature measurements for the Ni-HHTP-based resistive sensor, with exponential fitting.",
        caption:
            "Temperature-dependent electrical resistance of the Ni-HHTP sensing material."
      }
    ],
    category: ["Research", "Master"],
    slug: "ni-hhtp-temperature-sensor",
    highlights: [
      "Calibrated a Pt-100 detector with a micro-heater and a Callendar–Van Dusen fit",
      "Measured Ni-HHTP resistance from 45 °C to 85 °C",
      "Observed resistance falling from 20 MΩ to 2.4 MΩ, a negative temperature coefficient",
      "Contrasted this with the rising resistance of metallic Pt",
    ],
    details: [
      "Calibration of a Pt-100 resistance temperature detector.",
      "Application of controlled voltage steps to a micro-heater.",
      "Measurement of Pt-100 resistance at different heater voltages.",
      "Temperature estimation using platinum resistance-temperature relationships.",
      "Fitting of the Callendar–Van Dusen resistance-temperature model.",
      "Comparison of localized temperature measurements with a commercial temperature sensor.",
      "Analysis of the limitations of thermal coupling during localized heating.",
      "Calculation of expected Pt-100 resistance at 325 °C using the fitted model.",
      "Characterization of Ni-HHTP sensor resistance at different temperature setpoints.",
      "Measurement of electrical resistance between 45 °C and 85 °C.",
      "Analysis of the temperature-dependent electrical response of Ni-HHTP.",
      "Comparison of metallic and nanostructured sensing material conduction behavior."
    ],
    paragraphs: [
      "This project investigated the influence of temperature on resistive sensing devices and its relevance to nanosensor characterization. The laboratory session combined the calibration of a conventional Pt-100 resistance temperature detector with the investigation of a Ni-HHTP-based resistive sensor. The main objective was to understand how temperature affects electrical resistance in metallic and nanostructured sensing materials.",

      "The first part of the experiment focused on the calibration of the Pt-100 sensor using a micro-heater. Different voltage steps between approximately 0.95 V and 3.81 V were applied to the heater, while two source meters were used to supply power to the heater and measure the electrical resistance of the Pt-100. Resistance measurements were recorded after the system reached thermal stability at each voltage step.",

      "The Pt-100 exhibited an increasing electrical resistance as the micro-heater voltage increased, showing an approximately linear trend over the investigated range. The experimental data were fitted using the Callendar–Van Dusen resistance-temperature relationship, which describes the temperature dependence of platinum resistance. The fitted model closely followed the measured data, demonstrating the suitability of the Pt-100 for local temperature calibration.",

      "The experiment also included a comparison with a commercial temperature sensor. However, because the Pt-100 was positioned directly on top of the micro-heater and the commercial sensor could not be placed sufficiently close to the heating arrangement, meaningful temperature readings from the commercial sensor could not be obtained during the heating sequence. This highlighted the importance of thermal coupling and sensor positioning when measuring localized temperature changes.",

      "Using the fitted Pt-100 calibration model, the expected resistance at 325 °C was estimated to be approximately 180 Ω. The report also discussed the temperature limitations of standard Pt-100 resistance-temperature tables, which were restricted to temperatures below 310 °C in the laboratory guide.",

      "The second part of the experiment investigated the temperature-dependent electrical resistance of a Ni-HHTP-based resistive sensor. The sensor was connected to a temperature-controlled electronic platform, which allowed its temperature and electrical resistance to be monitored simultaneously. Measurements were obtained at five temperature setpoints between 45 °C and 85 °C.",

      "The measured resistance values decreased considerably as temperature increased. The resistance changed from 20 MΩ at 45 °C to 14 MΩ at 55 °C, 7 MΩ at 65 °C, 4.5 MΩ at 75 °C, and 2.4 MΩ at 85 °C. The experimental data were represented using an exponential fitting model, demonstrating the strong temperature dependence of the Ni-HHTP sensing material.",

      "The observed decrease in resistance was interpreted in relation to the electrical conduction behavior of semiconducting materials. As temperature increases, additional charge carriers become thermally activated, facilitating electrical conduction and reducing the overall resistance of the sensing layer.",

      "Finally, the experiment highlighted the differences between metallic temperature sensors and nanostructured sensing materials. While the resistance of the platinum-based Pt-100 increases with temperature due to electron-phonon scattering, the Ni-HHTP sensor exhibited decreasing resistance as temperature increased. This comparison demonstrated the importance of controlling and accurately measuring temperature when characterizing resistive nanosensors."
    ],
    context:
        "Nanosensors laboratory project involving Pt-100 temperature calibration, micro-heater characterization, and investigation of temperature-dependent electrical resistance in a Ni-HHTP-based sensing material.",
    tools: [
      "Pt-100 Resistance Temperature Detector",
      "Ni-HHTP Resistive Sensor",
      "Micro-Heater",
      "Source Meters",
      "Temperature-Controlled Platform",
      "Resistance Measurements",
      "Callendar–Van Dusen Model",
      "Temperature Calibration",
      "Exponential Curve Fitting",
      "Temperature-Dependent Resistance Analysis"
    ],
    date: new Date(2025, 11, 15),
    coauthors:["Ismael Alonso", "Jorge López" , "Adrià Brú"]
  },
  {
    name: "Development and Characterization of NCAM-Derived Peptide Amphiphile Nanocarriers for Ocular Drug Delivery",
    description:
        "Master's thesis focused on the synthesis and physicochemical characterization of neural cell adhesion molecule (NCAM)-derived peptide amphiphiles as potential nanostructured carriers for ocular drug delivery. Four peptide amphiphile formulations were synthesized using Fmoc-based solid-phase peptide synthesis and characterized through chromatographic, mass spectrometric, spectroscopic, and fluorescence techniques. Their self-assembly behavior, secondary structure, critical aggregation concentration, and ability to encapsulate latanoprost for potential glaucoma treatment were investigated.",
    course: "Erasmus Mundus Master in Nanoscience and Nanotechnology – Nanomedicine and Nanotheranostics",
    result:
        "Successfully synthesized four NCAM-derived peptide amphiphile formulations and confirmed their chemical identity through mass spectrometry and chromatographic analysis. Circular dichroism revealed predominant β-sheet secondary structures. Critical aggregation concentrations ranged from 7.6 to 19.7 µM. Three formulations achieved latanoprost encapsulation efficiencies of 98.68%, 98.58%, and 97.77%, respectively.",
    link: "/projects/ncam-peptide-amphiphile-nanocarriers",
    isExternalLink: false,
    tag: [
      "Master's Thesis",
      "Nanomedicine",
      "Drug Delivery",
      "Peptide Amphiphiles",
      "Self-Assembly",
      "Solid Phase Peptide Synthesis",
      "Ocular Nanotechnology",
      "Glaucoma",
      "Nanomaterials Characterization"
    ],
    image: "/images/projects/master/cover_ncam_peptide_amphiphile_nanocarriers.png",
    // image: "/images/projects/ncam-peptide-amphiphiles/figure-4-15.png",
    imageAlt:
        "Bright scientific illustration of NCAM-derived peptide amphiphile nanocarriers encapsulating latanoprost, with a molecular structure inset and ocular drug delivery pathway.",
    images: [
      {
        src: "/images/projects/master/thesis_nanosystems_pa_schema_pa.png",
        alt: "Molecular structures of the four synthesized NCAM-derived peptide amphiphile formulations with different numbers of stearic acid chains.",
        caption:
            "Molecular design of the four synthesized peptide amphiphile formulations."
      },
      {
        src: "/images/projects/master/thesis_nanosystems_pa_z_ms_ncam_c18.jpg",
        alt: "Electrospray ionization mass spectrometry analysis of the four-stearic-acid NCAM-derived peptide amphiphile.",
        caption:
            "Mass spectrometry confirmation of the synthesized peptide amphiphile."
      },
      {
        src: "/images/projects/master/thesis_nanosystems_pa_circular_dichroism_comparison_100uM.png",
        alt: "Circular dichroism spectra of the four synthesized peptide amphiphiles at 100 micromolar concentration.",
        caption:
            "Secondary structure characterization using circular dichroism spectroscopy."
      },
      {
        src: "/images/projects/master/thesis_nanosystems_pa_circular_dichroism_comparison_100uM_25uM.png",
        alt: "Circular dichroism spectra of the four synthesized peptide amphiphiles comparing CAC at 100 and 25 micromolar concentration.",
        caption:
            "Comparison of secondary structure characterization using circular dichroism spectroscopy at 100 and 25 micromolar concentration.."
      },
      {
        src: "/images/projects/master/thesis_nanosystems_pa_fl_cac_ncam_c18_normalized.png",
        alt: "Thioflavin T fluorescence analysis of RR-NCAM with two stearic acid chains showing a critical aggregation concentration of 7.8 micromolar.",
        caption:
            "Fluorescence-based determination of the critical aggregation concentration."
      },
      {
        src: "/images/projects/master/thesis_nanosystems_pa_calibration_curve_latanoprost.png",
        alt: "Latanoprost calibration curve based on HPLC peak area and drug concentration.",
        caption:
            "HPLC calibration curve used for latanoprost quantification."
      }
    ],
    category: ["Research", "Master", "Thesis"],
    slug: "ncam-peptide-amphiphile-nanocarriers",
    highlights: [
      "Synthesized four NCAM-derived peptide amphiphiles by manual Fmoc-SPPS",
      "Verified chemical identity by UHPLC and ESI-MS, and secondary structure by circular dichroism",
      "Found critical aggregation concentrations from 7.6 to 19.7 µM; two stearic acid chains lowered it",
      "Encapsulated latanoprost at 98.68%, 98.58% and 97.77% efficiency",
      "Built an HPLC calibration curve for latanoprost quantification",
    ],
    details: [
      "Research and development of peptide amphiphile-based nanocarriers for potential ocular drug delivery applications.",
      "Molecular design and synthesis of four NCAM-derived peptide amphiphile formulations.",
      "Manual Fmoc-based solid-phase peptide synthesis (SPPS).",
      "Sequential amino acid coupling and Fmoc deprotection.",
      "Monitoring peptide synthesis using the Kaiser test.",
      "Selective side-chain deprotection and conjugation of stearic acid hydrophobic tails.",
      "Peptide cleavage from resin, precipitation, purification and lyophilization.",
      "Chemical identity verification using UHPLC and electrospray ionization mass spectrometry (ESI-MS).",
      "Chromatographic characterization and purity assessment using reverse-phase HPLC.",
      "Secondary structure characterization using circular dichroism spectroscopy.",
      "Investigation of peptide self-assembly using thioflavin T fluorescence spectroscopy.",
      "Determination of critical aggregation concentration (CAC) through fluorescence intensity analysis and linear regression.",
      "Comparison of the influence of hydrophobic tail number and peptide head-group composition on self-assembly behavior.",
      "Development of an HPLC calibration curve for latanoprost quantification.",
      "Preparation of latanoprost-loaded peptide amphiphile formulations.",
      "Drug separation using centrifugal ultrafiltration.",
      "Indirect determination of latanoprost encapsulation efficiency using HPLC.",
      "Comparative evaluation of drug encapsulation performance across different peptide amphiphile formulations.",
      "Interpretation of structure-property relationships and their implications for ocular nanomedicine."
    ],
    paragraphs: [
      "This Master's thesis investigated the development and characterization of NCAM-derived peptide amphiphiles as potential nanostructured carriers for ocular drug delivery, with a particular focus on glaucoma treatment. The research aimed to explore how modifications in peptide composition and hydrophobic domain architecture influence molecular self-assembly and drug encapsulation performance.",

      "Four peptide amphiphile formulations were synthesized through manual Fmoc-based solid-phase peptide synthesis. The formulations incorporated variations in the NCAM-derived peptide backbone, the addition of two arginine residues to modify the hydrophilic head group, and the incorporation of one, two, or four stearic acid chains as hydrophobic domains. These structural modifications were designed to investigate the relationship between molecular composition, hydrophilic-hydrophobic balance, and self-assembly behavior.",

      "The synthesis involved sequential amino acid coupling, Fmoc deprotection, Kaiser testing to monitor coupling reactions, selective side-chain deprotection, and conjugation of stearic acid chains. Following peptide elongation, the compounds were cleaved from the resin, precipitated, and recovered through centrifugation and lyophilization.",

      "The chemical identity of the synthesized compounds was evaluated using ultra-high-performance liquid chromatography (UHPLC) coupled with electrospray ionization mass spectrometry (ESI-MS). Experimental mass-to-charge ratios were compared with theoretically calculated molecular ion species to verify the successful synthesis of the target compounds. Reverse-phase high-performance liquid chromatography (HPLC) was also employed to assess chromatographic profiles and investigate the influence of hydrophobic chain incorporation on retention behavior.",

      "Circular dichroism spectroscopy was used to investigate the secondary structures adopted by the peptide amphiphiles at concentrations of 25 and 100 µM. The results revealed predominantly β-sheet secondary structures across the formulations. Similar spectral profiles at both concentrations suggested that the observed secondary structure was largely independent of concentration within the investigated range.",

      "Self-assembly behavior was subsequently investigated using thioflavin T fluorescence spectroscopy. The critical aggregation concentration was determined by analyzing changes in normalized fluorescence intensity as a function of peptide concentration, using linear regression to identify the intersection between two concentration-dependent trends. The calculated CAC values were 9.1 µM for NCAM-C18, 19.7 µM for RR-NCAM-C18, 7.8 µM for RR-NCAM-(C18)2, and 7.6 µM for RR-NCAM-(C18)4.",

      "The results demonstrated that molecular composition significantly influenced self-assembly behavior. The incorporation of two arginine residues increased the CAC, suggesting that changes in head-group polarity and electrostatic interactions affected aggregation. Conversely, increasing the number of stearic acid chains from one to two substantially reduced the CAC, indicating that stronger hydrophobic interactions favored self-assembly at lower concentrations. The incorporation of four chains produced only a marginal additional reduction.",

      "Finally, the capacity of the synthesized peptide amphiphiles to encapsulate latanoprost was investigated. An HPLC calibration curve was first established to quantify the drug concentration. Drug-loaded formulations were prepared using the peptide amphiphiles, followed by sonication and nanoparticle formation. Centrifugal ultrafiltration was used to separate the nanostructures from unencapsulated drug, allowing the free latanoprost fraction to be quantified indirectly through HPLC analysis.",

      "Three modified RR-NCAM formulations were evaluated for drug encapsulation. The measured encapsulation efficiencies were 98.68% for RR-NCAM-C18, 98.58% for RR-NCAM-(C18)2, and 97.77% for RR-NCAM-(C18)4. These results demonstrated a high capacity for latanoprost incorporation across all three formulations and supported their potential as nanostructured drug delivery carriers.",

      "Overall, this research established a foundation for the development of NCAM-derived peptide amphiphiles for ocular nanomedicine. The findings highlighted the importance of molecular architecture in controlling self-assembly and demonstrated promising drug encapsulation performance. Further investigations, including transmission electron microscopy, drug release kinetics, biocompatibility testing, and in vivo studies, were identified as necessary steps toward evaluating their potential therapeutic application in glaucoma treatment."
    ],
    context:
        "Erasmus Mundus Master's thesis in Nanoscience and Nanotechnology, specialization in Nanomedicine and Nanotheranostics, conducted at KU Leuven during the 2025–2026 academic year.",
    tools: [
      "Fmoc-Based Solid-Phase Peptide Synthesis (SPPS)",
      "Manual Peptide Synthesis Equipment",
      "Kaiser Test",
      "HATU",
      "DIPEA",
      "Fmoc Deprotection",
      "Stearic Acid Conjugation",
      "UHPLC",
      "Electrospray Ionization Mass Spectrometry (ESI-MS)",
      "Reverse-Phase HPLC",
      "Jasco J-1500 Circular Dichroism Spectrometer",
      "PTI Fluorescence Master Systems",
      "Thioflavin T Fluorescence Assay",
      "Critical Aggregation Concentration Analysis",
      "HPLC Calibration",
      "Centrifugal Ultrafiltration",
      "Latanoprost Quantification",
      "Lyophilization",
      "Linear Regression",
      "Encapsulation Efficiency Analysis"
    ],
    institution: "KU Leuven",
    degree:
        "Erasmus Mundus Master of Science in Nanoscience and Nanotechnology – Nanomedicine and Nanotheranostics",
    date: new Date(2026, 8, 1),
    supervisor: [
      "María José Gomara",
      "Isabel Haro"
    ],
    assistantSupervisor: "Susanna Rocha"
  },
  {
    name: "Advanced Drug Delivery Systems",
    description:
        "A comprehensive literature review exploring nanotechnology-based drug delivery platforms, their fabrication methods, drug encapsulation strategies, stability, and controlled release mechanisms.",
    course: "Advanced Drug Delivery Systems",
    result:
        "Developed a comparative understanding of five major drug delivery platforms: polymeric micelles, polymeric nanoparticles, dendrimers, liposomes, and monoclonal antibody-based delivery systems. The review examined their manufacturing methodologies, therapeutic applications, stability challenges, drug release mechanisms, and future development opportunities.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Nanomedicine",
      "Drug Delivery",
      "Nanocarriers",
      "Literature Review",
      "Polymeric Nanoparticles",
      "Liposomes",
      "Dendrimers"
    ],
    image: "/images/projects/master/cover_advanced_drug_delivery_systems.png",
    // image: "/images/projects/advanced-drug-delivery/cover.png",
    imageAlt:
        "Bright scientific illustration of polymeric micelles, polymeric nanoparticles, dendrimers, liposomes, and antibody-based drug delivery systems.",
    images: [
      {
        src: "/images/projects/master/adv_drug_delivery_pm-drug_release_ph_changes.png",
        alt: "Polymeric micelle structure and drug release mechanism",
        caption: "Polymeric micelles: self-assembly and controlled drug release"
      },
      {
        src: "/images/projects/master/adv_drug_delivery_pnps-solvent_evaporation.png",
        alt: "Schematic representation of polymeric nanoparticle fabrication methods",
        caption: "Fabrication strategies for polymeric nanoparticles"
      },
      {
        src: "/images/projects/master/adv_drug_delivery_den-self_assembly_drugloading.png",
        alt: "Dendrimer structure and drug encapsulation",
        caption: "Dendritic nanocarriers and their drug-loading capabilities"
      },
      {
        src: "/images/projects/master/adv_drug_delivery_lipo-basic_structure.png",
        alt: "Liposome structure and preparation techniques",
        caption: "Liposomes: structure, preparation and drug encapsulation"
      },
      {
        src: "/images/projects/master/adv_drug_delivery_mab-schema_antibody_cytotoxic_agent.png",
        alt: "Monoclonal antibody-based drug delivery and antibody-drug conjugates",
        caption: "Antibody-based targeted drug delivery"
      }
    ],
    category: ["Research", "Master"],
    slug: "advanced-drug-delivery-systems",
    highlights: [
      "Compared five nanocarrier platforms: micelles, nanoparticles, dendrimers, liposomes and antibodies",
      "Reviewed fabrication methods and drug encapsulation strategies",
      "Assessed stability challenges and controlled, stimuli-responsive release",
    ],
    details: [
      "Comprehensive review of five nanoscale drug delivery platforms",
      "Analysis of nanocarrier synthesis and manufacturing methodologies",
      "Evaluation of drug encapsulation and loading strategies",
      "Comparison of physicochemical and biological stability challenges",
      "Examination of controlled and stimuli-responsive drug release",
      "Exploration of therapeutic applications and future developments"
    ],
    paragraphs: [
      "This project involved an extensive literature review of advanced drug delivery systems based on nanotechnology. The objective was to understand how nanoscale carriers can improve the therapeutic performance of pharmaceutical compounds by enhancing drug solubility, protecting active ingredients, controlling drug release, and facilitating targeted delivery.",
      "Five major delivery platforms were investigated: polymeric micelles, polymeric nanoparticles, dendrimers, liposomes, and monoclonal antibody-based delivery systems. For each platform, the review examined its structural characteristics, fabrication methodologies, therapeutic applications, stability considerations, and drug release mechanisms.",
      "Particular attention was given to manufacturing techniques, including self-assembly, solvent evaporation, nanoprecipitation, dialysis, lipid-based microfluidic production, and antibody engineering. The review also explored the challenges associated with biological stability, protein corona formation, scalability, toxicity, and clinical translation.",
      "The work highlighted the potential of nanocarrier technologies to improve targeted and controlled drug delivery while identifying important challenges that remain before their broader clinical application."
    ],
    context:
        "Academic literature review completed at KU Leuven as part of the Advanced Drug Delivery Systems course. The report was authored by Daniel Correa Rosales.",
    tools: [
      "Scientific literature research",
      "Critical literature analysis",
      "Scientific writing",
      "Comparative technology assessment",
      "Nanomedicine",
      "Drug delivery systems"
    ],
    date: new Date(2024, 11, 31)
  },
  {
    name: "Cryogenic Electron Microscopy for DNA Technology",
    description:
        "A technical literature review investigating the application of cryogenic electron microscopy (Cryo-EM) for structural characterization and validation of DNA and RNA nanostructures.",
    course: "Characterization and Manipulation at the Nanoscale",
    result:
        "Explored how Cryo-EM enables near-atomic-resolution structural analysis of nucleic acid nanostructures. The review examined sample vitrification, single-particle analysis, 3D reconstruction, structural validation of DNA and RNA assemblies, and the use of DNA origami superlattices to improve Cryo-EM sample preparation.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Cryo-EM",
      "DNA Nanotechnology",
      "Structural Characterization",
      "RNA Nanotechnology",
      "DNA Origami",
      "Nanotechnology",
      "Literature Review"
    ],
    image: "/images/projects/master/cover_cryo_em_dna_technology.png",
    // image: "/images/projects/cryo-em-dna/cover.png",
    imageAlt:
        "Bright scientific illustration of a cryogenic electron microscope, vitrified sample grid, and DNA origami nanostructures.",
    images: [
      {
        src: "/images/projects/master/characterization_cryo_em_cryoem_workflow.jpg",
        alt: "Cryo-EM sample preparation, imaging and 3D reconstruction workflow",
        caption: "Cryo-EM workflow: vitrification, image acquisition and 3D reconstruction"
      },
      {
        src: "/images/projects/master/characterization_cryo_em_DNA_coating.jpeg",
        alt: "DNA nanostructures and molecular architecture",
        caption: "Structural characterization of DNA nanostructures"
      },
      // {
      //   src: "/images/projects/master/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
      //   alt: "DNA origami superlattice used as a support platform for Cryo-EM",
      //   caption: "DNA origami superlattices for improved Cryo-EM sample preparation"
      // }
    ],
    category: ["Research", "Master"],
    slug: "cryo-em-dna-technology",
    highlights: [
      "Reviewed Cryo-EM principles, vitrification and single-particle analysis",
      "Examined structural validation of DNA and RNA nanostructures",
      "Explored DNA origami superlattices as Cryo-EM support platforms",
    ],
    details: [
      "Review of Cryo-EM principles and structural characterization",
      "Analysis of vitrification and cryogenic sample preparation",
      "Study of single-particle analysis and 3D reconstruction",
      "Evaluation of DNA and RNA nanostructure characterization",
      "Exploration of structural deviations in DNA origami designs",
      "Investigation of DNA origami-based support platforms for Cryo-EM"
    ],
    paragraphs: [
      "This project investigated the role of cryogenic electron microscopy (Cryo-EM) in the structural characterization of DNA and RNA nanotechnology. As nucleic acid nanostructures become increasingly complex, accurate three-dimensional characterization is essential for validating their molecular architecture and understanding their behavior.",
      "The review examined the fundamental principles of Cryo-EM, including cryogenic sample preparation, vitrification, electron microscopy imaging, and single-particle analysis. Particular attention was given to how rapid freezing preserves biological samples in a near-native hydrated state and enables the reconstruction of high-resolution three-dimensional structures.",
      "The application of Cryo-EM to DNA and RNA nanostructures was explored through examples of structural validation, conformational flexibility, folding pathways, and deviations between computational designs and experimentally observed structures. The review also considered how Cryo-EM can reveal structural details that are difficult to identify using conventional characterization techniques.",
      "An additional focus was the integration of DNA origami with Cryo-EM sample preparation. The work examined DNA origami superlattices as programmable support structures capable of capturing and concentrating membrane vesicles on microscopy grids, potentially improving sample distribution and purification.",
      "Overall, the project highlighted the complementary relationship between structural characterization and DNA nanotechnology, demonstrating how advanced imaging techniques can support the development and refinement of molecular nanodevices."
    ],
    context:
        "Collaborative academic report completed with Samuel Dynako as part of the Characterization and Manipulation at the Nanoscale course. The report was authored by Daniel Correa Rosales and Samuel Dynako.",
    tools: [
      "Scientific literature research",
      "Cryogenic electron microscopy",
      "Structural characterization",
      "Single-particle analysis",
      "DNA nanotechnology",
      "DNA origami",
      "Scientific writing",
      "Critical literature analysis"
    ],
    date: new Date(2026, 0, 19),
    coauthors:["Samuel Dynako"]

  },
  {
    name: "Living Machines Against Pneumonia: Biomimetic Magnetobacterial Microrobots",
    description:
        "A scientific research analysis exploring a biohybrid microrobotic platform for targeted pneumonia treatment through magnetic propulsion, biomimetic cell membranes, and curcumin-loaded nanoparticles.",
    course: "Micro and Nanobioengineering",
    result:
        "Analyzed a proposed magnetobacterial microrobot platform combining active magnetic propulsion, biomimetic pathogen and cytokine neutralization, and localized drug delivery. The review examined reported experimental findings related to pulmonary retention, mucus penetration, inflammatory regulation, therapeutic performance, and preclinical biosafety.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Micro and Nanobioengineering",
      "Microrobotics",
      "Nanomedicine",
      "Magnetic Nanotechnology",
      "Biomimetic Systems",
      "Targeted Drug Delivery",
      "Research Analysis"
    ],
    image: "/images/projects/master/cover_magnetobacterial_microrobots_pneumonia.png",
    // image: "/images/projects/magnetobacterial-microrobots/cover.png",
    imageAlt:
        "Bright scientific illustration of a magnetotactic bacterial microrobot carrying therapeutic nanoparticles toward infected lung tissue under magnetic guidance.",
    images: [
      {
        src: "/images/projects/master/bionanoeng_living_machines_nanorobot_process_1.png",
        alt: "Fabrication process of the CurNPs@2TM-AMB-1 magnetobacterial microrobot",
        caption: "Fabrication of the biomimetic magnetobacterial microrobot"
      },
      {
        src: "/images/projects/master/bionanoeng_living_machines_ar_1.png",
        alt: "Microscopy characterization of magnetotactic bacteria and the assembled microrobot",
        caption: "Microscopic characterization of the biohybrid microrobot"
      },
      {
        src: "/images/projects/master/bionanoeng_living_machines_amb_magnetosomes.jpg",
        alt: "Microscopy characterization of magnetotactic bacteria and the assembled microrobot",
        caption: "Microscopic characterization of the biohybrid microrobot"
      },
      {
        src: "/images/projects/master/bionanoeng_living_machines_ar_trajectory.jpg",
        alt: "Magnetic-field-dependent microrobot propulsion and trajectory",
        caption: "Magnetic actuation and controlled microrobot movement"
      },
      {
        src: "/images/projects/master/bionanoeng_living_machines_ar_full_1.png",
        alt: "Schematic of microrobot application for targeted pneumonia treatment",
        caption: "Proposed pulmonary application of the microrobotic platform"
      }
    ],
    category: ["Research", "Master"],
    slug: "magnetobacterial-microrobots-pneumonia",
    highlights: [
      "Analyzed a magnetotactic bacteria-based microrobot for pulmonary delivery",
      "Reviewed magnetic propulsion and hybrid cell membrane functionalization",
      "Assessed curcumin-loaded nanoparticle delivery and mucus penetration",
      "Identified preclinical limits and translation challenges",
    ],
    details: [
      "Analysis of a biohybrid magnetobacterial microrobot platform",
      "Study of magnetotactic bacteria and magnetic propulsion",
      "Examination of hybrid cell membrane functionalization",
      "Analysis of curcumin-loaded nanoparticle drug delivery",
      "Evaluation of pulmonary retention and mucus penetration",
      "Review of experimental therapeutic and immunomodulatory findings",
      "Assessment of preclinical limitations and clinical translation challenges"
    ],
    paragraphs: [
      "This project explored an emerging micro and nanobioengineering approach for pneumonia treatment based on biomimetic magnetobacterial microrobots. The report analyzed the CurNPs@2TM-AMB-1 system, a biohybrid platform combining magnetotactic bacteria, hybrid cell membrane coatings, and curcumin-loaded human serum albumin nanoparticles.",
      "The microrobot uses the natural magnetic properties of the bacterium Magnetospirillum magneticum AMB-1 to respond to externally applied rotating magnetic fields. This enables controlled propulsion and directional movement, offering an active transport mechanism that differs from conventional passive nanoparticle delivery.",
      "The analysis examined the role of the hybrid cell membrane coating, which combines macrophage-derived membrane components and ACE2-expressing cell membrane components. These biological interfaces provide the reported ability to interact with inflammatory cytokines and viral particles. The platform also incorporates curcumin-loaded nanoparticles intended to support localized anti-inflammatory and immunomodulatory activity.",
      "The report evaluated experimental findings concerning magnetic propulsion, pulmonary retention, mucus penetration, pseudovirus and cytokine neutralization, inflammatory regulation, and macrophage polarization. Particular attention was given to the reported advantages of magnetic actuation compared with passive delivery approaches.",
      "Finally, the project critically examined the limitations of the platform, including the challenges of translating magnetic navigation to human-scale applications, long-term biosafety, repeated administration, manufacturing complexity, and the need for further validation in clinically relevant infection models.",
      "The work highlighted the potential of combining living biological propulsion systems with nanomedicine to develop active, targeted therapeutic platforms, while recognizing that the technology remains at the preclinical research stage."
    ],
    context:
        "Collaborative academic report completed with Vivek Kiran Ballakur as part of the Micro and Nanobioengineering course. The report was authored by Daniel Correa Rosales and Vivek Kiran Ballakur. The work is an analysis of previously published experimental research, not an independently conducted microrobot fabrication or testing study.",
    tools: [
      "Scientific literature research",
      "Critical analysis of experimental research",
      "Micro and nanobioengineering",
      "Magnetotactic bacteria",
      "Magnetic propulsion",
      "Biomimetic nanotechnology",
      "Targeted drug delivery",
      "Scientific writing"
    ],
    date: new Date(2026, 4, 21),
    coauthors:["Vivek Kiran"]

  },
  {
    name: "XRD and EDS Simulation Study of Cu and Ni Nanoparticles",
    description:
        "Computational modeling and characterization study of copper and nickel nanoparticles using crystallographic modeling, X-ray diffraction (XRD) simulations, and energy-dispersive X-ray spectroscopy (EDS) simulations.",
    course: "Nanomaterials Characterization",
    result:
        "Developed atomic models of copper and nickel nanoparticles with face-centered cubic (FCC) structures and generated simulated XRD and EDS spectra. Compared the simulated results with experimental data from scientific literature, identifying characteristic diffraction peaks, elemental transitions, and limitations associated with ideal computational models.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Computational Materials Science",
      "Nanoparticles",
      "XRD",
      "EDS",
      "Crystallography",
      "Copper",
      "Nickel",
      "Avogadro",
      "GDIS",
      "NIST DTSA-II"
    ],
    image: "/images/projects/bachelor/cover_cu_ni_nanoparticle_xrd_eds.png",
    // image: "/images/projects/cu-ni-nanoparticles/cover.png",
    imageAlt:
        "Bright scientific illustration of copper and nickel nanoparticle crystal structures with simulated XRD diffraction patterns and EDS spectra.",
    images: [
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Cu_Avogadrounitfull cut.png",
        alt: "Copper  FCC crystal structures modeled using Avogadro",
        caption: "Atomic modeling of copper  crystal structure"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Ni_unitfull cut.png",
        alt: "Nickel FCC crystal structures modeled using Avogadro",
        caption: "Atomic modeling of nickel crystal structure"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Cu_GDIS.png",
        alt: "Simulated X-ray diffraction spectra for copper",
        caption: "Simulated XRD patterns for copper using GDIS"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Ni_GDIS.png",
        alt: "Simulated X-ray diffraction spectra for copper and nickel",
        caption: "Simulated XRD patterns for nickel using GDIS"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Cu_Comparison.png",
        alt: "Comparison of simulated and experimental XRD spectra",
        caption: "Comparison between computational and experimental XRD results on copper"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_Ni_Comparison.png",
        alt: "Comparison of simulated and experimental XRD spectra",
        caption: "Comparison between computational and experimental XRD results on nickel"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_cu_sim_exp.png",
        alt: "Comparison of simulated and experimental EDS spectra",
        caption: "EDS simulation and experimental spectrum comparison on copper using NIST-DTSA II"
      },
      {
        src: "/images/projects/bachelor/spectroscopy2_np_cu_ni_ni_sim_exp.png",
        alt: "Comparison of simulated and experimental EDS spectra",
        caption: "EDS simulation and experimental spectrum comparison on nickel using NIST-DTSA II"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "cu-ni-nanoparticles-xrd-eds-simulation",
    highlights: [
      "Modeled FCC copper and nickel crystal structures in Avogadro",
      "Simulated XRD patterns with GDIS using Bragg's law and Miller indices",
      "Simulated EDS spectra with NIST DTSA-II and compared them with literature",
      "Noted computational limits and material impurities",
    ],
    details: [
      "Construction of copper and nickel atomic models using Avogadro",
      "Modeling of face-centered cubic (FCC) crystal structures",
      "Simulation of XRD patterns using GDIS",
      "Application of Bragg's law and Miller indices",
      "Calculation of interplanar distances and diffraction angles",
      "EDS spectrum simulation using NIST DTSA-II",
      "Comparison of simulated spectra with experimental literature data",
      "Analysis of computational limitations and material impurities"
    ],
    paragraphs: [
      "This project focused on the computational modeling and characterization of copper and nickel nanoparticles using different scientific simulation tools. The objective was to investigate how computational methods can support the analysis of nanomaterials and provide preliminary characterization information without requiring access to expensive experimental instrumentation.",
      "The first stage involved constructing atomic models of copper and nickel using Avogadro. Both materials were modeled according to their face-centered cubic (FCC) crystal structures, using lattice parameters of 3.61 Å for copper and 3.52 Å for nickel. Different unit-cell configurations were explored to understand the relationship between atomic arrangement and crystallographic representation.",
      "X-ray diffraction patterns were subsequently simulated using GDIS. Bragg's law and Miller indices were used to identify the expected diffraction peaks and calculate interplanar distances and corresponding diffraction angles. The simulated spectra were compared with experimental XRD data extracted from scientific publications, allowing the identification of peak shifts and differences in relative intensities.",
      "The elemental characterization was further investigated through energy-dispersive X-ray spectroscopy (EDS) simulations using NIST DTSA-II. Copper and nickel spectra were generated under defined electron-beam and detector conditions and compared with experimental reference spectra.",
      "The comparison demonstrated that computational simulations can reproduce important spectral characteristics under ideal conditions. However, discrepancies associated with peak positions, intensities, and environmental impurities highlighted the limitations of simplified models and the importance of considering real experimental conditions.",
      "The project provided practical experience in computational crystallography, atomic-scale modeling, spectral analysis, and the interpretation of material characterization data."
    ],
    context:
        "Collaborative scientific research report completed at Yachay Tech University, School of Physical Sciences and Nanotechnology, with Johanna Pilicita and Mateo Narváez. The work focused on computational simulations and comparison with previously published experimental results rather than the physical synthesis of nanoparticles.",
    tools: [
      "Avogadro",
      "GDIS",
      "NIST DTSA-II",
      "WebPlotDigitizer",
      "X-ray Diffraction (XRD)",
      "Energy-Dispersive X-ray Spectroscopy (EDS)",
      "Bragg's Law",
      "Miller Indices",
      "Computational Modeling",
      "Crystallographic Analysis",
      "Scientific Literature Research"
    ],
    date: new Date(2020, 7, 15),
    coauthors:["Johanna Pilicita", "Mateo Narváez"]

  },
  {
    name: "Electronic Properties and Tunable Band Gap in Bilayer Graphene",
    description:
        "Theoretical investigation of the electronic properties of bilayer graphene using the tight-binding model, focusing on its Hamiltonian formulation, low-energy band structure, interlayer coupling, and electrically tunable band gap.",
    course: "Solid State Physics II",
    result:
        "Developed a theoretical description of bilayer graphene using a four-component tight-binding Hamiltonian and its reduction to an effective two-component Hamiltonian. Analyzed the influence of interlayer coupling and layer asymmetry on electronic dispersion, demonstrating how an external potential difference can open a tunable band gap between the conduction and valence bands.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Solid State Physics",
      "Graphene",
      "Condensed Matter Physics",
      "Quantum Mechanics",
      "Tight-Binding Model",
      "Band Structure",
      "Hamiltonian",
      "Electronic Properties",
      "Nanomaterials"
    ],
    image: "/images/projects/bachelor/cover_bilayer_graphene_tunable_band_gap.png",
    // image: "/images/projects/bilayer-graphene/cover.png",
    imageAlt:
        "Bright scientific illustration of Bernal-stacked bilayer graphene under a perpendicular electric field, with a conceptual tunable electronic band-gap diagram.",
    images: [
      {
        src: "/images/projects/bachelor/solid_state_physics2_bilayer_graphen_bg2.PNG",
        alt: "Bernal-stacked bilayer graphene crystal structure",
        caption: "AB-stacked bilayer graphene and interlayer coupling"
      },
      // {
      //   src: "/images/projects/bachelor/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
      //   alt: "Four-component tight-binding Hamiltonian for bilayer graphene",
      //   caption: "Mathematical formulation of the bilayer graphene Hamiltonian"
      // },
      {
        src: "/images/projects/bachelor/solid_state_physics2_bilayer_graphen_energybands.png",
        alt: "Electronic dispersion and low-energy bands of bilayer graphene",
        caption: "Low-energy electronic band structure"
      },
      {
        src: "/images/projects/bachelor/solid_state_physics2_bilayer_graphen_bg3.PNG",
        alt: "Electronic band structure showing a gap induced by layer asymmetry",
        caption: "Opening a tunable band gap through interlayer potential asymmetry"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "bilayer-graphene-electronic-properties",
    highlights: [
      "Built a tight-binding model of Bernal-stacked bilayer graphene",
      "Derived an effective two-component Hamiltonian from a four-component one",
      "Analyzed low-energy dispersion and band-gap opening from layer asymmetry",
    ],
    details: [
      "Study of graphene crystal structures and Bernal stacking",
      "Development of the tight-binding model",
      "Formulation of a four-component Hamiltonian",
      "Analysis of intralayer and interlayer electronic coupling",
      "Derivation of an effective two-component Hamiltonian",
      "Investigation of low-energy electronic dispersion",
      "Analysis of layer asymmetry and band-gap opening",
      "Study of electrical control of electronic properties"
    ],
    paragraphs: [
      "This project investigated the electronic properties of bilayer graphene through a theoretical framework based on the tight-binding model. The study focused on understanding how the interaction between two graphene layers modifies the electronic band structure and creates opportunities for controlling the material's electronic properties.",
      "The theoretical development began with the tight-binding approximation, describing electron behavior through atomic orbitals and their interactions within a periodic crystal lattice. Bilayer graphene was modeled using two coupled hexagonal lattices arranged in Bernal (AB) stacking, considering the four inequivalent atomic sites across the two layers.",
      "A four-component Hamiltonian was formulated to describe the electronic interactions within and between the graphene sheets. The analysis considered the intralayer coupling parameter γ₀ and the interlayer coupling parameter γ₁, which govern electron hopping between neighboring atomic sites.",
      "The study then examined the low-energy electronic bands and derived an effective two-component Hamiltonian using a Schrieffer-Wolff transformation. This reduction simplified the mathematical description by focusing on the low-energy electronic states associated with the non-dimer sites.",
      "A central aspect of the project was the investigation of the tunable band gap. By introducing an asymmetry between the electrical potentials of the two graphene layers, the inversion symmetry of the system can be broken, resulting in an energy gap between the conduction and valence bands. The magnitude of this gap can be controlled through an externally applied gate potential.",
      "The project demonstrated the relationship between crystal structure, quantum mechanical interactions, and electronic properties, highlighting the potential of bilayer graphene for applications in nanoelectronics and electronic devices with tunable properties."
    ],
    context:
        "Collaborative theoretical physics report completed with Byron Caiza at Yachay Tech University as part of Solid State Physics II. The report was dated July 21, 2020 and focused on the theoretical derivation and analysis of bilayer graphene electronic properties.",
    tools: [
      "Tight-Binding Model",
      "Quantum Mechanics",
      "Solid State Physics",
      "Hamiltonian Formulation",
      "Matrix Algebra",
      "Eigenvalue Analysis",
      "Schrieffer-Wolff Transformation",
      "Band Structure Analysis",
      "Brillouin Zone",
      "Theoretical Modeling",
      "Scientific Writing"
    ],
    date: new Date(2020, 6, 21),
    coauthors:["Byron Caiza"]
  },
  // {
  //   name: "Synthesis and Characterization of Co₃O₄ Nanowires Using SBA-15",
  //   description:
  //       "A scientific literature review investigating the template-assisted synthesis of cobalt oxide nanowires using mesoporous silica SBA-15, including synthesis mechanisms, structural characterization techniques, and potential applications in gas sensing and catalysis.",
  //   course: "Materials Science",
  //   result:
  //       "Developed a proposed synthesis and characterization framework for Co₃O₄ nanowires using SBA-15 as a mesoporous silica template. Evaluated the role of pore structure in controlling nanowire dimensions and reviewed characterization techniques including nitrogen adsorption, EDX, XRD, XPS, SEM, and vibrating sample magnetometry (VSM). The review highlighted the potential of porous cobalt oxide nanowires for gas sensing applications, particularly ethanol detection.",
  //   link: "#",
  //   isExternalLink: false,
  //   tag: [
  //     "Materials Science",
  //     "Nanowires",
  //     "Cobalt Oxide",
  //     "Co₃O₄",
  //     "SBA-15",
  //     "Mesoporous Materials",
  //     "Nanomaterial Synthesis",
  //     "Gas Sensors",
  //     "Characterization"
  //   ],
  //   image: "/images/gallery-1.jpg",
  //   // image: "/images/projects/co3o4-nanowires/cover.png",
  //   imageAlt:
  //       "Conceptual illustration of cobalt oxide nanowires grown within mesoporous SBA-15 silica",
  //   images: [
  //     {
  //       src: "/images/projects/bachelor/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Hexagonal mesoporous silica SBA-15 structure and pore arrangement",
  //       caption: "SBA-15 as a template for controlled nanowire growth"
  //     },
  //     {
  //       src: "/images/projects/bachelor/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Schematic of template-assisted Co3O4 nanowire synthesis",
  //       caption: "Proposed synthesis route using mesoporous silica"
  //     },
  //     {
  //       src: "/images/projects/bachelor/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Overview of structural and chemical characterization methods",
  //       caption: "Characterization strategies for cobalt oxide nanowires"
  //     },
  //     {
  //       src: "/images/projects/bachelor/nanosensors_gas_sensor_resistance_evol_co2_pulses_rh22_temp23.png",
  //       alt: "Comparison of ethanol gas sensing response between Co3O4 nanowires and bulk material",
  //       caption: "Gas-sensing performance of porous Co3O4 nanowires"
  //     }
  //   ],
  //   category: ["Research", "Bachelor"],
  //   slug: "co3o4-nanowires-sba15",
  //   details: [
  //     "Review of template-assisted nanowire synthesis",
  //     "Study of mesoporous silica SBA-15 structure and properties",
  //     "Analysis of pore-controlled nanowire growth",
  //     "Review of Co₃O₄ synthesis through chemical impregnation and calcination",
  //     "Evaluation of nitrogen adsorption and BET surface-area analysis",
  //     "Study of EDX, XRD, XPS and SEM characterization techniques",
  //     "Review of magnetic characterization using VSM",
  //     "Investigation of gas sensing and catalytic applications"
  //   ],
  //   paragraphs: [
  //     "This project consisted of a scientific literature review focused on the synthesis and characterization of cobalt oxide (Co₃O₄) nanowires using mesoporous silica SBA-15 as a structural template. The objective was to understand how template-assisted synthesis can be used to control the dimensions and morphology of one-dimensional nanomaterials.",
  //     "The review first examined the structural properties of SBA-15, a mesoporous silica material characterized by an ordered hexagonal pore arrangement, high surface area, and adjustable pore dimensions. These properties make it a suitable template for the controlled formation of nanostructures.",
  //     "The proposed synthesis approach involved introducing cobalt precursor compounds into the SBA-15 porous structure, followed by thermal treatment and removal of the silica template. This process, commonly referred to as nanocasting, enables the formation of cobalt oxide structures that replicate the geometry of the original mesoporous channels.",
  //     "The project also evaluated the characterization techniques required to verify the structure and properties of the resulting material. Nitrogen adsorption measurements were considered for determining pore-size distribution and specific surface area, while EDX, XRD, XPS, and SEM were reviewed for investigating elemental composition, crystallinity, chemical states, and morphology. Vibrating sample magnetometry (VSM) was included to study the magnetic behavior of the material.",
  //     "Finally, the review explored potential technological applications of Co₃O₄ nanowires, particularly in heterogeneous catalysis, electrochemical devices, and gas sensing. Particular attention was given to reported ethanol sensing results, where porous cobalt oxide nanowires demonstrated substantially higher sensitivity than bulk Co₃O₄.",
  //     "The project provided a broad understanding of the relationship between template structure, synthesis conditions, nanoscale morphology, and functional properties, emphasizing the importance of combining synthesis strategies with complementary characterization techniques."
  //   ],
  //   context:
  //       "Collaborative bibliographical review completed at Yachay Tech University with Carlos Mendoza Ochoa, Cristina Vaca Chanatasig, and María Paula Ayala. Compiled on June 12, 2020. The work developed a theoretical synthesis and characterization framework based on previously published research; it did not report independent experimental synthesis of Co₃O₄ nanowires.",
  //   tools: [
  //     "Scientific Literature Research",
  //     "Template-Assisted Synthesis",
  //     "Mesoporous Materials",
  //     "SBA-15",
  //     "Nanocasting",
  //     "Nitrogen Adsorption",
  //     "BET Surface Area Analysis",
  //     "Energy-Dispersive X-ray Spectroscopy (EDX)",
  //     "X-ray Diffraction (XRD)",
  //     "X-ray Photoelectron Spectroscopy (XPS)",
  //     "Scanning Electron Microscopy (SEM)",
  //     "Vibrating Sample Magnetometry (VSM)",
  //     "Gas Sensing Analysis"
  //   ],
  //   date: new Date(2020, 5, 12),
  //   coauthors: ["Carlos Mendoza Ochoa", "Cristina Vaca Chanatasig", "María Paula Ayala",]
  // },
  {
    name: "Optical Band Gap Measurement of CdSO₄",
    description:
        "Experimental determination of the optical band gap of cadmium sulfate (CdSO₄) through optical spectroscopy, absorption coefficient calculations, and Tauc plot analysis.",
    course: "Semiconductor Physics Laboratory",
    result:
        "Determined an optical band gap of 2.39628 eV for the CdSO₄ sample by measuring incident, reflected, and transmitted light using a spectrometer. Calculated the absorption coefficient and constructed a Tauc plot, using linear extrapolation to estimate the band gap.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Semiconductor Physics",
      "Band Gap",
      "Optical Characterization",
      "Spectroscopy",
      "Tauc Plot",
      "Absorption Coefficient",
      "CdSO₄",
      "Data Analysis"
    ],
    image: "/images/projects/bachelor/cover_cdso4_optical_band_gap.png",
    // image: "/images/projects/band-gap-measurement/cover.png",
    imageAlt: "Bright scientific illustration of an optical spectroscopy setup measuring a CdSO₄ crystal, with absorption and Tauc plot insets.",
    images: [
      {
        src: "/images/projects/bachelor/semiconductors_bandgap_measure_direc_indirect_bandgap.png",
        alt: "Spectrometer setup for measuring incident, reflected and transmitted light",
        caption: "Direct and indirect bandgaps."
      },
      {
        src: "/images/projects/bachelor/semiconductors_bandgap_measure_tauc_plot.png",
        alt: "Tauc plot showing experimental data and linear extrapolation",
        caption: "Tauc plot and band gap estimation"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "optical-band-gap-measurement-cdso4",
    highlights: [
      "Measured incident, reflected and transmitted light from CdSO₄",
      "Calculated the optical absorption coefficient",
      "Built Tauc plots to identify direct and indirect transitions",
      "Determined the optical band gap by linear extrapolation",
    ],
    details: [
      "Optical characterization of CdSO₄",
      "Measurement of incident, reflected and transmitted light",
      "Calculation of optical absorption coefficient",
      "Analysis of direct and indirect band gap transitions",
      "Construction of Tauc plots",
      "Linear regression and extrapolation",
      "Determination of optical band gap energy"
    ],
    paragraphs: [
      "This laboratory project focused on the experimental determination of the optical band gap of cadmium sulfate (CdSO₄), investigating the relationship between photon absorption and electronic transitions in semiconductor materials.",
      "The experimental procedure involved measuring the incident, reflected, and transmitted light beams passing through the sample using a spectrometer. These measurements were used to calculate the optical absorption coefficient, which describes the attenuation of light as it travels through the material.",
      "Using the calculated absorption coefficient, a Tauc plot was constructed to investigate the optical transition and estimate the energy required for electrons to move from the valence band to the conduction band. For the CdSO₄ sample, the analysis considered a permitted direct transition.",
      "The linear region of the Tauc plot was extrapolated to determine the intersection with the photon energy axis. This yielded an estimated optical band gap of 2.39628 eV.",
      "The experiment provided practical experience in optical spectroscopy, semiconductor characterization, absorption analysis, and the application of mathematical models to determine fundamental electronic properties."
    ],
    context:
        "Individual semiconductor physics laboratory report completed by Daniel Correa on July 12, 2020. The report documents optical band gap characterization of a CdSO₄ sample.",
    tools: [
      "Optical Spectrometer",
      "Optical Characterization",
      "Absorption Coefficient Analysis",
      "Tauc Plot",
      "Linear Extrapolation",
      "Data Analysis",
      "Semiconductor Physics"
    ],
    date: new Date(2020, 6, 12)
  },
  {
    name: "Photoconductivity Characterization of N-Type Silicon",
    description:
        "Experimental investigation of photoconductivity in an n-type silicon semiconductor by studying the voltage generated through photon-induced electron-hole pair generation as a function of illumination position.",
    course: "Semiconductor Physics Laboratory",
    result:
        "Measured the voltage response of an illuminated n-type silicon sample at different distances from the electrical contacts. Applied exponential fitting to the experimental data, obtaining V(x) = 174.195e^(-0.877015x), with x expressed in millimeters, and analyzed the reduction in electrical response as the illumination point moved away from the contacts.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Semiconductor Physics",
      "Photoconductivity",
      "Silicon",
      "Electron-Hole Pairs",
      "Optoelectronics",
      "Experimental Physics",
      "Oscilloscope",
      "Data Fitting"
    ],
    image: "/images/projects/bachelor/cover_photoconductivity_n_type_silicon.png",
    // image: "/images/projects/photoconductivity/cover.png",
    imageAlt: "Bright scientific illustration of laser illumination on an n-type silicon sample, with an optical chopper, oscilloscope response, and exponential voltage-distance plot.",
    images: [
      {
        src: "/images/projects/bachelor/semiconductors_photoconductivity_Setup.png",
        alt: "Experimental setup with silicon sample, laser, optical chopper and oscilloscope",
        caption: "Photoconductivity measurement setup"
      },
      {
        src: "/images/projects/bachelor/semiconductors_photoconductivity_plotvoltagedistance.png",
        alt: "Experimental voltage measurements and exponential fitting as a function of distance",
        caption: "Voltage response as a function of illumination distance"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "photoconductivity-n-type-silicon",
    highlights: [
      "Measured photoconductivity of n-type silicon with a laser and optical chopper",
      "Recorded voltage responses with an oscilloscope",
      "Fitted voltage–distance data with an exponential model",
      "Assessed absorption and charge recombination effects",
    ],
    details: [
      "Experimental investigation of photoconductivity",
      "Use of n-type silicon as the semiconductor sample",
      "Laser illumination and optical chopper configuration",
      "Voltage measurements using an oscilloscope",
      "Analysis of charge carrier generation",
      "Exponential fitting of voltage-distance data",
      "Investigation of absorption and charge recombination effects"
    ],
    paragraphs: [
      "This laboratory investigated the photoconductive response of an n-type silicon sample under optical excitation. Photoconductivity occurs when incident photons with sufficient energy are absorbed by a semiconductor, generating electron-hole pairs and modifying its electrical response.",
      "The experimental setup consisted of an n-type silicon plate connected to an electrical source and an oscilloscope. A laser pointer and optical chopper were positioned above the sample to provide pulsed illumination, making it possible to observe the generated voltage signal.",
      "Measurements were performed by moving the silicon sample in increments of 0.5 mm relative to the illumination position. At each position, the voltage response was recorded using the oscilloscope and converted from the measured divisions into millivolts.",
      "The experimental data were analyzed using Mathematica and fitted to an exponential model relating voltage to distance. The resulting expression was V(x) = 174.195e^(-0.877015x), where x is measured in millimeters.",
      "The results showed a rapid decrease in the measured voltage as the illumination position moved away from the electrical contacts. This behavior was discussed in relation to the collection and recombination of photogenerated charge carriers within the semiconductor.",
      "The experiment provided practical experience in semiconductor optoelectronics, electrical measurements, experimental instrumentation, and mathematical modeling of photoconductive behavior."
    ],
    context:
        "Individual semiconductor physics laboratory report completed by Daniel Correa on July 4, 2020. The work investigated the photoconductive response of an n-type silicon sample under laser illumination.",
    tools: [
      "N-Type Silicon",
      "Laser Pointer",
      "Optical Chopper",
      "Oscilloscope",
      "Electrical Measurement",
      "Mathematica",
      "Exponential Curve Fitting",
      "Photoconductivity Analysis"
    ],
    date: new Date(2020, 6, 4)
  },
  {
    name: "Electrical Characterization of a Metal-Semiconductor Junction",
    description:
        "Experimental investigation of a metal-semiconductor contact and its rectifying behavior, focusing on Schottky diode characteristics, current-voltage measurements, and extraction of the diode ideality factor.",
    course: "Semiconductor Physics Laboratory",
    result:
        "Built a metal-semiconductor diode measurement circuit using an Arduino-based setup and collected current-voltage data. Fitted the experimental I-V response to the Shockley diode equation and obtained an ideality factor of 59.20, indicating a substantial deviation from ideal diode behavior, potentially associated with poor electrical contact and an oxide layer at the interface.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Semiconductor Physics",
      "Metal-Semiconductor Junction",
      "Schottky Diode",
      "Arduino",
      "Current-Voltage Characteristics",
      "Shockley Equation",
      "Electrical Characterization",
      "Data Fitting"
    ],
    image: "/images/projects/bachelor/cover_metal_semiconductor_schottky_junction.png",
    // image: "/images/projects/schottky-diode/cover.png",
    imageAlt: "Bright scientific illustration of an n-type silicon Schottky contact measured with a gold probe and Arduino-based circuit, with band-bending and current-voltage plots.",
    images: [
      {
        src: "/images/projects/bachelor/semiconductors_metalsemiconductor_semiconductoresmetalsemiconductos.png",
        alt: "Experimental current-voltage curve and Shockley equation fitting",
        caption: "Metal semiconductor band structure"
      },
      {
        src: "/images/projects/bachelor/semiconductors_metalsemiconductor_fit.png",
        alt: "Experimental current-voltage curve and Shockley equation fitting",
        caption: "I-V characteristics and theoretical fitting"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "metal-semiconductor-schottky-junction",
    highlights: [
      "Built an Arduino-based voltage and current acquisition circuit",
      "Measured the I–V characteristics of the metal–semiconductor junction",
      "Fitted the Shockley diode equation to obtain the ideality factor",
      "Identified non-ideal contact behavior",
    ],
    details: [
      "Study of metal-semiconductor interfaces",
      "Analysis of Schottky and ohmic contacts",
      "Investigation of energy band alignment",
      "Experimental construction of a measurement circuit",
      "Arduino-based voltage and current acquisition",
      "Current-voltage (I-V) characterization",
      "Fitting experimental data to the Shockley diode equation",
      "Calculation of diode ideality factor",
      "Analysis of non-ideal electrical contact behavior"
    ],
    paragraphs: [
      "This laboratory focused on the electrical characterization of a metal-semiconductor junction, investigating the formation and behavior of a Schottky contact. When a metal and an n-type semiconductor come into contact, charge transfer occurs until their Fermi levels reach equilibrium, producing a space-charge region and band bending at the interface.",
      "The theoretical analysis covered the distinction between ohmic and rectifying contacts, as well as the formation of the Schottky barrier. Particular attention was given to the relationship between the metal work function, semiconductor electron affinity, and the resulting potential barrier.",
      "For the experimental component, an electrical measurement circuit was assembled using an Arduino to acquire voltage and current data from the metal-semiconductor device. The collected measurements were used to construct the current-voltage (I-V) characteristic curve.",
      "The experimental data were fitted to the Shockley diode equation to estimate the saturation current and diode ideality factor. The analysis produced an ideality factor of 59.20, significantly higher than the ideal value of approximately one.",
      "The deviation from ideal behavior was discussed in relation to possible experimental limitations, particularly poor contact between the metal and semiconductor and the presence of an oxide layer at the interface.",
      "This laboratory provided practical experience in semiconductor device physics, electrical circuit assembly, Arduino-based data acquisition, nonlinear curve fitting, and the interpretation of non-ideal diode characteristics."
    ],
    context:
        "Individual semiconductor physics laboratory report completed by Daniel Correa on July 1, 2020. The work combined theoretical analysis of Schottky junctions with experimental I-V characterization using an Arduino-based measurement setup.",
    tools: [
      "Arduino",
      "Electrical Measurement Circuit",
      "Current-Voltage Characterization",
      "Shockley Diode Equation",
      "Nonlinear Curve Fitting",
      "Semiconductor Device Physics",
      "Schottky Junction Analysis",
      "Data Acquisition"
    ],
    date: new Date(2020, 6, 1)
  },
  {
    name: "Electrical Resistivity Measurement of Silicon Using the Four-Point Probe Method",
    description:
        "Experimental determination of the electrical resistivity of a silicon sample using the four-point probe technique, including geometrical correction factors, voltage-current measurements, and analysis of measurement uncertainties and contact effects.",
    course: "Semiconductor Physics Laboratory",
    result:
        "Measured the electrical resistivity of a silicon sample using the four-point probe method. After applying geometrical correction factors and averaging measurements obtained in two current directions, calculated bulk resistivity values of 0.1314 Ω·m and 0.1244 Ω·m, respectively. The differences between measurements were associated with non-ideal electrical contact behavior.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Semiconductor Physics",
      "Silicon",
      "Electrical Resistivity",
      "Four-Point Probe",
      "Electrical Characterization",
      "Experimental Measurements",
      "Material Properties",
      "Data Analysis"
    ],
    image: "/images/projects/bachelor/cover_silicon_resistivity_four_point_probe.png",
    // image: "/images/projects/silicon-resistivity/cover.png",
    imageAlt: "Bright scientific illustration of a four-point probe measuring a silicon wafer, with separate current and voltage connections and measurement diagrams.",
    images: [
      {
        src: "/images/projects/bachelor/semiconductors_four_points_method_fourpointsmethodscheme.png",
        alt: "Schematic of the four-point probe electrical measurement technique",
        caption: "Four-point probe measurement principle"
      },
      {
        src: "/images/projects/bachelor/semiconductors_four_points_method_sislidedimension.png",
        alt: "Geometrical dimensions of the silicon sample used for correction factors",
        caption: "Silicon sample geometry"
      }
    ],
    category: ["Research", "Bachelor"],
    slug: "silicon-resistivity-four-point-probe",
    highlights: [
      "Applied the four-point probe technique to silicon",
      "Calculated geometrical correction factors for surface and bulk resistivity",
      "Compared measurements taken in opposite current directions",
      "Analyzed contact resistance and measurement deviations",
    ],
    details: [
      "Study of electrical resistivity in semiconductor materials",
      "Application of the four-point probe technique",
      "Measurement of voltage and current",
      "Analysis of silicon sample geometry",
      "Calculation of geometrical correction factors",
      "Determination of surface resistivity",
      "Calculation of bulk resistivity",
      "Comparison of measurements in opposite current directions",
      "Analysis of contact resistance and measurement deviations"
    ],
    paragraphs: [
      "This laboratory focused on determining the electrical resistivity of a silicon sample using the four-point probe technique. Resistivity is a fundamental material property that quantifies how strongly a material opposes the flow of electrical current and is particularly important in semiconductor characterization.",
      "The measurement method involved placing four equally aligned probes in contact with the surface of the silicon sample. Current was applied through the two outer probes, while the voltage difference was measured between the two inner probes. This configuration helps reduce the influence of contact resistance on the voltage measurement.",
      "The geometrical characteristics of the silicon sample were considered to calculate the appropriate correction factors. Since the sample had an approximately rectangular shape, the correction factors were obtained using the sample dimensions and reference tables from the literature.",
      "Voltage and current measurements were performed in two opposite directions, left-to-right and right-to-left. The corresponding surface resistivities were calculated and averaged using two geometrical measurements before determining the bulk resistivity.",
      "The calculated bulk resistivity was 0.1314 Ω·m for the left-to-right measurement and 0.1244 Ω·m for the opposite direction. The difference between the results was discussed in relation to non-ideal contact behavior and a small rectifying component at the probe-sample interface.",
      "The laboratory provided practical experience in electrical characterization of semiconductor materials, precision measurements, geometrical correction methods, and the evaluation of experimental uncertainties."
    ],
    context:
        "Individual semiconductor physics laboratory report completed by Daniel Correa on June 17, 2020. The work involved experimental resistivity measurements of a silicon sample using the four-point probe method.",
    tools: [
      "Four-Point Probe",
      "Silicon Sample",
      "Voltage Measurement",
      "Current Measurement",
      "Electrical Resistivity Calculations",
      "Geometrical Correction Factors",
      "Experimental Data Analysis",
      "Semiconductor Characterization"
    ],
    date: new Date(2020, 5, 17)
  },
  {
    name:
        "Experimental Investigation of Molecular Electronics through Mechanically Controlled Break Junction Measurements",
    description:
        "Experimental and theoretical investigation of electron transport through individual benzene molecules using a Mechanically Controlled Break Junction (MCBJ) system. The research combined nanoscale electrical measurements, quantum conductance analysis, and tight-binding modelling to investigate molecular transport properties.",
    course: "Bachelor's Thesis – Physics",
    result:
        "Successfully characterized the conductance of gold atomic contacts and detected the characteristic conductance signature of benzene molecules. Experimental measurements revealed a benzene-related conductance peak at -0.30 Log(G₀), demonstrating that the MCBJ system had sufficient resolution to investigate molecular-scale electronic transport.",
    link: "#",
    isExternalLink: false,
    tag: [
      "Molecular Electronics",
      "Nanotechnology",
      "Quantum Transport",
      "Mechanically Controlled Break Junction",
      "MCBJ",
      "Single-Molecule Conductance",
      "Benzene",
      "Gold Electrodes",
      "Tight-Binding Model",
      "Electron Transmission",
      "Experimental Physics",
      "Data Analysis"
    ],
    image: "/images/projects/bachelor/cover_molecular_electronics_benzene_mcbj.png",
    imageAlt:
        "Benzene molecule connected between gold nanoelectrodes in a mechanically controlled break junction, with illustrative conductance traces and histogram",
    images: [
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_main_head.png",
        alt: "Mechanically Controlled Break Junction experimental setup",
        caption: "Experimental MCBJ system"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_sample_ready.png",
        alt: "Mechanically Controlled Break Junction experimental setup",
        caption: "Experimental MCBJ system"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_sample_preparation2.png",
        alt: "Gold wire electrode preparation and mounting process",
        caption: "Gold electrode preparation"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_histogram_au2000tr.png",
        alt: "Experimental conductance histogram of gold atomic contacts",
        caption: "Quantum conductance of gold"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_histogram_comparison_au_au-benzene_log_white.png",
        alt: "Comparison of gold and benzene conductance histograms",
        caption: "Experimental benzene conductance signature"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_transmittatance_total_coupling_real7.png",
        alt: "Theoretical benzene transmission calculations for different electrode coupling configurations",
        caption: "Tight-binding transmission modelling"
      },
      {
        src: "/images/projects/bachelor/thesis_molecular_electronics_mcbj_benzene_perpendicular.png",
        alt: "Theoretical benzene perpendicular coupling configuration to the gold electrodes ",
        caption: "Theoretical benzene perpendicular coupling configuration to the gold electrodes"
      }
    ],
    category: ["Research", "Bachelor", "Thesis"],
    slug: "molecular-electronics-break-junction-measurements",
    highlights: [
      "Operated a Mechanically Controlled Break Junction with piezoelectric control",
      "Measured the quantum conductance of a benzene junction from about 2,000 traces",
      "Built conductance histograms of the benzene molecular junction",
      "Modelled the junction with tight-binding theory and Green's function transmission",
    ],
    details: [
      "Experimental investigation of molecular electronics",
      "Gold electrode preparation and sample mounting",
      "Mechanically Controlled Break Junction operation",
      "Piezoelectric positioning and control",
      "Electrical circuit configuration and calibration",
      "Oscilloscope and data acquisition",
      "Measurement of quantum conductance",
      "Statistical analysis of approximately 2,000 conductance traces",
      "Conductance histogram construction",
      "Benzene molecular junction characterization",
      "Tight-binding theoretical modelling",
      "Green's function and electron transmission analysis",
      "Comparison of molecular-electrode coupling configurations"
    ],
    paragraphs: [
      "Molecular electronics is an emerging field that investigates the electronic and thermal transport properties of individual molecules for the development of nanoscale electronic devices. Understanding how electrons travel through a single molecule is essential for exploring its potential as a functional component in future electronic technologies.",

      "This research focused on investigating the quantum conductance of benzene molecules using a Mechanically Controlled Break Junction (MCBJ) technique. The main objective was to evaluate the capability of the experimental system to detect molecular conductance and identify the characteristic electronic transport signature of benzene.",

      "The experimental measurements were performed using an MCBJ system equipped with gold electrodes, a piezoelectric controller, a bias voltage controller, a current-to-voltage preamplifier, an oscilloscope, and a high-resolution data acquisition system. The mechanical displacement of the substrate enabled the controlled breaking and reformation of the gold junction, allowing conductance measurements at the atomic scale.",

      "Gold wires with an ultra-high purity of 99.999% were prepared to construct the electrodes. The preparation process involved straightening the wire, creating a controlled constriction, cleaning the sample, and mounting it onto a flexible substrate. Before molecular measurements, the resolution of the MCBJ system was evaluated using open-circuit measurements, establishing a noise level of approximately 0.003 G₀.",

      "Conductance measurements of clean gold junctions were performed to establish a reference before introducing the target molecule. Approximately 2,000 conductance traces were collected and analyzed through conductance histograms. These measurements allowed the identification of characteristic gold conductance features and provided a baseline for comparison with the molecular junction results.",

      "After characterizing the clean gold junctions, a drop of benzene solution was introduced into the electrode junction. Approximately 2,000 additional conductance traces were collected and processed to construct molecular conductance histograms. The analysis revealed a characteristic benzene conductance peak at −0.30 Log(G₀), together with a shift in the gold conductance peak, indicating the presence of molecular contributions to electron transport.",

      "A tight-binding model was used to investigate the electronic structure and transmission properties of benzene connected to gold electrodes. Different molecular coupling configurations were considered, including para, meta, and ortho arrangements, as well as perpendicular configurations. The calculations showed that the perpendicular configuration exhibited higher transmission and a broader energy range than the parallel configuration within the model.",

      "The experimental results demonstrated that the MCBJ system had sufficient resolution to detect the presence of benzene and identify its characteristic conductance feature. The study combined nanoscale experimental measurements with theoretical modelling to investigate electron transport through a single molecule. This work provided practical experience in molecular electronics, nanocontact characterization, experimental data analysis, and quantum transport modelling."
    ],
    context:
        "Bachelor's thesis completed as part of the Physics degree at Universidad de Investigación de Tecnología Experimental Yachay (Yachay Tech), Ecuador. Presented in October 2021. Supervisors: Werner Bramer Escamilla, Ph.D. and Ernesto Antonio Medina Dagger, Ph.D.",
    tools: [
      "Mechanically Controlled Break Junction (MCBJ)",
      "Gold Electrodes",
      "Piezoelectric Positioning System",
      "Bias Voltage Controller",
      "I/V Preamplifier",
      "Oscilloscope",
      "Data Acquisition System",
      "LabVIEW Measurement Interface",
      "Conductance Histogram Analysis",
      "Tight-Binding Model",
      "Green's Functions",
      "Quantum Transport Analysis"
    ],
    date: new Date(2021, 9, 10),
    institution:
        "Yachay Tech – Universidad de Investigación de Tecnología Experimental"
  },
];