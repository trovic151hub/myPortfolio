import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

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
          background: "radial-gradient(ellipse at 70% 50%, rgba(0,255,136,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0,255,136,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
          width: "100%",
        }}
        className="hero-grid"
      >
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            style={{
              color: "#00ff88",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              marginBottom: "20px",
              fontWeight: 400,
            }}
          >
            {"// PORTFOLIO"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              color: "#ffffff",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: "24px",
              letterSpacing: "-2px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Building Flexible Web{" "}
            <span style={{ color: "#00ff88" }}>Applications</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              color: "#94a3b8",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            Modern software systems built with scalable architecture to help your business offer fast and wide service.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -3, background: "#00e07a" }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "#00ff88",
                color: "#080c14",
                padding: "14px 32px",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                letterSpacing: "0.05em",
                display: "inline-block",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              View Work
            </motion.a>
            <motion.a
              href="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, background: "rgba(0,255,136,0.08)" }}
              whileTap={{ scale: 0.97 }}
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
                display: "inline-block",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ position: "relative" }}
        >
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
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
            alt="Web Development"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
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
        </motion.div>
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
