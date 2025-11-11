import React from "react";

const Skills: React.FC = () => {
  const skills = [
    { name: "ReactJS", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "NestJS", level: 90 },
    { name: "NodeJS", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 85 },
    { name: "HTML / CSS / Bootstrap", level: 90 },
    { name: "Git / GitHub", level: 85 },
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">My Skills</h2>

        <div className="row justify-content-center g-2">
            {skills.map((skill, index) => (
                 <div className="col-md-4" key={index}>
                  <div className="skill-card">
                      <i className="bi bi-code-slash"></i>
                      <h5>{skill.name}</h5>
                      <div className="skill-bar" style={{ "--fill": `${skill.level}%` } as React.CSSProperties}>
                          <div className="skill-bar-fill"></div>
                      </div>
                  </div>
              </div>
            ))}
                 
          {/* <div className="col-lg-8 col-md-10">
            <div className="skills-wrapper p-4 rounded-4 shadow-lg">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="text-white-50">{skill.name}</span>
                    <span className="text-white-50">{skill.level}%</span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-skill"
                      role="progressbar"
                      style={{ width: `${skill.level}%` }}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div className="skills-overlay"></div>
    </section>
  );
};

export default Skills;
