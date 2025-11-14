import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Projects: React.FC = () => {
  const companyProjects = projectsData.filter(
    (project) => project.type === "company"
  );
  const personalProjects = projectsData.filter(
    (project) => project.type === "personal"
  );

  return (
    <section className="projects-section py-5" id="projects">
      <div className="container">
        <h2 className="text-center mb-5 section-title">Projects</h2>

        {/* Company Projects */}
        <div className="mb-5">
          <h3 className="sub-title mb-4 text-start">💼 Company Projects</h3>
          <div className="row">
            {companyProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                <div className="project-card p-4 h-100">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="mb-2">{project.company}</p>
                  <p className="project-short">{project.shortDesc}</p>
                  <div className="tech-list mb-3">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-accent w-100 mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="sub-title mb-4 text-start">🚀 Personal Projects</h3>
          <div className="row">
            {personalProjects.map((project) => (
              <div key={project.id} className="col-md-6 col-lg-4 mb-4">
                <div className="project-card p-4 h-100">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-short">{project.shortDesc}</p>
                  <div className="tech-list mb-3">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="btn btn-accent w-100 mt-auto"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
