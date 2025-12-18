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
    techStack: ["ReactJS", "TypeScript", "NestJS", "MySQL", "JWT", "REST API", "Bootstrap", "HTML", "CSS", "JavaScript", "Axios", "Git", "GitLab", "Moment.js", "Chart.js"],
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
    techStack: ["ReactJS", "TypeScript", "NestJS", "MySQL", "JWT", "REST API", "Bootstrap", "HTML", "CSS", "JavaScript", "Axios", "Git", "GitLab", "Moment.js", "Chart.js"],
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
    techStack: ["ReactJS", "NestJS", "MongoDB", "Bootstrap", "HTML", "CSS", "JavaScript", "Axios", "Git", "GitLab"],
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
    techStack: ["ReactJS", "TypeScript", "Bootstrap", "HTML", "CSS", "JavaScript", "Axios", "Git", "GitHub"],
    shortDesc: "Personal portfolio showcasing my work and experience.",
    fullDesc:
      "Designed and developed a responsive portfolio website using React and TypeScript with modern UI and smooth navigation, including sections for About, Skills, Projects, and Contact.",
    github: "https://github.com/Ishwar-Patidar/ishwar-devfolio",
    liveDemo: "https://ishwar-devfolio.vercel.app/",
  },
  {
    id: 5,
    title: "FMS (Field Management System)",
    type: "personal",
    techStack: ["ReactJS", "TypeScript", "NodeJS", "NestJS", "MongoDB", "JWT", "REST API", "Bootstrap", "HTML", "CSS"],
    shortDesc: "A web-based Field Management System designed to help farmers track income, expenses, crop activities, and profits in a simple and practical way.",
    fullDesc:
      "The Field Management System (FMS) is a web-based application built to support farmers in managing their daily agricultural operations digitally. The platform focuses on simplifying farm record-keeping by allowing farmers to track income, expenses, crop-wise activities, and overall profit or loss from a single dashboard. FMS provides structured data management for crops, sales, purchases, and operational costs, helping farmers gain clear financial insights and make better decisions. The system is designed with a simple, easy-to-use interface so that even non-technical users can operate it comfortably on the web. The goal of FMS is to improve financial awareness, transparency, and efficiency in farming operations by replacing manual records with a reliable digital solution.",
    github: "",
    liveDemo: "",
  },
];
