import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact: React.FC = () => {

  const [result, setResult] = useState<any>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "058cc91d-878b-477e-a1b1-61c01826d384");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        toast.success("Message sent successfully ✅");
        const data = await response.json();
        setResult(data.success && data?.message || "Success!" );
      } else {
        toast.error("Failed to send message ❌");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
      event.target.reset();
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          Have a project or want to collaborate? Let’s connect and create something great together!
        </p>

        <div className="row">
          {/* Contact Info */}
          <div className="col-md-5 contact-info">
            <a
              href="mailto:ishwarpatidar015@gmail.com"
              onClick={(e) => {
                e.preventDefault();
                const email = "ishwarpatidar015@gmail.com";
                const subject = "";
                const body = "";
                const gmailWeb = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  email
                )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                const mailto = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`;
                const iosGmail = `googlegmail://co?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(
                  subject
                )}&body=${encodeURIComponent(body)}`;
                const androidIntent = `intent://compose?to=${encodeURIComponent(
                  email
                )}#Intent;package=com.google.android.gm;scheme=mailto;end`;

                const ua = navigator.userAgent || "";
                const isIOS = /iPhone|iPad|iPod/i.test(ua);
                const isAndroid = /Android/i.test(ua);

                try {
                  if (isIOS) {
                    // try to open Gmail app on iOS, fallback to mailto
                    window.location.href = iosGmail;
                    setTimeout(() => (window.location.href = mailto), 700);
                  } else if (isAndroid) {
                    // try Android intent for Gmail, fallback to mailto
                    window.location.href = androidIntent;
                    setTimeout(() => (window.location.href = mailto), 700);
                  } else {
                    // desktop: open Gmail web compose in new tab
                    window.open(gmailWeb, "_blank", "noopener,noreferrer");
                  }
                } catch {
                  // final fallback
                  window.location.href = mailto;
                }
              }}
              className="text-decoration-none"
              rel="noreferrer noopener"
            >
              <div className="info-card">
                <i className="bi bi-envelope-fill"></i>
                <h5>Email</h5>
                <p>ishwarpatidar015@gmail.com</p>
              </div>
            </a>

            <a href="tel:+919827263782" className="text-decoration-none">
              <div className="info-card">
                <i className="bi bi-telephone-fill"></i>
                <h5>Phone</h5>
                <p>+91 9827263782</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/ishwar-patidar-6b42a6244/" target="_blank" rel="noreferrer" className="text-decoration-none">
              <div className="info-card">
                <i className="bi bi-linkedin"></i>
                <h5>LinkedIn</h5>
                <p>
                  linkedin.com/in/ishwar-patidar-6b42a6244
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <form className="contact-form" onSubmit={onSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea rows={5} name="message" placeholder="Your Message"></textarea>
              <button type="submit" disabled = {isLoading}>{isLoading ? "Sending..." : "Send Message"}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
