import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          Have a project or want to collaborate? Let’s connect and create something great together!
        </p>

        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-md-5 contact-info">
            <div className="info-card">
              <i className="bi bi-envelope-fill"></i>
              <h5>Email</h5>
              <p>ishwar.dev@example.com</p>
            </div>

            <div className="info-card">
              <i className="bi bi-telephone-fill"></i>
              <h5>Phone</h5>
              <p>+91 98765 43210</p>
            </div>

            <div className="info-card">
              <i className="bi bi-linkedin"></i>
              <h5>LinkedIn</h5>
              <p>
                <a href="https://linkedin.com/in/ishwar" target="_blank" rel="noreferrer">
                  linkedin.com/in/ishwar
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows={5} placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
