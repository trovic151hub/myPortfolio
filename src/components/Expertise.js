import React, { useState, useRef, useEffect } from "react";

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

function SkillBar({ name, icon, level, animate }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <img src={icon} alt={name} style={{ width: "22px", height: "22px", objectFit: "contain", flexShrink: 0 }} />
      <span style={{ color: "#cbd5e1", fontSize: "0.9rem", fontWeight: 500, minWidth: "120px" }}>{name}</span>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", borderRadius: "99px", height: "6px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: animate ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #00ff88, #00cc6a)",
            borderRadius: "99px",
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <span style={{ color: "#00ff88", fontSize: "0.8rem", fontWeight: 700, minWidth: "36px", textAlign: "right" }}>{level}%</span>
    </div>
  );
}

function Expertise() {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
        <p style={{ color: "#00ff88", fontFamily: "monospace", fontSize: "0.875rem", letterSpacing: "0.1em", marginBottom: "12px", fontWeight: 500 }}>
          // EXPERTISE
        </p>
        <h2 style={{ color: "#ffffff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "40px", letterSpacing: "-0.5px" }}>
          Technologies &amp; Services
        </h2>

        <div style={{ display: "flex", gap: "0", marginBottom: "32px", background: "rgba(255,255,255,0.04)", borderRadius: "8px", padding: "4px", width: "fit-content" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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
                fontFamily: "inherit",
                letterSpacing: "0.02em",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <p style={{ color: "#64748b", fontSize: "0.95rem", marginBottom: "32px", lineHeight: 1.6 }}>
          {tabDescriptions[activeTab]}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }} className="skills-grid">
          {skills[activeTab].map((skill) => (
            <SkillBar key={skill.name} {...skill} animate={animate} />
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
