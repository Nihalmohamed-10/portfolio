import wrapcare from "@/public/wrapcare.png";
import anizo from "@/public/anizo.png";
import mits from "@/public/mits.png";
import ertqa from "@/public/ertqa.png";
import n from "@/public/n.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiHtml5Line,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2023;

export const profile = {
  avatar: n,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Nihal Mohamed P A",
  title: "Full-Stack Developer",
  experience: `${experienceInYears} years`,
  likes: "building web applications and softwares",
  resumeLink: `https://drive.google.com/file/d/1WCIx6CKxEFvh5Q8PsJP4zBEbYACmSRnO/view?usp=sharing`,
  linkedInLink: "https://www.linkedin.com/in/nihal-mohamed-39a5b5220/",
  githubLink: "https://github.com/Nihalmohamed-10/",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Luminar Technology",
    location: "Ernakulam, India",
    description:
      "I've started a journey as a full-stack JavaScript developer as Intern.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Tefora Software Solutions",
    location: "Malappuaram, India",
    description:
      "As a Full-Stack developer I've been working on various projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2025",
  },

] as const;

export const projectsData = [
  {
    title: "WrapCare",
    description:
      " Developed Wrap Care, a responsive product website using React Vite, focused on providing menstruation kits for women travelers. The platform is designed to offer convenience during menstrual  periods by allowing users to explore and order essential kits from anywhere. With a clean and user-friendly. ",
    tags: ["React", "NodeJS", "MongoDB",],
    imageUrl: wrapcare,
    url: "http://wrapcare.in",
  },
   {
    title: "ERTQA",
    description:
      "Developed for ERTQA, a company platform designed to manage and track employee overtime and task assignments. The system enables superadmins and managers to add employees, assign tasks, approve overtime requests, and monitor total working hours through a real-time dashboard.",
    tags: ["React", "NodeJS", "Express Js", "MongoDB"],
    imageUrl: ertqa,
    url: "",
  },
  {
    title: "Anizo Fragrance",
    description:
      "Developed Anizo, a premium fragrance brand website created using React Vite, showcasing a signature perfume crafted for everyday elegance. The platform highlights Anizo’s unique scent profile, product story, and features, allowing users to explore and learn about the fragrance with ease.",
    tags: ["React", "NodeJS", "MongoDB"],
    imageUrl: anizo,
    url: "",
  },
  {
    title: "Educational Institute Website",
    description:
      "Building a modern web platform for Mits, for an educational institute to present its courses, certifications, and government-approved programs. Focuses on improving student engagement through structured course presentation, seamless navigation, and optimized performance",
    tags: ["React", "NodeJS", "MongoDB"],
    imageUrl: mits,
    url: "",
  },
] as const;

export const skillsData = [
  { name: "HTML", icon: RiHtml5Line },
  { name: "CSS", icon: RiCss3Line },
  { name: "JavaScript", icon: RiJavascriptLine },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "React Native", icon: TbBrandReactNative },
  // { name: "Framer Motion", icon: TbBrandFramerMotion },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Tailwind", icon: RiTailwindCssLine },
  { name: "MongoDB", icon: TbBrandMongodb },
  { name: "Redux", icon: TbBrandRedux },
  // { name: "Gatsby", icon: RiGatsbyLine },
  // { name: "GraphQL", icon: TbBrandGraphql },
  { name: "Express", icon: TbBrandNodejs },
  // { name: "Socket IO", icon: TbBrandSocketIo },
  // { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "Python", icon: TbBrandPython },
  { name: "Flask", icon: TbBrandPython },
  { name: "FastAPI", icon: TbBrandPython },
  { name: "AWS", icon: FaAws },
  // { name: "Raspberry Pi", icon: FaRaspberryPi },
  { name: "...and more", icon: React.Fragment },
] as const;
