export interface Project {
  id: number;
  title: string;
  type: "company" | "personal";
  company?: string;
  techStack: string[];
  shortDesc: string;
  fullDesc: string;
  github?: string;
  liveDemo?: string;
  image?: string; // optional if you add images later
}

export const projectsData: Project[] = [
  // 💼 Company Projects
  {
    id: 1,
    title: "Vahan Buddy",
    type: "company",
    company: "Devnion Technologies Pvt. Ltd.",
    techStack: ["ReactJS", "NestJS", "MySQL", "JWT"],
    shortDesc: "Cloud-based showroom and service center management software.",
    fullDesc:
      " Vahan Buddy is a complete digital solution designed for garages, mechanics, and multi-outlet automobile workshops to manage daily operations efficiently.It replaces manual registers with a clean, automated, cloud-based system that handles everything from job cards to inventory and customer billing"
      // Developed a full-stack garage management system handling service records, spare part stock, and billing automation. Integrated real-time notifications and JWT-based authentication for secure access.",
  },
  {
    id: 2,
    title: "Dairy Center",
    type: "company",
    company: "Devnion Technologies Pvt. Ltd.",
    techStack: ["ReactJS", "NodeJS", "MySQL"],
    shortDesc:
      "Automated milk collection and payment system for dairy centers.",
    fullDesc:
      "Created a web portal to manage milk collection, rate charts, SNF/FAT calculations, and customer billing. Improved report generation and reduced manual entry time significantly.",
  },

  // 🚀 Personal Projects
  {
    id: 3,
    title: "Training Center",
    type: "company",
    company: "Devnion Technologies Pvt. Ltd.",
    techStack: ["ReactJS", "NestJS", "MongoDB"],
    shortDesc:
      "A real-time task tracking and assignment app for teams and managers.",
    fullDesc:
      "Developed a cross-platform task management system with roles (Admin, Manager, Employee). Features include live dashboards, JWT auth, and mobile app integration using React.",
    github: "",
  },
  {
    id: 4,
    title: "Portfolio Website",
    type: "personal",
    techStack: ["ReactJS", "TypeScript", "Bootstrap"],
    shortDesc: "Personal portfolio showcasing my work and experience.",
    fullDesc:
      "Designed and developed a responsive portfolio website using React and TypeScript with modern UI and smooth navigation, including sections for About, Skills, Projects, and Contact.",
    github: "https://github.com/Ishwar-Patidar/ishwar-devfolio",
    liveDemo: "https://ishwar-devfolio.vercel.app/",
  },
];
