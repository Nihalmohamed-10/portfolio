"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  I graduated with a Bachelor's degree in{" "}
  <span className="font-medium">Computer Science and Engineering</span> and have
  built over two years of continuous hands-on experience in{" "}
  <span className="font-medium">frontend development</span>, mainly working with
  React.js, HTML, CSS, JavaScript, and Tailwind CSS. I also have{" "}
  <span className="font-medium">one year of professional career experience</span>,
  including my work at Tefora Software Solution in India.
  <br /><br />
  Over time, I expanded my skills into{" "}
  <span className="font-medium">full-stack development</span>, working with React,
  Next.js, Node.js, Express.js, MongoDB, and React Native. I enjoy solving
  real-world problems, building clean and functional UIs, and creating smooth
  user experiences. I’m always learning new technologies and improving my craft.
  <br /><br />
  I’m currently looking for a{" "}
  <span className="font-medium">full-time opportunity</span> as a software or
  frontend developer.
</p>

{/* <p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video
  games, watching movies and anime, and taking walks to relax and refresh.
</p> */}

    </motion.section>
  );
}
