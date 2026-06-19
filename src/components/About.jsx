import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { Briefcase, Code2, BookOpen, Coffee } from "lucide-react";
import photo from "../assets/nihal.jpeg";

const stats = [
  { icon: Briefcase, label: "Projects Built", value: "5+" },
  { icon: Code2, label: "Technologies", value: "10+" },
  { icon: BookOpen, label: "Years Learning", value: "2+" },
  { icon: Coffee, label: "Coffees", value: "∞" },
];

const floatingTags = [
  {
    text: "React.js",
    pos: "top-0 -right-6",
    color: "bg-cyan-500/15 border-cyan-500/25 text-cyan-300",
    delay: 0,
  },
  {
    text: "Node.js",
    pos: "bottom-8 -left-8",
    color: "bg-green-500/15 border-green-500/25 text-green-300",
    delay: 1.2,
  },
  {
    text: "MongoDB",
    pos: "-bottom-4 right-2",
    color: "bg-emerald-500/15 border-emerald-500/25 text-emerald-300",
    delay: 0.6,
  },
];

export default function About() {
  const [ref, visible] = useIntersection();

  const fade = (dir = "up", delay = 0) => ({
    initial: {
      opacity: 0,
      ...(dir === "left"
        ? { x: -40 }
        : dir === "right"
          ? { x: 40 }
          : { y: 30 }),
    },
    animate: visible ? { opacity: 1, x: 0, y: 0 } : {},
    transition: { duration: 0.65, delay },
  });

  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-dark-900 to-dark-700"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fade()} className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[.2em] text-indigo-400 uppercase font-display mb-3">
            Who I Am
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(30px,5vw,46px)" }}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Avatar */}
          <motion.div {...fade("left", 0.2)} className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72">
              {/* Spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #6366f1, #22d3ee, #6366f1)",
                  padding: 3,
                }}
              >
                <div className="w-full h-full rounded-full bg-dark-800" />
              </motion.div>
              {/* <div className="absolute inset-3 rounded-full bg-gradient-to-br from-indigo-700 to-cyan-700 flex items-center justify-center">
                <span className="font-display font-bold text-white" style={{ fontSize: 52 }}>FS</span>
              </div> */}

              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-indigo-700 to-cyan-700 flex items-center justify-center overflow-hidden">
                <img
  src={photo}
  alt="Company Logo"
  className="w-full h-full object-cover"
  style={{ objectPosition: "center 90%" }}
/>
              </div>
              {floatingTags.map(({ text, pos, color, delay }) => (
                <motion.div
                  key={text}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                  }}
                  className={`absolute ${pos} px-3 py-1.5 rounded-lg border text-xs font-semibold font-display ${color}`}
                >
                  {text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...fade("right", 0.3)}>
            <h3
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(20px,3vw,26px)" }}
            >
              Passionate Full Stack Developer
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-[15px]">
              I specialize in the MERN stack — MongoDB, Express.js, React, and
              Node.js — building end-to-end web solutions that are fast,
              scalable, and user-friendly.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8 text-[14px]">
              From secure payment integrations and role-based dashboards to
              responsive frontends and RESTful APIs, I bring a full-product
              perspective to every project I build.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/15 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-xl">
                      {value}
                    </p>
                    <p className="text-slate-500 text-xs">{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
