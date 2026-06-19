import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useIntersection } from "../hooks/useIntersection";
import { projects } from "../data/index";
import { CheckCircle2 } from "lucide-react";

const FILTERS = ["All", "Full Stack", "Frontend"];

export default function Projects() {
  const [ref, visible] = useIntersection();
  const [filter, setFilter] = useState("All");

  const displayed =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-28 bg-gradient-to-b from-dark-700 to-dark-900"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold tracking-[.2em] text-indigo-400 uppercase font-display mb-3">
            What I've Built
          </p>

          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(30px,5vw,46px)" }}
          >
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 my-10"
        >
          {FILTERS.map((f) => (
            <motion.button
              key={f}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold font-display transition-all border ${
                filter === f
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-400 border-transparent text-white"
                  : "glass text-slate-400 border-white/10 hover:text-white"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence mode="wait">
            {displayed.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                visible={visible}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index, visible }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{
        y: -7,
        boxShadow: "0 24px 50px rgba(0,0,0,.4)",
      }}
      className="glass rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold font-display bg-black/50 backdrop-blur-sm ${p.catColor}`}
        >
          {p.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">
          {p.title}
        </h3>

        <p className="text-slate-500 text-xs mb-3">
          {p.period} · {p.type}
        </p>

        <p className="text-slate-400 text-[13px] leading-relaxed mb-4 flex-1">
          {p.desc}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 gap-1.5 mb-4">
          {p.highlights.map((h) => (
            <div
              key={h}
              className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-white/[.03] border border-white/5 rounded-md px-2.5 py-1.5"
            >
              <CheckCircle2
                size={10}
                className="text-cyan-400 flex-shrink-0"
              />
              {h}
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium font-display ${p.tagBg} ${p.tagColor}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useIntersection } from "../hooks/useIntersection";
// import { projects } from "../data/index";
// import { Upload, ExternalLink, CheckCircle2 } from "lucide-react";

// const FILTERS = ["All", "Full Stack", "Frontend"];

// export default function Projects() {
//   const [ref, visible] = useIntersection();
//   const [filter, setFilter] = useState("All");
//   const [images, setImages] = useState({});

//   const displayed = filter === "All" ? projects : projects.filter((p) => p.category === filter);

//   const handleImage = (id, file) => {
//     if (!file) return;
//     const reader = new FileReader();
//     reader.onload = (e) => setImages((prev) => ({ ...prev, [id]: e.target.result }));
//     reader.readAsDataURL(file);
//   };

//   return (
//     <section id="projects" className="py-28 bg-gradient-to-b from-dark-700 to-dark-900" ref={ref}>
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={visible ? { opacity: 1, y: 0 } : {}}
//           className="text-center mb-6"
//         >
//           <p className="text-xs font-semibold tracking-[.2em] text-indigo-400 uppercase font-display mb-3">What I've Built</p>
//           <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(30px,5vw,46px)" }}>
//             My <span className="gradient-text">Projects</span>
//           </h2>
//         </motion.div>

//         {/* Filter tabs */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={visible ? { opacity: 1 } : {}}
//           transition={{ delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-3 my-10"
//         >
//           {FILTERS.map((f) => (
//             <motion.button
//               key={f}
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               onClick={() => setFilter(f)}
//               className={`px-5 py-2 rounded-full text-sm font-semibold font-display transition-all border ${
//                 filter === f
//                   ? "bg-gradient-to-r from-indigo-500 to-cyan-400 border-transparent text-white"
//                   : "glass text-slate-400 border-white/10 hover:text-white"
//               }`}
//             >
//               {f}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
//           <AnimatePresence mode="wait">
//             {displayed.map((p, i) => (
//               <ProjectCard
//                 key={p.id}
//                 project={p}
//                 index={i}
//                 visible={visible}
//                 image={images[p.id]}
//                 onImage={(file) => handleImage(p.id, file)}
//               />
//             ))}
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project: p, index, visible, image, onImage }) {
//   const fileRef = useRef(null);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={visible ? { opacity: 1, y: 0 } : {}}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ delay: index * 0.08, duration: 0.55 }}
//       whileHover={{ y: -7, boxShadow: "0 24px 50px rgba(0,0,0,.4)" }}
//       className="glass rounded-2xl overflow-hidden flex flex-col"
//     >
//       {/* Image area */}
//       <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden flex items-center justify-center`}>
//         {image ? (
//           <img src={image} alt={`${p.title} screenshot`} className="w-full h-full object-cover" />
//         ) : (
//           <span className="text-5xl opacity-20">🖥️</span>
//         )}

//         {/* Upload overlay */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.97 }}
//           onClick={() => fileRef.current?.click()}
//           className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 border border-white/20 text-white text-xs font-medium backdrop-blur-sm hover:bg-indigo-500/60 transition-all"
//         >
//           <Upload size={12} />
//           {image ? "Change" : "Screenshot"}
//         </motion.button>
//         <input
//           ref={fileRef}
//           type="file"
//           accept="image/*"
//           className="hidden"
//           onChange={(e) => onImage(e.target.files?.[0])}
//         />

//         {/* Category badge */}
//         <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-semibold font-display bg-black/50 backdrop-blur-sm ${p.catColor}`}>
//           {p.category}
//         </div>
//       </div>

//       {/* Body */}
//       <div className="p-5 flex flex-col flex-1">
//         <h3 className="font-display font-bold text-white text-base mb-1 leading-snug">{p.title}</h3>
//         <p className="text-slate-500 text-xs mb-3">{p.period} · {p.type}</p>
//         <p className="text-slate-400 text-[13px] leading-relaxed mb-4 flex-1">{p.desc}</p>

//         {/* Highlights */}
//         <div className="grid grid-cols-2 gap-1.5 mb-4">
//           {p.highlights.map((h) => (
//             <div key={h} className="flex items-center gap-1.5 text-[11px] text-slate-400 bg-white/[.03] border border-white/5 rounded-md px-2.5 py-1.5">
//               <CheckCircle2 size={10} className="text-cyan-400 flex-shrink-0" />
//               {h}
//             </div>
//           ))}
//         </div>

//         {/* Tech tags */}
//         <div className="flex flex-wrap gap-1.5">
//           {p.tech.map((t) => (
//             <span key={t} className={`px-2.5 py-1 rounded-md text-[11px] font-medium font-display ${p.tagBg} ${p.tagColor}`}>
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }
