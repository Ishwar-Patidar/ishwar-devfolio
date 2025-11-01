import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section text-center py-4">
      <div className="container">
        <div className="social-icons mb-3">
          <a href="https://github.com/Ishwar-Patidar" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/ishwar-patidar-6b42a6244/" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <p className="mb-0 text-white-50">
          © {new Date().getFullYear()} <span className="fw-bold text-white">Ishwar</span>.  
        </p>
      </div>
    </footer>
  );
};

export default Footer;
