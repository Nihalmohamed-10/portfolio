import { useState } from "react";
import { motion } from "framer-motion";
import { useIntersection } from "../hooks/useIntersection";
import { Send, GitFork, Globe, Mail } from "lucide-react";

export default function Contact() {
  const [ref, visible] = useIntersection();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="py-28 bg-dark-900" ref={ref}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-xs font-semibold tracking-[.2em] text-indigo-400 uppercase font-display mb-3">Let's Talk</p>
          <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(30px,5vw,46px)" }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-[15px] leading-relaxed mb-10">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          className="glass rounded-2xl p-8 text-left"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField label="Name" placeholder="Your name" />
              <FormField label="Email" type="email" placeholder="your@email.com" />
            </div>
            <FormField label="Subject" placeholder="What's it about?" />
            <FormField label="Message" placeholder="Tell me about your project..." textarea />

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 30px rgba(99,102,241,.4)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-semibold font-display text-sm flex items-center justify-center gap-2 transition-all"
            >
              {sent ? "Message Sent! 🚀" : <><Send size={16} /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {[
            { icon: Mail, label: "Mail me", href: "mailto:nihalmohamedmkd@gmail.com" },
            { icon: GitFork, label: "GitHub", href: "https://github.com/Nihalmohamed-10" },
            { icon: Globe, label: "LinkedIn", href: "https://www.linkedin.com/in/nihal-mohamed-39a5b5220/" },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              whileHover={{ y: -3, scale: 1.02 }}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/8 text-slate-300 hover:text-white hover:border-indigo-500/30 text-sm transition-all"
            >
              <Icon size={15} />
              {label}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FormField({ label, placeholder, type = "text", textarea }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-400 mb-1.5 font-display tracking-wide uppercase">{label}</label>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          rows={4}
          required
          className="w-full px-4 py-3 bg-white/[.04] border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/15 transition-all resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full px-4 py-3 bg-white/[.04] border border-white/10 rounded-xl text-white text-sm placeholder-slate-500 outline-none focus:border-indigo-500/60 focus:ring-2 focus:ring-indigo-500/15 transition-all"
        />
      )}
    </div>
  );
}
