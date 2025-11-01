import React from "react";
import myResume from "../assets/pdf/ishwar_resume.pdf";
import profileImg from "../assets/images/profile.png";

const About: React.FC = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container">
        <div className="row align-items-center gy-5">
          {/* Left Image Section */}
          <div className="col-md-5 text-center">
            <div className="about-img-wrapper mx-auto">
              <img
                src={profileImg}
                alt="About Ishwar"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="col-md-7 text-light">
            <h2 className="fw-bold mb-3 gradient-text">About Me</h2>
            <p className="lead text-white-50 mb-4">
              I’m <strong>Ishwar Patidar</strong>, a passionate{" "}
              <span className="text-primary">Full Stack Developer</span> with a
              deep love for creating modern web applications using{" "}
              <strong>React, NestJS, and TypeScript</strong>.
            </p>
            <p className="text-white-50 mb-4">
              My focus is on building scalable, secure, and performant systems
              with clean UI/UX. I’m always learning new technologies and
              improving development workflows to make digital experiences more
              efficient and enjoyable.
            </p>

            <ul className="about-list mb-4">
              <li>
                <strong>Experience:</strong> 2+ Years
              </li>
              <li>
                <strong>Specialty:</strong> Full Stack Development
              </li>
              <li>
                <strong>Location:</strong> India 🇮🇳
              </li>
            </ul>

            <a href="#contact" className="btn btn-primary px-4 py-2 me-3">
              Hire Me
            </a>
            <a href={myResume} className="btn btn-outline-light px-4 py-2" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="about-overlay"></div>
    </section>
  );
};

export default About;
