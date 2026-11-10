// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { Search } from "lucide-react";
// import { motion } from "framer-motion";
// import styles from "./styles.module.scss";

// export default function Hero() {
//   return (
//     <section className={styles.hero}>
//       {/* next/image instead of <img> — auto optimization, WebP, lazy load */}
//       <Image
//         src="https://images.pexels.com/photos/1456291/pexels-photo-1456291.jpeg"
//         alt="Galápagos Islands aerial view"
//         fill
//         priority         // LCP image — loads eagerly, no lazy load
//         quality={85}
//         className={styles.heroImage}
//       />

//       <div className={styles.overlay} />

//       <div className={styles.content}>
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className={styles.title}
//         >
//           Discover the{" "}
//           <span className={styles.titleAccent}>Galápagos</span> Islands
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className={styles.subtitle}
//         >
//           Book unique wildlife tours directly — no middlemen, best prices
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className={styles.searchBar}
//         >
//           <div className={styles.searchGrid}>
//             <select className={styles.select}>
//               <option>Tour Type</option>
//               <option>Wildlife</option>
//               <option>Diving</option>
//               <option>Kayaking</option>
//               <option>Cruises</option>
//             </select>

//             <select className={styles.select}>
//               <option>Duration</option>
//               <option>1 Day</option>
//               <option>2-3 Days</option>
//               <option>4-7 Days</option>
//               <option>8+ Days</option>
//             </select>

//             <select className={styles.select}>
//               <option>Travelers</option>
//               <option>1</option>
//               <option>2</option>
//               <option>3-5</option>
//               <option>6+</option>
//             </select>

//             {/* Link href — not "to", that's React Router */}
//             <Link href="/products" className={styles.searchButton}>
//               <Search size={18} />
//               Search
//             </Link>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
