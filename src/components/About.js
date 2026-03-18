import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 3, suffix: "+", label: "Years Exp" },
  { value: 25, suffix: "+", label: "Projects" },
  { value: 32, suffix: "%", label: "Conversion Inc." },
  { value: 24, suffix: "h", label: "Turnaround" },
];

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
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

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="about-grid"
      >
        <motion.div
          style={{ position: "relative" }}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0}
        >
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
          <motion.img
            src="https://res.cloudinary.com/dut2dpxuc/image/upload/v1764266975/WhatsApp_Image_2025-11-27_at_18.56.28_4f96f79e_sa58sp.jpg"
            alt="Victor Adeyimika"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
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
        </motion.div>

        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
            style={{
              color: "#00ff88",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              marginBottom: "16px",
              fontWeight: 400,
            }}
          >
            {"// ABOUT"}
          </motion.p>

          <motion.h3
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            style={{
              color: "#94a3b8",
              fontSize: "1.1rem",
              marginBottom: "8px",
              fontWeight: 400,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Hi
            <span className="cursor-blink" style={{ color: "#00ff88", fontWeight: 700 }}>
              |
            </span>
          </motion.h3>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={3}
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 800,
              marginBottom: "20px",
              letterSpacing: "-0.5px",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            A Full Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={4}
            style={{
              color: "#94a3b8",
              fontSize: "1rem",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            With over 3 years of experience in building modern web applications, I specialize in the React
            ecosystem and scalable frontend architectures. I'm passionate about clean code, intuitive user
            interfaces, and solving complex problems with elegant solutions. I specialize in bridging the gap
            between complex engineering and beautiful, intuitive user experiences.
          </motion.p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                custom={5 + i}
                whileHover={{ borderColor: "rgba(0,255,136,0.35)" }}
                style={{
                  background: "#0d1321",
                  border: "1px solid rgba(0,255,136,0.1)",
                  borderRadius: "8px",
                  padding: "20px",
                  transition: "border-color 0.2s",
                }}
              >
                <div
                  style={{
                    color: "#00ff88",
                    fontSize: "1.75rem",
                    fontWeight: 900,
                    marginBottom: "4px",
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <div style={{ color: "#64748b", fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                  {stat.label}
                </div>
              </motion.div>
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
