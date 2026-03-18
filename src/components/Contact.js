import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });
  const [sent, setSent] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", brief: "" });
  };

  const contactInfo = [
    { label: "Email", value: "victoradeyimika0@gmail.com", href: "mailto:victoradeyimika0@Gmail.com" },
    { label: "Location", value: "Lagos, Nigeria", href: null },
    { label: "Phone", value: "+234 (0) 000 0000", href: null },
  ];

  const inputStyle = {
    width: "100%",
    background: "#080c14",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "6px",
    padding: "12px 16px",
    color: "#ffffff",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    fontFamily: "'Inter', sans-serif",
  };

  return (
    <section id="contact" ref={ref} style={{ background: "#0d1321", padding: "120px 0", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 80%, rgba(0,255,136,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
          style={{
            color: "#00ff88",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            fontWeight: 400,
          }}
        >
          {"// CONTACT"}
        </motion.p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={1}
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            marginBottom: "12px",
            letterSpacing: "-0.5px",
            maxWidth: "600px",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Let's build something your clients instantly trust
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={2}
          style={{ color: "#64748b", fontSize: "1rem", marginBottom: "60px", lineHeight: 1.6 }}
        >
          Fill out the form with a brief description of your project, and I'll get back to you within 24 hours.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px" }} className="contact-grid">
          <div>
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={3 + i}
                whileHover={{ borderColor: "rgba(0,255,136,0.3)" }}
                style={{
                  background: "#080c14",
                  border: "1px solid rgba(0,255,136,0.08)",
                  borderRadius: "8px",
                  padding: "20px 24px",
                  marginBottom: "16px",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    color: "#00ff88",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    marginBottom: "8px",
                    textTransform: "uppercase",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {info.label}
                </div>
                {info.href ? (
                  <a href={info.href} style={{ color: "#cbd5e1", fontSize: "0.95rem", textDecoration: "none", fontWeight: 500 }}>
                    {info.value}
                  </a>
                ) : (
                  <div style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 500 }}>{info.value}</div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
          >
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.8rem", marginBottom: "8px", letterSpacing: "0.05em" }}>
                Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,136,0.4)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.8rem", marginBottom: "8px", letterSpacing: "0.05em" }}>
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                style={inputStyle}
                onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,136,0.4)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>
            <div style={{ marginBottom: "28px" }}>
              <label style={{ display: "block", color: "#94a3b8", fontSize: "0.8rem", marginBottom: "8px", letterSpacing: "0.05em" }}>
                Project Brief
              </label>
              <textarea
                name="brief"
                value={form.brief}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,136,0.4)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={!sent ? { background: "#00e07a", y: -2 } : {}}
              whileTap={{ scale: 0.97 }}
              style={{
                background: sent ? "#00cc6a" : "#00ff88",
                color: "#080c14",
                border: "none",
                padding: "14px 40px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.9rem",
                cursor: "pointer",
                letterSpacing: "0.05em",
                fontFamily: "'Syne', sans-serif",
                display: "inline-block",
              }}
            >
              {sent ? "Sent!" : "Send Brief"}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
