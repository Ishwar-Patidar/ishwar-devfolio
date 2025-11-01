import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section text-center py-4">
      <div className="container">
        <div className="social-icons mb-3">
          <a href="#" className="me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="#" className="me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="me-3">
            <i className="bi bi-twitter"></i>
          </a>
        </div>

        <p className="mb-0 text-white-50">
          © {new Date().getFullYear()} <span className="fw-bold text-white">Ishwar</span>.  
          Built with ❤️ using React + TypeScript.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
