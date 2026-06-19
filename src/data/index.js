import ertqa from "../assets/ertqa.png"
import wrapcare from "../assets/wrapcare.png"


export const projects = [
  {
    id: 1,
    title: "Educational Institute Website",
    period: "Mar 2026 – Present",
    type: "Full Time",
    category: "Full Stack",
    desc: "Full-stack app for course management, student admissions, and secure fee payments via Razorpay. Admins manage courses, programs, and payment records through a centralized dashboard.",
    tech: ["React Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    highlights: ["Online Admissions", "Razorpay Payments", "Admin Dashboard", "Course Management"],
    gradient: "from-violet-600 to-indigo-600",
    tagBg: "bg-violet-500/10",
    tagColor: "text-violet-300",
    catColor: "text-violet-400",
    img: "",
  },
  {
    id: 2,
    title: "Employee Overtime & Task Management",
    period: "Aug 2025 – Dec 2025",
    type: "Full Time",
    category: "Full Stack",
    desc: "Manage employee tasks, work hours, and overtime requests with real-time dashboards. Role-based access control, RESTful APIs, and team performance monitoring.",
    tech: ["React Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "RBAC"],
    highlights: ["Role-Based Access", "Real-Time Dashboard", "Overtime Requests", "Task Tracking"],
    gradient: "from-cyan-600 to-blue-600",
    tagBg: "bg-cyan-500/10",
    tagColor: "text-cyan-300",
    catColor: "text-cyan-400",
    img :ertqa
  },
  {
    id: 3,
    title: "Wrap Care – Menstruation Kit Website",
    period: "Apr 2025 – Jun 2025",
    type: "Full Time",
    category: "Frontend",
    desc: "Responsive platform for women travelers to explore menstruation kits. Clean UX, reusable components, optimized navigation, and full mobile responsiveness.",
    tech: ["React Vite", "Tailwind CSS", "Responsive Design"],
    highlights: ["Mobile Responsive", "Reusable Components", "Product Catalog", "Clean UX"],
    gradient: "from-pink-600 to-rose-600",
    tagBg: "bg-pink-500/10",
    tagColor: "text-pink-300",
    catColor: "text-pink-400",
    img:wrapcare
  },
  {
    id: 4,
    title: "Task Assignment Tracker",
    period: "Jan 2025 – Mar 2025",
    type: "Full Time",
    category: "Frontend",
    desc: "Managers assign tasks, set priorities and deadlines, monitor progress. Employees update task status with filtering, progress tracking, and API integration.",
    tech: ["React", "REST APIs", "Task Filtering", "Progress Tracking"],
    highlights: ["Task Filtering", "Priority Management", "Progress Tracking", "API Integration"],
    gradient: "from-amber-600 to-orange-600",
    tagBg: "bg-amber-500/10",
    tagColor: "text-amber-300",
    catColor: "text-amber-400",
  },
  {
    id: 5,
    title: "Netflix Clone",
    period: "May 2024 – Jun 2024",
    type: "Full Time",
    category: "Frontend",
    desc: "Netflix-inspired streaming platform with dynamic content from mock APIs — categories, banners, and detail pages. Deployed on Firebase with smooth routing and immersive UX.",
    tech: ["React.js", "Firebase", "REST APIs", "React Hooks", "React Router"],
    highlights: ["Dynamic Content", "Firebase Hosting", "Responsive UI", "Movie Categories"],
    gradient: "from-red-700 to-red-900",
    tagBg: "bg-red-500/10",
    tagColor: "text-red-300",
    catColor: "text-red-400",
  },
];

export const skills = {
  Frontend: { items: ["React.js", "Vite", "Tailwind CSS", "JavaScript", "TypeScript", "HTML5", "CSS3"], color: "violet" },
  Backend: { items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Razorpay"], color: "cyan" },
  Database: { items: ["MongoDB", "Mongoose", "Firebase"], color: "emerald" },
  Tools: { items: ["Git", "GitHub", "VS Code", "Postman", "Docker"], color: "amber" },
};

export const skillColorMap = {
  violet: { badge: "bg-violet-500/15 text-violet-300 border-violet-500/20", dot: "bg-violet-400", card: "border-violet-500/15" },
  cyan:   { badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20", dot: "bg-cyan-400", card: "border-cyan-500/15" },
  emerald:{ badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20", dot: "bg-emerald-400", card: "border-emerald-500/15" },
  amber:  { badge: "bg-amber-500/15 text-amber-300 border-amber-500/20", dot: "bg-amber-400", card: "border-amber-500/15" },
};
