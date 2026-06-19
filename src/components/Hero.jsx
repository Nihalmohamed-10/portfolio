import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { GitFork, Globe, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      {[
        { size: 600, top: "-15%", left: "-10%", color: "rgba(99,102,241,0.12)", delay: 0 },
        { size: 400, top: "40%", right: "-5%", color: "rgba(34,211,238,0.08)", delay: 1.5 },
        { size: 280, bottom: "5%", left: "35%", color: "rgba(129,140,248,0.07)", delay: 0.8 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
          className="absolute rounded-full pointer-events-none"
          style={{ width: orb.size, height: orb.size, top: orb.top, left: orb.left, right: orb.right, bottom: orb.bottom, background: orb.color, filter: "blur(70px)" }}
        />
      ))}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass text-sm text-slate-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }}
          className="font-display font-bold leading-tight mb-6" style={{ fontSize: "clamp(44px, 9vw, 84px)" }}>
          Full Stack<br /><span className="gradient-text">Developer</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-slate-400 mb-10" style={{ fontSize: "clamp(16px, 2.5vw, 21px)", minHeight: "32px" }}>
          I build{" "}
          <TypeAnimation sequence={["scalable web applications.", 2000, "RESTful APIs.", 2000, "beautiful user interfaces.", 2000, "MERN stack solutions.", 2000]}
            wrapper="span" speed={50} repeat={Infinity} className="text-cyan-400 font-medium" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 12px 35px rgba(99,102,241,.45)" }} whileTap={{ scale: 0.97 }}
            onClick={() => go("projects")}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold font-display text-sm tracking-wide">
            View Projects
          </motion.button>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} onClick={() => go("contact")}
            className="px-8 py-4 rounded-2xl gradient-border text-slate-300 hover:text-white font-semibold font-display text-sm tracking-wide transition-all">
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3">
          {[{ icon: GitFork, href: "https://github.com/Nihalmohamed-10/", label: "GitHub" },
            { icon: Globe, href: "https://www.linkedin.com/in/nihal-mohamed-39a5b5220/", label: "LinkedIn" },
            { icon: Mail, href: "mailto:nihalmohamedmkd@gmail.com", label: "Email" }].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} whileHover={{ y: -4, scale: 1.1 }} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-all">
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600">
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
