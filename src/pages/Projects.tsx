import React from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Farmer Field Management System",
      description:
        "A full-stack web app built with React, NestJS, and MongoDB to manage farmer profiles, crops, and productivity insights.",
      image: "/assets/project1.jpg",
      tech: ["React", "NestJS", "MongoDB", "TypeScript"],
      link: "#",
    },
    {
      title: "Vahan Buddy Garage System",
      description:
        "Garage management software handling stock, vehicle service, and billing using Node.js and React.",
      image: "/assets/project2.jpg",
      tech: ["React", "Node.js", "MySQL"],
      link: "#",
    },
    {
      title: "Task Management System",
      description:
        "A real-time task tracking system for teams, with live updates and role-based access control.",
      image: "/assets/project3.jpg",
      tech: ["React", "NestJS", "WebSocket"],
      link: "#",
    },
  ];

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">My Projects</h2>

        <div className="row g-4 justify-content-center">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card p-3 rounded-4 shadow-lg h-100">
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid rounded-4"
                  />
                </div>
                <div className="project-content mt-3">
                  <h5 className="fw-bold text-white">{project.title}</h5>
                  <p className="text-white-50">{project.description}</p>
                  <div className="tech-list mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge bg-skill me-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm px-4"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="projects-overlay"></div>
    </section>
  );
};

export default Projects;
