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
    title: "Garage Management System",
    type: "company",
    company: "Devnion Technologies Pvt. Ltd.",
    techStack: ["ReactJS", "NestJS", "MongoDB", "JWT"],
    shortDesc: "A platform for managing garage operations, services, and stock.",
    fullDesc:
      "Developed a full-stack garage management system handling service records, spare part stock, and billing automation. Integrated real-time notifications and JWT-based authentication for secure access.",
  },
  {
    id: 2,
    title: "Dairy Management Portal",
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
    title: "Task Management System",
    type: "personal",
    techStack: ["ReactJS", "NestJS", "MongoDB"],
    shortDesc:
      "A real-time task tracking and assignment app for teams and managers.",
    fullDesc:
      "Developed a cross-platform task management system with roles (Admin, Manager, Employee). Features include live dashboards, WebSocket notifications, JWT auth, and mobile app integration using React Native.",
    github: "https://github.com/yourusername/task-manager",
  },
  {
    id: 4,
    title: "Portfolio Website",
    type: "personal",
    techStack: ["ReactJS", "TypeScript", "Bootstrap"],
    shortDesc: "Personal portfolio showcasing my work and experience.",
    fullDesc:
      "Designed and developed a responsive portfolio website using React and TypeScript with modern UI and smooth navigation, including sections for About, Skills, Projects, and Contact.",
    github: "https://github.com/yourusername/portfolio",
    liveDemo: "https://yourportfolio.netlify.app",
  },
];
