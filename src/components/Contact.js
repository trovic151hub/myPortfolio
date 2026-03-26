import { useState } from "react";
import { motion } from "framer-motion";
import { MOCK_DATA } from "../lib/data";
import "./Contact.css";

const whatsappUrl = `https://wa.me/${MOCK_DATA.developer.socials.whatsapp}?text=Hello%20Victor%2C%20I%20would%20like%20to%20discuss%20a%20project.`;

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name || form.name.length < 2) errs.name = "Name must be at least 2 characters";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Please enter a valid email address";
    if (!form.message || form.message.length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-grid">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-left"
          >
            <div className="contact-left-top">
              <span className="section-tag contact-tag">{'// CONTACT'}</span>
              <h2 className="contact-heading">
                Let's build something your clients instantly trust
              </h2>
              <p className="contact-sub">
                Share your goals, timeline, and vision. I'll respond with a clear strategy focused on outcomes — not just aesthetics.
              </p>
            </div>

            <div className="contact-details">
              <div className="contact-detail-item">
                <h4 className="detail-label">Email</h4>
                <a href={`mailto:${MOCK_DATA.developer.contact.email}`} className="detail-value">
                  {MOCK_DATA.developer.contact.email}
                </a>
              </div>
              <div className="contact-detail-item">
                <h4 className="detail-label">Location</h4>
                <p className="detail-value">{MOCK_DATA.developer.contact.location}</p>
              </div>
              <div className="contact-detail-item">
                <h4 className="detail-label">Phone</h4>
                <a href={`tel:${MOCK_DATA.developer.contact.phone.replace(/\s/g, "")}`} className="detail-value">
                  {MOCK_DATA.developer.contact.phone}
                </a>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="whatsapp-link">
                <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Prefer WhatsApp? Let's chat
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-box">
              {submitted && (
                <div className="form-success">
                  Brief Received! I'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-field">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? "form-input-error" : ""}`}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? "form-input-error" : ""}`}
                  />
                  {errors.email && <span className="form-error">{errors.email}</span>}
                </div>

                <div className="form-field">
                  <label className="form-label">Project Brief</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={form.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? "form-input-error" : ""}`}
                    rows={5}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>

                <button type="submit" className="form-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="form-submit-loading">
                      Sending...
                      <span className="form-spinner"></span>
                    </span>
                  ) : (
                    "Send Brief"
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
