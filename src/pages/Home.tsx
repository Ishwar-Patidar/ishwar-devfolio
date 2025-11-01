import React from "react";
import profileImg from "../assets/images/profile.png";

const Home: React.FC = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container text-center">
        <div className="hero-content mx-auto">
          <div className="profile-pic mb-4">
            <img
              src={profileImg}
              alt="Ishwar Patidar"
              className="img-fluid rounded-circle shadow-lg"
            />
          </div>
          <h1 className="fw-bold display-5 text-white mb-3">
            Hey, I’m <span className="gradient-text">Ishwar Patidar</span>
          </h1>
          <h4 className="text-light fw-normal mb-4">
            Full Stack Developer | React • NestJS • TypeScript
          </h4>
          <p className="text-white-50 mx-auto mb-5 hero-desc">
            I craft modern, scalable web apps with clean architecture and a focus on performance.
            Always exploring the latest technologies and building meaningful digital experiences.
          </p>
          <div>
            <a href="#projects" className="btn btn-primary m-2 px-4 py-2">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline-light m-2 px-4 py-2">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Home;
