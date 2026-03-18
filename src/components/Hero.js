import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#080c14",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 70% 50%, rgba(0,255,136,0.05) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center", width: "100%" }} className="hero-grid">
        <div>
          <p style={{ color: "#00ff88", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "20px", fontWeight: 500 }}>
            // PORTFOLIO
          </p>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "24px", letterSpacing: "-1.5px" }}>
            Building Flexible Web{" "}
            <span style={{ color: "#00ff88" }}>Applications</span>
          </h1>
          <p style={{ color: "#94a3b8", fontSize: "1.125rem", lineHeight: 1.7, marginBottom: "40px", maxWidth: "480px" }}>
            Modern software systems built with scalable architecture to help your business offer fast and wide service.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#projects"
              style={{
                background: "#00ff88",
                color: "#080c14",
                padding: "14px 32px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.target.style.background = "#00e07a"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.background = "#00ff88"; e.target.style.transform = "translateY(0)"; }}
            >
              View Work
            </a>
            <a
              href="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "1px solid rgba(0,255,136,0.4)",
                color: "#00ff88",
                padding: "14px 32px",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(0,255,136,0.08)"; e.target.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.transform = "translateY(0)"; }}
            >
              Download CV
            </a>
          </div>
        </div>

        <div style={{ position: "relative" }} className="hero-image-col">
          <div
            style={{
              position: "absolute",
              top: "-20px",
              right: "-20px",
              width: "100%",
              height: "100%",
              border: "1px solid rgba(0,255,136,0.2)",
              borderRadius: "8px",
              transform: "translate(10px, 10px)",
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
            alt="Web Development"
            style={{
              width: "100%",
              borderRadius: "8px",
              display: "block",
              position: "relative",
              zIndex: 1,
              filter: "brightness(0.8) saturate(0.9)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(0,255,136,0.1) 0%, transparent 60%)",
              borderRadius: "8px",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-image-col { display: none !important; }
        }
      `}</style>
    </section>
  );
}

export default Hero;
