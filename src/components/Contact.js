import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <span className="section-tag">// CONTACT</span>
        <h2 className="contact-heading">
          Let's build something your clients instantly trust
        </h2>
        <p className="contact-sub">
          Share your goals, timeline, and vision. I'll respond with a clear
          strategy focused on outcomes — not just aesthetics.
        </p>

        <div className="contact-body">
          <div className="contact-details">
            <div className="contact-detail-item">
              <h4 className="detail-label">Email</h4>
              <a href="mailto:victoradeyimika0@gmail.com" className="detail-value">
                victoradeyimika0@gmail.com
              </a>
            </div>
            <div className="contact-detail-item">
              <h4 className="detail-label">Location</h4>
              <span className="detail-value">Remote · Worldwide</span>
            </div>
            <div className="contact-detail-item">
              <h4 className="detail-label">Phone</h4>
              <a href="tel:+2349053380773" className="detail-value">
                +234 905 338 0773
              </a>
            </div>
            <a
              href="https://wa.me/2349053380773?text=Hello%20Victor%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              Prefer WhatsApp? Let's chat
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="form-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="form-input"
            />
            <textarea
              name="brief"
              placeholder="Project Brief"
              value={form.brief}
              onChange={handleChange}
              className="form-textarea"
              rows={5}
            ></textarea>
            <button type="submit" className="form-submit">
              Send Brief
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
