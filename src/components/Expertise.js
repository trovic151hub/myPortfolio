import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const tabs = ["Frontend", "Backend", "Services & Tools"];

const skills = {
  Frontend: [
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", level: 92 },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", level: 95 },
    { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", level: 92 },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", level: 72 },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", level: 85 },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", level: 98 },
  ],
  Backend: [
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", level: 88 },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/FFFFFF", level: 85 },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1", level: 78 },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", level: 72 },
    { name: "REST APIs", icon: "https://cdn.simpleicons.org/fastapi/009688", level: 90 },
    { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098", level: 65 },
  ],
  "Services & Tools": [
    { name: "Git / GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", level: 92 },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", level: 70 },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", level: 65 },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", level: 75 },
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", level: 98 },
    { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF", level: 72 },
  ],
};

const tabDescriptions = {
  Frontend: "Building responsive, accessible, and performant user interfaces with modern web technologies.",
  Backend: "Designing and building robust server-side systems, APIs, and databases for scalable applications.",
  "Services & Tools": "Leveraging industry-standard tools and cloud services to streamline development and deployment.",
};

function SkillBar({ name, icon, level, animate, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        padding: "12px 0",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <img src={icon} alt={name} style={{ width: "22px", height: "22px", objectFit: "contain", flexShrink: 0 }} />
      <span
        style={{
          color: "#cbd5e1",
          fontSize: "0.9rem",
          fontWeight: 500,
          minWidth: "120px",
        }}
      >
        {name}
      </span>
      <div
        style={{
          flex: 1,
          background: "rgba(255,255,255,0.05)",
          borderRadius: "99px",
          height: "6px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={animate ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.1, ease: [0.4, 0, 0.2, 1] }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #00ff88, #00cc6a)",
            borderRadius: "99px",
          }}
        />
      </div>
      <span
        style={{
          color: "#00ff88",
          fontSize: "0.8rem",
          fontWeight: 700,
          minWidth: "36px",
          textAlign: "right",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        {level}%
      </span>
    </motion.div>
  );
}

function Expertise() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) setAnimate(true);
  }, [inView]);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(t);
  }, [activeTab]);

  return (
    <section
      id="expertise"
      ref={sectionRef}
      style={{ background: "#0d1321", padding: "120px 0", position: "relative" }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 80% 30%, rgba(0,255,136,0.04) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            color: "#00ff88",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.875rem",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            fontWeight: 400,
          }}
        >
          {"// EXPERTISE"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800,
            marginBottom: "40px",
            letterSpacing: "-0.5px",
            fontFamily: "'Syne', sans-serif",
          }}
        >
          Technologies &amp; Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            gap: "0",
            marginBottom: "32px",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "8px",
            padding: "4px",
            width: "fit-content",
          }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.97 }}
              style={{
                background: activeTab === tab ? "#00ff88" : "transparent",
                color: activeTab === tab ? "#080c14" : "#94a3b8",
                border: "none",
                padding: "10px 24px",
                borderRadius: "6px",
                fontWeight: activeTab === tab ? 700 : 500,
                fontSize: "0.875rem",
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "'Syne', sans-serif",
                letterSpacing: "0.02em",
              }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "32px", lineHeight: 1.6 }}
          >
            {tabDescriptions[activeTab]}
          </motion.p>
        </AnimatePresence>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }} className="skills-grid">
          {skills[activeTab].map((skill, i) => (
            <SkillBar key={`${activeTab}-${skill.name}`} {...skill} animate={animate} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

export default Expertise;
