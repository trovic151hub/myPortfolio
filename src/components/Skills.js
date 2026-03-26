import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "./Skills.css";

const SKILL_TABS = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Services & Tools" },
];

const SKILL_DATA = {
  frontend: {
    description:
      "Building responsive, accessible, and performant user interfaces with modern web technologies.",
    skills: [
      { name: "React", percent: 92, icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "JavaScript", percent: 95, icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
      { name: "TailwindCSS", percent: 92, icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "TypeScript", percent: 72, icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Next.js", percent: 85, icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
      { name: "HTML5", percent: 98, icon: "https://cdn.simpleicons.org/html5/E34F26" },
    ],
  },
  backend: {
    description:
      "Designing scalable APIs, robust databases, and secure server-side architectures.",
    skills: [
      { name: "Node.js", percent: 88, icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", percent: 85, icon: "https://cdn.simpleicons.org/express/FFFFFF" },
      { name: "PostgreSQL", percent: 78, icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", percent: 75, icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "REST APIs", percent: 90, icon: null },
      { name: "GraphQL", percent: 70, icon: "https://cdn.simpleicons.org/graphql/E10098" },
    ],
  },
  tools: {
    description:
      "Streamlining development workflows with modern DevOps, version control, and design tools.",
    skills: [
      { name: "Git", percent: 90, icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Docker", percent: 72, icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Figma", percent: 80, icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "AWS", percent: 65, icon: "https://cdn.simpleicons.org/amazonaws/FF9900" },
      { name: "Vercel", percent: 88, icon: "https://cdn.simpleicons.org/vercel/FFFFFF" },
      { name: "VS Code", percent: 95, icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    ],
  },
};

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-60px" });
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!inView) { setCount(0); return; }

    const duration = 1000 + index * 80;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * skill.percent));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [inView, skill.percent, index]);

  return (
    <div ref={ref} className="skill-bar-item">
      <div className="skill-bar-header">
        <div className="skill-bar-left">
          {skill.icon ? (
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
          ) : (
            <div className="skill-icon-placeholder">
              <div className="skill-icon-dot"></div>
            </div>
          )}
          <span className="skill-name">{skill.name}</span>
        </div>
        <span className="skill-percent">{count}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.percent}%` : "0%" }}
          transition={{ duration: 1 + index * 0.08, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="expertise">
      <div className="expertise-inner">
        <div className="expertise-top">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-tag expertise-tag">// EXPERTISE</span>
            <h2 className="expertise-heading">Technologies &amp; Services</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="expertise-tabs"
          >
            {SKILL_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="expertise-body">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="expertise-content"
            >
              <div className="expertise-desc-col">
                <p className="expertise-desc">{SKILL_DATA[activeTab].description}</p>
              </div>
              <div className="expertise-skills-col">
                {SKILL_DATA[activeTab].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;
