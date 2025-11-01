import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        {/* Logo / Brand */}
        <Link to="/" className="navbar-brand fw-bold fs-4 text-primary">
          Ishwar<span className="text-dark">Portfolio</span>
        </Link>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu items */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isOpen ? "show" : ""
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink to="/" onClick={closeMenu} className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" onClick={closeMenu} className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" onClick={closeMenu} className="nav-link">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" onClick={closeMenu} className="nav-link">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" onClick={closeMenu} className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
