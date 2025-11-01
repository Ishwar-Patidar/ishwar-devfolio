import React from "react";
import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="project-detail text-center py-5">
        <h2 className="text-light">Project not found 😕</h2>
        <Link to="/projects" className="btn btn-accent mt-4">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail py-5">
      <div className="container">
        <Link to="/projects" className="btn btn-outline-accent mb-4">
          ← Back to Projects
        </Link>

        <div className="detail-card p-4">
          <h2 className="project-title mb-3">{project.title}</h2>

          {project.company && (
            <p className="text-muted mb-3">
              <strong>Company:</strong> {project.company}
            </p>
          )}

          <div className="mb-3">
            <strong>Tech Stack:</strong>{" "}
            {project.techStack.map((tech, index) => (
              <span key={index} className="badge bg-secondary me-2">
                {tech}
              </span>
            ))}
          </div>

          <p className="project-desc mb-4">{project.fullDesc}</p>

          <div className="links mt-4">
            {project.github && (
              <a
                href={project.github}
                className="btn btn-accent me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                className="btn btn-outline-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
