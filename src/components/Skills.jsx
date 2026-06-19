import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { skills, skillColorMap } from "../data/index";

const allTech = [...new Set(Object.values(skills).flatMap((s) => s.items))];

export default function Skills() {
  const [ref, visible] = useIntersection();

  return (
    <section id="skills" className="py-28 bg-dark-700" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[.2em] text-indigo-400 uppercase font-display mb-3">What I Work With</p>
          <h2 className="font-display font-bold text-white" style={{ fontSize: "clamp(30px,5vw,46px)" }}>
            Tech <span className="gradient-text">Stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([cat, { items, color }], i) => {
            const c = skillColorMap[color];
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 40 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`glass rounded-2xl p-6 border ${c.card} transition-all cursor-default`}
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border mb-5 text-xs font-semibold font-display ${c.badge}`}>
                  <span className={`w-2 h-2 rounded-full ${c.dot}`} />
                  {cat}
                </div>
                <div className="flex flex-col gap-2">
                  {items.map((skill, si) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -8 }}
                      animate={visible ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 + si * 0.05 + 0.2 }}
                      className="flex items-center gap-3 group"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} opacity-50 group-hover:opacity-100 transition-opacity`} />
                      <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scrolling tech strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 overflow-hidden"
          style={{ WebkitMask: "linear-gradient(90deg,transparent,white 8%,white 92%,transparent)" }}
        >
          <div className="flex gap-3 animate-scroll-left w-max">
            {[...allTech, ...allTech].map((t, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-5 py-2 rounded-full glass text-slate-500 text-sm border border-white/5"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
