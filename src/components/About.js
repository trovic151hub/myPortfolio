import React from "react";

const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "25+", label: "Projects" },
  { value: "32%", label: "Conversion Inc." },
  { value: "24h", label: "Turnaround" },
];

function About() {
  return (
    <section
      id="about"
      style={{
        background: "#080c14",
        padding: "120px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,255,136,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="about-grid">
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: "20px",
              bottom: "20px",
              border: "1px solid rgba(0,255,136,0.25)",
              borderRadius: "8px",
              transform: "translate(-12px, 12px)",
            }}
          />
          <img
            src="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
            alt="Victor Adeyimika"
            style={{
              width: "100%",
              borderRadius: "8px",
              display: "block",
              position: "relative",
              zIndex: 1,
              filter: "brightness(0.9)",
              maxHeight: "500px",
              objectFit: "cover",
            }}
          />
        </div>

        <div>
          <p style={{ color: "#00ff88", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "16px", fontWeight: 500 }}>
            // ABOUT
          </p>
          <h3 style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "8px", fontWeight: 400 }}>
            Hi<span style={{ color: "#00ff88", fontWeight: 700 }}>|</span>
          </h3>
          <h2 style={{ color: "#ffffff", fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: "20px", letterSpacing: "-0.5px" }}>
            A Full Stack Developer
          </h2>
          <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: "40px" }}>
            With over 3 years of experience in building modern web applications, I specialize in the React ecosystem and scalable frontend architectures. I'm passionate about clean code, intuitive user interfaces, and solving complex problems with elegant solutions. I specialize in bridging the gap between complex engineering and beautiful, intuitive user experiences.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#0d1321",
                  border: "1px solid rgba(0,255,136,0.1)",
                  borderRadius: "8px",
                  padding: "20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,136,0.3)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,255,136,0.1)"; }}
              >
                <div style={{ color: "#00ff88", fontSize: "1.75rem", fontWeight: 900, marginBottom: "4px" }}>{stat.value}</div>
                <div style={{ color: "#64748b", fontSize: "0.8rem", letterSpacing: "0.05em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}

export default About;
