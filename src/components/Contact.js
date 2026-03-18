import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", brief: "" });
  const [sent, setSent] = useState(false);

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

  return (
    <section id="contact" style={{ background: "#0d1321", padding: "120px 0", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 50% 80%, rgba(0,255,136,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <p style={{ color: "#00ff88", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 500 }}>
          // CONTACT
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "12px", letterSpacing: "-0.5px", maxWidth: "600px" }}>
          Let's build something your clients instantly trust
        </h2>
        <p style={{ color: "#64748b", fontSize: "1rem", marginBottom: "60px", lineHeight: 1.6 }}>
          Fill out the form with a brief description of your project, and I'll get back to you within 24 hours.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px" }} className="contact-grid">
          <div>
            {contactInfo.map((info) => (
              <div
                key={info.label}
                style={{
                  background: "#080c14",
                  border: "1px solid rgba(0,255,136,0.08)",
                  borderRadius: "8px",
                  padding: "20px 24px",
                  marginBottom: "16px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,136,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,136,0.08)"; }}
              >
                <div style={{ color: "#00ff88", fontSize: "0.7rem", letterSpacing: "0.15em", fontWeight: 700, marginBottom: "8px", textTransform: "uppercase" }}>
                  {info.label}
                </div>
                {info.href ? (
                  <a href={info.href} style={{ color: "#cbd5e1", fontSize: "0.95rem", textDecoration: "none", fontWeight: 500 }}>
                    {info.value}
                  </a>
                ) : (
                  <div style={{ color: "#cbd5e1", fontSize: "0.95rem", fontWeight: 500 }}>{info.value}</div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
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
                style={{
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
                  fontFamily: "inherit",
                }}
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
                style={{
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
                  fontFamily: "inherit",
                }}
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
                style={{
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
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => { e.target.style.borderColor = "rgba(0,255,136,0.4)"; }}
                onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; }}
              />
            </div>
            <button
              type="submit"
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
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { if (!sent) e.target.style.background = "#00e07a"; }}
              onMouseLeave={(e) => { if (!sent) e.target.style.background = "#00ff88"; }}
            >
              {sent ? "Sent!" : "Send Brief"}
            </button>
          </form>
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
