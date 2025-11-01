import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 gradient-text">Get In Touch</h2>

        <div className="row justify-content-center">
          {/* Left Side: Contact Info */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="contact-info p-4 rounded-4 shadow-lg">
              <h4 className="fw-bold text-white mb-3">Let's Connect</h4>
              <p className="text-white-50">
                I’m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-3">
                  <i className="bi bi-envelope me-2 text-primary"></i>
                  <span className="text-white-50">ishwar@example.com</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-telephone me-2 text-primary"></i>
                  <span className="text-white-50">+91 98765 43210</span>
                </li>
                <li className="mb-3">
                  <i className="bi bi-geo-alt me-2 text-primary"></i>
                  <span className="text-white-50">Madhya Pradesh, India</span>
                </li>
              </ul>

              <div className="social-links mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="col-lg-6">
            <form className="contact-form p-4 rounded-4 shadow-lg">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-white-50">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label text-white-50">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label text-white-50">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="form-control"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 py-2 mt-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-overlay"></div>
    </section>
  );
};

export default Contact;
